self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('service worker installed!', event)
    event.waitUntil(caches.open(cacheName).then((cache) => {
        cache.addAll([
            '/js/test.js',
            '/sw.js',
            '/css/main.css'
        ])
    }))
})
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;//缓存中有，直接从缓存中拿
            }
            var requestToCache = event.request.clone();//克隆request
            return fetch(requestToCache).then(
                function(response) {
                    if(!response || response.status !== 200) {
                        return response;//失败直接返回失败的结果
                    }
                    var responseToCache = response.clone();//成功则克隆response
                    caches.open(cacheName)
                    .then(function(cache) {
                        cache.put(requestToCache, responseToCache);//把request和response都存入缓存
                    });
                    return response;//返回成功的结果
                }
            ).catch(function (error) {
                console.log(error);
            });
        })
    );
});