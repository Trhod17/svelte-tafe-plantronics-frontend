<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PlantCard from '../components/plant_card.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<h1 class="text-white">HOME</h1>

	<PlantCard />
</main>

<style>
	main {
		font-size: 1.5rem;
		margin: 1rem;
		width: 90%;
		padding: 1rem;
		color: gray;
		justify-content: center;
		/* box-shadow: 4px 5px 11px 10px lightgray; */
	}
	h1 {
		font-size: 1.4em;
		margin: 0;
		display: block;
	}
</style>
