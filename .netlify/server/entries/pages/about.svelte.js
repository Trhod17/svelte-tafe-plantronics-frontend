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
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("../../chunks/index-de5ece87.js");
const browser = false;
const dev = false;
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-du1ydg{font-size:1.5rem;margin:4rem;padding:2rem;color:gray;justify-content:center;box-shadow:4px 5px 11px 10px lightgray}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-du1ydg"}"><h1>ABOUT</h1>
	<hr>
	<div>A website aimed to help people learn about and manage their plants</div>
</main>`;
});
