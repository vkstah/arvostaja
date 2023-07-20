<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';
	import Card from './Card.svelte';

	type Item = {
		title: string;
		description: string;
		url: string;
		color: 'green' | 'blue' | 'purple';
		icon: string;
	};

	const items: Item[] = [
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
		},
		{
			title: 'Artikkelit',
			description: 'Tutustu sijoittajan tajunnanvirtaan ja ajatuksiin maailmasta.',
			url: '/artikkelit',
			color: 'green',
			icon: 'pen'
		}
	];
</script>

<div>
	<Container>
		<div class="menu-grid">
			{#each items as item}
				<Card
					title={item.title}
					description={item.description}
					url={item.url}
					color={item.color}
					icon={item.icon}
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
								<img src="brain.jpg" alt="" loading="lazy" width="400" height="520" />
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
								<img src="excavator.jpg" alt="" loading="lazy" width="400" height="520" />
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

			h3 {
				font-weight: 500;
				margin-top: 1.8rem;
				margin-bottom: 1.4rem;
				font-size: 24px;
			}

			.excerpt {
				margin-top: 0;
			}
		}
	}
</style>
