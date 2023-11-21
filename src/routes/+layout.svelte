<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';

	const menuItems = [
		{
			name: 'Etusivu',
			url: '/'
		},
		{
			name: 'Artikkelit',
			url: '/artikkelit'
		},
		{
			name: 'Laskuri',
			url: '/laskuri'
		},
		{
			name: 'Salkku',
			url: '/salkku'
		}
	];
</script>

<div>
	<header class="site-header">
		<a href="/" class="title">Arvostaja</a>
		<nav class="navigation">
			<ul>
				{#each menuItems as menuItem}
					<li aria-current={$page.url.pathname === menuItem.url ? 'page' : undefined}>
						<a href={menuItem.url}>{menuItem.name}</a>
					</li>
				{/each}
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
		color: var(--color-white);
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
			padding: 0;
		}

		a {
			text-decoration: none;
			font-weight: 500;
			color: var(--color-cadet-blue);

			&:hover,
			&:focus {
				color: #6b5dff;
			}
		}
	}
</style>
