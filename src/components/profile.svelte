<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import MyPlants from './myPlants.svelte';

	export let data: any = [];

	onMount(async () => {
		let headersList = {
			Accept: '*/*',
			Authorization: 'Token ' + $store[1].replace(/[^a-zA-Z0-9 ]/g, '').replace('token', '')
		};

		const res = await fetch('http://127.0.0.1:8000/users/' + $store[0], {
			method: 'GET',
			headers: headersList
		});
		data = await res.json();
	});
	let activeTab = 0;
</script>

<div class="tabs">
	<button
		class="tab tab-bordered"
		class:tab-active={activeTab == 0}
		on:click={() => (activeTab = 0)}>Profile</button
	>
	<button
		class="tab tab-bordered"
		class:tab-active={activeTab == 1}
		on:click={() => (activeTab = 1)}>My Plants</button
	>
	<button
		class="tab tab-bordered"
		class:tab-active={activeTab == 2}
		on:click={() => (activeTab = 2)}>Tab 3</button
	>
</div>
<div class="card border w-9/12 text-base-content " class:hidden={activeTab != 0}>
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
<div class="card" class:hidden={activeTab != 1}><MyPlants /></div>
<div class="card" class:hidden={activeTab != 2}>Content 3</div>
