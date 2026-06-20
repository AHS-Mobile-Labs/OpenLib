(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const ICON_BASE = "/assets/tabler-icons-3.44.0/icons/outline/";
  function iconImg(name) {
    return '<img class="ui-icon theme-mode-icon" src="' + ICON_BASE + name + '.svg" alt="" aria-hidden="true">';
  }
  function updateThemeIcon(theme) {
    const icon = $("#docs-theme-icon");
    if (!icon) return;
    const nextMode = theme === "dark" ? "light" : "dark";
    const label = nextMode === "light" ? "Switch to light theme" : "Switch to dark theme";
    icon.innerHTML = iconImg(theme === "dark" ? "sun" : "moon");
    const toggle = $("#docs-theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
    }
  }
  function initTheme() {
    const saved = localStorage.getItem("openlib_theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeIcon(saved);
  }
  $("#docs-theme-toggle")?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("openlib_theme", next);
    updateThemeIcon(next);
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
        .replace(/("(?:\\.|[^"\\])*")(?=\s*:)/g, '<span class="tok-key">$1</span>')
        .replace(/("(?:\\.|[^"\\])*")/g, '<span class="tok-string">$1</span>')
        .replace(/\b(true|false|null|const|let|var|function|return|type|async|await|import|from|export)\b/g, '<span class="tok-keyword">$1</span>')
        .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-number">$1</span>');
    } else if (/^(bash|sh|shell)$/.test(lang)) {
      html = html
        .replace(/(^|\n)(\s*#.*)/g, '$1<span class="tok-comment">$2</span>')
        .replace(/\b(npm|node|git|firebase|curl|cd|cp|rm|mkdir)\b/g, '<span class="tok-keyword">$1</span>');
    } else if (/^(md|markdown|yaml|yml)$/.test(lang)) {
      html = html
        .replace(/(^|\n)(#{1,6}\s.+)/g, '$1<span class="tok-keyword">$2</span>')
        .replace(/(^|\n)(---|[A-Za-z0-9_-]+:)/g, '$1<span class="tok-key">$2</span>');
    }
    code.innerHTML = html;
  }
  $$("pre code").forEach(highlight);

  const search = $("#docs-search");
  const results = $("#docs-search-results");
  if (search && results) {
    fetch("/docs/search-index.json?v=1781961016", { cache: "no-store", credentials: "same-origin" }).then(r => r.json()).then(index => {
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
})();