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
	<!-- <link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/simplex/bootstrap.min.css"
		integrity="sha512-MkI4WaJcuXvOVZPwGbYYSeq9qOPLI3dLVJhuf+vuaLgwLzC/PwLh1EzivMsoYn7Hl/VUQqPb4u4oTS2/XMJ4uQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<meta name="color-scheme" content={$theme == 'light' ? 'dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} /> -->
</svelte:head>
<NavBar />

<main class="w-100 break-words">
	<slot />
</main>

<footer />

<style>
</style>
