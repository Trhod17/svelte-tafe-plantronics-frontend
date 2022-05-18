<script lang="ts">
	//export let slug;
	export let active;
</script>

<div class="tabs bg-primary-focus">
	<a
		class="tab tab-bordered w-1/3 text-primary-content"
		class:tab-active={active == 0}
		sveltekit:prefetch
		href="/profile"><i class="fa-solid fa-user" /> My Profile</a
	>
	<a
		class="tab tab-bordered w-1/3 text-primary-content"
		class:tab-active={active == 1}
		sveltekit:prefetch
		href="/profile/myplants"><i class="fa-solid fa-tree" />My Plants</a
	>
	<p class="tab tab-bordered w-1/3 text-grey-content disabled" class:tab-active={active == 2}>
		Coming Soon
	</p>
</div>
