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
  default: () => Profile_1,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2c175e7b = require("../../chunks/index-2c175e7b.js");
var import_auth_8dce061a = require("../../chunks/auth-8dce061a.js");
var import_profiletab_3365072d = require("../../chunks/profiletab-3365072d.js");
var import_index_8c592b0b = require("../../chunks/index-8c592b0b.js");
var import_axios = require("axios");
const Profile = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_2c175e7b.a)(import_auth_8dce061a.s, (value) => value);
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_store();
  return `${(0, import_index_2c175e7b.v)(import_profiletab_3365072d.P, "ProfileTab").$$render($$result, { active: 0 }, {}, {})}

<div class="${"card border w-9/12 text-base-content "}"><div class="${"card-body whitespace-pre-wrap text-sm break-words"}"><p class="${"card-title"}">My Profile</p>
		<ul>${data != "" ? `<li>Username: ${(0, import_index_2c175e7b.e)(data.data.attributes.username)}</li>
				<li>First Name: ${(0, import_index_2c175e7b.e)(data.data.attributes.first_name)}</li>
				<li>Last Name: ${(0, import_index_2c175e7b.e)(data.data.attributes.last_name)}</li>
				<li>Email: ${(0, import_index_2c175e7b.e)(data.data.attributes.email)}</li>` : ``}</ul></div></div>`;
});
const prerender = true;
const Profile_1 = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Profile</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-19mfyn7">`, ""}

<main>${(0, import_index_2c175e7b.v)(Profile, "Profile").$$render($$result, {}, {}, {})}
</main>`;
});
