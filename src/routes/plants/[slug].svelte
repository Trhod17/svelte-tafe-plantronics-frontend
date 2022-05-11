<script context="module" lang="ts">
	import PlantTab from '../../components/planttab.svelte';

	export let data: any = [];

	let slug;

	export async function load({ params }) {
		//console.log(params.slug);
		const res = await fetch(`http://127.0.0.1:8000/plants/` + params.slug);
		data = await res.json();
		slug = params.slug;
		return data;
	}
</script>

<script lang="ts">
</script>

<svelte:head>
	{#if data != ''}
		<title>{data.data.attributes.plant_name}</title>
	{/if}
</svelte:head>

<main lang="en">
	<PlantTab active={0} {slug} />
	<div class="p-3" />
	<div class="card border w-10/12 text-base-content ml-6">
		<div class="card-body whitespace-pre-wrap text-sm break-words">
			<p class="card-title" />
			<ul>
				{#if data != ''}
					<p class="card-title" />
					<li>Common Name: {data.data.attributes.plant_name}</li>
					<li>Latin Name: {data.data.attributes.plant_latin_name}</li>
					<li>Family: {data.data.relationships.family.data.id}</li>
					<li>Genus: {data.data.relationships.genus.data.id}</li>
					<li>Description: {data.data.attributes.plant_description}</li>
					<li>
						<img src={data.data.attributes.plant_image} alt={data.data.attributes.plant_name} />
					</li>
				{/if}
			</ul>
		</div>
	</div>
</main>
