<script lang="ts">
	import LinkCard from './link-card.svelte';
	import Hero from './hero.svelte';
	import { ArticleFeed } from '$lib/components/features/article-feed';

	type LinkCardData = {
		title: string;
		description: string;
		url: string;
		color: string;
		icon: string;
	};

	export let data;
	const articles = data.articles;
	const cards: LinkCardData[] = [
		{
			title: 'Korkoa korolle -laskuri',
			description: 'Laske maailman kahdeksannen ihmeen sijoituksillesi tuottama voitto.',
			url: '/laskuri',
			color: '#652cd1',
			icon: 'trend'
		},
		{
			title: 'Artikkelit',
			description: 'Tutustu sijoittajan tajunnanvirtaan ja ajatuksiin maailmasta.',
			url: '/artikkelit',
			color: '#4338ca',
			icon: 'pen'
		},
		{
			title: 'Salkku',
			description: 'Voit seurata salkkuni kehitystä reaaliaikaisesti.',
			url: '/salkku',
			color: '#1b55d2',
			icon: 'briefcase2'
		}
	];
</script>

<svelte:head>
	<title>Arvostaja - Sijoittajan jorinaa</title>
	<meta name="description" content="Sijoittajan jorinaa" />
</svelte:head>

<div class="container">
	<Hero />
</div>
<div class="container">
	<div class="menu-grid">
		{#each cards as card}
			<LinkCard
				title={card.title}
				description={card.description}
				url={card.url}
				color={card.color}
				icon={card.icon}
			/>
		{/each}
	</div>
</div>
<div class="container">
	<ArticleFeed {articles} title="Uusimmat artikkelit ja jutut." prefix="Uusinta jorinaa." />
</div>

<style lang="scss">
	.menu-grid {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 3.8rem;

		@media (min-width: 700px) {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 2.8rem;
			row-gap: 2.8rem;
		}

		@media (min-width: 1200px) {
			grid-template-columns: repeat(3, 1fr);
			column-gap: 3.8rem;
			row-gap: 3.8rem;
		}
	}
</style>
