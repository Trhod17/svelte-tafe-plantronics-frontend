const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","icon512.png","images/icons/icon-128x128.png","images/icons/icon-144x144.png","images/icons/icon-152x152.png","images/icons/icon-192x192.png","images/icons/icon-384x384.png","images/icons/icon-512x512.png","images/icons/icon-72x72.png","images/icons/icon-96x96.png","manifest.json","robots.txt","svelte-welcome.png","svelte-welcome.webp","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-c67ba7d8.js","js":["start-c67ba7d8.js","chunks/index-64fbd304.js","chunks/index-7a2515b1.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "help",
				pattern: /^\/help\/?$/,
				names: [],
				types: [],
				path: "/help",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "profile/myplants",
				pattern: /^\/profile\/myplants\/?$/,
				names: [],
				types: [],
				path: "/profile/myplants",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "plants/edible/[slug]",
				pattern: /^\/plants\/edible\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "plants/info/[slug]",
				pattern: /^\/plants\/info\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "plants/soil/[slug]",
				pattern: /^\/plants\/soil\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "plants/[slug]",
				pattern: /^\/plants\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
