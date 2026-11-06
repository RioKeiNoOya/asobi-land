const CACHE='asobi-land-v19';
const ASSETS=['./','./index.html','./style.css?v=17','./app.js?v=17','./extras.js?v=17','./manifest.webmanifest','./icon-192.png','./icon-512.png','./home-park.webp','./softcream.html','./kakigori.html','./katahame.html','./scene-sea.svg','./scene-market.svg','./shaved-ice-bowl.svg','./cone-plain.svg','./cone-waffle.svg','./cone-cocoa.svg','./cone-flower.svg','./cone-sugar.svg','./cone-cup.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('asobi-land-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;
if(r.mode==='navigate'||new URL(r.url).pathname.endsWith('/sw.js')){e.respondWith(fetch(r,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(r,copy)).catch(()=>{});}return response;}).catch(()=>caches.match(r)));return;}
e.respondWith(caches.match(r).then(c=>c||fetch(r)));});
