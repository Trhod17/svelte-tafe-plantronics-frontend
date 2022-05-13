<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { set_attributes } from 'svelte/internal';

	export let data: any = [];
	onMount(async () => {
		const res = await fetch(`https://plantronics-backend.herokuapp.com/getplants`);
		data = await res.json();
		//console.log(JSON.stringify(data, null, 2));
	});
</script>

{#if data != ''}
	<!-- {console.log(data)} -->
	<!-- {console.log(JSON.stringify(data, null, 2))} -->
	{#each data.plants as plant}
		<div
			class="card card-compact lg:card-side bg-success-content text-base-content shadow-xl w-12/12"
		>
			<figure>
				<img
					alt={plant.plant_name}
					src={'https://res.cloudinary.com/drsgxd2u2/image/upload/v1/' + plant.plant_image}
					width="150px"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{plant.plant_name}</h2>
				<p>
					<b>Latin Name:</b>
					{plant.plant_latin_name} <br />
					<b>Family:</b>
					{plant.family}
					<br />
					<b>Genus:</b>
					{plant.genus}
				</p>
				<div
					tabindex="0"
					class="collapse collapse-arrow border border-base-300 bg-base-100 text-base-content rounded-box"
				>
					<input type="checkbox" />
					<div class="collapse-title text-xl font-medium">Description</div>
					<div class="collapse-content">
						<p>{plant.plant_description}</p>
					</div>
				</div>
				<div class="card-actions justify-center">
					{#if $store != null}
						<a class="btn btn-info" role="button" sveltekit:prefetch href="plants/{plant.id}">
							Goto {plant.plant_name}
						</a>

						<a class="btn btn-info" role="button" sveltekit:prefetch href="/"> Add to My Plants </a>
					{/if}
				</div>
			</div>
		</div>
		<div class="p-2" />
	{/each}
{/if}

<style>
</style>
