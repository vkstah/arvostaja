<script lang="ts">
	import { ArticleCard } from '$lib/components/ui/article-card';
	import type { Article } from '$lib/types';

	export let articles: Article[] = [];
	export let title: string | undefined = undefined;
	export let prefix: string | undefined = undefined;
</script>

<div class="article-feed">
	{#if title}
		<div class="header">
			{#if prefix}
				<p class="prefix" aria-describedby="article-feed-title">{prefix}</p>
			{/if}
			<h2 id="article-feed-title" class="title">{title}</h2>
		</div>
	{/if}
	<ul class="articles">
		{#each articles as article}
			<li>
				<ArticleCard {article} />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.article-feed {
		.prefix {
			margin: 0;
		}

		.title {
			margin-top: 0.8rem;
		}

		.articles {
			margin-top: 2rem;
			list-style: none;
			padding: 0;
			display: grid;
			grid-template-columns: 1fr;
			gap: 3.8rem;

			@media (min-width: 1000px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
