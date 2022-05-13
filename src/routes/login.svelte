<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import LoginComponent from '../components/login.svelte';
	import { store } from '../hooks/auth';
	import AfterLogin from '../components/loggedin.svelte';
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Plantronics Login Page" />
</svelte:head>

{#if $store != null}
	<AfterLogin />
{:else}
	<LoginComponent />
{/if}
<!--feedback Make text bigger -->
<style>
</style>
