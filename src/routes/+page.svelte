<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';

	type Item = {
		title: string;
		url: string;
		color: 'green' | 'blue' | 'purple';
	};

	const items: Item[] = [
		{ title: 'Korkoa korolle -laskuri', url: '/laskuri', color: 'blue' },
		{ title: 'Blogi', url: '/blog', color: 'purple' }
	];
</script>

<div>
	<Container>
		<div class="menu-grid">
			{#each items as item}
				<a href={item.url} class={item.color}>
					<h2 class="title">{item.title}</h2>
				</a>
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
							<article class="article">
								<img src="brain.jpg" alt="" loading="lazy" width="410" height="520" />
								<h3>Hei sijoittaja, oma mielesi juksaa sinua</h3>
								<p class="excerpt">
									Ankkurointivinouma on yksi monista kognitiivisista vinoumista, joita me ihmiset
									koemme...
								</p>
							</article>
						</a>
					</li>
					<li>
						<a href="#">
							<article class="article">
								<img src="excavator.jpg" alt="" loading="lazy" width="410" height="520" />
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

		@media (min-width: 1000px) {
			grid-template-columns: repeat(3, 1fr);
			gap: 3.4rem;
		}

		a {
			text-decoration: none;
			display: block;
			padding-left: 2.4rem;
			padding-bottom: 2.2rem;
			height: 320px;
			font-weight: 500;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			border-radius: 8px;
			position: relative;

			&.purple {
				background-color: #4338ca;
			}

			&.blue {
				background-color: #164fc9;
			}

			&.green {
				background-color: #16a34a;
			}
		}

		h2 {
			margin: 0;
			font-size: 26px;
		}

		.icon {
			position: absolute;
			bottom: 0;
			right: 0;
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
				grid-template-columns: repeat(3, 1fr);
				column-gap: 3.8rem;
			}

			a {
				text-decoration: none;
				color: var(--color-paragraph);

				img {
					outline: 2px solid transparent;
					outline-offset: 0px;
					transition: all 0.2s;
				}

				&:hover {
					img {
						outline: 2px solid var(--color-white);
						outline-offset: 6px;
					}
				}
			}

			img {
				width: 100%;
				object-fit: cover;
				border-radius: 8px;
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
