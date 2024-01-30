<script lang="ts">
	import { ArticleFeed } from '$lib/components/features/article-feed';

	export let data;
	const articles = data.articles;
</script>

<svelte:head>
	<title>Artikkelit - Arvostaja</title>
</svelte:head>

<div class="container">
	<h1>Artikkelit</h1>
	<p>Sijoitusaiheisia juttuja.</p>
	<ArticleFeed {articles} />
</div>

<style lang="scss">
</style>
