<script lang="ts">
	import NavBar from '../components/navbar.svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<link rel="manifest" crossorigin="use-credentials" href="/manifest.json" />
	<link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
	<link rel="icon" href="/favicon.png" />
	<script src="https://kit.fontawesome.com/86ac87a941.js" crossorigin="anonymous"></script>
</svelte:head>
<NavBar />

<main class="w-100 break-words">
	<slot />
</main>

<footer />

<style>
</style>
