<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { set_attributes } from 'svelte/internal';
	import PlantCard from './plant_card.svelte';
	import Planttab from './planttab.svelte';

	const colors = 'success';

	export let data: any = [];
	onMount(async () => {
		let headersList = {
			Accept: '*/*',
			Authorization: 'Token ' + $store[1].replace(/[^a-zA-Z0-9 ]/g, '').replace('token', '')
		};
        const res = await fetch('https://plantronics-backend.herokuapp.com/myplants/', {
			method: 'GET',
			headers: headersList
		});
		data = await res.json();
		//console.log(data)
	});
	//console.log(JSON.stringify(plants, null, 2));
</script>

{#if data != ''}
	{#each data.userplants as plant}
		<div class="card card-compact lg:card-side bg-success-content text-base-content shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Plant: {plant.plant__plant_name}</h2>
				<h2 class="card-title">Owned By: {plant.user__username}</h2>
			</div>
		</div>
		<div class="p-2" />
	{/each}
{/if}

<style>
</style>
