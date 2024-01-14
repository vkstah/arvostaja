<script lang="ts">
	import { Articles } from '$lib/components';

	export let data;
	const articles = data.articles;
</script>

<svelte:head>
	<title>Artikkelit - Arvostaja</title>
</svelte:head>

<div class="container">
	<h1>Artikkelit</h1>
	<p>Sijoitusaiheisia juttuja.</p>
</div>

<div class="container">
	<Articles {articles} />
</div>

<style lang="scss">
</style>
