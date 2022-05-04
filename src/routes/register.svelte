<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import RegistrationComponent from '../components/registration.svelte';
	import { store } from '../hooks/auth';
	import AfterRegistration from '../components/registered.svelte';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Plantronics Login Page" />
</svelte:head>

{#if $store != null}
	<AfterRegistration />
{:else}
	<RegistrationComponent />
{/if}

<style>
</style>
