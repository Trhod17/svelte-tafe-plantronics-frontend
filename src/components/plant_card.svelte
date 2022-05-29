<script lang="ts">
	import { store } from '../hooks/auth';
	import { onMount } from 'svelte';
	import { set_attributes } from 'svelte/internal';

	export let data: any = [];
	onMount(async () => {
		const res = await fetch(`https://plantronics-backend.herokuapp.com/getplants`);
		data = await res.json();
		loading = false;
		//console.log(JSON.stringify(data, null, 2));
	});

	$: loading = true;
</script>

{#if data != '' || !loading}
	<!-- {console.log(data)} -->
	<!-- {console.log(JSON.stringify(data, null, 2))} -->
	{#each data.plants as plant}
		<div class="card card-compact lg:card-side bg-success-content text-gray-300 shadow-xl w-12/12">
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
						<pre><i class="fa-solid fa-seedling fa-xl"> </i> Goto {plant.plant_name} </pre>
						</a>

						<a class="btn btn-base-200 btn-disabled" role="button" sveltekit:prefetch href="/profile/myplants"> Add to My Plants </a>
					{/if}
				</div>
			</div>
		</div>
		<div class="p-2" />
	{/each}
{:else}
	<svg
		role="status"
		class="w-13 h-13 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
		viewBox="0 0 100 101"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
			fill="currentColor"
		/>
		<path
			d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
			fill="currentFill"
		/>
	</svg>
{/if}

<style>
</style>
