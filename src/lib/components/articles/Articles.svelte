<script lang="ts">
	import { page } from '$app/stores';
	import type { Article } from '$lib/types';
	import { formatDate } from '$lib/utils';
	export let articles: Article[];
</script>

<div class="articles">
	<ul>
		{#each articles as article}
			<li>
				<a href={`${$page.url.origin}/artikkelit/${article.slug}`}>
					<article>
						<img
							class="image"
							src={`${$page.url.origin}/${article.thumbnail}`}
							alt=""
							loading="lazy"
							width="345"
							height="520"
						/>
						<p class="date">{formatDate(article.date)}</p>
						<h3 class="title">{article.title}</h3>
						<p class="excerpt">
							{article.excerpt}
						</p>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.articles {
		margin-top: 2rem;

		ul {
			list-style: none;
			padding: 0;
			display: grid;
			grid-template-columns: 1fr;
			gap: 3.8rem;

			@media (min-width: 1000px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}

		a {
			text-decoration: none;
			color: var(--color-paragraph);
			outline: none;

			&:hover,
			&:focus {
				img {
					outline: 2px solid var(--color-white);
					outline-offset: 8px;
				}
			}
		}

		.image {
			width: 100%;
			object-fit: cover;
			border-radius: 8px;
			outline: 2px solid transparent;
			outline-offset: 0px;
			transition: all 0.2s;
		}

		.date {
			margin-top: 1.8rem;
			margin-bottom: 0;
		}

		.title {
			font-weight: 500;
			margin-top: 0.8rem;
			margin-bottom: 1.4rem;
			font-size: 24px;
		}

		.excerpt {
			margin-top: 0;
		}
	}
</style>
