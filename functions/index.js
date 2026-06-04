// ── OpenLib Prerender Cloud Function ──────────────────────────────────────────
// Serves pre-rendered HTML to search engine bots and social crawlers.
// Regular users get the normal SPA (index.html).
//
// Routes handled: /app/*, /rankings, /trending
// Bot detection via User-Agent header.

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

admin.initializeApp();
const db = admin.firestore();

const BASE_URL = "https://www.openlib.online";
const GITHUB_URL = "https://github.com/AHS-Mobile-Labs/OpenLib";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const PRERENDER_CACHE_TTL_MS = 15 * 60 * 1000;
const PRERENDER_LIST_LIMIT = 120;
const APP_PRERENDER_FIELDS = [
  "name",
  "alternative",
  "description",
  "fullDescription",
  "uses",
  "logo",
  "screenshots",
  "category",
  "platforms",
  "features",
  "installMethods",
  "systemRequirements",
  "tags",
  "download",
  "source",
  "website",
  "docs",
  "version",
  "license",
  "fileSize",
  "developer",
  "maintainer",
  "avgRating",
  "reviewCount",
  "likes",
  "dislikes",
  "views",
  "opens",
  "downloads",
  "createdAt",
  "updatedAt",
  "moderationStatus",
];

const prerenderCache = new Map();

function getCachedHtml(key) {
  const cached = prerenderCache.get(key);
  if (!cached) return null;
  if (Date.now() - cached.ts > PRERENDER_CACHE_TTL_MS) {
    prerenderCache.delete(key);
    return null;
  }
  return cached.html;
}

function setCachedHtml(key, html) {
  prerenderCache.set(key, { html, ts: Date.now() });
  if (prerenderCache.size > 250) {
    const oldestKey = prerenderCache.keys().next().value;
    prerenderCache.delete(oldestKey);
  }
}

function sendHtml(req, res, html, extraHeaders = {}, statusCode = 200) {
  Object.entries(extraHeaders).forEach(([key, value]) => res.set(key, value));
  res.set("Content-Type", "text/html; charset=utf-8");
  if (req.method === "HEAD") return res.status(statusCode).send("");
  return res.status(statusCode).send(html);
}

// ── Bot detection ────────────────────────────────────────────────────────────
const BOT_RE = /googlebot|google-inspectiontool|bingbot|yandex|baiduspider|twitterbot|facebookexternalhit|linkedinbot|embedly|quora link preview|outbrain|pinterest|pinterestbot|slackbot|vkshare|w3c_validator|whatsapp|telegrambot|discordbot|applebot|petalbot|seznambot|ahrefsbot|semrushbot|mj12bot|dotbot/i;

function isBot(ua) {
  return BOT_RE.test(ua || "");
}

// ── HTML escaping ────────────────────────────────────────────────────────────
function esc(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
  const rawTargets = Array.isArray(value)
    ? value
    : String(value || "").split(/[,\n;]/);
  const seen = new Set();
  return rawTargets
    .map(target => {
      if (target && typeof target === "object") return target.name || target.label || "";
      return String(target || "");
    })
    .map(target => target.trim())
    .filter(Boolean)
    .filter(target => {
      const key = target.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function getAlternativeTargets(app) {
  return splitAlternativeTargets(app?.alternative);
}

function formatReadableList(items) {
  if (!items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function formatAlternativeTargets(app, fallback = "") {
  const targets = getAlternativeTargets(app);
  return targets.length ? formatReadableList(targets) : fallback;
}

function matchesAlternativeSlug(app, slug) {
  return getAlternativeTargets(app).some(target => slugify(target) === slug);
}

function getAlternativeLabelForSlug(apps, slug) {
  for (const app of apps) {
    const target = getAlternativeTargets(app).find(item => slugify(item) === slug);
    if (target) return target;
  }
  const combinedMatch = apps.find(app => slugify(app.alternative) === slug);
  return combinedMatch ? formatAlternativeTargets(combinedMatch, titleCaseFromSlug(slug)) : titleCaseFromSlug(slug);
}

function getAlternativeTargetsForSlug(apps, slug) {
  const matchedTargets = [];
  const seen = new Set();
  for (const app of apps) {
    for (const target of getAlternativeTargets(app)) {
      if (slugify(target) !== slug && slugify(app.alternative) !== slug) continue;
      const key = target.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      matchedTargets.push(target);
    }
  }
  return matchedTargets;
}

function alternativeTargetsJsonLd(targets) {
  return targets.map(target => ({
    "@type": "SoftwareApplication",
    name: target,
  }));
}

function renderAlternativeLinks(app, { prefix = false } = {}) {
  return getAlternativeTargets(app)
    .map(target => `<a href="/alternatives/${slugify(target)}">${esc(prefix ? `Alternative to ${target}` : target)}</a>`)
    .join(" ");
}

function isPublicApp(app) {
  return (app.moderationStatus || "active") === "active";
}

function truncate(value, max = 155) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}...`;
}

function titleCaseFromSlug(slug) {
  return String(slug || "")
    .split("-")
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function wordsForApp(app) {
  return [
    app.name,
    app.category,
    app.alternative,
    app.description,
    app.fullDescription,
    app.uses,
    app.license,
    ...(app.tags || []),
    ...(app.features || []),
    ...(app.platforms || [])
  ].join(" ").toLowerCase();
}

const SEO_TOPIC_PAGES = [
  {
    slug: "open-source-alternatives",
    title: "Open Source Alternatives to Popular Apps | OpenLib",
    h1: "Open source alternatives",
    description: "Discover free and open-source alternatives to popular proprietary apps, with community ratings, features, platforms, licenses, and source links.",
    keywords: ["open source alternatives", "free software alternatives", "FOSS apps"],
    match: app => !!(app.alternative || app.description)
  },
  {
    slug: "privacy-focused-software",
    title: "Privacy-Focused Open Source Software | OpenLib",
    h1: "Privacy-focused software",
    description: "Find privacy-friendly open-source apps for security, encryption, communication, DNS, storage, and everyday workflows.",
    keywords: ["privacy-focused software", "secure open source apps", "private alternatives"],
    match: app => /privacy|private|secure|security|encrypt|encrypted|dns|password|firewall|tracker|permission/.test(wordsForApp(app))
  },
  {
    slug: "self-hosted-applications",
    title: "Self-Hosted Open Source Applications | OpenLib",
    h1: "Self-hosted applications",
    description: "Explore open-source software that can be self-hosted or run on your own infrastructure for more control and portability.",
    keywords: ["self-hosted applications", "self hosted software", "open source server apps"],
    match: app => /self-host|self hosted|server|docker|hosted|cloud|sync|web/.test(wordsForApp(app))
  },
  {
    slug: "linux-software",
    title: "Open Source Linux Software | OpenLib",
    h1: "Linux software",
    description: "Browse free and open-source Linux apps, utilities, productivity tools, creative software, security tools, and cross-platform alternatives.",
    keywords: ["Linux software", "open source Linux apps", "free Linux applications"],
    match: app => (app.platforms || []).some(p => String(p).toLowerCase() === "linux") || /linux|flatpak|appimage|snap|deb|rpm/.test(wordsForApp(app))
  },
  {
    slug: "open-source-productivity-tools",
    title: "Open Source Productivity Tools | OpenLib",
    h1: "Open source productivity tools",
    description: "Compare open-source productivity software for notes, documents, office work, planning, knowledge management, and collaboration.",
    keywords: ["open source productivity tools", "free productivity software", "open source office apps"],
    match: app => app.category === "Productivity" || /productivity|office|note|notes|docs|document|task|project|knowledge|writing|calendar/.test(wordsForApp(app))
  },
  {
    slug: "open-source-password-managers",
    title: "Open Source Password Managers | OpenLib",
    h1: "Open source password managers",
    description: "Find open-source password managers and credential security tools with source links, licenses, platform support, and alternatives.",
    keywords: ["open source password managers", "free password manager", "privacy password manager"],
    match: app => /password|credential|keepass|vault|2fa|authenticator/.test(wordsForApp(app))
  },
  {
    slug: "open-source-cloud-storage",
    title: "Open Source Cloud Storage Alternatives | OpenLib",
    h1: "Open source cloud storage",
    description: "Discover open-source cloud storage, file sync, encrypted vault, and backup alternatives for safer control of your files.",
    keywords: ["open source cloud storage", "cloud storage alternatives", "encrypted file storage"],
    match: app => /cloud|storage|sync|backup|file|drive|vault|cryptomator|encrypt/.test(wordsForApp(app))
  }
];

const SEO_TOPIC_BY_SLUG = new Map(SEO_TOPIC_PAGES.map(page => [page.slug, page]));

// ── SPA fallback (serves index.html to regular users) ────────────────────────
let spaHtmlCache = null;
function getSpaHtml() {
  if (!spaHtmlCache) {
    try {
      spaHtmlCache = fs.readFileSync(path.join(__dirname, "spa.html"), "utf-8");
    } catch {
      // Fallback: redirect to home (should not happen if predeploy copies the file)
      return null;
    }
  }
  return spaHtmlCache;
}

// ── Build pre-rendered HTML page ─────────────────────────────────────────────
function siteJsonLdGraph() {
  return [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "OpenLib",
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/favicon.png`,
      sameAs: [GITHUB_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: "OpenLib",
      description: "A curated open-source app library for discovering free and privacy-friendly software alternatives.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

function breadcrumbJsonLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function withSiteJsonLd(jsonLd) {
  const graph = siteJsonLdGraph();
  if (!jsonLd) return { "@context": "https://schema.org", "@graph": graph };
  if (jsonLd["@graph"]) return { "@context": "https://schema.org", "@graph": [...graph, ...jsonLd["@graph"]] };
  const normalized = { ...jsonLd };
  delete normalized["@context"];
  return { "@context": "https://schema.org", "@graph": [...graph, normalized] };
}

function buildPage({ title, description, url, image, type, jsonLd, body, robots = "index, follow, max-snippet:-1, max-image-preview:large" }) {
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(withSiteJsonLd(jsonLd))}</script>`;
  const imgTag = image
    ? `<meta property="og:image" content="${esc(image)}">\n  <meta name="twitter:image" content="${esc(image)}">`
    : `<meta property="og:image" content="${OG_IMAGE}">\n  <meta name="twitter:image" content="${OG_IMAGE}">`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${esc(robots)}">
  <link rel="canonical" href="${esc(url)}">

  <meta property="og:type" content="${esc(type || "website")}">
  <meta property="og:site_name" content="OpenLib">
  <meta property="og:url" content="${esc(url)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image:alt" content="${esc(title)}">
  ${imgTag}

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:url" content="${esc(url)}">

  ${jsonLdTag}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
  <header>
    <nav>
      <a href="/">OpenLib — Open Source App Library</a> ·
      <a href="/rankings">Rankings</a> ·
      <a href="/trending">Trending</a> ·
      <a href="/team">Team</a>
    </nav>
  </header>
  <main>
    ${body}
  </main>
  <footer>
    <p><strong>OpenLib</strong> — A curated open-source app library.
    <a href="${GITHUB_URL}">Contribute on GitHub</a></p>
    <nav>
      <a href="/rankings">Rankings</a> ·
      <a href="/trending">Trending</a> ·
      <a href="/open-source-alternatives">Open Source Alternatives</a> ·
      <a href="/privacy-focused-software">Privacy Software</a> ·
      <a href="/linux-software">Linux Software</a> ·
      <a href="/privacy">Privacy Policy</a> ·
      <a href="/terms">Terms</a>
    </nav>
  </footer>
</body>
</html>`;
}

async function getLimitedAppsByEngagement(maxDocs = PRERENDER_LIST_LIMIT) {
  const fields = APP_PRERENDER_FIELDS;
  const [viewsSnap, likesSnap] = await Promise.all([
    db.collection("apps").orderBy("views", "desc").limit(maxDocs).select(...fields).get(),
    db.collection("apps").orderBy("likes", "desc").limit(maxDocs).select(...fields).get(),
  ]);

  const merged = new Map();
  for (const docSnap of [...viewsSnap.docs, ...likesSnap.docs]) {
    if (!merged.has(docSnap.id)) merged.set(docSnap.id, { id: docSnap.id, ...docSnap.data() });
  }
  return [...merged.values()].filter(isPublicApp);
}

async function getPrerenderApps(maxDocs = 500) {
  const snap = await db.collection("apps")
    .limit(maxDocs)
    .select(...APP_PRERENDER_FIELDS)
    .get();
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter(isPublicApp);
}

function summarizeList(apps, fallback) {
  const names = apps.slice(0, 4).map(app => app.name).join(", ");
  return names ? `${names}${apps.length > 4 ? " and more" : ""}` : fallback;
}

function renderAppList(apps) {
  if (!apps.length) return `<p>No matching apps are available yet.</p>`;
  return `<ol>
    ${apps.slice(0, 100).map((app, i) => `
      <li>
        <a href="/app/${encodeURIComponent(app.id)}">${esc(app.name)}</a>
        ${getAlternativeTargets(app).length ? ` - ${renderAlternativeLinks(app, { prefix: true })}` : ""}
        ${app.category ? ` in <a href="/category/${slugify(app.category)}">${esc(app.category)}</a>` : ""}
        <p>${esc(truncate(app.description || app.uses || "", 140))}</p>
      </li>`).join("")}
  </ol>`;
}

function relatedCollectionLinks(apps, currentPath = "") {
  const categories = [...new Set(apps.map(app => app.category).filter(Boolean))]
    .sort()
    .slice(0, 12)
    .map(category => ({ href: `/category/${slugify(category)}`, label: `${category} apps` }));
  const topics = SEO_TOPIC_PAGES.map(topic => ({ href: `/${topic.slug}`, label: topic.h1 }));
  const links = [...topics, ...categories].filter(link => link.href !== currentPath);
  return `<section><h2>Related Collections</h2><p>${links.slice(0, 18).map(link => `<a href="${link.href}">${esc(link.label)}</a>`).join(" · ")}</p></section>`;
}

function collectionJsonLd({ url, name, description, apps, about }) {
  return {
    "@graph": [
      breadcrumbJsonLd([
        { name: "OpenLib", url: `${BASE_URL}/` },
        { name, url },
      ]),
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name,
        url,
        description,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        ...(about?.length ? { about } : {}),
      },
      {
        "@type": "ItemList",
        name,
        numberOfItems: apps.length,
        itemListElement: apps.slice(0, 50).map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: app.name,
          url: `${BASE_URL}/app/${encodeURIComponent(app.id)}`,
        })),
      },
    ],
  };
}

async function renderCollection(kind, slug) {
  const allApps = await getPrerenderApps();
  let page;
  let pageApps = [];

  if (kind === "topic") {
    const topic = SEO_TOPIC_BY_SLUG.get(slug);
    if (!topic) return null;
    pageApps = allApps.filter(topic.match);
    if (!pageApps.length) pageApps = allApps.slice(0, 12);
    page = {
      path: `/${topic.slug}`,
      title: topic.title,
      h1: topic.h1,
      description: topic.description,
      keywords: topic.keywords,
    };
  } else if (kind === "category") {
    pageApps = allApps.filter(app => slugify(app.category) === slug);
    const label = pageApps[0]?.category || titleCaseFromSlug(slug);
    page = {
      path: `/category/${slug}`,
      title: `${label} Open Source Apps and Alternatives | OpenLib`,
      h1: `${label} open-source apps`,
      description: `Browse ${label.toLowerCase()} open-source apps and free software alternatives on OpenLib, including ${summarizeList(pageApps, "community-curated tools")}.`,
      keywords: [`open source ${label.toLowerCase()} apps`, `${label.toLowerCase()} software alternatives`, `free ${label.toLowerCase()} software`],
    };
  } else if (kind === "tag") {
    pageApps = allApps.filter(app => (app.tags || []).some(tag => slugify(tag) === slug));
    const label = titleCaseFromSlug(slug);
    page = {
      path: `/tag/${slug}`,
      title: `${label} Open Source Software | OpenLib`,
      h1: `${label} software`,
      description: `Discover open-source software tagged ${label.toLowerCase()} on OpenLib, with app details, alternatives, platforms, licenses, and source links.`,
      keywords: [`${label.toLowerCase()} open source software`, `${label.toLowerCase()} apps`],
    };
  } else if (kind === "alternative") {
    pageApps = allApps.filter(app => matchesAlternativeSlug(app, slug) || slugify(app.alternative) === slug);
    const label = getAlternativeLabelForSlug(pageApps, slug);
    const alternativeTargets = getAlternativeTargetsForSlug(pageApps, slug);
    page = {
      path: `/alternatives/${slug}`,
      title: `Open Source Alternatives to ${label} | OpenLib`,
      h1: `Open source alternatives to ${label}`,
      description: `Compare free and open-source alternatives to ${label} on OpenLib, including ${summarizeList(pageApps, "privacy-friendly software options")}.`,
      keywords: alternativeTargets.length
        ? alternativeTargets.map(target => `alternative to ${target}`)
        : [`open source alternative to ${label}`, `free ${label} alternative`, `${label} alternatives`],
      alternativeTargets,
    };
  }

  if (!page || (!pageApps.length && kind !== "topic")) return null;

  const url = `${BASE_URL}${page.path}`;
  const body = `
    <article>
      <h1>${esc(page.h1)}</h1>
      <p>${esc(page.description)}</p>
      <p>${page.keywords.map(keyword => `<span>${esc(keyword)}</span>`).join(" · ")}</p>
      <section>
        <h2>Recommended Apps</h2>
        ${renderAppList(pageApps)}
      </section>
      ${relatedCollectionLinks(allApps, page.path)}
    </article>`;

  return buildPage({
    title: page.title,
    description: page.description,
    url,
    type: "website",
    jsonLd: collectionJsonLd({
      url,
      name: page.h1,
      description: page.description,
      apps: pageApps,
      about: page.alternativeTargets?.length ? alternativeTargetsJsonLd(page.alternativeTargets) : undefined,
    }),
    body,
  });
}

// ── Render: App Detail Page ──────────────────────────────────────────────────
async function renderApp(appId) {
  try {
    const snap = await db.collection("apps").doc(appId).get();
    if (!snap.exists) return null;

    const app = { id: snap.id, ...snap.data() };
    if (!isPublicApp(app)) return null;

    const alternativeTargets = getAlternativeTargets(app);
    const alt = formatAlternativeTargets(app, "proprietary software");
    const title = `${app.name} - Free Open Source Alternative to ${alt} | OpenLib`;
    const desc = truncate(`${app.name} is a free, open-source alternative to ${alt}. ${app.description || app.uses || ""}`);
    const url = `${BASE_URL}/app/${encodeURIComponent(appId)}`;
    const categoryUrl = `${BASE_URL}/category/${slugify(app.category || "apps")}`;

    const jsonLd = {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: app.category || "Apps", url: categoryUrl },
          { name: app.name, url },
        ]),
        {
          "@type": "SoftwareApplication",
          "@id": `${url}#software`,
          name: app.name,
          url,
          description: app.description || "",
          applicationCategory: app.category || "DeveloperApplication",
          operatingSystem: (app.platforms || []).join(", ") || "All",
          image: app.logo || OG_IMAGE,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          ...(alternativeTargets.length && { about: alternativeTargetsJsonLd(alternativeTargets) }),
          ...(app.license && { license: app.license }),
          ...(app.download && { downloadUrl: app.download }),
          ...(app.source && { codeRepository: app.source }),
          ...(app.version && { softwareVersion: app.version }),
          ...(app.avgRating && {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: app.avgRating,
              reviewCount: app.reviewCount || 1,
              bestRating: "5",
              worstRating: "1",
            },
          }),
        },
      ],
    };

    const platforms = (app.platforms || []).join(", ");
    const features = (app.features || [])
      .map((f) => `<li>${esc(f)}</li>`)
      .join("");
    const tags = (app.tags || [])
      .map((t) => `<a href="/tag/${slugify(t)}">${esc(t)}</a>`)
      .join(" · ");
    const installs = (app.installMethods || [])
      .map((m) => `<li><strong>${esc(m.label)}</strong>: <code>${esc(m.command)}</code></li>`)
      .join("");
    const useCases = [
      app.uses,
      alternativeTargets.length ? `${app.name} is useful when you want an open-source alternative to ${alt}.` : "",
      app.category ? `It belongs to the ${app.category} category on OpenLib.` : "",
      platforms ? `It supports ${platforms}.` : "",
    ].filter(Boolean);
    const alternativeList = alternativeTargets
      .map(target => `<li><a href="/alternatives/${slugify(target)}">${esc(target)}</a></li>`)
      .join("");
    const relatedTopics = SEO_TOPIC_PAGES
      .filter(topic => topic.match(app))
      .slice(0, 4)
      .map(topic => `<a href="/${topic.slug}">${esc(topic.h1)}</a>`)
      .join(" · ");

    const body = `
    <article>
      <h1>${esc(app.name)}</h1>
      ${app.logo ? `<p><img src="${esc(app.logo)}" alt="${esc(app.name)} logo" width="96" height="96" loading="eager"></p>` : ""}
      ${alternativeList ? `<section><h2>Alternative To</h2><ul>${alternativeList}</ul></section>` : ""}
      <p>${esc(app.description || `${app.name} is a free and open-source software listing on OpenLib.`)}</p>

      ${app.fullDescription ? `<section><h2>About ${esc(app.name)}</h2><p>${esc(app.fullDescription)}</p></section>` : ""}
      ${useCases.length ? `<section><h2>Use Cases</h2><ul>${useCases.map(item => `<li>${esc(item)}</li>`).join("")}</ul></section>` : ""}
      ${features ? `<section><h2>Key Features</h2><ul>${features}</ul></section>` : ""}
      ${platforms ? `<section><h2>Available Platforms</h2><p>${esc(platforms)}</p></section>` : ""}
      ${installs ? `<section><h2>Installation</h2><ul>${installs}</ul></section>` : ""}
      ${app.systemRequirements ? `<section><h2>System Requirements</h2><pre>${esc(app.systemRequirements)}</pre></section>` : ""}

      <section>
        <h2>Details</h2>
        <ul>
          ${app.version ? `<li>Version: ${esc(app.version)}</li>` : ""}
          ${app.license ? `<li>License: ${esc(app.license)}</li>` : ""}
          ${app.category ? `<li>Category: <a href="/category/${slugify(app.category)}">${esc(app.category)}</a></li>` : ""}
          ${app.fileSize ? `<li>File Size: ${esc(app.fileSize)}</li>` : ""}
          ${app.developer ? `<li>Developer: ${esc(app.developer)}</li>` : ""}
          ${app.maintainer ? `<li>Maintained by: ${esc(app.maintainer)}</li>` : ""}
        </ul>
      </section>

      ${tags ? `<section><h2>Tags</h2><p>${tags}</p></section>` : ""}
      ${relatedTopics ? `<section><h2>Related Open Source Collections</h2><p>${relatedTopics}</p></section>` : ""}

      <section>
        <h2>Links</h2>
        <ul>
          ${app.download ? `<li><a href="${esc(app.download)}" rel="noopener">Download ${esc(app.name)}</a></li>` : ""}
          ${app.source ? `<li><a href="${esc(app.source)}" rel="noopener">Source Code</a></li>` : ""}
          ${app.website ? `<li><a href="${esc(app.website)}" rel="noopener">Official Website</a></li>` : ""}
          ${app.docs ? `<li><a href="${esc(app.docs)}" rel="noopener">Documentation</a></li>` : ""}
        </ul>
      </section>

      <p><a href="/category/${slugify(app.category || "apps")}">Browse more ${esc(app.category || "open-source")} apps</a></p>
    </article>`;

    return buildPage({ title, description: desc, url, image: app.logo, type: "article", jsonLd, body });
  } catch (e) {
    console.error("renderApp error:", appId, e);
    return null;
  }
}

// ── Render: Rankings Page ────────────────────────────────────────────────────
async function renderRankings() {
  try {
    const apps = await getLimitedAppsByEngagement();
    apps.sort((a, b) => {
      const scoreA = (a.likes || 0) - (a.dislikes || 0) + (a.views || 0) / 10;
      const scoreB = (b.likes || 0) - (b.dislikes || 0) + (b.views || 0) / 10;
      return scoreB - scoreA;
    });

    const title = "Top Ranked Open Source Apps | OpenLib";
    const desc = "Discover the highest-rated free and open-source apps ranked by the OpenLib community. Find the best FOSS alternatives.";
    const url = `${BASE_URL}/rankings`;

    const jsonLd = {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: "Rankings", url },
        ]),
        {
          "@type": "ItemList",
          name: "Top Ranked Open Source Apps",
          numberOfItems: apps.length,
          itemListElement: apps.slice(0, 50).map((app, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: app.name,
            url: `${BASE_URL}/app/${encodeURIComponent(app.id)}`,
          })),
        },
      ],
    };

    const list = apps
      .slice(0, 100)
      .map(
        (app, i) =>
          `<li><a href="/app/${encodeURIComponent(app.id)}">#${i + 1} ${esc(app.name)}</a>${getAlternativeTargets(app).length ? ` — alternative to ${esc(formatAlternativeTargets(app))}` : ""} — ${esc((app.description || "").slice(0, 120))}</li>`
      )
      .join("\n        ");

    const body = `
    <h1>Top Ranked Open Source Apps</h1>
    <p>The highest-rated free and open-source software alternatives, ranked by the OpenLib community. ${apps.length} apps and counting.</p>
    <ol>
        ${list}
    </ol>`;

    return buildPage({ title, description: desc, url, jsonLd, body });
  } catch (e) {
    console.error("renderRankings error:", e);
    return null;
  }
}

// ── Render: Trending Page ────────────────────────────────────────────────────
async function renderTrending() {
  try {
    const snap = await db.collection("apps")
      .orderBy("views", "desc")
      .limit(75)
      .select(...APP_PRERENDER_FIELDS)
      .get();
    const apps = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    apps.sort((a, b) => (b.views || 0) - (a.views || 0));

    const title = "Trending Open Source Apps This Week | OpenLib";
    const desc = "See which free and open-source apps are trending this week on OpenLib. Discover popular FOSS alternatives.";
    const url = `${BASE_URL}/trending`;
    const jsonLd = {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: "Trending", url },
        ]),
        {
          "@type": "ItemList",
          name: "Trending Open Source Apps",
          numberOfItems: apps.length,
          itemListElement: apps.slice(0, 50).map((app, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: app.name,
            url: `${BASE_URL}/app/${encodeURIComponent(app.id)}`,
          })),
        },
      ],
    };

    const list = apps
      .slice(0, 50)
      .map(
        (app) =>
          `<li><a href="/app/${encodeURIComponent(app.id)}">${esc(app.name)}</a>${getAlternativeTargets(app).length ? ` — alternative to ${esc(formatAlternativeTargets(app))}` : ""} — ${esc((app.description || "").slice(0, 120))}</li>`
      )
      .join("\n        ");

    const body = `
    <h1>Trending Open Source Apps</h1>
    <p>Popular free and open-source apps trending on OpenLib this week.</p>
    <ul>
        ${list}
    </ul>`;

    return buildPage({ title, description: desc, url, jsonLd, body });
  } catch (e) {
    console.error("renderTrending error:", e);
    return null;
  }
}

function renderPolicy(kind) {
  const isPrivacy = kind === "privacy";
  const pathName = isPrivacy ? "/privacy" : "/terms";
  const title = isPrivacy ? "Privacy Policy | OpenLib" : "Terms and Conditions | OpenLib";
  const h1 = isPrivacy ? "Privacy Policy" : "Terms and Conditions";
  const desc = isPrivacy
    ? "Read OpenLib's privacy policy for app discovery, submissions, account data, analytics, and community features."
    : "Read OpenLib's terms and conditions for app submissions, reviews, community use, ownership, and acceptable behavior.";
  const url = `${BASE_URL}${pathName}`;
  const body = `
    <article>
      <h1>${h1}</h1>
      <p>${esc(desc)}</p>
      <section>
        <h2>${isPrivacy ? "What OpenLib Collects" : "Using OpenLib"}</h2>
        <p>${isPrivacy
          ? "OpenLib uses Firebase services for accounts, app submissions, reviews, moderation, and basic analytics. Public app listings and community content are used to operate the open-source software directory."
          : "OpenLib is a community-curated directory for discovering open-source software. Users are responsible for submitting accurate app information, respecting project licenses, and using linked third-party software at their own discretion."}</p>
      </section>
      <section>
        <h2>${isPrivacy ? "How Data Is Used" : "Community Content"}</h2>
        <p>${isPrivacy
          ? "Data is used to provide discovery, recommendations, moderation, rankings, security review workflows, and abuse prevention while keeping the platform lightweight."
          : "Reviews, ratings, reports, edit requests, and app metadata may be moderated to keep listings useful, accurate, and safe for the OpenLib community."}</p>
      </section>
      <p>Full text: <a href="${isPrivacy ? "/privacy.txt" : "/terms.txt"}">${isPrivacy ? "privacy.txt" : "terms.txt"}</a></p>
    </article>`;

  return buildPage({
    title,
    description: desc,
    url,
    jsonLd: {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: h1, url },
        ]),
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          name: h1,
          url,
          description: desc,
          isPartOf: { "@id": `${BASE_URL}/#website` },
        },
      ],
    },
    body,
  });
}

function renderTeam() {
  const title = "OpenLib Team | Open Source Software Curation";
  const desc = "Meet the OpenLib team and learn how OpenLib curates open-source software alternatives, reviews submissions, and maintains the app library.";
  const url = `${BASE_URL}/team`;
  const body = `
    <article>
      <h1>OpenLib Team</h1>
      <p>${desc}</p>
      <section>
        <h2>Curation Mission</h2>
        <p>OpenLib helps people discover free, open-source, and privacy-friendly software alternatives with clear metadata, source links, reviews, rankings, and community moderation.</p>
      </section>
      <section>
        <h2>Explore OpenLib</h2>
        <p><a href="/open-source-alternatives">Open source alternatives</a> · <a href="/privacy-focused-software">Privacy-focused software</a> · <a href="/linux-software">Linux software</a></p>
      </section>
    </article>`;
  return buildPage({
    title,
    description: desc,
    url,
    jsonLd: {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: "Team", url },
        ]),
        {
          "@type": "AboutPage",
          "@id": `${url}#webpage`,
          name: "OpenLib Team",
          url,
          description: desc,
          isPartOf: { "@id": `${BASE_URL}/#website` },
        },
      ],
    },
    body,
  });
}

function renderNotFound(urlPath) {
  const url = `${BASE_URL}${urlPath}`;
  return buildPage({
    title: "Page Not Found | OpenLib",
    description: "This OpenLib page could not be found.",
    url,
    robots: "noindex, follow",
    jsonLd: breadcrumbJsonLd([
      { name: "OpenLib", url: `${BASE_URL}/` },
      { name: "Page Not Found", url },
    ]),
    body: `<article><h1>Page not found</h1><p>This page is not available. Explore <a href="/">OpenLib</a> or browse <a href="/open-source-alternatives">open-source alternatives</a>.</p></article>`,
  });
}

// ── Main Cloud Function ──────────────────────────────────────────────────────
exports.prerender = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS requests
  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }
  if (!["GET", "HEAD"].includes(req.method)) {
    return res.status(405).send("Method Not Allowed");
  }

  const ua = req.headers["user-agent"] || "";

  // Regular users → serve the SPA directly
  if (!isBot(ua)) {
    const spa = getSpaHtml();
    if (spa) {
      res.set("Cache-Control", "public, max-age=300, s-maxage=600");
      return sendHtml(req, res, spa);
    }
    // If spa.html missing, redirect to root (hosting serves index.html)
    return res.redirect(302, "/");
  }

  // Bot traffic → serve pre-rendered HTML
  const urlPath = decodeURIComponent(req.path);
  let html = null;
  const cacheKey = `html:${urlPath}`;
  const cachedHtml = getCachedHtml(cacheKey);
  if (cachedHtml) {
    res.set("Cache-Control", "public, s-maxage=3600, max-age=600, stale-while-revalidate=86400");
    res.set("X-Rendered-By", "openlib-prerender");
    res.set("X-Prerender-Cache", "HIT");
    return sendHtml(req, res, cachedHtml);
  }

  try {
    if (urlPath.match(/^\/app\/[^/]+\/(reviews|edit-requests|versions)$/)) {
      const appId = urlPath.replace("/app/", "").split("/")[0];
      return res.redirect(301, `/app/${encodeURIComponent(appId)}`);
    } else if (urlPath.match(/^\/app\/[^/]+$/)) {
      const appId = urlPath.replace("/app/", "");
      html = await renderApp(appId);
      if (!html) {
        res.set("Cache-Control", "public, s-maxage=300, max-age=60");
        return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
      }
    } else if (urlPath.startsWith("/category/")) {
      html = await renderCollection("category", slugify(urlPath.replace("/category/", "")));
      if (!html) {
        res.set("Cache-Control", "public, s-maxage=300, max-age=60");
        return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
      }
    } else if (urlPath.startsWith("/tag/")) {
      html = await renderCollection("tag", slugify(urlPath.replace("/tag/", "")));
      if (!html) {
        res.set("Cache-Control", "public, s-maxage=300, max-age=60");
        return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
      }
    } else if (urlPath.startsWith("/alternatives/")) {
      html = await renderCollection("alternative", slugify(urlPath.replace("/alternatives/", "")));
      if (!html) {
        res.set("Cache-Control", "public, s-maxage=300, max-age=60");
        return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
      }
    } else if (SEO_TOPIC_BY_SLUG.has(urlPath.slice(1))) {
      html = await renderCollection("topic", urlPath.slice(1));
    } else if (urlPath === "/rankings") {
      html = await renderRankings();
    } else if (urlPath === "/trending") {
      html = await renderTrending();
    } else if (urlPath === "/team") {
      html = renderTeam();
    } else if (urlPath === "/privacy") {
      html = renderPolicy("privacy");
    } else if (urlPath === "/terms") {
      html = renderPolicy("terms");
    }
  } catch (e) {
    console.error("Prerender error:", urlPath, e);
  }

  if (html) {
    setCachedHtml(cacheKey, html);
    res.set("Cache-Control", "public, s-maxage=3600, max-age=600, stale-while-revalidate=86400");
    res.set("X-Rendered-By", "openlib-prerender");
    res.set("X-Prerender-Cache", "MISS");
    return sendHtml(req, res, html);
  }

  if (urlPath !== "/" && !urlPath.includes(".")) {
    res.set("Cache-Control", "public, s-maxage=300, max-age=60");
    return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
  }

  // Fallback: serve SPA
  const spa = getSpaHtml();
  if (spa) {
    res.set("Cache-Control", "public, max-age=300");
    return sendHtml(req, res, spa);
  }
  return res.redirect(302, "/");
});
