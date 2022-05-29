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
  edible: () => edible,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("../../../../chunks/index-de5ece87.js");
var import_index_fadab37b = require("../../../../chunks/index-fadab37b.js");
var import_planttab_36ba882b = require("../../../../chunks/planttab-36ba882b.js");
var import_nodata_4fe287a2 = require("../../../../chunks/nodata-4fe287a2.js");
const Edible = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let { image_text } = $$props;
  let { edible_name } = $$props;
  let { edible_image } = $$props;
  let { edible_text } = $$props;
  if ($$props.image_text === void 0 && $$bindings.image_text && image_text !== void 0)
    $$bindings.image_text(image_text);
  if ($$props.edible_name === void 0 && $$bindings.edible_name && edible_name !== void 0)
    $$bindings.edible_name(edible_name);
  if ($$props.edible_image === void 0 && $$bindings.edible_image && edible_image !== void 0)
    $$bindings.edible_image(edible_image);
  if ($$props.edible_text === void 0 && $$bindings.edible_text && edible_text !== void 0)
    $$bindings.edible_text(edible_text);
  return `<li>${(0, import_index_de5ece87.e)(edible_text)}</li>
<li><div tabindex="${"0"}" class="${"collapse collapse-arrow border border-base-300 bg-accent text-base-content rounded-box"}"><input type="${"checkbox"}">
		<div class="${"collapse-title text-xl font-medium text-accent-content"}">${(0, import_index_de5ece87.e)(image_text)}</div>
		<div class="${"collapse-content"}"><figure>${edible_image != "" ? `<img${(0, import_index_de5ece87.f)("alt", edible_name, 0)}${(0, import_index_de5ece87.f)("src", "https://res.cloudinary.com/drsgxd2u2/image/upload/v1/" + edible_image, 0)} width="${"550px"}">` : `<p class="${"text-accent-content"}">Image not provided</p>`}</figure></div></div></li>`;
});
let edible = [];
let slug;
let data = (0, import_index_fadab37b.w)(true);
async function load({ params }) {
  slug = params.slug;
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/api.vnd+json"
  };
  let bodyContent = JSON.stringify({ id: params.slug });
  return fetch("https://plantronics-backend.herokuapp.com/plantedible/", {
    method: "POST",
    body: bodyContent,
    headers: headersList
  }).then(function(response) {
    if (response.status != 200) {
      data = (0, import_index_fadab37b.w)(false);
    }
    return response.json();
  }).then(function(data2) {
    edible = data2;
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
  return `${$$result.head += `${edible != "" && hasData ? `${$$result.title = `<title>${(0, import_index_de5ece87.e)(edible.edible[0].plant__plant_name)}</title>`, ""}` : `${$$result.title = `<title>Has no data</title>`, ""}`}`, ""}

<main lang="${"en"}">${(0, import_index_de5ece87.v)(import_planttab_36ba882b.P, "PlantTab").$$render($$result, { active: 3, slug }, {}, {})}
	<div class="${"p-3"}"></div>
	<div class="${"card border w-10/12 text-base-content ml-6"}">${edible != "" && hasData ? `<p class="${"card-title mx-auto"}">${(0, import_index_de5ece87.e)(edible.edible[0].plant__plant_name)}</p>
			${(0, import_index_de5ece87.d)(edible.edible, (Edible$1) => {
    return `<div class="${"card-body whitespace-pre-wrap text-sm break-words border items-center text-center"}"><p class="${"card-title"}">Edible Set ${(0, import_index_de5ece87.e)(num)}</p>
					<ul><li>${(0, import_index_de5ece87.v)(Edible, "EdibleSection").$$render($$result, {
      image_text: "Fruit Image",
      edible_text: "Is Fruit Edible: " + Edible$1.is_fruit_edible,
      edible_image: Edible$1.fruit_image,
      edible_name: "fruit from: " + Edible$1.plant__plant_name
    }, {}, {})}</li>
						<li>${(0, import_index_de5ece87.v)(Edible, "EdibleSection").$$render($$result, {
      image_text: "Seed Image",
      edible_text: "Are Seeds Edible: " + Edible$1.are_seeds_edible,
      edible_image: Edible$1.seed_image,
      edible_name: "seed from: " + Edible$1.plant__plant_name
    }, {}, {})}</li>
						<li>${(0, import_index_de5ece87.v)(Edible, "EdibleSection").$$render($$result, {
      image_text: "Leaf Image",
      edible_text: "Are Leaves Edible: " + Edible$1.are_leaves_edible,
      edible_image: Edible$1.leaf_image,
      edible_name: "leaf from: " + Edible$1.plant__plant_name
    }, {}, {})}</li>
						<li>${(0, import_index_de5ece87.v)(Edible, "EdibleSection").$$render($$result, {
      image_text: "Root Image",
      edible_text: "Are Roots Edible: " + Edible$1.are_roots_edible,
      edible_image: Edible$1.root_image,
      edible_name: "root from: " + Edible$1.plant__plant_name
    }, {}, {})}</li>

						<li>${(0, import_index_de5ece87.v)(Edible, "EdibleSection").$$render($$result, {
      image_text: "Flower Image",
      edible_text: "Are Flowers Edible: " + Edible$1.are_flowers_edible,
      edible_image: Edible$1.flower_image,
      edible_name: "flower from: " + Edible$1.plant__plant_name
    }, {}, {})}</li>

						<li>Description: ${(0, import_index_de5ece87.e)(Edible$1.edible_description)}</li>
						<footer class="${"footer footer-center p-4 bg-primary-content text-base-content"}"><div><p>Edible Card Created By: ${(0, import_index_de5ece87.e)(Edible$1.created_by__username)}</p></div>
						</footer></ul>
				</div>`;
  })}` : `${(0, import_index_de5ece87.v)(import_nodata_4fe287a2.N, "NoData").$$render($$result, { page: "edible data" }, {}, {})}`}</div></main>`;
});
