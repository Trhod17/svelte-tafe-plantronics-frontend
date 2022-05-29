var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Login,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_de5ece87 = require("../../chunks/index-de5ece87.js");
var import_auth_68aeceae = require("../../chunks/auth-68aeceae.js");
var yup = __toESM(require("yup"));
var import_yup_password = __toESM(require("yup-password"));
var import_reporter_tippy = __toESM(require("@felte/reporter-tippy"));
var import_validator_yup = require("@felte/validator-yup");
var import_create_form_80011629 = require("../../chunks/create-form-80011629.js");
var import_index_fadab37b = require("../../chunks/index-fadab37b.js");
var import_axios = require("axios");
const Login$1 = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let loginMessage;
  let $$unsubscribe_store;
  let $data, $$unsubscribe_data;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => value);
  (0, import_yup_password.default)(yup);
  const schema = yup.object({
    account: yup.object({
      username: yup.string().required(),
      password: yup.string().required()
    })
  });
  const { form, data, unsetField, addField } = (0, import_create_form_80011629.c)({
    initialValues: {
      account: { username: "", password: "" },
      extras: { tags: [{ value: "" }] }
    },
    onSubmit(values) {
    },
    extend: [(0, import_validator_yup.validator)({ schema }), (0, import_reporter_tippy.default)()]
  });
  $$unsubscribe_data = (0, import_index_de5ece87.a)(data, (value) => $data = value);
  loginMessage = "";
  $$unsubscribe_store();
  $$unsubscribe_data();
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}<meta name="${"description"}" content="${"Plantronics Login Page"}" data-svelte="svelte-4b436o"><script src="${"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}" integrity="${"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"}" crossorigin="${"anonymous"}" data-svelte="svelte-4b436o"><\/script>`, ""}

<form class="${"ml-5 w-3/4"}"><div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"username"}"><span class="${"label-text"}">Username:</span></label>
		<label class="${"input-group input-group-xl"}"><span class="${"fa-solid fa-user label-text bg-primary fa-xl"}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"text"}" placeholder="${"Username"}" name="${"username"}" id="${"username"}" class="${"input input-bordered w-100 max-w-xs px-10"}" required autocomplete="${"username"}"${(0, import_index_de5ece87.f)("value", $data.account.username, 0)}></label></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"password"}"><span class="${"label-text"}">Password:</span></label>
		<label class="${"input-group input-group-xl"}"><span class="${"fa-solid fa-key label-text bg-primary"}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"password"}" placeholder="${"Password"}" name="${"password"}" id="${"password"}" class="${"input input-bordered w-full max-w-xs px-10"}" autocomplete="${"current=password"}"${(0, import_index_de5ece87.f)("value", $data.account.password, 0)}></label></div>
	<div>${(0, import_index_de5ece87.e)(loginMessage)}</div>
	<div class="${"p-2"}"></div>
	<input type="${"submit"}" value="${"Login"}" class="${"btn btn-accent w-50 "}">
</form>`;
});
const Loggedin = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => $store = value);
  $$unsubscribe_store();
  return `<main>${(0, import_index_de5ece87.e)($store[0])} is logged in.
</main>`;
});
const prerender = true;
const Login = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => $store = value);
  $$unsubscribe_store();
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}<meta name="${"description"}" content="${"Plantronics Login Page"}" data-svelte="svelte-1whxlw3">`, ""}

${$store != null ? `${(0, import_index_de5ece87.v)(Loggedin, "AfterLogin").$$render($$result, {}, {}, {})}` : `${(0, import_index_de5ece87.v)(Login$1, "LoginComponent").$$render($$result, {}, {}, {})}`}
`;
});
