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
  default: () => U5Bslugu5D,
  load: () => load,
  slug: () => slug
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2c175e7b = require("../../../chunks/index-2c175e7b.js");
var import_planttab_bc0c9666 = require("../../../chunks/planttab-bc0c9666.js");
var import_auth_8dce061a = require("../../../chunks/auth-8dce061a.js");
var import_help_40959013 = require("../../../chunks/help-40959013.js");
var import_index_8c592b0b = require("../../../chunks/index-8c592b0b.js");
var import_axios = require("axios");
let slug;
async function load({ params }) {
  slug = params.slug;
  return params;
}
const U5Bslugu5D = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_2c175e7b.a)(import_auth_8dce061a.s, (value) => value);
  let data = [];
  $$unsubscribe_store();
  return `${$$result.head += `${data != "" ? `${$$result.title = `<title>${(0, import_index_2c175e7b.e)(data.data.attributes.plant_name)}</title>`, ""}` : ``}`, ""}

<main lang="${"en"}">${(0, import_index_2c175e7b.v)(import_planttab_bc0c9666.P, "PlantTab").$$render($$result, { active: 0, slug }, {}, {})}
	${(0, import_index_2c175e7b.v)(import_help_40959013.H, "Help").$$render($$result, { help: "../help#plantpage" }, {}, {})}
	<div class="${"p-3"}"></div>
	<div class="${"card border w-10/12 text-base-content ml-6 bg-primary-focus"}"><div class="${"card-body whitespace-pre-wrap text-sm break-words"}"><p class="${"card-title"}"></p>
			<ul>${data != "" ? `<li class="${"card-title"}">${(0, import_index_2c175e7b.e)(data.data.attributes.plant_name)}</li>
					<li>Latin Name: ${(0, import_index_2c175e7b.e)(data.data.attributes.plant_latin_name)}</li>
					<li>Family: ${(0, import_index_2c175e7b.e)(data.data.relationships.family.data.id)}</li>
					<li>Genus: ${(0, import_index_2c175e7b.e)(data.data.relationships.genus.data.id)}</li>
					<li><div tabindex="${"0"}" class="${"collapse collapse-arrow border border-base-300 bg-accent text-accent-content rounded-box"}"><input type="${"checkbox"}">
						<div class="${"collapse-title text-xl font-medium"}">Description</div>
						<div class="${"collapse-content"}"><p>${(0, import_index_2c175e7b.e)(data.data.attributes.plant_description)}</p></div></div></li>
					<li><img${(0, import_index_2c175e7b.d)("src", data.data.attributes.plant_image, 0)}${(0, import_index_2c175e7b.d)("alt", data.data.attributes.plant_name, 0)}></li>` : ``}</ul></div></div></main>`;
});
