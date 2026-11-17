// ── OpenLib Prerender Cloud Function ──────────────────────────────────────────
// Serves pre-rendered HTML to search engine bots and social crawlers.
// Regular users get the normal SPA (index.html).
//
// Routes handled: /app/*, /rankings, /trending
// Bot detection via User-Agent header.

const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated, onDocumentDeleted, onDocumentUpdated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

admin.initializeApp();
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

const REPUTATION_POINTS = {
  appApproved: 10,
  helpfulReviewUpvote: 2,
  confirmedBugReport: 5,
  confirmedSpamReport: 3,
  rejectedSpamApp: -20,
  reviewRemoved: -10,
  accountSuspension: -50
};

const REPUTATION_FIELDS = {
  appApproved: "appApproved",
  helpfulReviewUpvote: "helpfulReviewUpvotes",
  confirmedBugReport: "confirmedBugReports",
  confirmedSpamReport: "confirmedSpamReports",
  rejectedSpamApp: "rejectedSpamApps",
  reviewRemoved: "removedReviews",
  accountSuspension: "accountSuspensions"
};

const CONTRIBUTOR_REQUIREMENTS = {
  minAccountAgeDays: 14,
  minReputation: 50,
  minApprovedApps: 3,
  alternateAccountAgeDays: 30
};

const BASE_URL = "https://www.openlib.online";
const GITHUB_URL = "https://github.com/AHS-Mobile-Labs/OpenLib";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const GENERAL_SUBCATEGORY = "General";
const PRERENDER_CACHE_TTL_MS = 15 * 60 * 1000;
const SITEMAP_CACHE_TTL_MS = 60 * 60 * 1000;
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
  "subcategory",
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
const PRIVATE_ROUTES = new Set(["/admin", "/verify", "/team/manage"]);

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

function addVary(res, value) {
  const current = String(res.get("Vary") || "")
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  if (!current.some(item => item.toLowerCase() === value.toLowerCase())) current.push(value);
  res.set("Vary", current.join(", "));
}

function sendHtml(req, res, html, extraHeaders = {}, statusCode = 200) {
  Object.entries(extraHeaders).forEach(([key, value]) => res.set(key, value));
  addVary(res, "User-Agent");
  res.set("Content-Type", "text/html; charset=utf-8");
  if (req.method === "HEAD") return res.status(statusCode).send("");
  return res.status(statusCode).send(html);
}

function accountAgeDays(record, nowMs = Date.now()) {
  const createdAt = record && record.createdAt ? new Date(record.createdAt).getTime() : nowMs;
  if (!Number.isFinite(createdAt)) return 0;
  return Math.max(0, Math.floor((nowMs - createdAt) / 86400000));
}

function reputationScore(record) {
  return Number((record && record.reputation && record.reputation.score) || 0);
}

function approvedSubmissionCount(record) {
  return Number((record && record.approvedAppSubmissions) || 0);
}

function moderationActionCount(record) {
  return Number((record && record.moderationActions) || 0);
}

function meetsContributorRequirements(record) {
  if (!record || (record.role || "user") !== "user") return false;
  const ageDays = accountAgeDays(record);
  const approvedApps = approvedSubmissionCount(record);
  const hasEnoughHistory = approvedApps >= CONTRIBUTOR_REQUIREMENTS.minApprovedApps
    || ageDays >= CONTRIBUTOR_REQUIREMENTS.alternateAccountAgeDays;

  return ageDays >= CONTRIBUTOR_REQUIREMENTS.minAccountAgeDays
    && record.emailVerified === true
    && reputationScore(record) >= CONTRIBUTOR_REQUIREMENTS.minReputation
    && moderationActionCount(record) === 0
    && hasEnoughHistory;
}

async function maybePromoteContributor(uid, actorUid = "system") {
  if (!uid) return;
  const ref = db.collection("user_records").doc(uid);
  const snap = await ref.get();
  if (!snap.exists) return;

  const record = { uid, ...snap.data() };
  if (!meetsContributorRequirements(record)) return;

  const now = new Date().toISOString();
  await ref.update({
    role: "contributor",
    contributorSince: now,
    lastRoleChangeAt: now,
    updatedAt: now
  });
  await db.collection("role_change_log").add({
    uid,
    actorUid,
    fromRole: record.role || "user",
    toRole: "contributor",
    reason: "Automatic contributor promotion: account age, verified email, reputation, approved submissions, and clean moderation history met.",
    automatic: true,
    createdAt: now
  });
}

function reputationEventId(value) {
  return String(value || "").replace(/\//g, "_").slice(0, 500);
}

async function applyReputationEvent(uid, eventType, actorUid = "system", metadata = {}, count = 1, eventKey = "") {
  if (!uid || !REPUTATION_POINTS[eventType]) return;
  const amount = Number(count);
  if (!Number.isFinite(amount) || amount === 0) return;

  const delta = REPUTATION_POINTS[eventType] * amount;
  const now = new Date().toISOString();
  const repField = REPUTATION_FIELDS[eventType];
  const moderationPenalty = ["rejectedSpamApp", "reviewRemoved", "accountSuspension"].includes(eventType);
  const update = {
    "reputation.score": FieldValue.increment(delta),
    [`reputation.${repField}`]: FieldValue.increment(amount),
    updatedAt: now
  };
  if (eventType === "appApproved" && amount > 0) {
    update.approvedAppSubmissions = FieldValue.increment(amount);
    update["activity.appsApproved"] = FieldValue.increment(amount);
  }
  if (moderationPenalty && amount > 0) {
    update.moderationActions = FieldValue.increment(amount);
  }

  const userRef = db.collection("user_records").doc(uid);
  const eventRef = eventKey
    ? db.collection("user_reputation_events").doc(reputationEventId(eventKey))
    : db.collection("user_reputation_events").doc();
  const eventData = {
    uid,
    actorUid,
    eventType,
    delta,
    count: amount,
    metadata,
    createdAt: now
  };

  let applied = false;
  await db.runTransaction(async transaction => {
    if (eventKey) {
      const existingEvent = await transaction.get(eventRef);
      if (existingEvent.exists) return;
    }
    const userSnap = await transaction.get(userRef);
    if (!userSnap.exists) return;
    transaction.set(userRef, update, { merge: true });
    transaction.set(eventRef, eventData);
    applied = true;
  });

  if (applied) await maybePromoteContributor(uid, actorUid);
}

function isSpamReason(reason) {
  return /spam|scam|fake|abuse|malicious/i.test(String(reason || ""));
}

function reportReputationEvent(reason) {
  const value = String(reason || "").toLowerCase();
  if (/spam|scam|fake|abuse/.test(value)) return "confirmedSpamReport";
  if (["broken-link", "wrong-info", "malware", "duplicate", "other"].includes(value)) return "confirmedBugReport";
  return "confirmedBugReport";
}

async function getReviewForVote(vote) {
  if (!vote || !vote.reviewId) return null;
  const snap = await db.collection("app_reviews").doc(vote.reviewId).get();
  return snap.exists ? { id: snap.id, ...snap.data() } : null;
}

function sendText(req, res, text, extraHeaders = {}, statusCode = 200) {
  Object.entries(extraHeaders).forEach(([key, value]) => res.set(key, value));
  res.set("Content-Type", "text/plain; charset=utf-8");
  if (req.method === "HEAD") return res.status(statusCode).send("");
  return res.status(statusCode).send(text);
}

function sendXml(req, res, xml, extraHeaders = {}, statusCode = 200) {
  Object.entries(extraHeaders).forEach(([key, value]) => res.set(key, value));
  res.set("Content-Type", "application/xml; charset=utf-8");
  if (req.method === "HEAD") return res.status(statusCode).send("");
  return res.status(statusCode).send(xml);
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

function categoryDisplayText(app) {
  return [app?.category, app?.category ? (app.subcategory || GENERAL_SUBCATEGORY) : ""].filter(Boolean).join(" / ");
}

function splitAlternativeTargets(value) {
  const rawTargets = Array.isArray(value)
    ? value
    : String(value || "").split(/[,，\n;]/);
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
    app.subcategory,
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

function buildPage({
  title,
  description,
  keywords,
  url,
  image,
  imageAlt,
  type,
  jsonLd,
  body,
  robots = "index, follow, max-snippet:-1, max-image-preview:large"
}) {
  const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(withSiteJsonLd(jsonLd))}</script>`;
  const imgUrl = image || OG_IMAGE;
  const altText = imageAlt || title || "OpenLib";
  const kwContent = Array.isArray(keywords)
    ? keywords.filter(Boolean).join(", ")
    : (keywords || "open source, free software, FOSS, app library, software alternatives, open-source apps, Linux apps, free alternatives");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="keywords" content="${esc(kwContent)}">
  <meta name="robots" content="${esc(robots)}">
  <meta name="theme-color" content="#0c0c0f">
  <meta name="application-name" content="OpenLib">
  <meta name="apple-mobile-web-app-title" content="OpenLib">
  <link rel="canonical" href="${esc(url)}">

  <meta property="og:type" content="${esc(type || "website")}">
  <meta property="og:site_name" content="OpenLib">
  <meta property="og:locale" content="en_US">
  <meta property="og:url" content="${esc(url)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${esc(imgUrl)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(altText)}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:url" content="${esc(url)}">
  <meta name="twitter:image" content="${esc(imgUrl)}">

  ${jsonLdTag}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate icon" type="image/x-icon" href="/favicon.ico">
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
    <p>Icons by <a href="https://tabler.io/icons">Tabler Icons</a> and <a href="https://icons8.com/">Icons8</a>.</p>
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

function renderPolicyInline(text) {
  return String(text || "").split(/(https?:\/\/[^\s]+)/g).map(part => {
    if (!part) return "";
    if (/^https?:\/\//.test(part)) {
      return `<a href="${esc(part)}" rel="noopener">${esc(part)}</a>`;
    }
    return esc(part);
  }).join("");
}

function renderPolicyText(text) {
  const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let paragraph = [];
  let inList = false;
  let hasTitle = false;

  function closeList() {
    if (!inList) return;
    html += "</ul>";
    inList = false;
  }

  function flushParagraph() {
    if (!paragraph.length) return;
    html += `<p>${renderPolicyInline(paragraph.join(" "))}</p>`;
    paragraph = [];
  }

  lines.forEach(rawLine => {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      closeList();
      return;
    }

    if (!hasTitle) {
      html += `<p><strong>${renderPolicyInline(line)}</strong></p>`;
      hasTitle = true;
      return;
    }

    if (/^Last Updated:/i.test(line)) {
      flushParagraph();
      closeList();
      html += `<p><em>${renderPolicyInline(line)}</em></p>`;
      return;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      closeList();
      html += `<h2>${renderPolicyInline(line)}</h2>`;
      return;
    }

    if (/^[a-z]\)\s+/i.test(line)) {
      flushParagraph();
      closeList();
      html += `<h3>${renderPolicyInline(line)}</h3>`;
      return;
    }

    if (/^-\s+/.test(line)) {
      flushParagraph();
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${renderPolicyInline(line.replace(/^-\s+/, ""))}</li>`;
      return;
    }

    paragraph.push(line);
  });

  flushParagraph();
  closeList();
  return html || "<p>Policy text is currently unavailable.</p>";
}

function readPolicyText(kind) {
  const filename = kind === "privacy" ? "privacy.txt" : "terms.txt";
  const candidates = [
    path.join(__dirname, filename),
    path.join(__dirname, "..", filename),
  ];
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf-8");
  }
  return "";
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
        ${app.category ? ` in <a href="/category/${slugify(app.category)}">${esc(categoryDisplayText(app))}</a>` : ""}
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

function toW3CDate(value) {
  if (!value) return new Date().toISOString().split("T")[0];
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return new Date().toISOString().split("T")[0];
  return date.toISOString().split("T")[0];
}

function maxDate(a, b) {
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function sitemapUrl(page) {
  return `  <url>
    <loc>${escapeXml(`${BASE_URL}${page.loc}`)}</loc>
    <lastmod>${escapeXml(page.lastmod)}</lastmod>
    <changefreq>${escapeXml(page.changefreq)}</changefreq>
    <priority>${escapeXml(page.priority)}</priority>
  </url>`;
}

function addSitemapPage(pages, page) {
  if (!page.loc || pages.some(existing => existing.loc === page.loc)) return;
  pages.push(page);
}

async function buildSitemapXml() {
  const cacheKey = "xml:sitemap";
  const cached = prerenderCache.get(cacheKey);
  if (cached && Date.now() - cached.ts <= SITEMAP_CACHE_TTL_MS) return cached.html;

  const today = new Date().toISOString().split("T")[0];
  const pages = [];
  [
    { loc: "/", changefreq: "daily", priority: "1.0" },
    { loc: "/rankings", changefreq: "daily", priority: "0.8" },
    { loc: "/trending", changefreq: "daily", priority: "0.8" },
    { loc: "/roles", changefreq: "weekly", priority: "0.7" },
    { loc: "/team", changefreq: "monthly", priority: "0.5" },
    { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
    { loc: "/terms", changefreq: "yearly", priority: "0.3" },
    ...SEO_TOPIC_PAGES.map(page => ({ loc: `/${page.slug}`, changefreq: "weekly", priority: "0.85" })),
  ].forEach(page => addSitemapPage(pages, { ...page, lastmod: today }));

  const apps = await getPrerenderApps(1000);
  const categories = new Map();
  const alternatives = new Map();
  const tags = new Map();
  for (const app of apps) {
    const lastmod = toW3CDate(app.updatedAt || app.createdAt);
    addSitemapPage(pages, {
      loc: `/app/${encodeURIComponent(app.id)}`,
      lastmod,
      changefreq: "weekly",
      priority: "0.9",
    });
    if (app.category) {
      const slug = slugify(app.category);
      categories.set(slug, maxDate(categories.get(slug), lastmod));
    }
    for (const target of getAlternativeTargets(app)) {
      const slug = slugify(target);
      if (slug) {
        alternatives.set(slug, maxDate(alternatives.get(slug), lastmod));
        const appSlug = slugify(app.name || app.id);
        if (appSlug && appSlug !== slug) {
          addSitemapPage(pages, {
            loc: `/compare/${appSlug}-vs-${slug}`,
            lastmod,
            changefreq: "weekly",
            priority: "0.85"
          });
        }
      }
    }
    for (const tag of app.tags || []) {
      const slug = slugify(tag);
      if (!slug) continue;
      const existing = tags.get(slug) || { count: 0, lastmod };
      tags.set(slug, { count: existing.count + 1, lastmod: maxDate(existing.lastmod, lastmod) });
    }
  }

  for (const [slug, lastmod] of categories) {
    addSitemapPage(pages, { loc: `/category/${slug}`, lastmod, changefreq: "weekly", priority: "0.8" });
  }
  for (const [slug, lastmod] of alternatives) {
    addSitemapPage(pages, { loc: `/alternatives/${slug}`, lastmod, changefreq: "weekly", priority: "0.75" });
  }
  for (const [slug, data] of tags) {
    if (data.count >= 2) addSitemapPage(pages, { loc: `/tag/${slug}`, lastmod: data.lastmod, changefreq: "weekly", priority: "0.65" });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(sitemapUrl).join("\n")}
</urlset>
`;
  setCachedHtml(cacheKey, xml);
  return xml;
}

function robotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /admin
Disallow: /verify
Disallow: /team/manage

Sitemap: ${BASE_URL}/sitemap.xml
`;
}

function canonicalRedirectPath(urlPath) {
  if (urlPath.length > 1 && urlPath.endsWith("/")) return urlPath.replace(/\/+$/, "");
  if (/^\/app\/[^/]+\/(reviews|edit-requests|versions)$/.test(urlPath)) {
    const appId = urlPath.replace("/app/", "").split("/")[0];
    return `/app/${encodeURIComponent(appId)}`;
  }
  if (urlPath.startsWith("/alternative-to/")) {
    const slug = slugify(urlPath.slice("/alternative-to/".length));
    return `/alternatives/${slug}`;
  }
  if (urlPath.startsWith("/compare/")) {
    const compareSlug = urlPath.slice("/compare/".length);
    const parts = compareSlug.split("-vs-");
    if (parts.length === 2) {
      const canonical = `/compare/${slugify(parts[0])}-vs-${slugify(parts[1])}`;
      if (canonical !== urlPath) return canonical;
    }
  }
  for (const prefix of ["/category/", "/tag/", "/alternatives/"]) {
    if (!urlPath.startsWith(prefix)) continue;
    const slug = slugify(urlPath.slice(prefix.length));
    const canonical = `${prefix}${slug}`;
    if (slug && canonical !== urlPath) return canonical;
  }
  return "";
}

// ── SVG Badge Generator ──────────────────────────────────────────────────────
function generateBadgeSvg({ name, rank, rating, verified, metric = "rank" }) {
  const leftLabel = "openlib";
  let rightLabel = "listed";
  let rightColor = "#f0a500";
  let textColor = "#0c0c0f";

  if (metric === "verified") {
    rightLabel = "verified foss";
    rightColor = "#3ecf8e";
    textColor = "#0c0c0f";
  } else if (metric === "rating") {
    rightLabel = (rating && rating > 0) ? `${rating.toFixed(1)} ★` : "★ rated";
    rightColor = "#3ecf8e";
    textColor = "#0c0c0f";
  } else if (metric === "rank") {
    rightLabel = (rank && rank > 0) ? `#${rank}` : (verified ? "verified foss" : "listed");
    rightColor = (rank && rank > 0) ? "#f0a500" : (verified ? "#3ecf8e" : "#f0a500");
    textColor = "#0c0c0f";
  } else {
    if (rank && rank > 0) {
      rightLabel = `#${rank}`;
      rightColor = "#f0a500";
      textColor = "#0c0c0f";
    } else if (verified) {
      rightLabel = "verified foss";
      rightColor = "#3ecf8e";
      textColor = "#0c0c0f";
    } else if (rating && rating > 0) {
      rightLabel = `${rating.toFixed(1)} ★`;
      rightColor = "#3ecf8e";
      textColor = "#0c0c0f";
    }
  }

  const rightTextWidth = Math.max(32, rightLabel.length * 8 + 14);
  const leftWidth = 66;
  const rightWidth = Math.round(rightTextWidth);
  const totalWidth = leftWidth + rightWidth;
  const leftCenter = 44;
  const rightCenter = leftWidth + rightWidth / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20" role="img" aria-label="${leftLabel}: ${rightLabel}">
  <title>${leftLabel}: ${rightLabel}</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="${totalWidth}" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="${leftWidth}" height="20" fill="#181822"/>
    <rect x="${leftWidth}" width="${rightWidth}" height="20" fill="${rightColor}"/>
    <rect width="${totalWidth}" height="20" fill="url(#s)"/>
  </g>
  <g transform="translate(6, 3.5)">
    <rect width="13" height="13" rx="3" fill="#f0a500"/>
    <text x="6.5" y="9.5" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-size="8" font-weight="900" fill="#0c0c0f" text-anchor="middle">OL</text>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text x="${leftCenter * 10}" y="140" transform="scale(.1)" fill="#eee" font-weight="600">openlib</text>
    <text x="${rightCenter * 10}" y="140" transform="scale(.1)" fill="${textColor}" font-weight="700">${rightLabel}</text>
  </g>
</svg>`;
}

// ── Render: Programmatic Comparison Page ──────────────────────────────────────
async function renderCompare(compareSlug) {
  const parts = compareSlug.split("-vs-");
  if (parts.length !== 2) return null;
  const [slugA, slugB] = parts;
  if (!slugA || !slugB) return null;

  const allApps = await getPrerenderApps();
  const appA = allApps.find(a => a.id === slugA || slugify(a.name) === slugA);
  if (!appA) return null;

  const appB = allApps.find(a => a.id === slugB || slugify(a.name) === slugB);
  const nameB = appB ? appB.name : titleCaseFromSlug(slugB);

  const title = `${appA.name} vs ${nameB}: Open Source Alternative Comparison | OpenLib`;
  const description = `Compare ${appA.name} vs ${nameB}. Detailed side-by-side breakdown of open source features, privacy, pricing, offline access, and software licensing.`;
  const url = `${BASE_URL}/compare/${slugA}-vs-${slugB}`;

  const body = `
    <article class="compare-prerender">
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &gt; <a href="/alternatives/${slugB}">Alternatives to ${esc(nameB)}</a> &gt; <span>${esc(appA.name)} vs ${esc(nameB)}</span>
      </nav>
      <header>
        <p class="eyebrow">OPEN SOURCE COMPARISON</p>
        <h1>${esc(appA.name)} vs ${esc(nameB)}</h1>
        <p>${esc(description)}</p>
      </header>

      <section class="compare-cards">
        <div class="compare-card">
          <h2>${esc(appA.name)} (Open Source)</h2>
          <p><strong>License:</strong> ${esc(appA.license || "Open Source")}</p>
          <p><strong>Pricing:</strong> Free & Open Source (FOSS)</p>
          <p><strong>Platforms:</strong> ${esc((appA.platforms || []).join(", ") || "Cross-platform")}</p>
          <p>${esc(appA.description || appA.uses || "")}</p>
          <p><a href="/app/${encodeURIComponent(appA.id)}" class="btn-primary">View ${esc(appA.name)} Listing &amp; Download</a></p>
        </div>
        <div class="compare-card">
          <h2>${esc(nameB)} ${appB ? "(Open Source)" : "(Proprietary)"}</h2>
          <p><strong>Type:</strong> ${appB ? "Open Source Alternative" : "Proprietary Software"}</p>
          <p><strong>License:</strong> ${esc(appB?.license || "Proprietary / Closed Source")}</p>
          <p><strong>Platforms:</strong> ${esc((appB?.platforms || []).join(", ") || "Various")}</p>
          <p>${esc(appB?.description || `Proprietary software alternative commonly replaced by ${appA.name}.`)}</p>
          ${appB ? `<p><a href="/app/${encodeURIComponent(appB.id)}">View ${esc(nameB)} Details</a></p>` : `<p><a href="/alternatives/${slugB}">Explore all alternatives to ${esc(nameB)}</a></p>`}
        </div>
      </section>

      <section class="compare-why">
        <h2>Why Choose ${esc(appA.name)} over ${esc(nameB)}?</h2>
        <ul>
          <li><strong>No Vendor Lock-in:</strong> ${esc(appA.name)} is community-driven with open standards and no forced subscription.</li>
          <li><strong>Privacy &amp; Data Ownership:</strong> Own your data locally without mandatory tracking or third-party cloud lock-in.</li>
          <li><strong>100% Free &amp; Open Source:</strong> Fully verifiable codebase under ${esc(appA.license || "an open source license")}.</li>
        </ul>
      </section>

      ${relatedCollectionLinks(allApps, url)}
    </article>
  `;

  return buildPage({
    title,
    description,
    keywords: [
      `${appA.name} vs ${nameB}`,
      `${appA.name} alternative to ${nameB}`,
      `alternative to ${nameB}`,
      `${nameB} open source alternative`,
      `${appA.name} open source`,
      "software comparison",
      "FOSS"
    ],
    url,
    type: "article",
    jsonLd: {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: `Alternatives to ${nameB}`, url: `${BASE_URL}/alternatives/${slugB}` },
          { name: `${appA.name} vs ${nameB}`, url },
        ]),
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { "@id": `${BASE_URL}/#website` }
        }
      ]
    },
    body
  });
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
    keywords: page.keywords,
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
    const alt = formatAlternativeTargets(app, "");
    let title;
    let desc;
    if (alt) {
      title = `${app.name} — Free Open Source Alternative to ${alt} | OpenLib`;
      desc = truncate(`${app.name} is a free, open-source alternative to ${alt}. ${app.description || app.uses || ""}`);
    } else {
      const cat = categoryDisplayText(app) || "Software";
      title = `${app.name} — Free & Open Source ${cat} | OpenLib`;
      desc = truncate(`${app.name} is a free, open-source ${cat.toLowerCase()}. ${app.description || app.uses || ""}`);
    }
    const keywords = [
      app.name,
      `${app.name} open source`,
      `${app.name} download`,
      `${app.name} alternative`,
      ...(alternativeTargets.map(target => `alternative to ${target}`)),
      ...(app.tags || []),
      app.category,
      app.subcategory,
      "free software",
      "FOSS"
    ].filter(Boolean);
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
          applicationCategory: categoryDisplayText(app) || "DeveloperApplication",
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
      app.category ? `It belongs to the ${categoryDisplayText(app)} category on OpenLib.` : "",
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
          ${app.category ? `<li>Category: <a href="/category/${slugify(app.category)}">${esc(categoryDisplayText(app))}</a></li>` : ""}
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

    return buildPage({
      title,
      description: desc,
      keywords,
      url,
      image: app.logo,
      imageAlt: `${app.name} logo`,
      type: "article",
      jsonLd,
      body,
    });
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
    const keywords = ["open source rankings", "best open source apps", "top FOSS software", "software leaderboard", "highest rated open source"];
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

    return buildPage({ title, description: desc, keywords, url, jsonLd, body });
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
    const apps = snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter(isPublicApp);
    apps.sort((a, b) => (b.views || 0) - (a.views || 0));

    const title = "Trending Open Source Apps This Week | OpenLib";
    const desc = "See which free and open-source apps are trending this week on OpenLib. Discover popular FOSS alternatives.";
    const keywords = ["trending open source", "rising foss projects", "new open source apps", "popular software alternatives"];
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

    return buildPage({ title, description: desc, keywords, url, jsonLd, body });
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
  const keywords = [isPrivacy ? "privacy policy" : "terms and conditions", "openlib policy", "open source directory terms"];
  const url = `${BASE_URL}${pathName}`;
  const policyFile = isPrivacy ? "/privacy.txt" : "/terms.txt";
  const policyText = readPolicyText(kind);
  const body = `
    <article>
      <h1>${h1}</h1>
      <p>${esc(desc)}</p>
      ${policyText ? renderPolicyText(policyText) : "<p>Policy text is currently unavailable.</p>"}
      <p>Plain text: <a href="${policyFile}">${isPrivacy ? "privacy.txt" : "terms.txt"}</a></p>
    </article>`;

  return buildPage({
    title,
    description: desc,
    keywords,
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
  const keywords = ["openlib team", "open source software curation", "openlib maintainers", "openlib admins"];
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
    keywords,
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

function renderRoles() {
  const title = "OpenLib Roles and Achievements | OpenLib";
  const desc = "Learn how OpenLib user, contributor, maintainer, and OpenLib Team roles work, track achievement progress, and apply for trusted roles.";
  const keywords = ["openlib roles", "contributor roles", "open source maintainer", "achievements"];
  const url = `${BASE_URL}/roles`;
  const body = `
    <article>
      <h1>OpenLib Roles and Achievements</h1>
      <p>${esc(desc)}</p>
      <section>
        <h2>Community Trust Path</h2>
        <p>OpenLib roles progress from regular community participation to contributor status, maintainer work, and official OpenLib Team responsibilities.</p>
      </section>
      <section>
        <h2>How Roles Work</h2>
        <ul>
          <li>User: browse, review, rate, and submit open-source software.</li>
          <li>Contributor: earned through verified account history, reputation, approved submissions, and a clean moderation record.</li>
          <li>Maintainer and OpenLib Team: reviewed by humans for trusted moderation and library stewardship.</li>
        </ul>
      </section>
      <section>
        <h2>Explore OpenLib</h2>
        <p><a href="/team">Meet the team</a> · <a href="/rankings">Browse rankings</a> · <a href="/open-source-alternatives">Find open-source alternatives</a></p>
      </section>
    </article>`;

  return buildPage({
    title,
    description: desc,
    keywords,
    url,
    jsonLd: {
      "@graph": [
        breadcrumbJsonLd([
          { name: "OpenLib", url: `${BASE_URL}/` },
          { name: "Roles", url },
        ]),
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          name: "OpenLib Roles and Achievements",
          url,
          description: desc,
          isPartOf: { "@id": `${BASE_URL}/#website` },
        },
      ],
    },
    body,
  });
}

async function renderHome() {
  const allApps = await getAllPublicApps();
  const topApps = [...allApps].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0)).slice(0, 16);
  const categories = [...new Set(allApps.map(a => a.category).filter(Boolean))].sort();
  const title = "OpenLib — Open Source App Library | Free Software Alternatives";
  const desc = "Discover free, open-source alternatives to popular apps. Compare FOSS software, read community reviews, and find the best free alternatives to proprietary software.";
  const keywords = ["open source", "free software", "FOSS", "app library", "software alternatives", "open-source apps", "Linux apps", "free alternatives", "privacy software"];
  const url = `${BASE_URL}/`;

  const body = `
    <article>
      <h1>OpenLib — Open Source App Library</h1>
      <p>Discover free alternatives. Rate what you use. Own your software stack.</p>
      <section>
        <h2>Featured Open Source Applications</h2>
        ${renderAppList(topApps)}
      </section>
      <section>
        <h2>Explore by Category</h2>
        <p>${categories.map(c => `<a href="/category/${slugify(c)}">${esc(c)}</a>`).join(" · ")}</p>
      </section>
      <section>
        <h2>Curated Topics & Alternative Guides</h2>
        <p>${SEO_TOPIC_PAGES.map(t => `<a href="/${t.slug}">${esc(t.h1)}</a>`).join(" · ")}</p>
      </section>
    </article>`;

  return buildPage({
    title,
    description: desc,
    keywords,
    url,
    type: "website",
    jsonLd: collectionJsonLd({
      url,
      name: "OpenLib Open Source App Library",
      description: desc,
      apps: topApps,
    }),
    body,
  });
}

function renderNotFound(urlPath) {
  const url = `${BASE_URL}${urlPath}`;
  return buildPage({
    title: "Page Not Found | OpenLib",
    description: "This OpenLib page could not be found.",
    keywords: ["open source apps", "page not found"],
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
exports.prerender = onRequest({ invoker: "public", region: "us-central1" }, async (req, res) => {
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

  const urlPath = decodeURIComponent(req.path);
  const redirectPath = canonicalRedirectPath(urlPath);
  if (redirectPath) {
    return res.redirect(301, redirectPath);
  }

  if (urlPath === "/robots.txt") {
    res.set("Cache-Control", "public, s-maxage=3600, max-age=600");
    return sendText(req, res, robotsTxt(), { "X-Rendered-By": "openlib-prerender" });
  }
  if (urlPath === "/sitemap.xml") {
    try {
      const xml = await buildSitemapXml();
      res.set("Cache-Control", "public, s-maxage=3600, max-age=600, stale-while-revalidate=86400");
      return sendXml(req, res, xml, { "X-Rendered-By": "openlib-prerender" });
    } catch (e) {
      console.error("Sitemap render error:", e);
      return res.status(503).send("Sitemap temporarily unavailable");
    }
  }

  if (urlPath === "/privacy.txt" || urlPath === "/terms.txt") {
    const kind = urlPath === "/privacy.txt" ? "privacy" : "terms";
    const text = readPolicyText(kind);
    res.set("Cache-Control", "no-cache, max-age=0");
    return sendText(
      req,
      res,
      text || `${kind === "privacy" ? "Privacy Policy" : "Terms and Conditions"} text is currently unavailable.`,
      { "X-Rendered-By": "openlib-prerender" },
      text ? 200 : 404
    );
  }

  // ── Dynamic SVG Badges for READMEs & Websites ──
  if (urlPath.startsWith("/badge/")) {
    const rawId = urlPath.replace("/badge/", "");
    const appId = decodeURIComponent(rawId.replace(/\.svg$/i, ""));
    const metric = req.query.metric || (req.query.style === "verified" ? "verified" : "rank");
    const queryRank = parseInt(req.query.rank, 10);
    try {
      let appData = null;
      const snap = await db.collection("apps").doc(appId).get();
      if (snap.exists) {
        appData = snap.data();
      } else {
        const querySnap = await db.collection("apps").where("name", "==", appId).limit(1).get();
        if (!querySnap.empty) {
          appData = querySnap.docs[0].data();
        }
      }

      let appRank = (queryRank && queryRank > 0) ? queryRank : (appData?.rank || 0);
      if (!appRank && (metric === "rank" || !metric)) {
        try {
          const allApps = await getPrerenderApps(1000);
          const sorted = [...allApps].sort((a, b) => {
            const scoreA = ((a.likes || 0) * 2) - (a.dislikes || 0) + ((a.views || 0) * 0.05);
            const scoreB = ((b.likes || 0) * 2) - (b.dislikes || 0) + ((b.views || 0) * 0.05);
            return scoreB - scoreA;
          });
          const idx = sorted.findIndex(a => a.id === appId || (a.name && a.name.toLowerCase() === appId.toLowerCase()));
          if (idx >= 0) {
            appRank = idx + 1;
          }
        } catch (rankErr) {
          console.warn("Badge dynamic rank calculation fallback:", rankErr);
        }
      }

      const svg = generateBadgeSvg({
        name: appData?.name || appId,
        rank: appRank,
        rating: appData?.avgRating || 0,
        verified: appData ? (appData.addedBy?.type === "openlib-team" || !!appData.source) : false,
        metric
      });

      res.set("Content-Type", "image/svg+xml; charset=utf-8");
      res.set("Cache-Control", "public, s-maxage=86400, max-age=3600, stale-while-revalidate=86400");
      res.set("Access-Control-Allow-Origin", "*");
      res.set("X-Rendered-By", "openlib-badge");
      return res.status(200).send(svg);
    } catch (e) {
      console.error("Badge generation error:", e);
      const fallbackSvg = generateBadgeSvg({ name: appId, metric: "listed" });
      res.set("Content-Type", "image/svg+xml; charset=utf-8");
      return res.status(200).send(fallbackSvg);
    }
  }

  const ua = req.headers["x-forwarded-user-agent"]
    || req.headers["x-client-user-agent"]
    || req.headers["fastly-client-user-agent"]
    || req.headers["x-original-user-agent"]
    || req.headers["user-agent"]
    || "";
  const bot = isBot(ua)
    || isBot(req.headers["user-agent"] || "")
    || isBot(req.headers["x-forwarded-user-agent"] || "")
    || isBot(req.headers["fastly-client-user-agent"] || "")
    || req.query.bot === "1"
    || req.query.prerender === "true";

  // Regular users → serve the SPA directly
  if (!bot) {
    const spa = getSpaHtml();
    if (spa) {
      res.set("Cache-Control", "private, no-store, max-age=0");
      res.set("X-Rendered-By", "openlib-spa");
      return sendHtml(req, res, spa);
    }
    // If spa.html missing, redirect to root (hosting serves index.html)
    return res.redirect(302, "/");
  }

  // Bot traffic → serve pre-rendered HTML
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
    if (PRIVATE_ROUTES.has(urlPath)) {
      res.set("X-Robots-Tag", "noindex, nofollow");
      res.set("Cache-Control", "public, s-maxage=300, max-age=60");
      return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
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
    } else if (urlPath.startsWith("/alternative-to/")) {
      html = await renderCollection("alternative", slugify(urlPath.replace("/alternative-to/", "")));
      if (!html) {
        res.set("Cache-Control", "public, s-maxage=300, max-age=60");
        return sendHtml(req, res, renderNotFound(urlPath), { "X-Rendered-By": "openlib-prerender" }, 404);
      }
    } else if (urlPath.startsWith("/compare/")) {
      const compareSlug = urlPath.replace("/compare/", "");
      html = await renderCompare(compareSlug);
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
    } else if (urlPath === "/roles") {
      html = renderRoles();
    } else if (urlPath === "/team") {
      html = renderTeam();
    } else if (urlPath === "/privacy") {
      html = renderPolicy("privacy");
    } else if (urlPath === "/terms") {
      html = renderPolicy("terms");
    } else if (urlPath === "/" || urlPath === "") {
      html = await renderHome();
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
    res.set("Cache-Control", "private, no-store, max-age=0");
    res.set("X-Rendered-By", "openlib-spa");
    return sendHtml(req, res, spa);
  }
  return res.redirect(302, "/");
});

exports.onSubmissionTrustChange = onDocumentUpdated("submissions/{submissionId}", async event => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();
  if (!before || !after) return;

  const submissionId = event.params.submissionId;
  if (before.status !== "approved" && after.status === "approved" && after.userId) {
    await applyReputationEvent(after.userId, "appApproved", after.reviewedBy || "system", {
      submissionId,
      appName: after.name || "",
      reviewedAt: after.reviewedAt || ""
    }, 1, `submission_${submissionId}_app_approved`);
  }

  if (before.status !== "rejected" && after.status === "rejected" && after.userId && isSpamReason(after.rejectReason)) {
    await applyReputationEvent(after.userId, "rejectedSpamApp", after.reviewedBy || "system", {
      submissionId,
      reason: after.rejectReason || ""
    }, 1, `submission_${submissionId}_rejected_spam`);
  }
});

exports.onReportTrustChange = onDocumentUpdated("reports/{reportId}", async event => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();
  if (!before || !after) return;
  if (before.status === "resolved" || after.status !== "resolved" || !after.userId) return;

  await applyReputationEvent(after.userId, reportReputationEvent(after.reason), after.resolvedBy || "system", {
    reportId: event.params.reportId,
    appId: after.appId || "",
    reason: after.reason || "",
    notes: after.adminNotes || ""
  }, 1, `report_${event.params.reportId}_resolved`);
});

exports.onReviewVoteCreated = onDocumentCreated("review_votes/{voteId}", async event => {
  const vote = event.data?.data();
  if (!vote || vote.type !== "helpful") return;
  const review = await getReviewForVote(vote);
  if (!review || !review.authorUid || review.authorUid === vote.userId) return;

  await applyReputationEvent(review.authorUid, "helpfulReviewUpvote", vote.userId || "system", {
    voteId: event.params.voteId,
    reviewId: vote.reviewId,
    appId: review.appId || ""
  }, 1, event.id || "");
});

exports.onReviewVoteDeleted = onDocumentDeleted("review_votes/{voteId}", async event => {
  const vote = event.data?.data();
  if (!vote || vote.type !== "helpful") return;
  const review = await getReviewForVote(vote);
  if (!review || !review.authorUid || review.authorUid === vote.userId) return;

  await applyReputationEvent(review.authorUid, "helpfulReviewUpvote", vote.userId || "system", {
    voteId: event.params.voteId,
    reviewId: vote.reviewId,
    appId: review.appId || "",
    removed: true
  }, -1, event.id || "");
});

exports.onReviewVoteUpdated = onDocumentUpdated("review_votes/{voteId}", async event => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();
  if (!before || !after || before.type === after.type) return;

  const review = await getReviewForVote(after);
  if (!review || !review.authorUid || review.authorUid === after.userId) return;

  if (before.type !== "helpful" && after.type === "helpful") {
    await applyReputationEvent(review.authorUid, "helpfulReviewUpvote", after.userId || "system", {
      voteId: event.params.voteId,
      reviewId: after.reviewId,
      appId: review.appId || ""
    }, 1, event.id || "");
  }
  if (before.type === "helpful" && after.type !== "helpful") {
    await applyReputationEvent(review.authorUid, "helpfulReviewUpvote", after.userId || "system", {
      voteId: event.params.voteId,
      reviewId: after.reviewId,
      appId: review.appId || "",
      removed: true
    }, -1, event.id || "");
  }
});

exports.onReviewModerationDelete = onDocumentDeleted("app_reviews/{reviewId}", async event => {
  const review = event.data?.data();
  if (!review || review.moderationRemoved !== true || !review.authorUid) return;

  await applyReputationEvent(review.authorUid, "reviewRemoved", review.moderationRemovedBy || "system", {
    reviewId: event.params.reviewId,
    appId: review.appId || "",
    reason: review.moderationReason || ""
  }, 1, `review_${event.params.reviewId}_moderation_removed`);
});
