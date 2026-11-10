// Offline-Cache: einmal geladen, startet die App auch ohne Internet.
// HTML immer zuerst aus dem Netz (damit Updates ankommen), Assets aus dem Cache.
const CACHE = 'blockwelt-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === 'navigate' || req.destination === 'document';
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (isPage) {
      try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
      } catch {
        return (await cache.match(req)) || (await cache.match('./')) || Response.error();
      }
    }
    const hit = await cache.match(req);
    if (hit) return hit;
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  })());
});
