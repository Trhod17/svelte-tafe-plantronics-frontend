<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  	import { Badge, Form, FormGroup, Input, Label, Button } from 'sveltestrap';
	import { getUserDetails } from '../hooks/auth';
	import { store } from '../hooks/auth';

	let username = '';
	let password = '';
	let error = ''

	async function login() {
		const user = await getUserDetails( username, password )

		if ( user ) {
			console.log(user)
			$store = user
			if ( error ) error = ''
		}
		else {
			error = 'Incorrect username and password.'
			console.log("Incorrect username and password.")
		}

	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main on:submit|preventDefault={login}>
	<Form>
		<FormGroup floating label="Username">
		  <Input placeholder="Username" type="text" id="username" bind:value={username}/>
		</FormGroup>
	  
		<FormGroup floating label="Password">
		  <Input placeholder="Password" type="password" id="password" bind:value={password}/>
		</FormGroup>
			<Input type="submit" value="Login" />
	</Form>
</main>

<style>
	
</style>
