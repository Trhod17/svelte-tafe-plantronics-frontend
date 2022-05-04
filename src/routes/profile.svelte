<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Profile from '../components/profile.svelte';
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<Profile />
</main>

<style>
</style>
