#!/usr/bin/env node
// Local SEO audit for OpenLib. No external packages required.
// Usage:
//   node scripts/seo-audit.js
//   node scripts/seo-audit.js --live --limit=80

const fs = require("fs");
const https = require("https");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const BASE_URL = "https://www.openlib.online";
const CANONICAL_HOST = new URL(BASE_URL).hostname;
const APEX_URL = "https://openlib.online/";
const MIN_SITEMAP_URLS = Number(process.env.MIN_SITEMAP_URLS || "25");
const NORMAL_UA = "OpenLib SEO Audit";
const GOOGLEBOT_UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const STATIC_ASSET_PATHS = ["/favicon.ico", "/favicon.svg", "/favicon.png", "/og-image.png"];
const REQUIRED_PATHS = [
  "/",
  "/rankings",
  "/trending",
  "/roles",
  "/team",
  "/privacy",
  "/terms",
  "/open-source-alternatives",
  "/privacy-focused-software",
  "/self-hosted-applications",
  "/linux-software",
  "/open-source-productivity-tools",
  "/open-source-password-managers",
  "/open-source-cloud-storage",
];

const args = new Set(process.argv.slice(2));
const live = args.has("--live");
const limitArg = process.argv.find(arg => arg.startsWith("--limit="));
const liveLimit = limitArg ? Number(limitArg.split("=")[1]) : 60;

const findings = [];

function fail(message) {
  findings.push({ level: "error", message });
}

function warn(message) {
  findings.push({ level: "warning", message });
}

function pass(message) {
  findings.push({ level: "pass", message });
}

function readPublic(file) {
  return fs.readFileSync(path.join(PUBLIC_DIR, file), "utf-8");
}

function readRoot(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf-8");
}

function productionUrls(text) {
  return [...text.matchAll(/https?:\/\/(?:www\.)?openlib\.online[^\s"'<>)]*/gi)]
    .map(match => match[0]);
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
}

function pathnameFromUrl(url) {
  return new URL(url).pathname || "/";
}

function isRouteSupported(pathname, firebaseConfig) {
  if (fileExistsForPath(pathname)) return true;
  if (REQUIRED_PATHS.includes(pathname)) return true;
  if (/^\/app\/[^/]+$/.test(pathname)) return true;
  if (/^\/category\/[^/]+$/.test(pathname)) return true;
  if (/^\/tag\/[^/]+$/.test(pathname)) return true;
  if (/^\/alternatives\/[^/]+$/.test(pathname)) return true;
  if (/^\/blog(\/.*)?$/.test(pathname)) return true;
  if (/^\/profile(\/.*)?$/.test(pathname)) return true;
  if (/^\/org\/[^/]+$/.test(pathname)) return true;
  if (["/admin", "/verify", "/team/manage"].includes(pathname)) return true;
  if (["/privacy.txt", "/terms.txt", "/sitemap.xml", "/robots.txt", "/favicon.ico", "/favicon.svg", "/favicon.png", "/og-image.png"].includes(pathname)) return true;

  const rewrites = firebaseConfig.hosting?.rewrites || [];
  return rewrites.some(rewrite => {
    if (rewrite.destination === "/index.html" && rewrite.source === "**") return false;
    if (!rewrite.function) return false;
    const source = rewrite.source.replace(/\*\*/g, ".*").replace(/\*/g, "[^/]*");
    return new RegExp(`^${source}$`).test(pathname);
  });
}

function parseDisallows(robots) {
  return [...robots.matchAll(/^Disallow:\s*(.+)$/gmi)].map(match => match[1].trim()).filter(Boolean);
}

function isBlocked(pathname, disallows) {
  return disallows.some(rule => {
    if (rule === "/") return true;
    return pathname === rule || pathname.startsWith(`${rule}/`);
  });
}

function extractInternalLinks(html) {
  return [...html.matchAll(/\shref=["']([^"']+)["']/g)]
    .map(match => match[1])
    .filter(href => href.startsWith("/") && !href.startsWith("//"))
    .map(href => href.split("#")[0].split("?")[0] || "/");
}

function fileExistsForPath(pathname) {
  const clean = pathname.replace(/^\//, "");
  if (!clean) return true;
  return fs.existsSync(path.join(PUBLIC_DIR, clean)) || fs.existsSync(path.join(PUBLIC_DIR, `${clean}.html`));
}

function checkProductionUrls(label, text) {
  for (const url of productionUrls(text)) {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") fail(`${label} contains non-HTTPS production URL: ${url}`);
    if (parsed.hostname !== CANONICAL_HOST) fail(`${label} contains non-canonical production host: ${url}`);
  }

  if (/location\.hostname\s*===\s*['"]openlib\.online['"]/i.test(text) && /location\.replace/i.test(text)) {
    fail(`${label} contains a client-side apex-to-www redirect; keep host redirects at the hosting/domain layer.`);
  }
}

function checkCanonicalMetadata(fileLabel, html) {
  const canonical = html.match(/<link\s+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  const ogUrl = html.match(/<meta\s+property="og:url"[^>]+content="([^"]+)"/i)?.[1];
  const twitterUrl = html.match(/<meta\s+name="twitter:url"[^>]+content="([^"]+)"/i)?.[1];
  for (const [fieldLabel, url] of [["canonical", canonical], ["og:url", ogUrl], ["twitter:url", twitterUrl]]) {
    if (!url) {
      fail(`${fileLabel} missing ${fieldLabel} URL`);
      continue;
    }
    if (url !== `${BASE_URL}/`) fail(`${fileLabel} ${fieldLabel} must point to ${BASE_URL}/, found ${url}`);
  }
  if (!html.includes('href="/favicon.ico"')) fail(`${fileLabel} does not advertise /favicon.ico`);
}

function checkStaticAssets() {
  for (const pathname of STATIC_ASSET_PATHS) {
    if (!fileExistsForPath(pathname)) fail(`Missing static asset: ${pathname}`);
  }
}

function checkStaticFiles() {
  for (const file of ["index.html", "robots.txt", "sitemap.xml", "favicon.ico"]) {
    if (!fs.existsSync(path.join(PUBLIC_DIR, file))) fail(`Missing required public file: ${file}`);
  }
  for (const file of ["firebase.json", "functions/index.js"]) {
    if (!fs.existsSync(path.join(ROOT, file))) fail(`Missing required file: ${file}`);
  }
}

function checkMetadata(indexHtml) {
  const required = [
    /<title>[^<]+<\/title>/,
    /<meta name="description"/,
    /<meta name="robots"[^>]+id="meta-robots"/,
    /<link rel="canonical"/,
    /property="og:title"/,
    /property="og:description"/,
    /property="og:image"/,
    /name="twitter:card"/,
    /type="application\/ld\+json"/,
    /SearchAction/,
  ];
  for (const pattern of required) {
    if (!pattern.test(indexHtml)) fail(`index.html missing metadata pattern: ${pattern}`);
  }
  if (/https:\/\/www\.openlib\.online\/logo\.png/.test(indexHtml)) fail("index.html still references missing production logo.png");
  const h1Count = (indexHtml.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) warn(`index.html static shell has ${h1Count} H1 tags; expected 1 for the home shell`);
}

function checkSitemap(urls, robots) {
  if (!urls.length) fail("sitemap.xml has no URLs");
  if (urls.length < MIN_SITEMAP_URLS) fail(`sitemap.xml is unexpectedly small (${urls.length} URLs; expected at least ${MIN_SITEMAP_URLS})`);
  const paths = urls.map(pathnameFromUrl);
  const disallows = parseDisallows(robots);
  for (const requiredPath of REQUIRED_PATHS) {
    if (!paths.includes(requiredPath)) fail(`sitemap.xml missing required path: ${requiredPath}`);
  }
  for (const url of urls) {
    const parsed = new URL(url);
    if (parsed.origin !== BASE_URL) fail(`Non-canonical sitemap URL: ${url}`);
    if (isBlocked(parsed.pathname, disallows)) fail(`Sitemap URL is blocked by robots.txt: ${parsed.pathname}`);
  }
  pass(`sitemap.xml contains ${urls.length} URLs`);
}

function checkRobots(robots) {
  if (!robots.includes(`Sitemap: ${BASE_URL}/sitemap.xml`)) fail("robots.txt missing canonical Sitemap directive");
  for (const privatePath of ["/admin", "/verify", "/team/manage"]) {
    if (!robots.includes(`Disallow: ${privatePath}`)) warn(`robots.txt does not block private path ${privatePath}`);
  }
}

function checkLinks(indexHtml, firebaseConfig) {
  const links = [...new Set(extractInternalLinks(indexHtml))];
  for (const link of links) {
    if (fileExistsForPath(link)) continue;
    if (isRouteSupported(link, firebaseConfig)) continue;
    fail(`Broken or unsupported internal link in index.html: ${link}`);
  }
  pass(`Checked ${links.length} static internal links`);
}

function checkRewrites(firebaseConfig, sitemapUrls) {
  for (const url of sitemapUrls) {
    const pathname = pathnameFromUrl(url);
    if (!isRouteSupported(pathname, firebaseConfig)) fail(`Sitemap path has no supported local route/rewrite: ${pathname}`);
  }

  const rewrites = firebaseConfig.hosting?.rewrites || [];
  for (const route of ["/app/**", "/category/**", "/tag/**", "/alternatives/**"]) {
    if (!rewrites.some(rewrite => rewrite.source === route && rewrite.function === "prerender")) {
      fail(`firebase.json missing prerender rewrite for ${route}`);
    }
  }
  for (const route of REQUIRED_PATHS.filter(pathname => pathname !== "/")) {
    if (!rewrites.some(rewrite => rewrite.source === route && rewrite.function === "prerender")) {
      fail(`firebase.json missing prerender rewrite for sitemap route ${route}`);
    }
  }
}

function requestHead(url, { redirects = 0, userAgent = NORMAL_UA } = {}) {
  return new Promise(resolve => {
    const req = https.request(url, { method: "HEAD", headers: { "User-Agent": userAgent } }, res => {
      const location = res.headers.location;
      if ([301, 302, 307, 308].includes(res.statusCode) && location && redirects < 6) {
        const nextUrl = new URL(location, url).toString();
        requestHead(nextUrl, { redirects: redirects + 1, userAgent }).then(resolve);
        return;
      }
      resolve({ url, status: res.statusCode, redirects, contentType: res.headers["content-type"] || "" });
    });
    req.on("error", error => resolve({ url, status: 0, redirects, error: error.message }));
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({ url, status: 0, redirects, error: "timeout" });
    });
    req.end();
  });
}

function requestGet(url, { redirects = 0, userAgent = NORMAL_UA } = {}) {
  return new Promise(resolve => {
    const req = https.request(url, { method: "GET", headers: { "User-Agent": userAgent } }, res => {
      const location = res.headers.location;
      if ([301, 302, 307, 308].includes(res.statusCode) && location && redirects < 6) {
        const nextUrl = new URL(location, url).toString();
        res.resume();
        requestGet(nextUrl, { redirects: redirects + 1, userAgent }).then(resolve);
        return;
      }

      let body = "";
      res.setEncoding("utf8");
      res.on("data", chunk => {
        if (body.length < 250000) body += chunk;
      });
      res.on("end", () => {
        resolve({
          url,
          status: res.statusCode,
          redirects,
          contentType: res.headers["content-type"] || "",
          headers: res.headers,
          body,
        });
      });
    });
    req.on("error", error => resolve({ url, status: 0, redirects, error: error.message, headers: {}, body: "" }));
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({ url, status: 0, redirects, error: "timeout", headers: {}, body: "" });
    });
    req.end();
  });
}

function extractCanonical(html) {
  return html.match(/<link\s+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    || "";
}

function shouldBePrerendered(pathname) {
  if (pathname === "/") return false;
  if (/\.[a-z0-9]+$/i.test(pathname)) return false;
  return true;
}

async function checkLive(urls) {
  const apexResult = await requestHead(APEX_URL);
  if (!apexResult.status || apexResult.status >= 400) fail(`Apex redirect failed (${apexResult.status || apexResult.error}): ${APEX_URL}`);
  if (apexResult.url !== `${BASE_URL}/`) fail(`Apex URL must redirect to ${BASE_URL}/, got ${apexResult.url}`);
  if (apexResult.redirects !== 1) warn(`Apex redirect should be one hop, got ${apexResult.redirects}`);

  for (const pathname of STATIC_ASSET_PATHS) {
    const assetUrl = `${BASE_URL}${pathname}`;
    const result = await requestHead(assetUrl);
    if (!result.status || result.status >= 400) fail(`Live static asset failed (${result.status || result.error}): ${assetUrl}`);
    if (/^text\/html\b/i.test(result.contentType)) fail(`Live static asset is falling through to HTML (${result.contentType}): ${assetUrl}`);
  }

  const sample = urls.slice(0, liveLimit);
  for (const url of sample) {
    const result = await requestHead(url);
    if (!result.status || result.status >= 400) fail(`Live URL failed (${result.status || result.error}): ${url}`);
    if (result.redirects > 1) warn(`Redirect chain has ${result.redirects} hops: ${url}`);

    const botResult = await requestHead(url, { userAgent: GOOGLEBOT_UA });
    if (!botResult.status || botResult.status >= 400) fail(`Googlebot URL failed (${botResult.status || botResult.error}): ${url}`);
    if (botResult.redirects > 1) warn(`Googlebot redirect chain has ${botResult.redirects} hops: ${url}`);

    const pathname = pathnameFromUrl(url);
    if (shouldBePrerendered(pathname)) {
      const botPage = await requestGet(url, { userAgent: GOOGLEBOT_UA });
      if (!botPage.status || botPage.status >= 400) {
        fail(`Googlebot GET failed (${botPage.status || botPage.error}): ${url}`);
      } else if (/^text\/html\b/i.test(botPage.contentType)) {
        const canonical = extractCanonical(botPage.body);
        if (canonical !== url) fail(`Googlebot canonical mismatch for ${url}: ${canonical || "(missing)"}`);
        if (botPage.body.includes('id="canonical-url"')) fail(`Googlebot received SPA shell instead of prerendered HTML: ${url}`);
        if (botPage.headers["x-rendered-by"] !== "openlib-prerender") {
          fail(`Googlebot response missing prerender marker for ${url}`);
        }
      }
    }
  }
  pass(`Checked ${sample.length} live URLs and ${sample.length} Googlebot URLs`);
}

async function main() {
  checkStaticFiles();
  const indexHtml = readPublic("index.html");
  const spaHtml = fs.existsSync(path.join(ROOT, "functions/spa.html")) ? readRoot("functions/spa.html") : null;
  const appJs = readPublic("script.js");
  const prerenderJs = readRoot("functions/index.js");
  const robots = readPublic("robots.txt");
  const sitemapUrls = parseSitemap(readPublic("sitemap.xml"));
  const firebaseConfig = JSON.parse(readRoot("firebase.json"));

  checkMetadata(indexHtml);
  checkCanonicalMetadata("index.html", indexHtml);
  checkProductionUrls("index.html", indexHtml);
  if (spaHtml) {
    checkCanonicalMetadata("functions/spa.html", spaHtml);
    checkProductionUrls("functions/spa.html", spaHtml);
  }
  checkProductionUrls("script.js", appJs);
  checkProductionUrls("functions/index.js", prerenderJs);
  checkStaticAssets();
  checkRobots(robots);
  checkSitemap(sitemapUrls, robots);
  checkLinks(indexHtml, firebaseConfig);
  checkRewrites(firebaseConfig, sitemapUrls);

  if (live) await checkLive(sitemapUrls);

  const errors = findings.filter(item => item.level === "error");
  const warnings = findings.filter(item => item.level === "warning");
  for (const item of findings) {
    const label = item.level === "error" ? "ERROR" : item.level === "warning" ? "WARN" : "OK";
    console.log(`${label}: ${item.message}`);
  }

  if (errors.length) {
    console.error(`SEO audit failed: ${errors.length} error(s), ${warnings.length} warning(s)`);
    process.exit(1);
  }
  console.log(`SEO audit passed: ${warnings.length} warning(s)`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
