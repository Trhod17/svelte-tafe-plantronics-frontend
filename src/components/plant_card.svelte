<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { set_attributes } from 'svelte/internal';

	const colors = 'success';

	export let data: any = [];
	onMount(async () => {
		const res = await fetch(`http://localhost:8000/plants/`);
		data = await res.json();
	});
	//console.log(JSON.stringify(plants, null, 2));
</script>

{#if data != ''}
	<!-- {console.log(data)} -->
	<!-- {console.log(JSON.stringify(data, null, 2))} -->
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
		<!-- <Card
			class="mb-3 border border-success text-white bg-success text-center text-decoration-none shadow-sm p-3 mb-5 rounded"
		>
			<CardHeader>
				<CardTitle><pre>{plant.attributes.plant_name}</pre></CardTitle>
			</CardHeader>
			<CardBody>
				<Image
					width="100"
					thumbnail
					alt={plant.attributes.plant_name}
					src={plant.attributes.plant_image}
				/>
				<CardSubtitle class="mt-2">
					<pre>Latin Name: {plant.attributes.plant_latin_name} <br /> Family: {plant.relationships
							.family.data.id} <br /> Genus: {plant.relationships.genus.data.id}</pre>
				</CardSubtitle>
				<CardText class="text-wrap" style="width: 100%;">
					<pre class="text-wrap" style="width: 100%;">{plant.attributes.plant_description}</pre>
				</CardText>
				svelte-ignore a11y-missing-content
				<a
					class="btn btn-dark"
					role="button"
					sveltekit:prefetch
					href="plants/{plant.attributes.plant_name}"
				>
					Goto {plant.attributes.plant_name}
				</a>
				{#if $store != null}
					<a class="btn btn-dark" role="button" sveltekit:prefetch href="#"> Add to My Plants </a>
				{/if}
			</CardBody>
			<CardFooter>Footer</CardFooter>
		</Card> -->
	{/each}
{/if}

<style>
</style>
