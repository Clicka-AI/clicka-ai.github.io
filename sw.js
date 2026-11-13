// Change this number every time you update index.html so phones fetch the new version.
const CACHE='paeds-v20';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./maskable-512.png','./apple-touch-icon.png','./favicon-32.png','./favicon-48.png','./fig/dil.webp','./fig/ecb.webp','./fig/exch.webp','./fig/exproto.webp','./fig/hbb.webp','./fig/jthr.webp','./fig/phot.webp','./fig/resus.webp','./fig/tsb2.webp','./fig/tsb3.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
  const net=fetch(e.request).then(r=>{if(r&&r.ok){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return r}).catch(()=>hit);
  return hit||net}))});
