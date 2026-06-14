#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "docs", "content");
const DOCS_ASSETS_DIR = path.join(ROOT, "docs", "assets");
const PUBLIC_DOCS_DIR = path.join(ROOT, "public", "docs");
const BASE_URL = "https://www.openlib.online";
const OG_IMAGE = `${BASE_URL}/og-image.png`;
const VERSION_FILE = path.join(ROOT, "public", "version.json");

function assetVersion() {
  try {
    const version = JSON.parse(fs.readFileSync(VERSION_FILE, "utf-8"));
    return encodeURIComponent(String(version.deployTimestamp || version.appVersion || "1"));
  } catch {
    return "1";
  }
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function parseFrontMatter(raw) {
  if (!raw.startsWith("---\n")) return [{}, raw];
  const end = raw.indexOf("\n---", 4);
  if (end === -1) return [{}, raw];
  const block = raw.slice(4, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, "");
  const meta = {};
  let currentArray = null;

  for (const line of block.split("\n")) {
    if (/^\s*-\s+/.test(line) && currentArray) {
      meta[currentArray].push(line.replace(/^\s*-\s+/, "").trim().replace(/^"|"$/g, ""));
      continue;
    }
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if (!value) {
      meta[key] = [];
      currentArray = key;
      continue;
    }
    currentArray = null;
    if (value.startsWith("[") && value.endsWith("]")) {
      meta[key] = value.slice(1, -1).split(",").map(item => item.trim().replace(/^"|"$/g, "")).filter(Boolean);
    } else {
      meta[key] = value.replace(/^"|"$/g, "");
    }
  }

  return [meta, body];
}

function inlineMarkdown(text) {
  const tokens = [];
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@CODE${tokens.length}@@`;
    tokens.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, `<img src="$2" alt="$1" loading="lazy">`);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2">$1</a>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  tokens.forEach((value, index) => {
    out = out.replace(`@@CODE${index}@@`, value);
  });
  return out;
}

function headingId(text, used) {
  const base = slugify(text) || "section";
  let id = base;
  let n = 2;
  while (used.has(id)) id = `${base}-${n++}`;
  used.add(id);
  return id;
}

function renderTable(rows) {
  if (rows.length < 2) return "";
  const headers = rows[0].split("|").slice(1, -1).map(cell => cell.trim());
  const bodyRows = rows.slice(2).map(row => row.split("|").slice(1, -1).map(cell => cell.trim()));
  return `<div class="docs-table-wrap"><table><thead><tr>${headers.map(h => `<th>${inlineMarkdown(h)}</th>`).join("")}</tr></thead><tbody>${bodyRows.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function calloutClass(label) {
  return {
    NOTE: "note",
    TIP: "tip",
    IMPORTANT: "important",
    WARNING: "warning",
    CAUTION: "warning",
  }[String(label || "").toUpperCase()] || "note";
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const usedHeadings = new Set();
  const toc = [];
  let html = "";
  let paragraph = [];
  let listType = null;
  let code = null;
  let quote = [];
  let table = [];
  let skippedPageTitle = false;

  function closeParagraph() {
    if (!paragraph.length) return;
    html += `<p>${inlineMarkdown(paragraph.join(" "))}</p>`;
    paragraph = [];
  }

  function closeList() {
    if (!listType) return;
    html += `</${listType}>`;
    listType = null;
  }

  function closeQuote() {
    if (!quote.length) return;
    const first = quote[0].match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/i);
    if (first) {
      const label = first[1].toUpperCase();
      html += `<aside class="docs-callout ${calloutClass(label)}"><strong>${escapeHtml(label)}</strong>${quote.slice(1).map(line => `<p>${inlineMarkdown(line)}</p>`).join("")}</aside>`;
    } else {
      html += `<blockquote>${quote.map(line => `<p>${inlineMarkdown(line)}</p>`).join("")}</blockquote>`;
    }
    quote = [];
  }

  function closeTable() {
    if (!table.length) return;
    html += renderTable(table);
    table = [];
  }

  function closeBlocks() {
    closeParagraph();
    closeList();
    closeQuote();
    closeTable();
  }

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");

    if (code) {
      if (line.startsWith("```")) {
        html += `<div class="docs-code"><button type="button" class="docs-copy">Copy</button><pre><code class="language-${escapeAttr(code.lang)}">${escapeHtml(code.lines.join("\n"))}</code></pre></div>`;
        code = null;
      } else {
        code.lines.push(rawLine);
      }
      continue;
    }

    const fence = line.match(/^```([A-Za-z0-9_-]*)/);
    if (fence) {
      closeBlocks();
      code = { lang: fence[1] || "text", lines: [] };
      continue;
    }

    if (!line.trim()) {
      closeBlocks();
      continue;
    }

    if (/^<\/?(iframe|video|source|img|figure|figcaption|details|summary|div|span|br|hr)\b/i.test(line)) {
      closeBlocks();
      html += line;
      continue;
    }

    if (/^\|.+\|$/.test(line)) {
      closeParagraph();
      closeList();
      closeQuote();
      table.push(line);
      continue;
    } else {
      closeTable();
    }

    if (line.startsWith(">")) {
      closeParagraph();
      closeList();
      quote.push(line.replace(/^>\s?/, ""));
      continue;
    } else {
      closeQuote();
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeBlocks();
      const level = heading[1].length;
      const text = heading[2].trim();
      if (level === 1 && !skippedPageTitle) {
        skippedPageTitle = true;
        continue;
      }
      const id = headingId(text, usedHeadings);
      if (level > 1) toc.push({ level, text, id });
      html += `<h${level} id="${id}">${inlineMarkdown(text)} <a class="docs-anchor" href="#${id}" aria-label="Link to ${escapeAttr(text)}">#</a></h${level}>`;
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      closeParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType && listType !== nextType) closeList();
      if (!listType) {
        listType = nextType;
        html += `<${listType}>`;
      }
      html += `<li>${inlineMarkdown((unordered || ordered)[1])}</li>`;
      continue;
    }

    paragraph.push(line.trim());
  }

  closeBlocks();
  return { html, toc };
}

function readingTime(markdown) {
  const words = markdown.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function plainText(markdown) {
  return markdown
    .replace(/---[\s\S]*?---/, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_`|:-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function statusClass(status) {
  return slugify(status || "published") || "published";
}

function pageShell(page, pages, body, toc, prev, next) {
  const url = `${BASE_URL}${page.path}`;
  const title = `${page.title} | OpenLib Docs`;
  const nav = pages.map(item => `<a href="${item.path}" class="${item.slug === page.slug ? "active" : ""}">${escapeHtml(item.title)}</a>`).join("");
  const tocHtml = toc.length
    ? toc.map(item => `<a class="level-${item.level}" href="#${item.id}">${escapeHtml(item.text)}</a>`).join("")
    : `<span>No sections</span>`;
  const contributors = (page.contributors || []).map(name => `<li>${escapeHtml(name)}</li>`).join("");
  const tags = (page.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        "headline": page.title,
        "description": page.description,
        "url": url,
        "dateModified": page.lastUpdated,
        "version": page.version,
        "author": { "@type": "Organization", "name": page.maintainedBy || "OpenLib Team" },
        "publisher": { "@type": "Organization", "name": "OpenLib", "url": BASE_URL }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "OpenLib", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Docs", "item": `${BASE_URL}/docs/` },
          { "@type": "ListItem", "position": 3, "name": page.title, "item": url }
        ]
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeAttr(page.description)}">
  <meta name="robots" content="${page.status === "Draft" ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large"}">
  <meta name="theme-color" content="#0c0c0f">
  <title>${escapeHtml(title)}</title>
  <link rel="canonical" href="${url}">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OpenLib">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeAttr(title)}">
  <meta property="og:description" content="${escapeAttr(page.description)}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(title)}">
  <meta name="twitter:description" content="${escapeAttr(page.description)}">
  <meta name="twitter:url" content="${url}">
  <meta name="twitter:image" content="${OG_IMAGE}">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <link rel="stylesheet" href="/styles.css?v=${assetVersion()}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body class="docs-body">
  <header>
    <div class="header-inner">
      <a class="logo-group" href="/"><div class="logo-icon">OL</div><span class="logo-title">Open<span>Lib</span></span></a>
      <div class="header-actions docs-header-actions">
        <a href="/" class="nav-link">Library</a>
        <a href="/rankings" class="nav-link">Rankings</a>
        <button class="theme-toggle" id="docs-theme-toggle" aria-label="Switch theme" title="Switch theme"><span id="docs-theme-icon">☀</span></button>
      </div>
    </div>
  </header>

  <main class="docs-shell">
    <aside class="docs-sidebar">
      <div class="docs-sidebar-head">
        <strong>Docs</strong>
      </div>
      <label class="docs-search-label" for="docs-search">Search documentation</label>
      <input type="search" id="docs-search" class="docs-search" placeholder="Search docs..." autocomplete="off">
      <div class="docs-search-results" id="docs-search-results" hidden></div>
      <nav aria-label="Documentation navigation">${nav}</nav>
    </aside>

    <article class="docs-article">
      <nav class="docs-breadcrumb" aria-label="Breadcrumb">
        <a href="/">OpenLib</a><span>/</span><a href="/docs/">Docs</a><span>/</span><span>${escapeHtml(page.title)}</span>
      </nav>
      <header class="docs-page-header">
        <div>
          <span class="docs-status ${statusClass(page.status)}">${escapeHtml(page.status || "Published")}</span>
          <h1>${escapeHtml(page.title)}</h1>
          <p>${escapeHtml(page.description)}</p>
          <div class="docs-tags">${tags}</div>
        </div>
        <dl class="docs-meta">
          <div><dt>Maintained By</dt><dd>${escapeHtml(page.maintainedBy || "OpenLib Team")}</dd></div>
          <div><dt>Last Updated</dt><dd>${escapeHtml(formatDate(page.lastUpdated))}</dd></div>
          <div><dt>Version</dt><dd>${escapeHtml(page.version || "1.0")}</dd></div>
          <div><dt>Reading Time</dt><dd>${page.readingTime} min</dd></div>
        </dl>
      </header>
      <div class="docs-content">${body}</div>
      <section class="docs-contributors">
        <h2>Contributors</h2>
        <ul>${contributors || "<li>OpenLib Team</li>"}</ul>
      </section>
      <nav class="docs-prev-next" aria-label="Previous and next pages">
        ${prev ? `<a href="${prev.path}"><span>Previous</span>${escapeHtml(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a href="${next.path}"><span>Next</span>${escapeHtml(next.title)}</a>` : "<span></span>"}
      </nav>
    </article>

    <aside class="docs-toc">
      <strong>On This Page</strong>
      <nav>${tocHtml}</nav>
    </aside>
  </main>

  <footer>
    <div class="footer-inner">
      <div class="footer-left"><strong>OpenLib</strong> docs are maintained as Markdown and generated into static pages.</div>
      <nav class="footer-right" aria-label="Footer links">
        <a href="/" class="footer-link">Library</a>
        <a href="/docs/" class="footer-link">Docs</a>
        <a href="/docs/changelog" class="footer-link">Changelog</a>
        <a href="https://github.com/AHS-Mobile-Labs/OpenLib" target="_blank" rel="noopener" class="footer-link">GitHub</a>
      </nav>
    </div>
  </footer>
  <script type="module">
    import { startUpdateChecks } from "/version-check.js?v=${assetVersion()}";
    startUpdateChecks();
  </script>
  <script src="/docs/docs-runtime.js?v=${assetVersion()}" defer></script>
</body>
</html>`;
}

function readPages() {
  return fs.readdirSync(CONTENT_DIR)
    .filter(file => file.endsWith(".md"))
    .map(file => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const [meta, markdown] = parseFrontMatter(raw);
      const slug = meta.slug || slugify(meta.title || file.replace(/\.md$/, ""));
      const rendered = markdownToHtml(markdown);
      return {
        ...meta,
        file,
        slug,
        path: slug === "docs" ? "/docs/" : `/docs/${slug}`,
        markdown,
        html: rendered.html,
        toc: rendered.toc,
        readingTime: readingTime(markdown),
        searchText: plainText(markdown),
        order: Number(meta.order || 999),
        title: meta.title || file.replace(/\.md$/, ""),
        description: meta.description || "",
        maintainedBy: meta.maintainedBy || "OpenLib Team",
        contributors: Array.isArray(meta.contributors) ? meta.contributors : [],
        tags: Array.isArray(meta.tags) ? meta.tags : [],
        status: meta.status || "Published",
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

function copyDocsAssets() {
  if (!fs.existsSync(DOCS_ASSETS_DIR)) return;
  const targetRoot = path.join(PUBLIC_DOCS_DIR, "assets");
  const stack = [DOCS_ASSETS_DIR];

  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const source = path.join(dir, entry.name);
      const rel = path.relative(DOCS_ASSETS_DIR, source);
      const target = path.join(targetRoot, rel);
      if (entry.isDirectory()) {
        stack.push(source);
      } else {
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(source, target);
      }
    }
  }
}

function writeRuntime() {
  const runtime = `(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  function initTheme() {
    const saved = localStorage.getItem("openlib_theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    const icon = $("#docs-theme-icon");
    if (icon) icon.textContent = saved === "dark" ? "☀" : "☾";
  }
  $("#docs-theme-toggle")?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("openlib_theme", next);
    const icon = $("#docs-theme-icon");
    if (icon) icon.textContent = next === "dark" ? "☀" : "☾";
  });
  initTheme();

  $$(".docs-copy").forEach(button => {
    button.addEventListener("click", async () => {
      const code = button.parentElement?.querySelector("code")?.textContent || "";
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = "Copied";
        setTimeout(() => { button.textContent = "Copy"; }, 1200);
      } catch {
        button.textContent = "Select";
      }
    });
  });

  function highlight(code) {
    const lang = [...code.classList].find(cls => cls.startsWith("language-"))?.replace("language-", "") || "";
    let html = code.textContent
      .replace(/[&<>]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[ch]));
    if (/^(js|ts|javascript|typescript|json)$/.test(lang)) {
      html = html
        .replace(/("(?:\\\\.|[^"\\\\])*")(?=\\s*:)/g, '<span class="tok-key">$1</span>')
        .replace(/("(?:\\\\.|[^"\\\\])*")/g, '<span class="tok-string">$1</span>')
        .replace(/\\b(true|false|null|const|let|var|function|return|type|async|await|import|from|export)\\b/g, '<span class="tok-keyword">$1</span>')
        .replace(/\\b(\\d+(?:\\.\\d+)?)\\b/g, '<span class="tok-number">$1</span>');
    } else if (/^(bash|sh|shell)$/.test(lang)) {
      html = html
        .replace(/(^|\\n)(\\s*#.*)/g, '$1<span class="tok-comment">$2</span>')
        .replace(/\\b(npm|node|git|firebase|curl|cd|cp|rm|mkdir)\\b/g, '<span class="tok-keyword">$1</span>');
    } else if (/^(md|markdown|yaml|yml)$/.test(lang)) {
      html = html
        .replace(/(^|\\n)(#{1,6}\\s.+)/g, '$1<span class="tok-keyword">$2</span>')
        .replace(/(^|\\n)(---|[A-Za-z0-9_-]+:)/g, '$1<span class="tok-key">$2</span>');
    }
    code.innerHTML = html;
  }
  $$("pre code").forEach(highlight);

  const search = $("#docs-search");
  const results = $("#docs-search-results");
  if (search && results) {
    fetch("/docs/search-index.json?v=${assetVersion()}", { cache: "no-store", credentials: "same-origin" }).then(r => r.json()).then(index => {
      search.addEventListener("input", () => {
        const q = search.value.trim().toLowerCase();
        if (!q) {
          results.hidden = true;
          results.innerHTML = "";
          return;
        }
        const matches = index.filter(item => [item.title, item.description, item.text, ...(item.tags || [])].join(" ").toLowerCase().includes(q)).slice(0, 8);
        results.innerHTML = matches.length
          ? matches.map(item => '<a href="' + item.path + '"><strong>' + item.title + '</strong><span>' + item.description + '</span></a>').join("")
          : '<p>No docs found.</p>';
        results.hidden = false;
      });
    }).catch(() => {});
  }
})();`;
  fs.writeFileSync(path.join(PUBLIC_DOCS_DIR, "docs-runtime.js"), runtime, "utf-8");
}

function main() {
  fs.rmSync(PUBLIC_DOCS_DIR, { recursive: true, force: true });
  fs.mkdirSync(PUBLIC_DOCS_DIR, { recursive: true });
  copyDocsAssets();
  const pages = readPages();
  pages.forEach((page, index) => {
    const prev = pages[index - 1];
    const next = pages[index + 1];
    const html = pageShell(page, pages, page.html, page.toc, prev, next);
    const file = page.slug === "docs" ? "index.html" : `${page.slug}.html`;
    fs.writeFileSync(path.join(PUBLIC_DOCS_DIR, file), html, "utf-8");
    if (page.slug !== "docs") {
      const pageDir = path.join(PUBLIC_DOCS_DIR, page.slug);
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(path.join(pageDir, "index.html"), html, "utf-8");
    }
  });

  const landingSource = pages.find(page => page.slug === "getting-started") || pages[0];
  fs.writeFileSync(path.join(PUBLIC_DOCS_DIR, "index.html"), pageShell(
    { ...landingSource, title: "OpenLib Documentation", path: "/docs/" },
    pages,
    landingSource.html,
    landingSource.toc,
    null,
    pages[1] || null
  ), "utf-8");

  fs.writeFileSync(path.join(PUBLIC_DOCS_DIR, "manifest.json"), JSON.stringify(pages.map(({ markdown, html, searchText, ...page }) => page), null, 2), "utf-8");
  fs.writeFileSync(path.join(PUBLIC_DOCS_DIR, "search-index.json"), JSON.stringify(pages.map(page => ({
    title: page.title,
    description: page.description,
    path: page.path,
    tags: page.tags,
    text: page.searchText
  })), null, 2), "utf-8");
  writeRuntime();
  console.log(`docs -> ${pages.length} pages`);
}

main();
