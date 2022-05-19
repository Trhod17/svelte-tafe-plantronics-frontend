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
	});

	let error = '';

	async function login() {
		if ($data.account.username != '' && $data.account.password != '') {
			const user = await getUserDetails($data.account.username, $data.account.password);
			if (user != 'error') {
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
		<div class=" flex flex-row">
		<i class="fa-regular fa-user place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto bg-primary text-primary-content border" />
		<input
			on:input
			bind:value={$data.account.username}
			type="text"
			placeholder="Username"
			name="username"
			id="username"
			class="input input-bordered w-100 max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			required
			autocomplete="username"
		>
	</div>
	</div>
	<div class="p-2" />
	<div class="form-control w-full max-w-xs">
		<label class="label" for="password">
			<span class="label-text">Password:</span>
		</label>
		<div class="flex flex-row">
			<i class="fa-solid fa-key place-self-beginning flex-1 mx-0 fa-xl px-3 pt-6 pb-5 rounded-l-full align-bottom my-auto bg-primary text-primary-content border" />
		<input
			bind:value={$data.account.password}
			on:input
			type="password"
			placeholder="Password"
			name="password"
			id="password"
			class="input input-bordered w-full max-w-xs mx-0 px-10 rounded-l-none flex-initial"
			autocomplete="current=password"
		/>
		</div>
	</div>
	<div>{loginMessage}</div>
	<div class="p-2" />
	<input type="submit" value="Login" class="btn btn-accent w-50 " />
</form>

<style>
</style>
