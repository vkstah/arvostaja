<script lang="ts">
	import '../app.scss';
</script>

<svelte:head>
	<title>Arvostaja</title>
</svelte:head>

<div class="layout">
	<slot />
</div>

<style>
	.layout {
		background-color: var(--color-background-site);
		min-height: 100vh;
	}
</style>
