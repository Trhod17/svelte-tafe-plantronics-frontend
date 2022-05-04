<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { getUserDetails, store } from '../hooks/auth';
	import { createForm } from 'felte';
	import * as yup from 'yup';
	import YupPassword from 'yup-password';
	YupPassword(yup);
	import reporter from '@felte/reporter-tippy';
	import { validator } from '@felte/validator-yup';
	import { invalid_attribute_name_character } from 'svelte/internal';

	// Creating yup schema
	const schema = yup.object({
		account: yup.object({
			username: yup.string().required().max(64).min(2),
			firstname: yup.string().required(),
			lastname: yup.string().required(),
			email: yup.string().email().required(),
			password: yup.string().required().minUppercase(1).minNumbers(1).max(128).min(8)
		})
	});

	// Creating the form
	const { form, data, unsetField, addField } = createForm({
		initialValues: {
			account: {
				username: '',
				firstname: '',
				lastname: '',
				email: '',
				password: ''
			},
			extras: {
				tags: [
					{
						value: ''
					}
				]
			}
		},
		onSubmit(values) {},
		extend: [validator({ schema }), reporter()],
		debounced: {
			timeout: 1000,
			validate: async (values) => {
				return new Promise((resolve) => {
					setTimeout(() => {
						let headersList = {
							Accept: '*/*',
							'Content-Type': 'application/api.vnd+json',
							Authorization: 'Basic ZnJvbnRlbmQ6UTM4VFZCOVlOUlh6QWc='
						};
						let bodyContent = JSON.stringify({
							user: values.account.username
						});
						if (values.account.username != '') {
							fetch('http://127.0.0.1:8000/user/', {
								method: 'POST',
								body: bodyContent,
								headers: headersList
							}).then(function (response) {
								if (response.status == 302) {
									usernameTaken = true;

									usernameMessage = inputInvalid(
										'user',
										'This username is already in use please pick another'
									);
								}
								if (response.status == 200) {
									usernameTaken = false;
									usernameMessage = inputValid('user', 'This username is available');
								}
							});
						}
					}, 100);
				});
			}
		}
	});

	// let error = '';

	// async function login() {
	// 	//console.log($data.account.username, $data.account.password);
	// 	const user = await getUserDetails($data.account.username, $data.account.password);
	// 	if (user) {
	// 		let userObj = [$data.account.username, user];
	// 		$store = userObj;
	// 		if (error) error = '';
	// 	} else {
	// 		error = 'Incorrect username and password.';
	// 		loginMessage = error;
	// 		console.log('Incorrect username and password.');
	// 	}
	// }

	async function register() {}

	let usernameTaken = false;
	const hasUpperCase = (str) => /[a-z]/.test(str) && /[A-Z]/.test(str);

	const hasNumber = (str) => /\d/.test(str);

	function allowSubmit() {}

	let password2 = '';
	let isDisabled: boolean = true;

	let canSubmit = false;
	$: usernameValid = false;
	$: passwordValid = false;
	$: fNameValid = false;
	$: lNameValid = false;
	$: emailValid = false;

	function inputInvalid(input, message) {
		switch (input) {
			case 'user':
				usernameValid = false;
				return message;
			case 'pass':
				passwordValid = false;
				return message;
			case 'email':
				emailValid = false;
				return message;
			case 'fname':

			case 'lname':

			default:
				return message;
				break;
		}
	}

	function inputValid(input, message) {
		//inputVar = 'input-success';
		switch (input) {
			case 'user':
				usernameValid = true;
				return message;
			case 'pass':
				passwordValid = true;
				return message;
			case 'email':
				emailValid = true;
				return message;
			case 'fname':

			case 'lname':

			default:
				return message;
				break;
		}
	}

	function validateEmail(email) {
		const isValid =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			);
		if (isValid) {
			return inputValid('email', 'Email is valid');
		} else {
			return inputInvalid('email', 'Email is not valid');
		}
	}

	$: emailMessage = validateEmail($data.account.email);

	function validatePassword(password) {
		const passwordLength = password.length;
		if (passwordLength === 0) return inputInvalid('pass', 'Password Required');
		if (!hasUpperCase(password))
			return inputInvalid('pass', 'Passwords need to have at least 1 Uppercase letter');
		if (!hasNumber(password))
			return inputInvalid('pass', 'Passwords need to have at least 1 number');
		if (passwordLength >= 8) return inputValid('pass', 'Your password is secure');
		if (passwordLength <= 7)
			return inputInvalid('pass', 'Password must be a minium of 8 characters in length');
		return inputInvalid('pass', 'Your password is not secure');
	}

	function passwordComparison(pass1, pass2) {
		const pass1Length = pass1.length;
		const pass2Length = pass2.length;

		const sizeError = 'Passwords dont match';
		const matchError = 'Passwords dont match';

		if (pass1Length == 0 || pass2Length) {
			if (pass1Length != pass2Length) {
				return sizeError;
			}
			if (pass1 != pass2) {
				return matchError;
			}
			return '';
		}
		return '';
	}

	$: passwordMessage = validatePassword($data.account.password);
	$: passwordMessage2 = validatePassword(password2);
	$: passwordMatch = passwordComparison($data.account.password, password2);

	function validateUsername(username) {
		const usernameLength = username.length;
		if (usernameLength === 0) return inputInvalid('user', 'Username Required');
		if (usernameLength >= 65)
			return inputInvalid('user', 'Username is to long maximum 64 characters');
		if (usernameLength === 1) return inputInvalid('user', 'Username minimum 2 characters long');
		return inputValid('user', '');
	}

	$: usernameMessage = validateUsername($data.account.username);
</script>

<svelte:head>
	<title>Register</title>
	<meta name="description" content="Plantronics Login Page" />
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</svelte:head>

<!--  -->

<form use:form on:submit|preventDefault={register} class="ml-5 w-3/4">
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="username">
			<span class="label-text">Username:</span>
		</label>
		<input
			on:input
			bind:value={$data.account.username}
			type="text"
			placeholder="Username"
			name="username"
			id="username"
			class="input input-bordered w-full max-w-xs"
			class:input-error={!usernameValid}
			class:input-success={usernameValid}
			required
			autocomplete="username"
		/>
		<div>{usernameMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="firstname">
			<span class="label-text">First Name:</span>
		</label>
		<input
			on:input
			bind:value={$data.account.firstname}
			type="text"
			placeholder="First Name"
			name="firstname"
			id="firstname"
			class="input input-bordered w-full max-w-xs"
			required
			autocomplete="given-name"
		/>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="lastname">
			<span class="label-text">Last Name:</span>
		</label>
		<input
			on:input
			bind:value={$data.account.lastname}
			type="text"
			placeholder="Last Name"
			name="lastname"
			id="lastname"
			class="input input-bordered w-full max-w-xs"
			required
			autocomplete="family-name"
		/>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="email">
			<span class="label-text">Email:</span>
		</label>
		<input
			on:input
			bind:value={$data.account.email}
			type="email"
			placeholder="Email"
			name="email"
			id="email"
			class="input input-bordered w-full max-w-xs"
			required
			autocomplete="email"
			class:input-error={!emailValid}
			class:input-success={emailValid}
		/>
		<div>{emailMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="password">
			<span class="label-text">Password:</span>
		</label>
		<input
			bind:value={$data.account.password}
			on:input
			type="password"
			placeholder="Password"
			name="password"
			id="password"
			class="input input-bordered w-full max-w-xs"
			required
			autocomplete="new-password"
			class:input-error={!passwordValid}
			class:input-success={passwordValid}
		/>
		<div>{passwordMatch}</div>
		<div>{passwordMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="password">
			<span class="label-text">Confirm Password:</span>
		</label>
		<input
			bind:value={password2}
			on:input
			type="password"
			placeholder="Confirm Password"
			name="password"
			id="password2"
			class="input input-bordered w-full max-w-xs"
			autocomplete="new-password"
			required
		/>
		<div>{passwordMatch}</div>
		<div>{passwordMessage2}</div>
	</div>
	<div class="p-2" />
	<input type="submit" value="Register" disabled={!canSubmit} class="btn btn-accent w-50 " />
</form>

<style>
</style>
