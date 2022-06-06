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
var import_index_2c175e7b = require("../../../chunks/index-2c175e7b.js");
var import_help_40959013 = require("../../../chunks/help-40959013.js");
var import_auth_8dce061a = require("../../../chunks/auth-8dce061a.js");
var import_profiletab_3365072d = require("../../../chunks/profiletab-3365072d.js");
var import_index_8c592b0b = require("../../../chunks/index-8c592b0b.js");
var import_axios = require("axios");
const MyPlants = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_2c175e7b.a)(import_auth_8dce061a.s, (value) => value);
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_store();
  return `${data != "" ? `${(0, import_index_2c175e7b.f)(data.userplants, (plant) => {
    return `<div class="${"card card-compact lg:card-side bg-success-content text-base-content shadow-xl"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Plant: ${(0, import_index_2c175e7b.e)(plant.plant__plant_name)}</h2>
				<h2 class="${"card-title"}">Owned By: ${(0, import_index_2c175e7b.e)(plant.user__username)}</h2>
			</div></div>
		<div class="${"p-2"}"></div>`;
  })}` : ``}`;
});
const Myplants = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_2c175e7b.v)(import_profiletab_3365072d.P, "ProfileTab").$$render($$result, { active: 1 }, {}, {})}
${(0, import_index_2c175e7b.v)(import_help_40959013.H, "Help").$$render($$result, { help: "../help#myplants" }, {}, {})}
${(0, import_index_2c175e7b.v)(MyPlants, "MyPlants").$$render($$result, {}, {}, {})}`;
});
