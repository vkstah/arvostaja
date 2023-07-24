<script lang="ts">
	import Container from '$lib/components/container/Container.svelte';
	import Card from './Card.svelte';

	type Card = {
		title: string;
		description: string;
		url: string;
		color: 'green' | 'blue' | 'purple';
		icon: string;
	};

	type Article = {
		title: string;
		excerpt: string;
		image: string;
		url: string;
		timestamp: string;
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

	const articles: Article[] = [
		{
			title: 'Hei sijoittaja, oma mielesi juksaa sinua',
			excerpt:
				'Ankkurointivinouma on yksi useimmista kognitiivisista vinoumista, joita ihmiset kokevat...',
			image: 'brain.jpg',
			url: '#',
			timestamp: '2023-07-22T18:58:45Z'
		},
		{
			title: 'Rakennusyhtiöt kovan paineen alla',
			excerpt:
				'Konkurssien määrä on alkuvuonna kääntynyt jyrkkään kasvuun. Suomen Asiakastiedon tilaston mukaan...',
			image: 'excavator.jpg',
			url: '#',
			timestamp: '2023-07-22T18:58:45Z'
		}
	];
</script>

<div>
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
			<div class="posts">
				<ul>
					<li>
						<a href="#">
							<article>
								<img src="brain.jpg" alt="" loading="lazy" width="345" height="520" />
								<p class="date">22. heinäkuuta, 2023</p>
								<h3>Hei sijoittaja, oma mielesi juksaa sinua</h3>
								<p class="excerpt">
									Ankkurointivinouma on yksi useimmista kognitiivisista vinoumista, joita ihmiset
									kokevat...
								</p>
							</article>
						</a>
					</li>
					<li>
						<a href="#">
							<article>
								<img src="excavator.jpg" alt="" loading="lazy" width="345" height="520" />
								<p class="date">22. heinäkuuta, 2023</p>
								<h3>Rakennusyhtiöt kovan paineen alla</h3>
								<p class="excerpt">
									Konkurssien määrä on alkuvuonna kääntynyt jyrkkään kasvuun. Suomen Asiakastiedon
									tilaston mukaan...
								</p>
							</article>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</Container>
</div>

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

		.posts {
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

			img {
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

			h3 {
				font-weight: 500;
				margin-top: 0.8rem;
				margin-bottom: 1.4rem;
				font-size: 24px;
			}

			.excerpt {
				margin-top: 0;
			}
		}
	}
</style>
