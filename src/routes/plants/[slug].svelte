<script context="module" lang="ts">
	export let data: any = [];
	export async function load({ params }) {
		const res = await fetch(`http://127.0.0.1:8000/plants/` + params.slug);
		data = await res.json();
		return data;
	}
</script>

<svelte:head>
	<title>{data.data.attributes.plant_name}</title>
</svelte:head>

<main lang="en">
	<div class="max-w-sm mx-auto py-6">
		<div>
			Plant ID: {data.data.id}
		</div>
		<div>
			Display Name: {data.data.attributes.plant_name}
		</div>
		<div>
			Latin Name: {data.data.attributes.plant_latin_name}
		</div>
		<div>
			Family: {data.data.relationships.family.data.id}
		</div>
		<div>
			Genus: {data.data.relationships.genus.data.id}
		</div>
		<div>
			Description: {data.data.attributes.plant_description}
		</div>
		<div>
			<img src={data.data.attributes.plant_image} alt="" />
		</div>
	</div>
</main>
