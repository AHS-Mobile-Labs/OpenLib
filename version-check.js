// ── Version Update Detection ─────────────────────────────────────────────────
// Fully automatic: a predeploy hook stamps DEPLOY_TIMESTAMP on every
// `firebase deploy`. When an admin visits, the timestamp is auto-pushed to
// Firestore. Other users with older builds see a dismissible update banner.

import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { db } from './firebase-config.js?v=1780946951';

// ── Auto-stamped by predeploy hook — DO NOT EDIT MANUALLY ────────────────────
const DEPLOY_TIMESTAMP = 1780946951;

const LS_KEY = "openlib_deploy_ts";
const LS_LAST_CHECK_KEY = "openlib_deploy_last_check";
const SS_DISMISS_KEY = "openlib_update_dismissed";
const REFRESH_PARAM = "_ol_refresh";
const CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;

/**
 * Run the version check after app initialises.
 * Non-blocking — call with `checkForUpdates()` (no await needed on critical path).
 */
export async function checkForUpdates() {
  try {
    if (sessionStorage.getItem(SS_DISMISS_KEY)) return;
    if (!DEPLOY_TIMESTAMP) return; // local dev — not stamped
    const lastCheck = Number(localStorage.getItem(LS_LAST_CHECK_KEY) || "0");
    if (lastCheck && Date.now() - lastCheck < CHECK_INTERVAL_MS) return;
    localStorage.setItem(LS_LAST_CHECK_KEY, String(Date.now()));

    const snap = await getDoc(doc(db, "config", "app_version"));
    const remoteTs = snap.exists() ? (snap.data().deployTimestamp || 0) : 0;

    if (DEPLOY_TIMESTAMP >= remoteTs) {
      // This build is current or newer
      if (DEPLOY_TIMESTAMP > remoteTs) {
        // Newer build — auto-push to Firestore (only succeeds for admins)
        autoSyncVersion();
      }
      localStorage.setItem(LS_KEY, String(DEPLOY_TIMESTAMP));
      clearRefreshParam();
      return;
    }

    // This build is outdated
    showUpdateBanner(remoteTs);
  } catch (_) {
    // Version check must never break the app
  }
}

/**
 * Auto-push current deploy timestamp to Firestore.
 * Only succeeds for admin users (Firestore rules reject others silently).
 */
async function autoSyncVersion() {
  try {
    await setDoc(doc(db, "config", "app_version"), {
      deployTimestamp: DEPLOY_TIMESTAMP,
      updatedAt: new Date().toISOString()
    });
  } catch (_) {
    // Not admin — silently ignore, Firestore rules will reject
  }
}

function showUpdateBanner(remoteTs) {
  // Prevent duplicates
  if (document.getElementById("version-update-banner")) return;

  const banner = document.createElement("div");
  banner.id = "version-update-banner";
  banner.setAttribute("role", "alert");
  banner.innerHTML =
    `<div class="version-banner-inner">` +
      `<span class="version-banner-text">A new version of OpenLib is available</span>` +
      `<div class="version-banner-actions">` +
        `<button class="version-btn-update" id="version-btn-update">Update</button>` +
        `<button class="version-btn-dismiss" id="version-btn-dismiss" aria-label="Dismiss">✕</button>` +
      `</div>` +
    `</div>`;

  document.body.appendChild(banner);

  // Trigger entrance animation on next frame
  requestAnimationFrame(() => banner.classList.add("visible"));

  document.getElementById("version-btn-update").addEventListener("click", () => applyUpdate(remoteTs));
  document.getElementById("version-btn-dismiss").addEventListener("click", () => dismissBanner(banner));
}

async function applyUpdate(remoteTs) {
  const btn = document.getElementById("version-btn-update");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Updating…";
  }

  // Force the next load to re-check immediately. The current build should not
  // mark the newer remote deploy as loaded until the fresh bundle actually runs.
  try {
    localStorage.removeItem(LS_LAST_CHECK_KEY);
    sessionStorage.removeItem(SS_DISMISS_KEY);
  } catch (_) {
    // Storage can fail in private/restricted modes; the reload still matters.
  }

  // Clear service worker caches if present
  if ("caches" in window) {
    try {
      const names = await caches.keys();
      await Promise.all(names.map(n => caches.delete(n)));
    } catch (_) { /* best effort */ }
  }

  // Unregister service workers if present
  if ("serviceWorker" in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map(r => r.unregister()));
    } catch (_) { /* best effort */ }
  }

  // Force a fresh document request. index.html versions JS/CSS URLs with the
  // deploy timestamp, so a fresh document also loads fresh modules and styles.
  const url = new URL(window.location.href);
  url.searchParams.set(REFRESH_PARAM, String(remoteTs || Date.now()));
  window.location.replace(url.toString());
}

function dismissBanner(banner) {
  sessionStorage.setItem(SS_DISMISS_KEY, "1");
  banner.classList.remove("visible");
  banner.addEventListener("transitionend", () => banner.remove(), { once: true });
  // Fallback removal if transition doesn't fire
  setTimeout(() => { if (banner.parentNode) banner.remove(); }, 500);
}

function clearRefreshParam() {
  try {
    const url = new URL(window.location.href);
    if (!url.searchParams.has(REFRESH_PARAM)) return;
    url.searchParams.delete(REFRESH_PARAM);
    const next = url.pathname + (url.search ? url.search : "") + url.hash;
    window.history.replaceState(window.history.state, "", next);
  } catch (_) {
    // Cosmetic cleanup only.
  }
}
