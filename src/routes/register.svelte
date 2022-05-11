<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import RegistrationComponent from '../components/registration.svelte';
	import { store } from '../hooks/auth';
	import AfterRegistration from '../components/registered.svelte';
</script>

<svelte:head>
	<title>Registration</title>
	<meta name="description" content="Plantronics Registration Page" />
</svelte:head>

{#if $store != null}
	<AfterRegistration />
{:else}
	<RegistrationComponent />
{/if}

<style>
</style>
