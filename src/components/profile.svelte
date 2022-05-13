<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import ProfileTab from './profiletab.svelte';

	export let data: any = [];

	onMount(async () => {
		let headersList = {
			Accept: '*/*',
			Authorization: 'Token ' + $store[1].replace(/[^a-zA-Z0-9 ]/g, '').replace('token', '')
		};

		const res = await fetch('https://plantronics-backend.herokuapp.com/users/' + $store[0], {
			method: 'GET',
			headers: headersList
		});
		data = await res.json();
	});

</script>

<ProfileTab active={0}/>

<div class="card border w-9/12 text-base-content ">
	<div class="card-body whitespace-pre-wrap text-sm break-words">
		<p class="card-title">My Profile</p>
		<ul>
			{#if data != ''}
				<li>Username: {data.data.attributes.username}</li>
				<li>First Name: {data.data.attributes.first_name}</li>
				<li>Last Name: {data.data.attributes.last_name}</li>
				<li>Email: {data.data.attributes.email}</li>
			{/if}
		</ul>
	</div>
</div>