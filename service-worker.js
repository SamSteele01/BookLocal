"use strict";var precacheConfig=[["/EthMemphis/index.html","bde24f003d32c541db024445daf78b26"],["/EthMemphis/static/css/main.92f2f92a.css","770dc30978f648c3d9e0cb3ace4a712f"],["/EthMemphis/static/js/main.b4b00b6a.js","3f37b56370e1fe8e177fa45766fbf284"],["/EthMemphis/static/media/bed.5403ccdc.jpg","5403ccdcc072262543388cc3c8e6b6e2"],["/EthMemphis/static/media/bluepattern.a4d84c73.jpg","a4d84c7322f9289ea95ab5a560e222a5"],["/EthMemphis/static/media/couch.32f6d968.jpg","32f6d9687dc527e1a1458fcaef2aee60"],["/EthMemphis/static/media/expanded-ecosystem.6af7855b.png","6af7855b897070c485d2031ec861d83c"],["/EthMemphis/static/media/hotel-current-ecosystem.fb4ddb84.png","fb4ddb84344764f29f921376a7bfc351"],["/EthMemphis/static/media/hotel.35f2330c.jpg","35f2330ca2a1b54c94fd6ec26341f9e5"],["/EthMemphis/static/media/map.3b6bf295.png","3b6bf2954f0de2763976e8dff1cecfdc"],["/EthMemphis/static/media/plasma-chain.48f39465.png","48f39465d88c6bb5e221b72f32292a22"],["/EthMemphis/static/media/room.b48c3449.jpg","b48c34494adfd45310c8f0d1a4175c5a"],["/EthMemphis/static/media/travelers.e4fefe26.jpg","e4fefe26d88b1029b042c4e80eab0c97"],["/EthMemphis/static/media/wallet.e3154ecd.jpg","e3154ecdefdf526260fe722f5d959c9f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/EthMemphis/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});