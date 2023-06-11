<script lang="ts">
	import '../app.scss';
</script>

<svelte:head>
	<title>Arvostaja</title>
</svelte:head>

<div>
	<header class="header">
		<a href="/" class="title">Arvostaja</a>
	</header>
	<slot />
</div>

<style lang="scss">
	.header {
		display: flex;
		justify-content: center;
		padding: 0.5rem;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background-color: var(--color-background-site);
		box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
	}

	.title {
		text-decoration: none;
		font-weight: 700;
	}
</style>
