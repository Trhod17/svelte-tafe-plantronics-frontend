var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("../../chunks/index-de5ece87.js");
var import_auth_68aeceae = require("../../chunks/auth-68aeceae.js");
var import_theme_change = require("theme-change");
var import_index_fadab37b = require("../../chunks/index-fadab37b.js");
var import_axios = require("axios");
const Themeswitch = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"mb-8"}"><select data-choose-theme class="${"select select-bordered select-primary w-full max-w-3xl text-xl"}"><option disabled="${"disabled"}" selected="${"selected"}" value="${"Theme"}">Theme</option><option value="${"forest"}">Forest (default)</option><option value="${"light"}">Light</option><option value="${"dark"}">Dark</option><option value="${"acid"}">Acid</option><option value="${"autumn"}">Autumn</option><option value="${"bumblebee"}">Bumblebee</option><option value="${"business"}">Business</option><option value="${"coffee"}">Coffee</option><option value="${"corporate"}">Corporate</option><option value="${"cupcake"}">Cupcake</option><option value="${"cyberpunk"}">Cyberpunk</option><option value="${"dracula"}">Dracula</option><option value="${"emerald"}">Emerald</option><option value="${"fantasy"}">Fantasy</option><option value="${"garden"}">Garden</option><option value="${"lemonade"}">Lemonade</option><option value="${"luxury"}">Luxury</option><option value="${"night"}">Night</option><option value="${"pastel"}">Pastel</option><option value="${"synthwave"}">Synthwave</option><option value="${"winter"}">Winter</option></select></div>`;
});
const Navbar = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => $store = value);
  $$unsubscribe_store();
  return `<div class="${"navbar bg-primary"}"><div class="${"navbar-start"}"><div class="${"dropdown bg-primary"}">
			<label tabindex="${"0"}" class="${"btn btn-ghost lg:hidden w-55"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></label>
			<ul tabindex="${"0"}" class="${"menu dropdown-content mt-4 p-5 shadow bg-primary text-primary-content rounded-box w-60"}"><li class="${"mx-auto"}"><a sveltekit:prefetch class="${"text-lg"}" href="${"/"}"><i class="${"fa-solid fa-house"}"></i>Home</a></li>
				<li class="${"mx-auto"}"><a sveltekit:prefetch class="${"text-lg"}" href="${"/about"}">About</a></li>
				${$store != null ? `<li class="${"mx-auto"}"><a sveltekit:prefetch class="${"text-lg"}" href="${"/profile"}"><i class="${"fa-solid fa-user"}"></i>${(0, import_index_de5ece87.e)($store[0])}</a></li>
					<li class="${"mx-auto"}"><a class="${"text-lg"}" href="${"/"}"><i class="${"fa-solid fa-arrow-up-left-from-circle"}">a</i>Logout</a></li>` : `<li class="${"mx-auto"}"><a sveltekit:prefetch class="${"text-lg"}" href="${"/login"}"><i class="${"fa-solid fa-arrow-right-to-bracket"}"></i>Login</a></li>
					<li class="${"mx-auto"}"><a sveltekit:prefetch class="${"text-lg"}" href="${"/register"}"><i class="${"fa-solid fa-user-plus"}"></i>Signup</a></li>`}</ul></div>
		<a class="${"btn btn-ghost normal-case text-xl text-primary-content"}" sveltekit:prefetch href="${"/"}">Plantronics</a></div>
	<div class="${"navbar-center hidden lg:flex"}"><ul class="${"menu menu-horizontal p-0"}"><li><a sveltekit:prefetch href="${"/"}"><i class="${"fa-solid fa-house"}"></i>Home</a></li>
			<li><a sveltekit:prefetch href="${"/about"}">About</a></li>
			${$store != null ? `<li><a sveltekit:prefetch href="${"/profile"}"><i class="${"fa-solid fa-user"}"></i>${(0, import_index_de5ece87.e)($store[0])}</a></li>
				<li><a href="${"/"}"><i class="${"fa-solid fa-arrow-up-left-from-circle"}">a</i>Logout</a></li>` : `<li><a sveltekit:prefetch href="${"/login"}"><i class="${"fa-solid fa-arrow-right-to-bracket"}"></i>Login</a></li>
				<li><a sveltekit:prefetch href="${"/register"}"><i class="${"fa-solid fa-user-plus"}"></i>Signup</a></li>`}</ul></div>
	<div class="${"navbar-end"}">${(0, import_index_de5ece87.v)(Themeswitch, "ThemeSelect").$$render($$result, {}, {}, {})}</div></div>`;
});
var app = "";
const _layout = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"manifest"}" crossorigin="${"use-credentials"}" href="${"/manifest.json"}" data-svelte="svelte-918516"><link rel="${"apple-touch-icon"}" href="${"/images/icons/icon-192x192.png"}" data-svelte="svelte-918516"><link rel="${"icon"}" href="${"/favicon.png"}" data-svelte="svelte-918516"><script src="${"https://kit.fontawesome.com/86ac87a941.js"}" crossorigin="${"anonymous"}" data-svelte="svelte-918516"><\/script>`, ""}
${(0, import_index_de5ece87.v)(Navbar, "NavBar").$$render($$result, {}, {}, {})}

<main class="${"w-100 break-words"}">${slots.default ? slots.default({}) : ``}</main>

<footer></footer>`;
});
