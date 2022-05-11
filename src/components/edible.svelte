<script context="module" lang="ts">
	export const prerender = false;
</script>

<script lang="ts">
	export let image_text;
	export let edible_name;
	export let edible_image;
	export let edible_text;
</script>

<li>{edible_text}</li>
<li>
	<div
		tabindex="0"
		class="collapse collapse-arrow border border-base-300 bg-accent text-base-content rounded-box"
	>
		<input type="checkbox" />
		<div class="collapse-title text-xl font-medium text-accent-content">{image_text}</div>
		<div class="collapse-content">
			<figure>
				{#if edible_image != ''}
					<img
						alt={edible_name}
						src={'https://res.cloudinary.com/drsgxd2u2/image/upload/v1/' + edible_image}
						width="550px"
					/>
				{:else}
					<p class="text-accent-content">Image not provided</p>
				{/if}
			</figure>
		</div>
	</div>
</li>
