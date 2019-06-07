
self.addEventListener('install', function(e) {
	console.log('Installing..');

	// Let Browser Known When Finished Caching all Files
	e.waitUntil(
		// Create Cache Named "apskel2"
		caches.open('apskel2').then(cache => {
			// Note: If any of the following fails to load then none will be added to the cache 
			return cache.addAll([
				'/',
				'/index.html',
				'/manifest.json',
				'https://unpkg.com/onsenui/css/onsenui.min.css',
				'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
				'https://unpkg.com/onsenui/js/onsenui.min.js'
			]);
		}) // end of .then()
	);  // end of e.waitUntil()
});

// Intercept Requests and Return to From Cache, Instead..
self.addEventListener('fetch', function(e) {
	e.respondWith(
		// Is Request In Cache? Then Get From Cache Else Request from Server..
		caches.match(e.request).then(response => response || fetch(e.request))
	);
});

