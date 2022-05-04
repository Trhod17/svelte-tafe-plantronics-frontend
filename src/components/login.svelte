<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// import { Badge, Form, FormGroup, Input, Label, Button } from 'sveltestrap';
	import { getUserDetails, store } from '../hooks/auth';
	import { createForm } from 'felte';
	import * as yup from 'yup';
	import YupPassword from 'yup-password';
	YupPassword(yup);
	import reporter from '@felte/reporter-tippy';
	import { validator } from '@felte/validator-yup';

	let submitted;

	// Setting validation messages
	// yup.setLocale({
	// 	mixed: {
	// 		default: 'Not valid',
	// 		required: 'Must not be empty'
	// 	},
	// 	string: {
	// 		default: 'Must be a string',
	// 		email: 'Must be a valid username',
	// 		min: 'Must not be empty'
	// 	}
	// });

	//.minUppercase(1).minNumbers(1).max(128).min(8)
	//.max(64).min(2)

	// Creating yup schema
	const schema = yup.object({
		account: yup.object({
			username: yup.string().required(),
			password: yup.string().required()
		})
	});

	$: loginMessage = '';

	// Creating the form
	const { form, data, unsetField, addField } = createForm({
		initialValues: {
			account: {
				username: '',
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
		extend: [validator({ schema }), reporter()]
		// Debounced async validation
		// debounced: {
		// 	timeout: 1000,
		// 	validate: async (values) => {
		// 		return new Promise((resolve) => {
		// 			setTimeout(() => {
		// 				// let headersList = {
		// 				// 	Accept: '*/*',
		// 				// 	'Content-Type': 'application/api.vnd+json',
		// 				// 	Authorization: 'Basic ZnJvbnRlbmQ6UTM4VFZCOVlOUlh6QWc='
		// 				// };
		// 				// let bodyContent = JSON.stringify({
		// 				// 	user: values.account.username
		// 				// });
		// 				// if (values.account.username != '') {
		// 				// 	fetch('http://127.0.0.1:8000/user/', {
		// 				// 		method: 'POST',
		// 				// 		body: bodyContent,
		// 				// 		headers: headersList
		// 				// 	}).then(function (response) {
		// 				// 		if (response.status == 302)
		// 				// 			usernameMessage = 'This username is already in use please pick another';
		// 				// 		if (response.status == 200) usernameMessage = 'This username is available';
		// 				// 	});
		// 				// }
		// 			}, 100);
		// 		});
		// 	}
		// }
	});

	let error = '';

	async function login() {
		if ($data.account.username != '' && $data.account.password != '') {
			const user = await getUserDetails($data.account.username, $data.account.password);
			if (user) {
				let userObj = [$data.account.username, user];
				$store = userObj;
				if (error) error = '';
			} else {
				error = 'Incorrect username and password.';
				loginMessage = error;
				console.log('Incorrect username and password.');
			}
		} else {
			loginMessage = 'Username and Password cannot be blank';
		}
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Plantronics Login Page" />
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
</svelte:head>

<form use:form on:submit|preventDefault={login} class="ml-5 w-3/4">
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
			required
			autocomplete="username"
		/>
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
			name="password2"
			id="password2"
			class="input input-bordered w-full max-w-xs"
			autocomplete="current=password"
		/>
	</div>
	<div class="p-2" />
	<input type="submit" value="Login" class="btn btn-accent w-50 " />
</form>

<style>
</style>
