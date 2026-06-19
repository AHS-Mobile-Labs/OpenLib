// ── Version Update Detection ─────────────────────────────────────────────────
// Fully automatic: a predeploy hook stamps DEPLOY_TIMESTAMP on every
// `firebase deploy`. Clients compare this build against static deploy metadata,
// while admins also sync Firestore for older deployed clients.

import { doc, getDoc, getDocFromServer, setDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { db } from './firebase-config.js?v=1781876807';

// ── Auto-stamped by predeploy hook — DO NOT EDIT MANUALLY ────────────────────
const DEPLOY_TIMESTAMP = 1781876807;

const LS_KEY = "openlib_deploy_ts";
const LS_LAST_CHECK_KEY = "openlib_deploy_last_check";
const LS_SYNCED_KEY = "openlib_deploy_synced_ts";
const LS_SYNC_ATTEMPT_KEY = "openlib_deploy_sync_attempt";
const LS_UPDATE_APPLIED_KEY = "openlib_update_applied_ts";
const SS_DISMISS_KEY = "openlib_update_dismissed";
const REFRESH_PARAM = "_ol_refresh";
const VERSION_MANIFEST = "/version.json";
const VERSION_SCRIPT = "/version-check.js";
const CHECK_INTERVAL_MS = 5 * 60 * 1000;
const SYNC_RETRY_MS = 2 * 60 * 1000;
const UPDATE_CHANNEL_NAME = "openlib_update_channel";

let updateChecksStarted = false;
let checkInFlight = false;
let syncInFlight = false;
let applyingUpdate = false;
let updateChannel = null;

/**
 * Start initial, periodic, and resume-triggered update checks.
 */
export function startUpdateChecks() {
  if (updateChecksStarted) return;
  updateChecksStarted = true;

  installCrossPageUpdateListener();
  queueUpdateCheck({ force: hasRefreshParam() });
  setInterval(() => checkForUpdates(), CHECK_INTERVAL_MS);

  window.addEventListener("focus", () => checkForUpdates());
  window.addEventListener("online", () => checkForUpdates({ force: true }));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) checkForUpdates();
  });
}

/**
 * Run the version check after app initialises.
 * Non-blocking — call with `checkForUpdates()` (no await needed on critical path).
 */
export async function checkForUpdates({ force = false } = {}) {
  if (checkInFlight) return;
  checkInFlight = true;
  try {
    if (!DEPLOY_TIMESTAMP) return; // local dev — not stamped

    const knownTs = readTimestamp(getStored(localStorage, LS_KEY));
    if (knownTs > DEPLOY_TIMESTAMP && !isDismissedFor(knownTs)) {
      showUpdateBanner(knownTs);
    }

    if (!force && !shouldCheckNow()) return;
    setStored(localStorage, LS_LAST_CHECK_KEY, String(Date.now()));

    const latestTs = Math.max(await fetchLatestDeployTimestamp(), knownTs);
    if (latestTs) {
      setStored(localStorage, LS_KEY, String(Math.max(latestTs, DEPLOY_TIMESTAMP)));
    }

    if (DEPLOY_TIMESTAMP >= latestTs) {
      // This build is current or newer
      setStored(localStorage, LS_KEY, String(DEPLOY_TIMESTAMP));
      clearRefreshParam();
      return;
    }

    // This build is outdated
    if (!isDismissedFor(latestTs)) showUpdateBanner(latestTs);
  } catch (_) {
    // Version check must never break the app
  } finally {
    checkInFlight = false;
  }
}

/**
 * Sync the current deploy timestamp to Firestore for older clients that still
 * use config/app_version as their update source. Call after auth has resolved.
 */
export async function syncCurrentVersion({ force = false } = {}) {
  if (syncInFlight || !DEPLOY_TIMESTAMP) return false;
  if (readTimestamp(getStored(localStorage, LS_SYNCED_KEY)) === DEPLOY_TIMESTAMP) return true;

  const attempt = readSyncAttempt();
  const tooSoon = attempt.deployTimestamp === DEPLOY_TIMESTAMP && Date.now() - attempt.at < SYNC_RETRY_MS;
  if (!force && tooSoon) return false;

  syncInFlight = true;
  setStored(localStorage, LS_SYNC_ATTEMPT_KEY, JSON.stringify({
    deployTimestamp: DEPLOY_TIMESTAMP,
    at: Date.now()
  }));

  try {
    await setDoc(doc(db, "config", "app_version"), {
      deployTimestamp: DEPLOY_TIMESTAMP,
      updatedAt: new Date().toISOString()
    });
    setStored(localStorage, LS_SYNCED_KEY, String(DEPLOY_TIMESTAMP));
    return true;
  } catch (_) {
    // Not admin or auth not ready — silently ignore, Firestore rules will reject
    return false;
  } finally {
    syncInFlight = false;
  }
}

async function fetchLatestDeployTimestamp() {
  const [manifestTs, scriptTs] = await Promise.all([
    fetchManifestDeployTimestamp(),
    fetchStampedScriptDeployTimestamp()
  ]);
  if (manifestTs || scriptTs) return Math.max(manifestTs, scriptTs);
  return fetchFirestoreDeployTimestamp();
}

async function fetchManifestDeployTimestamp() {
  try {
    const url = new URL(VERSION_MANIFEST, window.location.href);
    url.searchParams.set("_", String(Date.now()));
    const res = await fetch(url.toString(), {
      cache: "no-store",
      credentials: "same-origin"
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return readTimestamp(data.deployTimestamp);
  } catch (_) {
    return 0;
  }
}

async function fetchStampedScriptDeployTimestamp() {
  try {
    const text = await fetchFreshText(VERSION_SCRIPT);
    const match = text.match(/const\s+DEPLOY_TIMESTAMP\s*=\s*(\d+)\s*;/);
    return match ? readTimestamp(match[1]) : 0;
  } catch (_) {
    return 0;
  }
}

async function fetchFirestoreDeployTimestamp() {
  try {
    const ref = doc(db, "config", "app_version");
    let snap;
    try {
      snap = await getDocFromServer(ref);
    } catch (_) {
      snap = await getDoc(ref);
    }
    return snap.exists() ? readTimestamp(snap.data().deployTimestamp) : 0;
  } catch (_) {
    return 0;
  }
}

function showUpdateBanner(remoteTs) {
  // Prevent duplicates
  const existing = document.getElementById("version-update-banner");
  if (existing) {
    existing.dataset.remoteTs = String(Math.max(readTimestamp(existing.dataset.remoteTs), remoteTs));
    return;
  }

  const banner = document.createElement("div");
  banner.id = "version-update-banner";
  banner.dataset.remoteTs = String(remoteTs || 0);
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
  document.getElementById("version-btn-dismiss").addEventListener("click", () => dismissBanner(banner, remoteTs));
}

async function applyUpdate(remoteTs, { notify = true } = {}) {
  if (applyingUpdate) return;
  applyingUpdate = true;

  const btn = document.getElementById("version-btn-update");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Updating…";
  }

  // Force the next load to re-check immediately and remember the newest deploy
  // we have seen, so a cached old bundle can still show the banner right away.
  try {
    localStorage.removeItem(LS_LAST_CHECK_KEY);
    localStorage.setItem(LS_KEY, String(Math.max(remoteTs || 0, DEPLOY_TIMESTAMP)));
    localStorage.setItem(LS_UPDATE_APPLIED_KEY, JSON.stringify({
      deployTimestamp: Math.max(remoteTs || 0, DEPLOY_TIMESTAMP),
      at: Date.now()
    }));
    sessionStorage.removeItem(SS_DISMISS_KEY);
  } catch (_) {
    // Storage can fail in private/restricted modes; the reload still matters.
  }

  if (notify) notifyOtherPages(remoteTs);

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

function installCrossPageUpdateListener() {
  window.addEventListener("storage", event => {
    if (event.key !== LS_UPDATE_APPLIED_KEY || !event.newValue) return;
    const remoteTs = parseUpdatePayload(event.newValue);
    if (remoteTs > DEPLOY_TIMESTAMP) applyUpdate(remoteTs, { notify: false });
  });

  if ("BroadcastChannel" in window) {
    try {
      updateChannel = new BroadcastChannel(UPDATE_CHANNEL_NAME);
      updateChannel.addEventListener("message", event => {
        if (event.data?.type !== "openlib-update-applied") return;
        const remoteTs = readTimestamp(event.data.deployTimestamp);
        if (remoteTs > DEPLOY_TIMESTAMP) applyUpdate(remoteTs, { notify: false });
      });
    } catch (_) {
      updateChannel = null;
    }
  }
}

function notifyOtherPages(remoteTs) {
  const deployTimestamp = Math.max(remoteTs || 0, DEPLOY_TIMESTAMP);
  try {
    updateChannel?.postMessage({
      type: "openlib-update-applied",
      deployTimestamp
    });
  } catch (_) {
    // localStorage storage events are the fallback.
  }
}

function dismissBanner(banner, remoteTs) {
  setStored(sessionStorage, SS_DISMISS_KEY, String(remoteTs || DEPLOY_TIMESTAMP));
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

function queueUpdateCheck(options) {
  const run = () => checkForUpdates(options);
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 5000 });
  } else {
    setTimeout(run, 2500);
  }
}

function shouldCheckNow() {
  if (hasRefreshParam()) return true;
  const lastCheck = readTimestamp(getStored(localStorage, LS_LAST_CHECK_KEY));
  return !lastCheck || Date.now() - lastCheck >= CHECK_INTERVAL_MS;
}

function hasRefreshParam() {
  try {
    return new URL(window.location.href).searchParams.has(REFRESH_PARAM);
  } catch (_) {
    return false;
  }
}

function isDismissedFor(remoteTs) {
  const dismissedTs = readTimestamp(getStored(sessionStorage, SS_DISMISS_KEY));
  return remoteTs > 0 && dismissedTs >= remoteTs;
}

function readSyncAttempt() {
  try {
    const raw = getStored(localStorage, LS_SYNC_ATTEMPT_KEY);
    const data = raw ? JSON.parse(raw) : {};
    return {
      deployTimestamp: readTimestamp(data.deployTimestamp),
      at: Number(data.at) || 0
    };
  } catch (_) {
    return { deployTimestamp: 0, at: 0 };
  }
}

function readTimestamp(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}

function parseUpdatePayload(value) {
  try {
    const data = JSON.parse(value);
    return readTimestamp(data.deployTimestamp);
  } catch (_) {
    return readTimestamp(value);
  }
}

function getStored(storage, key) {
  try {
    return storage.getItem(key);
  } catch (_) {
    return null;
  }
}

function setStored(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch (_) {
    // Storage may be unavailable in private/restricted modes.
  }
}

async function fetchFreshText(path) {
  const url = new URL(path, window.location.href);
  url.searchParams.set("_", String(Date.now()));
  const res = await fetch(url.toString(), {
    cache: "no-store",
    credentials: "same-origin"
  });
  if (!res.ok) return "";
  return res.text();
}
