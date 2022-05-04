<script context="module" lang="ts">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<main>
	<h1>ABOUT</h1>
	<hr />
	<div>A website aimed to help people learn about and manage their plants</div>
</main>

<style>
	main {
		font-size: 1.5rem;
		margin: 4rem;
		padding: 2rem;
		color: gray;
		justify-content: center;
		box-shadow: 4px 5px 11px 10px lightgray;
	}
</style>
