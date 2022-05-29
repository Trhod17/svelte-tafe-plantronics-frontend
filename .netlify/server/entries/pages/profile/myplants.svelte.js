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
  default: () => Myplants
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("../../../chunks/index-de5ece87.js");
var import_auth_68aeceae = require("../../../chunks/auth-68aeceae.js");
var import_profiletab_81bf1836 = require("../../../chunks/profiletab-81bf1836.js");
var import_index_fadab37b = require("../../../chunks/index-fadab37b.js");
var import_axios = require("axios");
const MyPlants = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => value);
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_store();
  return `${data != "" ? `${(0, import_index_de5ece87.d)(data.userplants, (plant) => {
    return `<div class="${"card card-compact lg:card-side bg-success-content text-base-content shadow-xl"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Plant: ${(0, import_index_de5ece87.e)(plant.plant__plant_name)}</h2>
				<h2 class="${"card-title"}">Owned By: ${(0, import_index_de5ece87.e)(plant.user__username)}</h2>
			</div></div>
		<div class="${"p-2"}"></div>`;
  })}` : ``}`;
});
const Myplants = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_de5ece87.v)(import_profiletab_81bf1836.P, "ProfileTab").$$render($$result, { active: 1 }, {}, {})}
${(0, import_index_de5ece87.v)(MyPlants, "MyPlants").$$render($$result, {}, {}, {})}`;
});
