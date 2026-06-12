// Auto-stamped by predeploy hook. Keep in sync with version-check.js.
const CACHE_VERSION = "1781300959";
const STATIC_CACHE = `openlib-static-${CACHE_VERSION}`;
const CACHE_PREFIX = "openlib-static-";

const APP_SHELL = [
  "/",
  "/index.html",
  `/styles.css?v=${CACHE_VERSION}`,
  `/script.js?v=${CACHE_VERSION}`,
  `/firebase-config.js?v=${CACHE_VERSION}`,
  `/firebase-db.js?v=${CACHE_VERSION}`,
  `/version-check.js?v=${CACHE_VERSION}`,
  "/manifest.webmanifest",
  "/favicon.svg",
  "/favicon.ico",
  "/favicon.png",
  "/assets/pwa-icon.svg",
  "/assets/maskable-icon.svg",
  "/assets/pwa-icon-192.png",
  "/assets/pwa-icon-512.png",
  "/assets/maskable-icon-512.png",
  "/assets/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await Promise.all(APP_SHELL.map(async url => {
      try {
        const response = await fetch(new Request(url, { cache: "reload" }));
        if (response.ok) await cache.put(url, response);
      } catch (_) {
        // Optional app-shell files should not prevent activation.
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map(name => {
      if (name.startsWith(CACHE_PREFIX) && name !== STATIC_CACHE) {
        return caches.delete(name);
      }
      return Promise.resolve();
    }));
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (shouldBypassCache(request, url)) {
    event.respondWith(fetch(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (request.cache === "no-cache") {
    event.respondWith(networkFirstAsset(request));
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request));
  }
});

function shouldBypassCache(request, url) {
  if (request.cache === "no-store" || request.cache === "reload") return true;
  if (url.pathname === "/version.json" || url.pathname === "/service-worker.js") return true;
  if (url.pathname === "/version-check.js" && !url.searchParams.has("v")) return true;
  return false;
}

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/assets/") ||
    /\.(?:css|js|html|svg|png|jpe?g|gif|webp|ico|woff2|txt|webmanifest)$/i.test(url.pathname)
  );
}

async function networkFirstNavigation(request) {
  try {
    return await fetch(request);
  } catch (_) {
    return (await caches.match("/index.html")) || (await caches.match("/")) || Response.error();
  }
}

async function networkFirstAsset(request) {
  const cache = await caches.open(STATIC_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (_) {
    return (await cache.match(request)) || Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (_) {
    return Response.error();
  }
}
