<script lang="ts">
	import { page } from '$app/stores';
	import { Container, ContainerSlim } from '$lib/components';
	import { formatDate } from '$lib/utils';
	import { CldImage } from 'svelte-cloudinary';
	import { Admicom, Tokmanni } from '$lib/images/stocks';
	import type { Stock } from '$lib/types/index.js';

	export let data;
	const title = data.meta.title;
	const date = formatDate(data.meta.datePublished);
	const readTimeMinutes = Math.round(data.meta.readingTime.minutes);
	const readTimeText = readTimeMinutes === 1 ? 'minuutti' : 'minuuttia';
	const stocks: Stock[] | null = data.meta.stocks;

	const stockLogo = {
		admicom: Admicom,
		tokmanni: Tokmanni
	};
</script>

<!-- SEO -->
<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<ContainerSlim class="container-header">
		<div class="additional">
			<a class="back" href={`${$page.url.origin}/artikkelit`}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					id="Outline"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					fill="white"
					><path
						d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"
					/></svg
				>
				<span>Takaisin</span>
			</a>
		</div>
		<div class="meta">
			<h1 class="title">{title}</h1>
			<p class="date-read-time">{date} – lukuaika {readTimeMinutes} {readTimeText}</p>
			{#if stocks}
				<ul class="stocks">
					{#each stocks as stock}
						<li>
							<img src={stockLogo[stock]} width="80" height="80" alt="" />
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</ContainerSlim>
	<Container class="container-thumbnail">
		<CldImage
			class="thumbnail"
			src={data.meta.thumbnailCloudinaryId}
			alt=""
			width="1040"
			height="600"
			quality="auto"
		/>
	</Container>
	<ContainerSlim class="container-content">
		<div class="content markdown">
			<svelte:component this={data.content} />
		</div>
	</ContainerSlim>
</article>

<style lang="scss">
	* :global(.container-thumbnail) {
		padding-top: 0;
		padding-bottom: 0;
		padding-left: 0;
		padding-right: 0;

		@media (min-width: 1070px) {
			max-width: 1040px;
		}
	}

	* :global(.thumbnail) {
		height: 100%;
		min-height: 400px;
		max-height: 600px;
		width: 100%;
		object-fit: cover;

		@media (min-width: 1070px) {
			border-radius: 12px;
		}
	}

	.additional {
		margin-bottom: 1.2rem;
	}

	.back {
		display: flex;
		align-items: center;
		gap: 2rem;
		text-decoration: none;
	}

	.title {
		margin-bottom: 0;
		font-size: 28px;

		@media (min-width: 800px) {
			font-size: 36px;
		}
	}

	.date-read-time {
		margin-top: 0.6rem;
	}

	.stocks {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		li {
			background-color: white;
			border-radius: 10px;
			box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
			height: 80px;
			width: 80px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgb(67, 67, 67);
			font-weight: var(--font-weight-medium);
		}
	}

	.content > :global(*:first-child) {
		margin-top: 0;
	}
</style>
