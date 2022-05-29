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
var import_index_de5ece87 = require("../../chunks/index-de5ece87.js");
var import_auth_68aeceae = require("../../chunks/auth-68aeceae.js");
var import_profiletab_81bf1836 = require("../../chunks/profiletab-81bf1836.js");
var import_index_fadab37b = require("../../chunks/index-fadab37b.js");
var import_axios = require("axios");
const Profile = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => value);
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_store();
  return `${(0, import_index_de5ece87.v)(import_profiletab_81bf1836.P, "ProfileTab").$$render($$result, { active: 0 }, {}, {})}

<div class="${"card border w-9/12 text-base-content "}"><div class="${"card-body whitespace-pre-wrap text-sm break-words"}"><p class="${"card-title"}">My Profile</p>
		<ul>${data != "" ? `<li>Username: ${(0, import_index_de5ece87.e)(data.data.attributes.username)}</li>
				<li>First Name: ${(0, import_index_de5ece87.e)(data.data.attributes.first_name)}</li>
				<li>Last Name: ${(0, import_index_de5ece87.e)(data.data.attributes.last_name)}</li>
				<li>Email: ${(0, import_index_de5ece87.e)(data.data.attributes.email)}</li>` : ``}</ul></div></div>`;
});
const prerender = true;
const Profile_1 = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Profile</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}" data-svelte="svelte-19mfyn7">`, ""}

<main>${(0, import_index_de5ece87.v)(Profile, "Profile").$$render($$result, {}, {}, {})}
</main>`;
});
