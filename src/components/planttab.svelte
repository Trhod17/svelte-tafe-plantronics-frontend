<script lang="ts">
	export let slug;
	export let active;
</script>

<div class="tabs bg-primary-focus">
	<a
		class="tab tab-bordered w-1/3 text-primary-content"
		class:tab-active={active == 0}
		sveltekit:prefetch
		href="/plants/{slug}">Plant</a
	>
	<a
		class="tab tab-bordered w-1/3 text-primary-content"
		class:tab-active={active == 1}
		sveltekit:prefetch
		href="/plants/info/{slug}">Info</a
	>
	<a
		class="tab tab-bordered w-1/3 text-primary-content"
		class:tab-active={active == 2}
		sveltekit:prefetch
		href="/plants/soil/{slug}"
		>Soil Preference
	</a>
	<a
		class="tab tab-bordered w-1/3 text-primary-content"
		class:tab-active={active == 3}
		sveltekit:prefetch
		href="/plants/edible/{slug}">Ediblity</a
	>
</div>
