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
  default: () => Register,
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
function passwordComparison(pass1, pass2) {
  const pass1Length = pass1.length;
  const pass2Length = pass2.length;
  const sizeError = "Passwords dont match";
  const matchError = "Passwords dont match";
  if (pass1Length == 0 || pass2Length) {
    if (pass1Length != pass2Length) {
      return sizeError;
    }
    if (pass1 != pass2) {
      return matchError;
    }
    return "";
  }
  return "";
}
const Registration = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let canSubmit;
  let usernameValid;
  let passwordValid;
  let fNameValid;
  let lNameValid;
  let emailValid;
  let accept;
  let fNameMessage;
  let lNameMessage;
  let emailMessage;
  let passwordMessage;
  let passwordMessage2;
  let passwordMatch;
  let usernameMessage;
  let $data, $$unsubscribe_data;
  let $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => value);
  (0, import_yup_password.default)(yup);
  const schema = yup.object({
    account: yup.object({
      username: yup.string().required().max(64).min(2),
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().minUppercase(1).minNumbers(1).max(128).min(8)
    })
  });
  const { form, data, unsetField, addField } = (0, import_create_form_80011629.c)({
    initialValues: {
      account: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      extras: { tags: [{ value: "" }] }
    },
    onSubmit(values) {
    },
    extend: [(0, import_validator_yup.validator)({ schema }), (0, import_reporter_tippy.default)()],
    debounced: {
      timeout: 1e3,
      validate: async (values) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            let headersList = {
              Accept: "*/*",
              "Content-Type": "application/api.vnd+json",
              Authorization: "Basic ZnJvbnRlbmQ6UTM4VFZCOVlOUlh6QWc="
            };
            let bodyContent = JSON.stringify({ user: values.account.username });
            if (values.account.username != "") {
              fetch("https://plantronics-backend.herokuapp.com/user/", {
                method: "POST",
                body: bodyContent,
                headers: headersList
              }).then(function(response) {
                if (response.status == 302) {
                  usernameTaken = true;
                  usernameMessage = inputInvalid("user", "This username is already in use please pick another");
                }
                if (response.status == 200) {
                  usernameTaken = false;
                  usernameMessage = inputValid("user", "This username is available");
                }
              });
            }
          }, 100);
        });
      }
    }
  });
  $$unsubscribe_data = (0, import_index_de5ece87.a)(data, (value) => $data = value);
  let usernameTaken = false;
  const hasUpperCase = (str) => /[a-z]/.test(str) && /[A-Z]/.test(str);
  const hasNumber = (str) => /\d/.test(str);
  let password2 = "";
  function unlockSubmit() {
    if ((usernameValid && passwordValid && fNameValid && lNameValid && emailValid) == true) {
      canSubmit = true;
      return true;
    }
  }
  function inputInvalid(input, message) {
    switch (input) {
      case "user":
        usernameValid = false;
        return message;
      case "pass":
        passwordValid = false;
        return message;
      case "email":
        emailValid = false;
        return message;
      case "fname":
        fNameValid = false;
        return message;
      case "lname":
        lNameValid = false;
        return message;
      default:
        return message;
    }
  }
  function inputValid(input, message) {
    switch (input) {
      case "user":
        usernameValid = true;
        return message;
      case "pass":
        passwordValid = true;
        return message;
      case "email":
        emailValid = true;
        return message;
      case "fname":
        fNameValid = true;
        return message;
      case "lname":
        lNameValid = true;
        return message;
      default:
        return message;
    }
  }
  function validateName(option, name) {
    const nameLength = name.length;
    if (nameLength == 0) {
      return inputInvalid(option, "This is required");
    }
    if (nameLength <= 2) {
      return inputInvalid(option, "This is to short");
    }
    if (nameLength >= 3) {
      return inputValid(option, "This is valid");
    }
  }
  function validateEmail(email) {
    const isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if (isValid) {
      return inputValid("email", "Email is valid");
    } else {
      return inputInvalid("email", "Email is not valid");
    }
  }
  function validatePassword(password) {
    const passwordLength = password.length;
    if (passwordLength === 0)
      return inputInvalid("pass", "Password Required");
    if (!hasUpperCase(password))
      return inputInvalid("pass", "Passwords need to have at least 1 Uppercase letter");
    if (!hasNumber(password))
      return inputInvalid("pass", "Passwords need to have at least 1 number");
    if (passwordLength >= 8)
      return inputValid("pass", "Your password is secure");
    if (passwordLength <= 7)
      return inputInvalid("pass", "Password must be a minium of 8 characters in length");
    return inputInvalid("pass", "Your password is not secure");
  }
  function validateUsername(username) {
    const usernameLength = username.length;
    if (usernameLength === 0)
      return inputInvalid("user", "Username Required");
    if (usernameLength >= 65)
      return inputInvalid("user", "Username is to long maximum 64 characters");
    if (usernameLength === 1)
      return inputInvalid("user", "Username minimum 2 characters long");
    return inputValid("user", "");
  }
  canSubmit = false;
  usernameValid = false;
  passwordValid = false;
  fNameValid = false;
  lNameValid = false;
  emailValid = false;
  accept = false;
  accept ? unlockSubmit() : accept = false;
  fNameMessage = validateName("fname", $data.account.firstname);
  lNameMessage = validateName("lname", $data.account.lastname);
  emailMessage = validateEmail($data.account.email);
  passwordMessage = validatePassword($data.account.password);
  passwordMessage2 = validatePassword(password2);
  passwordMatch = passwordComparison($data.account.password, password2);
  usernameMessage = validateUsername($data.account.username);
  $$unsubscribe_data();
  $$unsubscribe_store();
  return `${$$result.head += `${$$result.title = `<title>Register</title>`, ""}<meta name="${"description"}" content="${"Plantronics Registration Page"}" data-svelte="svelte-hxvejm"><script src="${"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}" integrity="${"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"}" crossorigin="${"anonymous"}" data-svelte="svelte-hxvejm"><\/script>`, ""}



<form class="${"ml-5 w-3/4"}"><div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"username"}"><span class="${"label-text"}">Username:</span></label>
		<label class="${"input-group input-group-lg"}"><span class="${[
    "fa-solid fa-user fa-xl label-text",
    (!usernameValid ? "bg-error" : "") + " " + (usernameValid ? "bg-primary" : "")
  ].join(" ").trim()}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"text"}" placeholder="${"Username"}" name="${"username"}" id="${"username"}" class="${[
    "input input-bordered w-full max-w-xs px-10",
    (!usernameValid ? "input-error" : "") + " " + (usernameValid ? "input-success" : "")
  ].join(" ").trim()}" required autocomplete="${"username"}"${(0, import_index_de5ece87.f)("value", $data.account.username, 0)}></label>
		<div>${(0, import_index_de5ece87.e)(usernameMessage)}</div></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"firstname"}"><span class="${"label-text"}">First Name:</span></label>
		<label class="${"input-group input-group-lg"}"><span class="${[
    "fa-solid fa-user",
    (!fNameValid ? "bg-error" : "") + " " + (fNameValid ? "bg-primary" : "")
  ].join(" ").trim()}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"text"}" placeholder="${"First Name"}" name="${"firstname"}" id="${"firstname"}" class="${[
    "input input-bordered w-full max-w-xs px-10",
    (!fNameValid ? "input-error" : "") + " " + (fNameValid ? "input-success" : "")
  ].join(" ").trim()}" required autocomplete="${"given-name"}"${(0, import_index_de5ece87.f)("value", $data.account.firstname, 0)}></label>
		<div>${(0, import_index_de5ece87.e)(fNameMessage)}</div></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"lastname"}"><span class="${"label-text"}">Last Name:</span></label>
		<label class="${"input-group input-group-lg"}"><span class="${[
    "fa-solid fa-user",
    (!lNameValid ? "bg-error" : "") + " " + (lNameValid ? "bg-primary" : "")
  ].join(" ").trim()}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"text"}" placeholder="${"Last Name"}" name="${"lastname"}" id="${"lastname"}" class="${[
    "input input-bordered w-full max-w-xs px-10",
    (!lNameValid ? "input-error" : "") + " " + (lNameValid ? "input-success" : "")
  ].join(" ").trim()}" required autocomplete="${"family-name"}"${(0, import_index_de5ece87.f)("value", $data.account.lastname, 0)}></label>
		<div>${(0, import_index_de5ece87.e)(lNameMessage)}</div></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"email"}"><span class="${"label-text"}">Email:</span></label>
		<label class="${"input-group input-group-lg"}"><span class="${[
    "fa-solid fa-envelope",
    (!emailValid ? "bg-error" : "") + " " + (emailValid ? "bg-primary" : "")
  ].join(" ").trim()}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"email"}" placeholder="${"Email"}" name="${"email"}" id="${"email"}" class="${[
    "input input-bordered w-full max-w-xs px-10",
    (!emailValid ? "input-error" : "") + " " + (emailValid ? "input-success" : "")
  ].join(" ").trim()}" required autocomplete="${"email"}"${(0, import_index_de5ece87.f)("value", $data.account.email, 0)}></label>
		<div>${(0, import_index_de5ece87.e)(emailMessage)}</div></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"password"}"><span class="${"label-text"}">Password:</span></label>
		<label class="${"input-group input-group-xl"}"><span class="${[
    "fa-solid fa-key",
    (!passwordValid ? "bg-error" : "") + " " + (passwordValid ? "bg-primary" : "")
  ].join(" ").trim()}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"password"}" placeholder="${"Password"}" name="${"password"}" id="${"password"}" class="${[
    "input input-bordered w-full max-w-xspx-10",
    (!passwordValid ? "input-error" : "") + " " + (passwordValid ? "input-success" : "")
  ].join(" ").trim()}" required autocomplete="${"new-password"}"${(0, import_index_de5ece87.f)("value", $data.account.password, 0)}></label>
		<div>${(0, import_index_de5ece87.e)(passwordMatch)}</div>
		<div>${(0, import_index_de5ece87.e)(passwordMessage)}</div></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label"}" for="${"password"}"><span class="${"label-text"}">Confirm Password:</span></label>
		<label class="${"input-group input-group-xl"}"><span class="${"fa-solid fa-key bg-primary"}" style="${"color: black; font-size: 1.3em;"}"></span>
			<input type="${"password"}" placeholder="${"Confirm Password"}" name="${"password"}" id="${"password2"}" class="${"input input-bordered w-full max-w-xs px-10"}" autocomplete="${"new-password"}" required${(0, import_index_de5ece87.f)("value", password2, 0)}></label>
		<div>${(0, import_index_de5ece87.e)(passwordMatch)}</div>
		<div>${(0, import_index_de5ece87.e)(passwordMessage2)}</div></div>
	<div class="${"p-2"}"></div>
	<div class="${"form-control w-full max-w-xs"}"><label class="${"label cursor-pointer"}"><span class="${"label-text"}">Accept Terms and Conditions</span>
			<input type="${"checkbox"}" class="${"toggle toggle-primary"}"${(0, import_index_de5ece87.f)("checked", accept, 1)}></label>
		<input type="${"submit"}" value="${"Register"}" ${!canSubmit ? "disabled" : ""} class="${"btn btn-accent w-50 "}"></div>
</form>`;
});
const Registered = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => $store = value);
  $$unsubscribe_store();
  return `<main>Congratulations ${(0, import_index_de5ece87.e)($store[0])} Your account has been successfully created
</main>`;
});
const prerender = true;
const Register = (0, import_index_de5ece87.c)(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  $$unsubscribe_store = (0, import_index_de5ece87.a)(import_auth_68aeceae.s, (value) => $store = value);
  $$unsubscribe_store();
  return `${$$result.head += `${$$result.title = `<title>Registration</title>`, ""}<meta name="${"description"}" content="${"Plantronics Registration Page"}" data-svelte="svelte-gl1uj9">`, ""}

${$store != null ? `${(0, import_index_de5ece87.v)(Registered, "AfterRegistration").$$render($$result, {}, {}, {})}` : `${(0, import_index_de5ece87.v)(Registration, "RegistrationComponent").$$render($$result, {}, {}, {})}`}`;
});
