<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';

	type Item = {
		title: string;
		url: string;
		color: 'green' | 'blue' | 'purple';
	};

	const items: Item[] = [
		{ title: 'Laskuri', url: '/laskuri', color: 'green' },
		{ title: 'Blogi', url: '/blog', color: 'blue' }
	];
</script>

<div>
	<Container>
		<div class="menu-grid">
			{#each items as item}
				<a href={item.url} class={item.color}>{item.title}</a>
			{/each}
		</div>
	</Container>
	<Container>
		<div class="blog-upsell">
			<div class="header">
				<p class="prefix" aria-describedby="blog-upsell-title">Pysy ajan tasalla.</p>
				<h2 id="blog-upsell-title" class="title">Uusimmat artikkelit</h2>
			</div>
			<div class="posts">
				<ul>
					<li>
						<article class="article">
							<img src="brain.jpg" alt="" loading="lazy" width="410" height="550" />
							<h3>Sijoittaja: oma mielesi juksaa sinua.</h3>
							<p class="excerpt">
								Ankkurointivinouma on yksi monista kognitiivisista vinoumista, joita me ihmiset
								koemme...
							</p>
						</article>
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
			border: 1px solid;
			border-radius: 4px;
			padding-left: 2rem;
			padding-bottom: 1.4rem;
			height: 320px;
			font-size: 32px;
			font-weight: 500;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;

			.green {
				border-color: green;
			}
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
