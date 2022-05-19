<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { registerUser, store } from '../hooks/auth';
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
							fetch('https://plantronics-backend.herokuapp.com/user/', {
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

	let error = '';

	async function register() {
		//console.log($data.account.username, $data.account.password);
		const user = await registerUser(
			$data.account.username,
			$data.account.firstname,
			$data.account.lastname,
			$data.account.email,
			$data.account.password
		);
		if (user != 'error') {
			let userObj = [$data.account.username, user];
			$store = userObj;
			if (error) error = '';
		} else {
			console.log('failed');
		}
	}

	let usernameTaken = false;
	const hasUpperCase = (str) => /[a-z]/.test(str) && /[A-Z]/.test(str);

	const hasNumber = (str) => /\d/.test(str);

	let password2 = '';

	$: canSubmit = false;
	$: usernameValid = false;
	$: passwordValid = false;
	$: fNameValid = false;
	$: lNameValid = false;
	$: emailValid = false;

	$: accept = false;
	$: unlock = accept ? unlockSubmit() : (accept = false);

	function unlockSubmit() {
		if ((usernameValid && passwordValid && fNameValid && lNameValid && emailValid) == true) {
			canSubmit = true;
			return true;
		}
	}

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
				fNameValid = false;
				return message;
			case 'lname':
				lNameValid = false;
				return message;
			default:
				return message;
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
				fNameValid = true;
				return message;
			case 'lname':
				lNameValid = true;
				return message;
			default:
				return message;
				break;
		}
	}

	function validateName(option, name) {
		const nameLength = name.length;

		if (nameLength == 0) {
			return inputInvalid(option, 'This is required');
		}
		if (nameLength <= 2) {
			return inputInvalid(option, 'This is to short');
		}
		if (nameLength >= 3) {
			return inputValid(option, 'This is valid');
		}
	}

	$: fNameMessage = validateName('fname', $data.account.firstname);
	$: lNameMessage = validateName('lname', $data.account.lastname);

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
	<meta name="description" content="Plantronics Registration Page" />
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
		<div class="flex flex-row">
			<i class:bg-error={!usernameValid} class:bg-primary={usernameValid} class="fa-solid fa-user place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto text-primary-content border" />
		<input
			on:input
			bind:value={$data.account.username}
			type="text"
			placeholder="Username"
			name="username"
			id="username"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			class:input-error={!usernameValid}
			class:input-success={usernameValid}
			required
			autocomplete="username"
		/>
		</div>
		<div>{usernameMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="firstname">
			<span class="label-text">First Name:</span>
		</label>
		<div class="flex flex-row">
			<i class:bg-error={!fNameValid} class:bg-primary={fNameValid} class="fa-solid fa-user place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto text-primary-content border" />
		<input
			on:input
			bind:value={$data.account.firstname}
			type="text"
			placeholder="First Name"
			name="firstname"
			id="firstname"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			required
			autocomplete="given-name"
			class:input-error={!fNameValid}
			class:input-success={fNameValid}
		/>
		</div>
		<div>{fNameMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="lastname">
			<span class="label-text">Last Name:</span>
		</label>
		<div class="flex flex-row">
			<i class:bg-error={!lNameValid} class:bg-primary={lNameValid} class="fa-solid fa-user place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto text-primary-content border" />
		<input
			on:input
			bind:value={$data.account.lastname}
			type="text"
			placeholder="Last Name"
			name="lastname"
			id="lastname"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			required
			autocomplete="family-name"
			class:input-error={!lNameValid}
			class:input-success={lNameValid}
		/>
		</div>
		<div>{lNameMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="email">
			<span class="label-text">Email:</span>
		</label>
		<div class="flex flex-row">
			<i class:bg-error={!emailValid} class:bg-primary={emailValid} class="fa-solid fa-envelope place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto text-primary-content border" />
		<input
			on:input
			bind:value={$data.account.email}
			type="email"
			placeholder="Email"
			name="email"
			id="email"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			required
			autocomplete="email"
			class:input-error={!emailValid}
			class:input-success={emailValid}
		/>
		</div>
		<div>{emailMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="password">
			<span class="label-text">Password:</span>
		</label>
		<div class="flex flex-row">
			<i class:bg-error={!passwordValid} class:bg-primary={passwordValid} class="fa-solid fa-key place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto text-primary-content border" />
		<input
			bind:value={$data.account.password}
			on:input
			type="password"
			placeholder="Password"
			name="password"
			id="password"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			required
			autocomplete="new-password"
			class:input-error={!passwordValid}
			class:input-success={passwordValid}
		/>
		</div>
		<div>{passwordMatch}</div>
		<div>{passwordMessage}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="password">
			<span class="label-text">Confirm Password:</span>
		</label>
		<div class="flex flex-row">
			<i class="fa-solid fa-key place-self-beginning bg-primary flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto text-primary-content border" />
		<input
			bind:value={password2}
			on:input
			type="password"
			placeholder="Confirm Password"
			name="password"
			id="password2"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			autocomplete="new-password"
			required
		/>
		</div>
		<div>{passwordMatch}</div>
		<div>{passwordMessage2}</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label cursor-pointer">
			<span class="label-text">Accept Terms and Conditions</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={accept} on:input />
		</label>
		<input type="submit" value="Register" disabled={!canSubmit} class="btn btn-accent w-50 " />
	</div>
</form>

<style>
</style>
