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
  soil: () => soil
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2c175e7b = require("../../../../chunks/index-2c175e7b.js");
var import_help_40959013 = require("../../../../chunks/help-40959013.js");
var import_index_8c592b0b = require("../../../../chunks/index-8c592b0b.js");
var import_planttab_bc0c9666 = require("../../../../chunks/planttab-bc0c9666.js");
var import_nodata_da882406 = require("../../../../chunks/nodata-da882406.js");
let soil = [];
let slug;
let data = (0, import_index_8c592b0b.w)(true);
async function load({ params }) {
  slug = params.slug;
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/api.vnd+json"
  };
  let bodyContent = JSON.stringify({ id: slug });
  return fetch("https://plantronics-backend.herokuapp.com/plantsoil/", {
    method: "POST",
    body: bodyContent,
    headers: headersList
  }).then(function(response) {
    if (response.status == 404) {
      data = (0, import_index_8c592b0b.w)(false);
    }
    return response.json();
  }).then(function(data2) {
    soil = data2;
    return data2;
  });
}
const U5Bslugu5D = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let hasData;
  let num;
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = (0, import_index_2c175e7b.a)(data, (value) => $data = value);
  hasData = $data;
  num = 1;
  $$unsubscribe_data();
  return `${$$result.head += `${soil != "" && hasData ? `${$$result.title = `<title>${(0, import_index_2c175e7b.e)(soil.soil[0].plants__plant_name)}</title>`, ""}` : `${$$result.title = `<title>Has no data</title>`, ""}`}`, ""}

<main lang="${"en"}">${(0, import_index_2c175e7b.v)(import_planttab_bc0c9666.P, "PlantTab").$$render($$result, { active: 2, slug }, {}, {})}
	${(0, import_index_2c175e7b.v)(import_help_40959013.H, "Help").$$render($$result, { help: "../help#plantpage" }, {}, {})}
	<div class="${"p-3"}"></div>
	<div class="${"card border w-10/12 text-base-content ml-6"}">${soil != "" && hasData ? `<p class="${"card-title mx-auto"}">${(0, import_index_2c175e7b.e)(soil.soil[0].plants__plant_name)}</p>
			${(0, import_index_2c175e7b.f)(soil.soil, (Soil) => {
    return `<div class="${"card-body whitespace-pre-wrap text-sm break-words border items-center text-center"}"><p class="${"card-title"}">Soil Set ${(0, import_index_2c175e7b.e)(num)}</p>
					<ul><li>Soil Preference: ${(0, import_index_2c175e7b.e)(Soil.preference)}</li>
						<li>Preference Description: ${(0, import_index_2c175e7b.e)(Soil.soil_description)}</li>
						<footer class="${"footer footer-center p-4 bg-primary-content text-base-content"}"><div><p>Soil Card Created By: ${(0, import_index_2c175e7b.e)(Soil.created_by__username)}</p></div>
						</footer></ul>
				</div>`;
  })}` : `${(0, import_index_2c175e7b.v)(import_nodata_da882406.N, "NoData").$$render($$result, { page: "soil preference data" }, {}, {})}`}</div></main>`;
});
