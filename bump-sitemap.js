#!/usr/bin/env node
// Generates sitemap.xml and robots.txt from Firestore app data plus local static routes.
// Runs during Firebase Hosting predeploy.

const https = require("https");
const fs = require("fs");
const path = require("path");

const PROJECT_ID = "openlib-f7bf1";
const BASE_URL = "https://www.openlib.online";
const COLLECTION = "apps";
const TODAY = new Date().toISOString().split("T")[0];

const TOPIC_PAGES = [
  "/open-source-alternatives",
  "/privacy-focused-software",
  "/self-hosted-applications",
  "/linux-software",
  "/open-source-productivity-tools",
  "/open-source-password-managers",
  "/open-source-cloud-storage",
];

const STATIC_PAGES = [
  { loc: "/", changefreq: "daily", priority: "1.0" },
  { loc: "/rankings", changefreq: "daily", priority: "0.8" },
  { loc: "/trending", changefreq: "daily", priority: "0.8" },
  { loc: "/team", changefreq: "monthly", priority: "0.5" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
  ...TOPIC_PAGES.map(loc => ({ loc, changefreq: "weekly", priority: "0.85" })),
];

function httpsJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = "";
      res.on("data", chunk => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
      res.on("error", reject);
    }).on("error", reject);
  });
}

function fieldString(fields, key) {
  const value = fields[key];
  return value?.stringValue || value?.timestampValue || "";
}

function fieldArray(fields, key) {
  const values = fields[key]?.arrayValue?.values || [];
  return values.map(value => value.stringValue).filter(Boolean);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function splitAlternativeTargets(value) {
  const seen = new Set();
  return String(value || "")
    .split(/[,\n;]/)
    .map(target => target.trim())
    .filter(Boolean)
    .filter(target => {
      const key = target.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function isPublicApp(app) {
  return (app.moderationStatus || "active") === "active";
}

async function fetchApps() {
  let pageToken = "";
  const apps = [];

  do {
    const token = pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : "";
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${COLLECTION}?pageSize=1000${token}`;
    const json = await httpsJson(url);
    const docs = json.documents || [];
    for (const doc of docs) {
      const fields = doc.fields || {};
      const id = doc.name.split("/").pop();
      apps.push({
        id,
        category: fieldString(fields, "category"),
        alternative: fieldString(fields, "alternative"),
        updatedAt: fieldString(fields, "updatedAt") || fieldString(fields, "createdAt"),
        moderationStatus: fieldString(fields, "moderationStatus"),
        tags: fieldArray(fields, "tags"),
      });
    }
    pageToken = json.nextPageToken || "";
  } while (pageToken);

  return apps.filter(isPublicApp);
}

function toW3CDate(value) {
  if (!value) return TODAY;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return TODAY;
  return date.toISOString().split("T")[0];
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function addUnique(pages, page) {
  if (!page.loc || pages.some(existing => existing.loc === page.loc)) return;
  pages.push(page);
}

function scanBlogPages() {
  const blogDir = path.join(__dirname, "blog");
  if (!fs.existsSync(blogDir)) return [];

  const pages = [];
  const stack = [blogDir];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (/\.(html|md)$/i.test(entry.name)) {
        const rel = path.relative(blogDir, fullPath).replace(/\\/g, "/").replace(/\.(html|md)$/i, "");
        const slug = rel === "index" ? "/blog" : `/blog/${rel}`;
        const stat = fs.statSync(fullPath);
        pages.push({
          loc: slug,
          lastmod: stat.mtime.toISOString().split("T")[0],
          changefreq: "monthly",
          priority: "0.6",
        });
      }
    }
  }
  return pages;
}

function buildPages(apps) {
  const pages = [];
  STATIC_PAGES.forEach(page => addUnique(pages, { ...page, lastmod: TODAY }));

  const categories = new Map();
  const alternatives = new Map();
  const tags = new Map();

  for (const app of apps) {
    const lastmod = toW3CDate(app.updatedAt);
    addUnique(pages, {
      loc: `/app/${encodeURIComponent(app.id)}`,
      lastmod,
      changefreq: "weekly",
      priority: "0.9",
    });

    if (app.category) {
      const slug = slugify(app.category);
      categories.set(slug, maxDate(categories.get(slug), lastmod));
    }
    for (const target of splitAlternativeTargets(app.alternative)) {
      const slug = slugify(target);
      if (!slug) continue;
      alternatives.set(slug, maxDate(alternatives.get(slug), lastmod));
    }
    for (const tag of app.tags || []) {
      const slug = slugify(tag);
      if (!slug) continue;
      const existing = tags.get(slug) || { count: 0, lastmod };
      tags.set(slug, { count: existing.count + 1, lastmod: maxDate(existing.lastmod, lastmod) });
    }
  }

  for (const [slug, lastmod] of categories) {
    addUnique(pages, { loc: `/category/${slug}`, lastmod, changefreq: "weekly", priority: "0.8" });
  }
  for (const [slug, lastmod] of alternatives) {
    addUnique(pages, { loc: `/alternatives/${slug}`, lastmod, changefreq: "weekly", priority: "0.75" });
  }
  for (const [slug, data] of tags) {
    if (data.count < 2) continue;
    addUnique(pages, { loc: `/tag/${slug}`, lastmod: data.lastmod, changefreq: "weekly", priority: "0.65" });
  }
  scanBlogPages().forEach(page => addUnique(pages, page));

  return pages;
}

function maxDate(a, b) {
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

function writeSitemap(pages) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${escapeXml(BASE_URL + p.loc)}</loc>
    <lastmod>${escapeXml(p.lastmod || TODAY)}</lastmod>
    <changefreq>${escapeXml(p.changefreq || "weekly")}</changefreq>
    <priority>${escapeXml(p.priority || "0.5")}</priority>
  </url>`).join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(__dirname, "sitemap.xml"), xml, "utf-8");
}

function writeRobots() {
  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /verify
Disallow: /team/manage

Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(__dirname, "robots.txt"), robots, "utf-8");
}

async function main() {
  let apps = [];
  try {
    apps = await fetchApps();
    console.log(`Fetched ${apps.length} public apps from Firestore`);
  } catch (e) {
    console.warn(`Could not fetch apps from Firestore (${e.message}). Generating sitemap with static pages only.`);
  }

  const pages = buildPages(apps);
  writeSitemap(pages);
  writeRobots();
  console.log(`sitemap.xml -> ${pages.length} URLs`);
  console.log("robots.txt -> updated");
}

main().catch(e => {
  console.error("Failed to generate sitemap:", e);
  process.exit(1);
});
