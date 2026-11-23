// Change this number every time you update index.html so phones fetch the new version.
const CACHE='paeds-v83';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./maskable-512.png','./monochrome-512.png','./apple-touch-icon.png','./favicon-32.png','./favicon-48.png','./fig/dil.webp','./fig/ecb.webp','./fig/exch.webp','./fig/exproto.webp','./fig/hbb.webp','./fig/jthr.webp','./fig/phot.webp','./fig/resus.webp','./fig/tsb2.webp','./fig/tsb3.webp','./fig/asthma-aap.webp','./fig/asthma-act.webp','./fig/asthma-cact.webp','./fig/asthma-sev.webp','./fig/pain-which.webp','./fig/pain-rflacc.webp','./fig/pain-painad.webp','./fig/pain-flacc.webp','./fig/pain-cries.webp','./fig/pain-faces-c.webp','./fig/pain-faces.webp','./fig/pain-nonverbal.webp','./fig/asthma-cact-c.webp','./fig/asthma-aap-c.webp','./fig/sti-ano.webp','./fig/sti-gud.webp','./fig/sti-ur.webp','./fig/sti-vag.webp','./fig/art-d0.webp','./fig/art-d4.webp','./fig/art-dpd.webp','./fig/art-inf1.webp','./fig/art-inf2.webp','./fig/hepc.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(new URL(e.request.url).origin!==self.location.origin)return;
 e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>{
  const net=fetch(e.request).then(r=>{if(r&&r.ok){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return r}).catch(()=>hit);
  return hit||net}))});
