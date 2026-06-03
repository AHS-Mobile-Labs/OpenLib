#!/usr/bin/env node
// Local SEO audit for OpenLib. No external packages required.
// Usage:
//   node seo-audit.js
//   node seo-audit.js --live --limit=80

const fs = require("fs");
const https = require("https");
const path = require("path");

const ROOT = __dirname;
const BASE_URL = "https://www.openlib.online";
const REQUIRED_PATHS = [
  "/",
  "/rankings",
  "/trending",
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

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf-8");
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
}

function pathnameFromUrl(url) {
  return new URL(url).pathname || "/";
}

function isRouteSupported(pathname, firebaseConfig) {
  if (REQUIRED_PATHS.includes(pathname)) return true;
  if (/^\/app\/[^/]+$/.test(pathname)) return true;
  if (/^\/category\/[^/]+$/.test(pathname)) return true;
  if (/^\/tag\/[^/]+$/.test(pathname)) return true;
  if (/^\/alternatives\/[^/]+$/.test(pathname)) return true;
  if (/^\/blog(\/.*)?$/.test(pathname)) return true;
  if (/^\/profile(\/.*)?$/.test(pathname)) return true;
  if (/^\/org\/[^/]+$/.test(pathname)) return true;
  if (["/admin", "/verify", "/team/manage"].includes(pathname)) return true;
  if (["/privacy.txt", "/terms.txt", "/sitemap.xml", "/robots.txt", "/favicon.svg", "/favicon.png", "/og-image.png"].includes(pathname)) return true;

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
  return fs.existsSync(path.join(ROOT, clean)) || fs.existsSync(path.join(ROOT, `${clean}.html`));
}

function checkStaticFiles() {
  for (const file of ["index.html", "robots.txt", "sitemap.xml", "firebase.json", "functions/index.js"]) {
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
}

function requestHead(url, redirects = 0) {
  return new Promise(resolve => {
    const req = https.request(url, { method: "HEAD", headers: { "User-Agent": "OpenLib SEO Audit" } }, res => {
      const location = res.headers.location;
      if ([301, 302, 307, 308].includes(res.statusCode) && location && redirects < 6) {
        const nextUrl = new URL(location, url).toString();
        requestHead(nextUrl, redirects + 1).then(result => resolve({
          ...result,
          redirects: result.redirects + 1,
        }));
        return;
      }
      resolve({ url, status: res.statusCode, redirects });
    });
    req.on("error", error => resolve({ url, status: 0, redirects, error: error.message }));
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({ url, status: 0, redirects, error: "timeout" });
    });
    req.end();
  });
}

async function checkLive(urls) {
  const sample = urls.slice(0, liveLimit);
  for (const url of sample) {
    const result = await requestHead(url);
    if (!result.status || result.status >= 400) fail(`Live URL failed (${result.status || result.error}): ${url}`);
    if (result.redirects > 1) warn(`Redirect chain has ${result.redirects} hops: ${url}`);
  }
  pass(`Checked ${sample.length} live URLs`);
}

async function main() {
  checkStaticFiles();
  const indexHtml = read("index.html");
  const robots = read("robots.txt");
  const sitemapUrls = parseSitemap(read("sitemap.xml"));
  const firebaseConfig = JSON.parse(read("firebase.json"));

  checkMetadata(indexHtml);
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
