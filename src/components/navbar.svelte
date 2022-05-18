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
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden w-55">
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
				class="menu dropdown-content mt-4 p-5 shadow bg-primary text-primary-content rounded-box w-60"
			>
				<li class="mx-auto">
					<a sveltekit:prefetch class="text-lg" href="/"><i class="fa-solid fa-house" />Home</a>
				</li>
				<li class="mx-auto"><a sveltekit:prefetch class="text-lg" href="/about">About</a></li>
				{#if $store != null}
					<li class="mx-auto">
						<a sveltekit:prefetch class="text-lg" href="/profile"
							><i class="fa-solid fa-user" />{$store[0]}</a
						>
					</li>
					<li class="mx-auto">
						<a on:click={logout} class="text-lg" href="/"
							><i class="fa-solid fa-arrow-up-left-from-circle"> a</i>Logout</a
						>
					</li>
				{:else}
					<li class="mx-auto">
						<a sveltekit:prefetch class="text-lg" href="/login"
							><i class="fa-solid fa-arrow-right-to-bracket" />Login</a
						>
					</li>
					<li class="mx-auto">
						<a sveltekit:prefetch class="text-lg" href="/register"
							><i class="fa-solid fa-user-plus" />Signup</a
						>
					</li>
				{/if}
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl text-primary-content" sveltekit:prefetch href="/"
			>Plantronics</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a sveltekit:prefetch href="/"><i class="fa-solid fa-house" />Home</a></li>
			<li><a sveltekit:prefetch href="/about">About</a></li>
			{#if $store != null}
				<li><a sveltekit:prefetch href="/profile"><i class="fa-solid fa-user" />{$store[0]}</a></li>
				<li>
					<a on:click={logout} href="/"
						><i class="fa-solid fa-arrow-up-left-from-circle"> a</i>Logout</a
					>
				</li>
			{:else}
				<li>
					<a sveltekit:prefetch href="/login"
						><i class="fa-solid fa-arrow-right-to-bracket" />Login</a
					>
				</li>
				<li>
					<a sveltekit:prefetch href="/register"><i class="fa-solid fa-user-plus" />Signup</a>
				</li>
			{/if}
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeSelect />
	</div>
</div>
