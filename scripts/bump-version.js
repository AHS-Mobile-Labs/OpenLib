#!/usr/bin/env node
// ── bump-version.js ──────────────────────────────────────────────────────────
// Predeploy hook: stamps the current Unix timestamp into version-check.js
// so `DEPLOY_TIMESTAMP` reflects the exact deploy time.
//
// Runs automatically via firebase.json "predeploy" — no manual invocation needed.
// No external dependencies required.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const now = new Date();
const ts = Math.floor(now.getTime() / 1000);
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf-8"));
const appVersion = pkg.version || "0.0.0";

function stampFile(filePath, replacements) {
  let src = fs.readFileSync(filePath, "utf-8");
  let changed = false;

  for (const [pattern, replacement] of replacements) {
    pattern.lastIndex = 0;
    if (!pattern.test(src)) {
      console.error(`Could not find pattern ${pattern} in ${path.basename(filePath)}`);
      process.exit(1);
    }
    pattern.lastIndex = 0;
    src = src.replace(pattern, replacement);
    changed = true;
  }

  if (changed) fs.writeFileSync(filePath, src, "utf-8");
}

const vcPath = path.join(PUBLIC_DIR, "version-check.js");
const re = /const DEPLOY_TIMESTAMP = \d+;/;
stampFile(vcPath, [
  [re, `const DEPLOY_TIMESTAMP = ${ts};`],
  [/from ['"]\.\/firebase-config\.js(?:\?v=\d+)?['"]/g, `from './firebase-config.js?v=${ts}'`]
]);

stampFile(path.join(PUBLIC_DIR, "firebase-db.js"), [
  [/from ['"]\.\/firebase-config\.js(?:\?v=\d+)?['"]/g, `from './firebase-config.js?v=${ts}'`]
]);

stampFile(path.join(PUBLIC_DIR, "script.js"), [
  [/from ['"]\.\/firebase-config\.js(?:\?v=\d+)?['"]/g, `from './firebase-config.js?v=${ts}'`],
  [/from ['"]\.\/version-check\.js(?:\?v=\d+)?['"]/g, `from './version-check.js?v=${ts}'`],
  [/from ['"]\.\/firebase-db\.js(?:\?v=\d+)?['"]/g, `from './firebase-db.js?v=${ts}'`]
]);

stampFile(path.join(PUBLIC_DIR, "service-worker.js"), [
  [/const CACHE_VERSION = "\d+";/, `const CACHE_VERSION = "${ts}";`]
]);

const htmlReplacements = [
  [/href="script\.js(?:\?v=\d+)?"/g, `href="script.js?v=${ts}"`],
  [/src="script\.js(?:\?v=\d+)?"/g, `src="script.js?v=${ts}"`],
  [/href="styles\.css(?:\?v=\d+)?"/g, `href="styles.css?v=${ts}"`]
];
stampFile(path.join(PUBLIC_DIR, "index.html"), htmlReplacements);

const spaPath = path.join(ROOT, "functions", "spa.html");
if (fs.existsSync(spaPath)) stampFile(spaPath, htmlReplacements);

fs.writeFileSync(path.join(PUBLIC_DIR, "version.json"), JSON.stringify({
  appVersion,
  deployTimestamp: ts,
  updatedAt: now.toISOString()
}, null, 2) + "\n", "utf-8");

console.log(`✔ version-check.js → DEPLOY_TIMESTAMP = ${ts}`);
console.log(`✔ local module/style URLs → ?v=${ts}`);
console.log(`✔ service-worker.js → CACHE_VERSION = ${ts}`);
console.log(`✔ version.json → appVersion ${appVersion}, deploy manifest updated`);
