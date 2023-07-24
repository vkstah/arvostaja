<script lang="ts">
	import '../app.scss';
</script>

<svelte:head>
	<title>Arvostaja</title>
</svelte:head>

<div>
	<header class="site-header">
		<a href="/" class="title">Arvostaja</a>
		<nav class="navigation">
			<ul>
				<li>
					<a href="/artikkelit">Artikkelit</a>
				</li>
				<li>
					<a href="/laskuri">Laskuri</a>
				</li>
				<li>
					<a href="/tietoa">Tietoa</a>
				</li>
			</ul>
		</nav>
		<div class="settings">
			<button>Toggle</button>
		</div>
	</header>
	<slot />
</div>

<style lang="scss">
	.site-header {
		margin-left: auto;
		margin-right: auto;
		max-width: 1520px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.8rem;
		background-color: var(--color-background-site);
	}

	.title {
		text-decoration: none;
		font-weight: 700;
		font-size: 24px;
	}

	.navigation {
		display: none;

		@media (min-width: 1000px) {
			display: block;
		}

		ul {
			list-style: none;
			display: flex;
			gap: 2.6rem;
		}

		a {
			text-decoration: none;
			font-weight: 500;
			color: var(--color-cadet-blue);

			&:hover {
				color: #5de2f9;
			}
		}
	}
</style>
