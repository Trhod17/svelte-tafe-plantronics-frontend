<script context="module" lang="ts">
	import NoData from '../../../components/nodata.svelte';
	import PlantTab from '../../../components/planttab.svelte';
	import { writable } from 'svelte/store';

	export let soil: any = [];

	let slug;
	let data = writable(true);

	export async function load({ params }) {
		slug = params.slug;

		let headersList = {
			Accept: '*/*',
			'Content-Type': 'application/api.vnd+json'
		};

		let bodyContent = JSON.stringify({
			id: slug
		});

		return fetch('http://127.0.0.1:8000/plantsoil/', {
			method: 'POST',
			body: bodyContent,
			headers: headersList
		})
			.then(function (response) {
				if (response.status == 404) {
					data = writable(false);
				}
				return response.json();
			})
			.then(function (data) {
				soil = data;
				return data;
			});
	}
</script>

<script lang="ts">
	$: hasData = $data;
	$: num = 1;
</script>

<svelte:head>
	{#if soil != '' && hasData}
		<title>{soil.soil[0].plants__plant_name}</title>
	{:else}
		<title>Has no data</title>
	{/if}
</svelte:head>

<main lang="en">
	<PlantTab active={2} {slug} />
	<div class="p-3" />
	<div class="card border w-10/12 text-base-content ml-6">
		{#if soil != '' && hasData}
			<p class="card-title mx-auto">{soil.soil[0].plants__plant_name}</p>
			{#each soil.soil as Soil}
				<div
					class="card-body whitespace-pre-wrap text-sm break-words border items-center text-center"
				>
					<p class="card-title">Soil Set {num}</p>
					<ul>
						<li>Soil Preference: {Soil.preference}</li>
						<li>Preference Description: {Soil.soil_description}</li>
						<footer class="footer footer-center p-4 bg-primary-content text-base-content">
							<div>
								<p>Soil Card Created By: {Soil.created_by__username}</p>
							</div>
						</footer>
					</ul>
				</div>
			{/each}
		{:else}
			<NoData page={'soil preference data'} />
		{/if}
	</div>
</main>
