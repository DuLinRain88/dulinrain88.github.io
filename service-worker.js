"use strict";var precacheConfig=[["/index.html","0237fdcdc279af814dafd3068adec848"],["/static/css/main.4dc7b218.css","612563a7ec4bc615717bcad131bb4d38"],["/static/js/main.30cd1409.js","0fe28baee0051486c9f477ad74fb5af3"],["/static/media/babel.161bbf02.ico","161bbf02e362d8c846052a9ff0a62b9c"],["/static/media/bg-1.d7b8214f.jpg","d7b8214faba90b1701b14f31a0bf1c3e"],["/static/media/bg-11.8ac1fd4e.jpg","8ac1fd4ee87354fdce1ebec868856150"],["/static/media/bg-12.6ec4c457.jpg","6ec4c457e48cb0f3ed72f12deb25b319"],["/static/media/bg-13.81f92495.jpg","81f924959cb9fe4b0c2771934cafb9b6"],["/static/media/bg-9.fc917794.jpg","fc917794b729871e0a1dee1348b1adb0"],["/static/media/elementui.76102842.png","761028426d0862d0cda181b4b0f1b47b"],["/static/media/es6.31b7c838.png","31b7c838f1ae749e78a24137d2c6cfe6"],["/static/media/es7_8.b2e538d4.png","b2e538d48e89aceaa458102b4f54d0d7"],["/static/media/es9.f26e7865.png","f26e7865f4521723571382f65f15870e"],["/static/media/handbyhand.e45dab5c.png","e45dab5c3bbe6cd89f199e0976f5069f"],["/static/media/javascript-design-pattern.915da19e.png","915da19e54d8d1762c05890ac7018915"],["/static/media/react.dbcdfc20.png","dbcdfc200230bab95dfc7e0dec4df31b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});