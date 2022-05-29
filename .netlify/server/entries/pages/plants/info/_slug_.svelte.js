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
  info: () => info,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("../../../../chunks/index-de5ece87.js");
var import_planttab_36ba882b = require("../../../../chunks/planttab-36ba882b.js");
var import_index_fadab37b = require("../../../../chunks/index-fadab37b.js");
var import_nodata_4fe287a2 = require("../../../../chunks/nodata-4fe287a2.js");
let info = [];
let slug;
let data = (0, import_index_fadab37b.w)(true);
async function load({ params }) {
  slug = params.slug;
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/api.vnd+json"
  };
  let bodyContent = JSON.stringify({ id: slug });
  return fetch("https://plantronics-backend.herokuapp.com/plantinfo/", {
    method: "POST",
    body: bodyContent,
    headers: headersList
  }).then(function(response) {
    if (response.status == 404) {
      data = (0, import_index_fadab37b.w)(false);
    }
    return response.json();
  }).then(function(data2) {
    info = data2;
    return data2;
  });
}
const U5Bslugu5D = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let hasData;
  let num;
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = (0, import_index_de5ece87.a)(data, (value) => $data = value);
  hasData = $data;
  num = 1;
  $$unsubscribe_data();
  return `${$$result.head += `${info != "" && hasData ? `${$$result.title = `<title>${(0, import_index_de5ece87.e)(info.info[0].plant__plant_name)}</title>`, ""}` : `${$$result.title = `<title>Has no data</title>`, ""}`}`, ""}

<main lang="${"en"}">${(0, import_index_de5ece87.v)(import_planttab_36ba882b.P, "PlantTab").$$render($$result, { active: 1, slug }, {}, {})}
	<div class="${"p-3"}"></div>
	<div class="${"card border w-10/12 text-base-content ml-6"}">${info != "" && hasData ? `<p class="${"card-title mx-auto"}">${(0, import_index_de5ece87.e)(info.info[0].plant__plant_name)}</p>
			${(0, import_index_de5ece87.d)(info.info, (Info) => {
    return `<div class="${"card-body whitespace-pre-wrap text-sm break-words border items-center text-center"}"><p class="${"card-title"}">Info Set ${(0, import_index_de5ece87.e)(num)}</p>
					<ul><li>Sun Preference: ${(0, import_index_de5ece87.e)(Info.sun_preference)}</li>
						<li>Climate: ${(0, import_index_de5ece87.e)(Info.climate)}</li>
						<li>Watering Schedule: ${(0, import_index_de5ece87.e)(Info.time_frame)}</li>
						<li>Planting Season: ${(0, import_index_de5ece87.e)(Info.season)}</li>
						<footer class="${"footer footer-center p-4 bg-primary-content text-base-content"}"><div><p>Info Card Created By: ${(0, import_index_de5ece87.e)(Info.created_by__username)}</p></div>
						</footer></ul>
				</div>`;
  })}` : `${(0, import_index_de5ece87.v)(import_nodata_4fe287a2.N, "NoData").$$render($$result, { page: "info" }, {}, {})}`}</div></main>`;
});
