<script context="module" lang="ts">
	import NoData from '../../../components/nodata.svelte';
	import PlantTab from '../../../components/planttab.svelte';
	import EdibleSection from '../../../components/edible.svelte';
	import { writable } from 'svelte/store';
import Help from '../../../components/help.svelte';

	export let edible: any = [];

	let slug;
	let data = writable(true);

	export async function load({ params }) {
		slug = params.slug;

		let headersList = {
			Accept: '*/*',
			'Content-Type': 'application/api.vnd+json'
		};

		let bodyContent = JSON.stringify({
			id: params.slug
		});

		return fetch('https://plantronics-backend.herokuapp.com/plantedible/', {
			method: 'POST',
			body: bodyContent,
			headers: headersList
		})
			.then(function (response) {
				if (response.status != 200) {
					data = writable(false);
				}
				return response.json();
			})
			.then(function (data) {
				edible = data;
				return data;
			});

	}
</script>

<script lang="ts">
	$: hasData = $data;
	$: num = 1;
</script>

<svelte:head>
	{#if edible != '' && hasData}
		<title>{edible.edible[0].plant__plant_name}</title>
	{:else}
		<title>Has no data</title>
	{/if}
</svelte:head>

<main lang="en">
	<PlantTab active={3} {slug} />
	<Help help="../help#plantpage"/>
	<div class="p-3" />
	<div class="card border w-10/12 text-base-content ml-6">
		{#if edible != '' && hasData}
			<p class="card-title mx-auto">{edible.edible[0].plant__plant_name}</p>
			{#each edible.edible as Edible}
				<div
					class="card-body whitespace-pre-wrap text-sm break-words border items-center text-center"
				>
					<p class="card-title">Edible Set {num}</p>
					<ul>
						<li>
							<EdibleSection
								image_text={'Fruit Image'}
								edible_text={'Is Fruit Edible: ' + Edible.is_fruit_edible}
								edible_image={Edible.fruit_image}
								edible_name={'fruit from: ' + Edible.plant__plant_name}
							/>
						</li>
						<li>
							<EdibleSection
								image_text={'Seed Image'}
								edible_text={'Are Seeds Edible: ' + Edible.are_seeds_edible}
								edible_image={Edible.seed_image}
								edible_name={'seed from: ' + Edible.plant__plant_name}
							/>
						</li>
						<li>
							<EdibleSection
								image_text={'Leaf Image'}
								edible_text={'Are Leaves Edible: ' + Edible.are_leaves_edible}
								edible_image={Edible.leaf_image}
								edible_name={'leaf from: ' + Edible.plant__plant_name}
							/>
						</li>
						<li>
							<EdibleSection
								image_text={'Root Image'}
								edible_text={'Are Roots Edible: ' + Edible.are_roots_edible}
								edible_image={Edible.root_image}
								edible_name={'root from: ' + Edible.plant__plant_name}
							/>
						</li>

						<li>
							<EdibleSection
								image_text={'Flower Image'}
								edible_text={'Are Flowers Edible: ' + Edible.are_flowers_edible}
								edible_image={Edible.flower_image}
								edible_name={'flower from: ' + Edible.plant__plant_name}
							/>
						</li>

						<li>Description: {Edible.edible_description}</li>
						<footer class="footer footer-center p-4 bg-primary-content text-base-content">
							<div>
								<p>Edible Card Created By: {Edible.created_by__username}</p>
							</div>
						</footer>
					</ul>
				</div>
			{/each}
		{:else}
			<NoData page={'edible data'} />
		{/if}
	</div>
</main>
