'use strict';

if (workbox) {
    console.log(`Workbox is loaded`);

    workbox.precaching.precacheAndRoute(self.__precacheManifest);

}
else {
    console.log(`Workbox didn't load`);
}

self.addEventListener("message", (e)=>{
    if (e.data.action=='skipWaiting') self.skipWaiting()
})