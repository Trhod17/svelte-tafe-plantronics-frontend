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
  P: () => Planttab
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("./index-de5ece87.js");
const Planttab = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let { slug } = $$props;
  let { active } = $$props;
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<div class="${"tabs bg-primary-focus"}"><a class="${["tab tab-bordered w-1/3 text-primary-content", active == 0 ? "tab-active" : ""].join(" ").trim()}" sveltekit:prefetch href="${"/plants/" + (0, import_index_de5ece87.e)(slug)}">Plant</a>
	<a class="${["tab tab-bordered w-1/3 text-primary-content", active == 1 ? "tab-active" : ""].join(" ").trim()}" sveltekit:prefetch href="${"/plants/info/" + (0, import_index_de5ece87.e)(slug)}">Info</a>
	<a class="${["tab tab-bordered w-1/3 text-primary-content", active == 2 ? "tab-active" : ""].join(" ").trim()}" sveltekit:prefetch href="${"/plants/soil/" + (0, import_index_de5ece87.e)(slug)}">Soil Preference
	</a>
	<a class="${["tab tab-bordered w-1/3 text-primary-content", active == 3 ? "tab-active" : ""].join(" ").trim()}" sveltekit:prefetch href="${"/plants/edible/" + (0, import_index_de5ece87.e)(slug)}">Ediblity</a></div>`;
});
