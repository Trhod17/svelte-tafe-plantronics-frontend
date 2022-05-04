<script lang="ts">
	import { store } from '../hooks/auth';
	import ThemeSelect from './themeswitch.svelte';

	function logout() {
		$store = null;
	}

	let isOpen = false;
</script>

<div class="navbar bg-primary">
	<div class="navbar-start">
		<div class="dropdown bg-primary">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52"
			>
				<li><a sveltekit:prefetch href="/">Home</a></li>
				<li><a sveltekit:prefetch href="/about">About</a></li>
				{#if $store != null}
					<li><a sveltekit:prefetch href="/profile">{$store[0]}</a></li>
					<li><a on:click={logout} href="#">Logout</a></li>
				{:else}
					<li><a sveltekit:prefetch href="/login">Login</a></li>
					<li><a sveltekit:prefetch href="/register">Signup</a></li>
				{/if}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl text-primary-content">Plantronics</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a sveltekit:prefetch href="/">Home</a></li>
			<li><a sveltekit:prefetch href="/about">About</a></li>
			{#if $store != null}
				<li><a sveltekit:prefetch href="/profile">{$store[0]}</a></li>
				<li><a on:click={logout} href="#">Logout</a></li>
			{:else}
				<li><a sveltekit:prefetch href="/login">Login</a></li>
				<li><a sveltekit:prefetch href="/register">Signup</a></li>
			{/if}
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeSelect />
	</div>
</div>
