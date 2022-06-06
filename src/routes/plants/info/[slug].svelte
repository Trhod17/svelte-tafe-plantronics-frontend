<script context="module" lang="ts">
	import NoData from '../../../components/nodata.svelte';
	import { writable } from 'svelte/store';
	import PlantTab from '../../../components/planttab.svelte';
import Help from '../../../components/help.svelte';

	export let info: any = [];

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

		return fetch('https://plantronics-backend.herokuapp.com/plantinfo/', {
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
				info = data;
				return data;
			});
	}
</script>

<script lang="ts">
	$: hasData = $data;
	$: num = 1;
</script>

<svelte:head>
	{#if info != '' && hasData}
		<title>{info.info[0].plant__plant_name}</title>
	{:else}
		<title>Has no data</title>
	{/if}
</svelte:head>

<main lang="en">
	<PlantTab active={1} {slug} />\
	<Help help="../help#plantpage"/>
	<div class="p-3" />
	<div class="card border w-10/12 text-base-content ml-6">
		{#if info != '' && hasData}
			<p class="card-title mx-auto">{info.info[0].plant__plant_name}</p>
			{#each info.info as Info}
				<div
					class="card-body whitespace-pre-wrap text-sm break-words border items-center text-center"
				>
					<p class="card-title">Info Set {num}</p>
					<ul>
						<li>Sun Preference: {Info.sun_preference}</li>
						<li>Climate: {Info.climate}</li>
						<li>Watering Schedule: {Info.time_frame}</li>
						<li>Planting Season: {Info.season}</li>
						<footer class="footer footer-center p-4 bg-primary-content text-base-content">
							<div>
								<p>Info Card Created By: {Info.created_by__username}</p>
							</div>
						</footer>
					</ul>
				</div>
			{/each}
		{:else}
			<NoData page={'info'} />
		{/if}
	</div>
</main>
