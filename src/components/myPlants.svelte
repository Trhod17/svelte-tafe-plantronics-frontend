<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { set_attributes } from 'svelte/internal';

	const colors = 'success';

	export let data: any = [];
	onMount(async () => {
		let headersList = {
			Accept: '*/*',
			'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
			Authorization: 'Token ' + $store[1].replace(/[^a-zA-Z0-9 ]/g, '').replace('token', '')
		};
        const res = await fetch('http://localhost:8000/userplant/' + $store[0], {
			method: 'GET',
			headers: headersList
		});
		data = await res.json();
	});
	//console.log(JSON.stringify(plants, null, 2));
</script>

<!-- {#if data != ''}
	{#each data.data as plant}
		<div class="card card-compact lg:card-side bg-success-content text-base-content shadow-xl">
			<figure>
				<img alt={plant.attributes.plant_name} src={plant.attributes.plant_image} width="150px" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{plant.attributes.plant_name}</h2>
				<p>
					<b>Latin Name:</b>
					{plant.attributes.plant_latin_name} <br />
					<b>Family:</b>
					{plant.relationships.family.data.id}
					<br />
					<b>Genus:</b>
					{plant.relationships.genus.data.id}
				</p>
				<div
					tabindex="0"
					class="collapse collapse-arrow border border-base-300 bg-base-100 text-base-content rounded-box"
				>
					<input type="checkbox" />
					<div class="collapse-title text-xl font-medium">Description</div>
					<div class="collapse-content">
						<p>{plant.attributes.plant_description}</p>
					</div>
				</div>
				<div class="card-actions justify-center">
					<a
						class="btn btn-info"
						role="button"
						sveltekit:prefetch
						href="plants/{plant.attributes.plant_name}"
					>
						Goto {plant.attributes.plant_name}
					</a>
					{#if $store != null}
						<a class="btn btn-info" role="button" sveltekit:prefetch href="#"> Add to My Plants </a>
					{/if}
				</div>
			</div>
		</div>
		<div class="p-2" />
	{/each}
{/if} -->

<style>
</style>
