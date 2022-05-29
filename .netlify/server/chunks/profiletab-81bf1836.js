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
  P: () => Profiletab
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("./index-de5ece87.js");
const Profiletab = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let { active } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<div class="${"tabs bg-primary-focus"}"><a class="${["tab tab-bordered w-1/3 text-primary-content", active == 0 ? "tab-active" : ""].join(" ").trim()}" sveltekit:prefetch href="${"/profile"}"><i class="${"fa-solid fa-user"}"></i> My Profile</a>
	<a class="${["tab tab-bordered w-1/3 text-primary-content", active == 1 ? "tab-active" : ""].join(" ").trim()}" sveltekit:prefetch href="${"/profile/myplants"}"><i class="${"fa-solid fa-tree"}"></i>My Plants</a>
	<p class="${[
    "tab tab-bordered w-1/3 text-grey-content disabled",
    active == 2 ? "tab-active" : ""
  ].join(" ").trim()}">Coming Soon
	</p></div>`;
});
