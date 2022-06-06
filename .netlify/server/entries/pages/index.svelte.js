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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2c175e7b = require("../../chunks/index-2c175e7b.js");
var import_auth_8dce061a = require("../../chunks/auth-8dce061a.js");
var import_index_8c592b0b = require("../../chunks/index-8c592b0b.js");
var import_axios = require("axios");
const Plant_card = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let loading;
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_2c175e7b.a)(import_auth_8dce061a.s, (value) => $store = value);
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  loading = true;
  $$unsubscribe_store();
  return `${data != "" || !loading ? `
	
	${(0, import_index_2c175e7b.f)(data.plants, (plant) => {
    return `<div class="${"card card-compact lg:card-side bg-success-content text-gray-300 shadow-xl w-12/12"}"><figure><img${(0, import_index_2c175e7b.d)("alt", plant.plant_name, 0)}${(0, import_index_2c175e7b.d)("src", "https://res.cloudinary.com/drsgxd2u2/image/upload/v1/" + plant.plant_image, 0)} width="${"150px"}"></figure>
			<div class="${"card-body"}"><h2 class="${"card-title"}">${(0, import_index_2c175e7b.e)(plant.plant_name)}</h2>
				<p><b>Latin Name:</b>
					${(0, import_index_2c175e7b.e)(plant.plant_latin_name)} <br>
					<b>Family:</b>
					${(0, import_index_2c175e7b.e)(plant.family)}
					<br>
					<b>Genus:</b>
					${(0, import_index_2c175e7b.e)(plant.genus)}</p>
				<div tabindex="${"0"}" class="${"collapse collapse-arrow border border-base-300 bg-base-100 text-base-content rounded-box"}"><input type="${"checkbox"}">
					<div class="${"collapse-title text-xl font-medium"}">Description</div>
					<div class="${"collapse-content"}"><p>${(0, import_index_2c175e7b.e)(plant.plant_description)}</p>
					</div></div>
				<div class="${"card-actions justify-center"}">${$store != null ? `<a class="${"btn btn-info"}" role="${"button"}" sveltekit:prefetch href="${"plants/" + (0, import_index_2c175e7b.e)(plant.id)}"><pre><i class="${"fa-solid fa-seedling fa-xl"}"> </i> Goto ${(0, import_index_2c175e7b.e)(plant.plant_name)} </pre></a>

						<a class="${"btn btn-base-200 btn-disabled"}" role="${"button"}" sveltekit:prefetch href="${"/profile/myplants"}">Add to My Plants </a>` : ``}</div>
			</div></div>
		<div class="${"p-2"}"></div>`;
  })}` : `<svg role="${"status"}" class="${"w-13 h-13 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"}" viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}" fill="${"currentColor"}"></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}" fill="${"currentFill"}"></path></svg>`}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-hqzp82{font-size:1.5rem;margin:1rem;width:90%;padding:1rem;color:gray;justify-content:center}h1.svelte-hqzp82{font-size:1.4em;margin:0;display:block}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-t32ptj">`, ""}

<main class="${"svelte-hqzp82"}"><h1 class="${"text-base-content svelte-hqzp82"}">HOME</h1>

	${(0, import_index_2c175e7b.v)(Plant_card, "PlantCard").$$render($$result, {}, {}, {})}
</main>`;
});
