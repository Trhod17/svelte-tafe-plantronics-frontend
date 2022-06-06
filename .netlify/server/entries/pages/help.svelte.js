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
  default: () => Help
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2c175e7b = require("../../chunks/index-2c175e7b.js");
const HelpObject = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { body } = $$props;
  let { anchor } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0)
    $$bindings.anchor(anchor);
  return `<a${(0, import_index_2c175e7b.d)("id", anchor, 0)}><div tabindex="${"0"}" class="${"collapse collapse-arrow border border-base-100 mb-5 mx-auto bg-primary rounded-box text-primary-content"}"><input type="${"checkbox"}"> 
    <div class="${"collapse-title text-xl font-medium text-justify place-items-center"}">${(0, import_index_2c175e7b.e)(title)}</div>
    
    <div class="${"collapse-content border-t-2 border-primary-content pt-1 text-left"}"><pre class="${"whitespace-pre-line overflow-auto"}">${(0, import_index_2c175e7b.e)(body)}</pre></div></div></a>`;
});
const Help = (0, import_index_2c175e7b.c)(($$result, $$props, $$bindings, slots) => {
  let myplants = `
How to add plants to MyPlants
------------------------------

The MyPlants system is currently not available,
and as such plants cannot be added to MyPlants.
`;
  let plantspage = `
The plants page
-------------------------------

The plants page has 4 main areas
Plant, Info, Soil Preferences and Edibility.

To swap between these sections use 
the tab bar located below the navigation menu.
`;
  let login = `
How to login to your account?
------------------------------

Use the navigation menu to go to 
the login page and enter your 
username and password, and click submit.
`;
  let register = `
How to create an account?
------------------------------

Use the navigation menu to go to 
the signup page, and add your 
username, firstname, lastname, email, and password (twice).

Then accept the terms and conditions and click the signup button.
`;
  return `${$$result.head += `${$$result.title = `<title>Help Center</title>`, ""}`, ""}

<main class="${"w-full"}"><h1 class="${"text-center text-2xl p-5"}">Help Center</h1>
    ${(0, import_index_2c175e7b.v)(HelpObject, "HelpObject").$$render($$result, {
    title: "Create Account",
    body: register,
    anchor: "register"
  }, {}, {})}
    ${(0, import_index_2c175e7b.v)(HelpObject, "HelpObject").$$render($$result, {
    title: "Login",
    body: login,
    anchor: "login"
  }, {}, {})}
    ${(0, import_index_2c175e7b.v)(HelpObject, "HelpObject").$$render($$result, {
    title: "Plants Page",
    body: plantspage,
    anchor: "plantspage"
  }, {}, {})}
    ${(0, import_index_2c175e7b.v)(HelpObject, "HelpObject").$$render($$result, {
    title: "My Plants",
    body: myplants,
    anchor: "myplants"
  }, {}, {})}

    <p>If something is not working as expected don&#39;t hestitate to contact the administrator at <a href="${"mailto:hedgehog.thomas@gmail.com"}" class="${"link-primary"}">hedgehog.thomas@gmail.com</a></p></main>`;
});
