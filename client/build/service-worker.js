"use strict";var precacheConfig=[["/atmosphereasmr/spotlightify-final/index.html","bf47be10c5153d78f97893ef7f19a2de"],["/atmosphereasmr/spotlightify-final/static/css/main.18c4929f.css","db8a6c3db1c71da960594b1c8ee23022"],["/atmosphereasmr/spotlightify-final/static/js/main.8705ec7c.js","ca8b53d79b745945ee74c96fa31baf8b"],["/atmosphereasmr/spotlightify-final/static/media/concert.72f47a91.jpg","72f47a91941d28da7b0c549fe8a828b6"],["/atmosphereasmr/spotlightify-final/static/media/drake-dark.35ef9085.jpg","35ef9085580e78b7424f24500ed6b663"],["/atmosphereasmr/spotlightify-final/static/media/drake.a8cfc63c.jpg","a8cfc63c03aef4985c555b1a79290fae"],["/atmosphereasmr/spotlightify-final/static/media/eminem-dark.bda32841.jpg","bda32841cffbf4aa806174388ce5ef01"],["/atmosphereasmr/spotlightify-final/static/media/eminem.a985219b.png","a985219beeba2c538e388473ae44c6d6"],["/atmosphereasmr/spotlightify-final/static/media/lady-gaga-dark.d0691a26.jpg","d0691a26a960b7eb7d1146be86585eb1"],["/atmosphereasmr/spotlightify-final/static/media/lady-gaga.b6e1ab67.jpg","b6e1ab67033d3ecafe96e80b6c134ee2"],["/atmosphereasmr/spotlightify-final/static/media/marilyn-dark.1dce0c74.jpg","1dce0c74a29855bca56dd91c761f6ed4"],["/atmosphereasmr/spotlightify-final/static/media/marilyn.b8d37d84.jpg","b8d37d84d479cd058a5b579a60d12bc3"],["/atmosphereasmr/spotlightify-final/static/media/rihanna-dark.4d15c285.jpg","4d15c2858e7387f1f2c9c879efb5d627"],["/atmosphereasmr/spotlightify-final/static/media/rihanna.2a89b6ab.jpg","2a89b6abf982bafa06d1bf7ac40e4af7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/atmosphereasmr/spotlightify-final/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});