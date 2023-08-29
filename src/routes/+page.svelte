<script lang="ts">
	import Container from '$lib/components/containers/Container.svelte';
	import Articles from '$lib/components/articles/Articles.svelte';
	import Card from './Card.svelte';
	import { articles } from '$lib/articles';

	type Card = {
		title: string;
		description: string;
		url: string;
		color: 'green' | 'blue' | 'purple';
		icon: string;
	};

	const cards: Card[] = [
		{
			title: 'Korkoa korolle -laskuri',
			description: 'Laske maailman kahdeksannen ihmeen sijoituksillesi tuottama voitto.',
			url: '/laskuri',
			color: 'blue',
			icon: 'trend'
		},
		{
			title: 'Artikkelit',
			description: 'Tutustu sijoittajan tajunnanvirtaan ja ajatuksiin maailmasta.',
			url: '/artikkelit',
			color: 'purple',
			icon: 'pen'
		}
	];
</script>

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
		gap: 3.8rem;

		@media (min-width: 1000px) {
			grid-template-columns: repeat(3, 1fr);
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
