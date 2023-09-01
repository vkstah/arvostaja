<script lang="ts">
	import Icon from '$lib/components/icons/Icon.svelte';

	export let title: string;
	export let description: string;
	export let url: string;
	export let color: string;
	export let icon: string;
</script>

<a href={url} class={color} style="color: {color}">
	<div class="icon">
		<Icon name={icon} width="32" height="32" />
	</div>
	<h2 class="title">{title}</h2>
	<p class="description">{description}</p>
</a>

<style lang="scss">
	* :global(svg) {
		color: white;
	}

	a {
		display: block;
		text-decoration: none;
		padding: 2rem;
		min-height: 300px;
		border-radius: 8px;
		position: relative;
		outline: 2px solid transparent;
		outline-offset: 0px;
		transition: all 0.2s;
		background-color: currentColor;

		@media (min-width: 1000px) {
			padding: 2.4rem;
		}

		&:hover,
		&:focus {
			outline-offset: 8px;
			outline: 2px solid currentColor;
		}
	}

	.icon {
		display: block;
		background-color: transparent;
		fill: white;
		border: 2px solid white;
		height: 64px;
		width: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}

	h2 {
		margin-top: 2.2rem;
		margin-bottom: 1rem;
		font-size: 24px;
		font-weight: 700;
	}

	p {
		margin: 0;
		opacity: 0.9;
		color: white;
	}
</style>
