<script lang="ts">
	import { page } from '$app/stores';
	import type { Article } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { CldImage } from 'svelte-cloudinary';
	import { Admicom, Tokmanni } from '$lib/images/stocks';

	export let articles: Article[];

	const stockLogo = {
		admicom: Admicom,
		tokmanni: Tokmanni
	};
</script>

<ul class="articles">
	{#each articles as article}
		<li>
			<a href={`${$page.url.origin}/artikkelit/${article.slug}`}>
				<article>
					<div class="image">
						<CldImage
							class="image"
							src={article.thumbnailCloudinaryId}
							alt=""
							loading="lazy"
							width="950"
							height="750"
						/>
						{#if article.stocks}
							<ul class="stocks">
								{#if article.stocks.length > 3}
									{#each article.stocks.slice(0, 2) as stock}
										<li>
											<img
												src={stockLogo[stock]}
												width="64"
												height="64"
												alt={`Yhtiön ${stock.charAt(0).toUpperCase() + stock.slice(1)} logo`}
											/>
										</li>
									{/each}
									<li>
										<span>+{article.stocks.length - 2}</span>
									</li>
								{:else}
									{#each article.stocks.slice(0, 3) as stock}
										<li>
											<img src={stockLogo[stock]} width="64" height="64" alt="" />
										</li>
									{/each}
								{/if}
							</ul>
						{/if}
					</div>
					<p class="date">{formatDate(article.datePublished)}</p>
					<h3 class="title">{article.title}</h3>
					<p class="excerpt">
						{article.excerpt}
					</p>
				</article>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
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

		a {
			text-decoration: none;
			color: var(--color-paragraph);
			outline: none;

			&:hover,
			&:focus {
				* :global(.image) {
					outline: 2px solid var(--color-white);
					outline-offset: 8px;
				}
			}
		}

		.image {
			position: relative;
		}

		* :global(.image) {
			width: 100%;
			height: 520px;
			object-fit: cover;
			border-radius: 8px;
			outline: 2px solid transparent;
			outline-offset: 0px;
			transition: all 0.2s;
		}

		.stocks {
			position: absolute;
			top: 1rem;
			right: 1rem;
			list-style: none;
			display: flex;
			flex-direction: row-reverse;
			gap: 1rem;

			li {
				background-color: white;
				border-radius: 10px;
				box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
				height: 64px;
				width: 64px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: rgb(67, 67, 67);
				font-weight: var(--font-weight-medium);
			}
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
