<script lang="ts">
	import Container from '$lib/components/containers/Container.svelte';
	import Articles from '$lib/components/articles/Articles.svelte';
	import Card from './Card.svelte';

	type Card = {
		title: string;
		description: string;
		url: string;
		color: string;
		icon: string;
	};

	export let data;
	const articles = data.articles;
	const cards: Card[] = [
		{
			title: 'Korkoa korolle -laskuri',
			description: 'Laske maailman kahdeksannen ihmeen sijoituksillesi tuottama voitto.',
			url: '/laskuri',
			color: '#1b55d2',
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
			color: '#6b21a8',
			icon: 'briefcase2'
		}
	];
</script>

<svelte:head>
	<title>Arvostaja - Sijoittajan jorinaa</title>
	<meta name="description" content="Sijoittajan jorinaa" />
</svelte:head>

<Container>
	<div class="menu-grid">
		{#each cards as card}
			<Card
				title={card.title}
				description={card.description}
				url={card.url}
				color={card.color}
				icon={card.icon}
			/>
		{/each}
	</div>
</Container>
<Container>
	<div class="blog-upsell">
		<div class="header">
			<p class="prefix" aria-describedby="blog-upsell-title">Uusinta jorinaa.</p>
			<h2 id="blog-upsell-title" class="title">Uusimmat artikkelit ja jutut</h2>
		</div>
		<Articles {articles} />
	</div>
</Container>

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

	.blog-upsell {
		.prefix {
			margin: 0;
		}

		.title {
			margin-top: 0.8rem;
		}
	}
</style>
