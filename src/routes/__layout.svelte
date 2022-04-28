<script lang="ts">
	import NavBar from '../components/navbar.svelte';
	import '../app.css';
	
  </script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</svelte:head>
<NavBar />

<main>
	<slot />
</main>

<footer>
	
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
