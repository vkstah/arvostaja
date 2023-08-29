<script lang="ts">
	import { Container, Articles } from '$lib/components';

	export let data;
	const articles = data.articles;
</script>

<svelte:head>
	<title>Artikkelit - Arvostaja</title>
</svelte:head>

<Container>
	<h1>Artikkelit</h1>
	<p>Sijoitusaiheisia juttuja.</p>
</Container>

<Container>
	<Articles {articles} />
</Container>

<style lang="scss">
</style>
