#!/usr/bin/env node
// Google Search Console monitor for OpenLib.
// Requires Search Console owner/delegated access for the service account.
//
// Env:
//   GSC_SITE_URL="https://www.openlib.online/"
//   GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
//   # or GOOGLE_CLIENT_EMAIL + GOOGLE_PRIVATE_KEY
//   GSC_URL_LIMIT=50

const crypto = require("crypto");
const fs = require("fs");
const https = require("https");
const path = require("path");

const ROOT = __dirname;
const SITE_URL = process.env.GSC_SITE_URL || "https://www.openlib.online/";
const URL_LIMIT = Number(process.env.GSC_URL_LIMIT || "50");
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const HISTORY_FILE = path.join(ROOT, ".seo-gsc-history.json");

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function readCredentials() {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const raw = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, "utf-8");
    const json = JSON.parse(raw);
    return { clientEmail: json.client_email, privateKey: json.private_key };
  }
  return {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };
}

function requestJson(url, { method = "GET", headers = {}, body } = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method, headers }, res => {
      let data = "";
      res.on("data", chunk => (data += chunk));
      res.on("end", () => {
        let parsed = {};
        try {
          parsed = data ? JSON.parse(data) : {};
        } catch (_) {
          parsed = { raw: data };
        }
        if (res.statusCode >= 400) {
          const err = new Error(parsed.error?.message || `HTTP ${res.statusCode}`);
          err.statusCode = res.statusCode;
          err.response = parsed;
          reject(err);
          return;
        }
        resolve(parsed);
      });
    });
    req.on("error", reject);
    if (body) req.write(typeof body === "string" ? body : JSON.stringify(body));
    req.end();
  });
}

async function getAccessToken() {
  const { clientEmail, privateKey } = readCredentials();
  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google credentials. Set GOOGLE_APPLICATION_CREDENTIALS or GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY.");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: clientEmail,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), privateKey);
  const assertion = `${unsigned}.${base64url(signature)}`;
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  }).toString();

  const token = await requestJson(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  return token.access_token;
}

function readSitemapUrls() {
  const xml = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf-8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
}

function isoDate(daysAgo) {
  const date = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
  return date.toISOString().split("T")[0];
}

async function searchAnalytics(accessToken, startDate, endDate) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`;
  return requestJson(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: {
      startDate,
      endDate,
      dimensions: ["page"],
      rowLimit: 1000,
    },
  });
}

async function inspectUrl(accessToken, inspectionUrl) {
  const url = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";
  return requestJson(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: {
      inspectionUrl,
      siteUrl: SITE_URL,
    },
  });
}

function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) return null;
  try {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, "utf-8"));
  } catch (_) {
    return null;
  }
}

function saveHistory(report) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(report, null, 2), "utf-8");
}

function summarizeAnalytics(current, previous) {
  const rows = current.rows || [];
  const totals = rows.reduce((acc, row) => {
    acc.clicks += row.clicks || 0;
    acc.impressions += row.impressions || 0;
    acc.positionNumerator += (row.position || 0) * (row.impressions || 0);
    return acc;
  }, { clicks: 0, impressions: 0, positionNumerator: 0 });
  totals.averagePosition = totals.impressions ? totals.positionNumerator / totals.impressions : 0;

  const previousTotals = (previous.rows || []).reduce((acc, row) => {
    acc.clicks += row.clicks || 0;
    acc.impressions += row.impressions || 0;
    return acc;
  }, { clicks: 0, impressions: 0 });

  return {
    clicks: totals.clicks,
    impressions: totals.impressions,
    averagePosition: Number(totals.averagePosition.toFixed(1)),
    previousClicks: previousTotals.clicks,
    previousImpressions: previousTotals.impressions,
  };
}

function recommendationForInspection(url, result) {
  const index = result.inspectionResult?.indexStatusResult || {};
  const issues = [];
  if (index.verdict && !["PASS", "VERDICT_UNSPECIFIED"].includes(index.verdict)) issues.push(`verdict=${index.verdict}`);
  if (index.coverageState && !/indexed|submitted and indexed/i.test(index.coverageState)) issues.push(index.coverageState);
  if (index.robotsTxtState && index.robotsTxtState !== "ALLOWED") issues.push(`robots=${index.robotsTxtState}`);
  if (index.indexingState && index.indexingState !== "INDEXING_ALLOWED") issues.push(`indexing=${index.indexingState}`);
  if (index.pageFetchState && !["SUCCESSFUL", "PAGE_FETCH_STATE_UNSPECIFIED"].includes(index.pageFetchState)) issues.push(`fetch=${index.pageFetchState}`);

  if (!issues.length) return null;
  let action = "Inspect content quality, canonical, internal links, and renderability.";
  if (issues.some(issue => /404|not found|fetch/i.test(issue))) action = "Fix HTTP status, missing route, redirect target, or server rendering.";
  if (issues.some(issue => /robots|indexing/i.test(issue))) action = "Check robots.txt, meta robots, canonical, and Firebase rewrite behavior.";
  if (issues.some(issue => /Crawled.*not indexed|Discovered.*not indexed/i.test(issue))) action = "Improve unique page copy, internal links, schema, and app/category context.";
  return { url, issues, action };
}

async function main() {
  const accessToken = await getAccessToken();
  const urls = readSitemapUrls().slice(0, URL_LIMIT);
  const current = await searchAnalytics(accessToken, isoDate(28), isoDate(1));
  const previous = await searchAnalytics(accessToken, isoDate(56), isoDate(29));
  const analytics = summarizeAnalytics(current, previous);

  const inspections = [];
  for (const url of urls) {
    try {
      const result = await inspectUrl(accessToken, url);
      inspections.push({ url, result });
    } catch (error) {
      inspections.push({ url, error: error.message });
    }
  }

  const recommendations = inspections
    .map(item => item.error ? { url: item.url, issues: [item.error], action: "Verify Search Console property access and URL Inspection API quota." } : recommendationForInspection(item.url, item.result))
    .filter(Boolean);

  const indexedCount = inspections.filter(item => {
    const state = item.result?.inspectionResult?.indexStatusResult?.coverageState || "";
    return /indexed/i.test(state);
  }).length;

  const report = {
    generatedAt: new Date().toISOString(),
    siteUrl: SITE_URL,
    inspectedUrls: inspections.length,
    indexedCount,
    analytics,
    recommendations,
  };

  const previousReport = loadHistory();
  if (previousReport) {
    const impressionDrop = previousReport.analytics?.impressions
      ? ((previousReport.analytics.impressions - analytics.impressions) / previousReport.analytics.impressions) * 100
      : 0;
    const indexedDrop = previousReport.indexedCount
      ? ((previousReport.indexedCount - indexedCount) / previousReport.indexedCount) * 100
      : 0;
    report.changes = {
      impressionsChangePercent: Number((-impressionDrop).toFixed(1)),
      indexedCountChangePercent: Number((-indexedDrop).toFixed(1)),
    };
    if (impressionDrop >= 20) {
      recommendations.push({
        url: SITE_URL,
        issues: [`Impressions dropped ${impressionDrop.toFixed(1)}% from the last monitor run.`],
        action: "Review recent sitemap, robots, canonical, route, and content changes.",
      });
    }
    if (indexedDrop >= 10) {
      recommendations.push({
        url: SITE_URL,
        issues: [`Indexed URL count dropped ${indexedDrop.toFixed(1)}% from the last monitor run.`],
        action: "Run URL Inspection on excluded URLs and compare sitemap coverage.",
      });
    }
  }

  saveHistory(report);
  console.log(JSON.stringify(report, null, 2));
  if (recommendations.length) process.exitCode = 2;
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
