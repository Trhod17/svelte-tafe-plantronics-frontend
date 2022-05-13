<script context="module" lang="ts">
	import { store } from '../../hooks/auth';
	import PlantTab from '../../components/planttab.svelte';

	export let slug;

	/** @type {import('./[slug]').Load} */
	export async function load({ params }) {
		slug = params.slug;
		//console.log(params.slug);
		//data = await res.json();
		//slug = params.slug;
		return params;
	}
</script>

<script lang='ts'>
	import { onMount } from 'svelte';

	let data: any = [];

	onMount(async () => {

		let headersList = {
			Accept: '*/*',
			Authorization: 'Token ' + $store[1].replace(/[^a-zA-Z0-9 ]/g, '').replace('token', '')
		};

		const res = await fetch(`https://plantronics-backend.herokuapp.com/plants/` + slug, {
			method: 'get',
			headers: headersList
		})
			.then(function (response) {
				// if (response.status != 200) {
				// 	#data = writable(false);
				// }
				return response.json();
			})
			.then(function (plant) {
				//console.log(plant)
				data = plant;
				return data;
			});
	});
</script>


<svelte:head>
	{#if data != ''}
		<title>{data.data.attributes.plant_name}</title>
	{/if}
</svelte:head>

<main lang="en">
	<PlantTab active={0} {slug} />
	<div class="p-3" />
	<div class="card border w-10/12 text-base-content ml-6 bg-primary-focus">
		<div class="card-body whitespace-pre-wrap text-sm break-words">
			<p class="card-title" />
			<ul>
				{#if data != ''}
					<li class="card-title">{data.data.attributes.plant_name}</li>
					<li>Latin Name: {data.data.attributes.plant_latin_name}</li>
					<li>Family: {data.data.relationships.family.data.id}</li>
					<li>Genus: {data.data.relationships.genus.data.id}</li>
					<li><div
						tabindex="0"
						class="collapse collapse-arrow border border-base-300 bg-accent text-accent-content rounded-box"
					>
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">Description</div>
						<div class="collapse-content">
							<p>{data.data.attributes.plant_description}</p>
						</div>
					</div></li>
					<li>
						<img src={data.data.attributes.plant_image} alt={data.data.attributes.plant_name} />
					</li>
				{/if}
			</ul>
		</div>
	</div>
</main>
