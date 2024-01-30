<script lang="ts">
	import '../app.scss';
	import { page, navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import Loader from '$lib/components/Loader.svelte';
	import SiteFooter from './site-footer.svelte';

	let headerHeight = 0;
	let isMenuOpen = false;
	let direction: 'up' | 'down' | null = null;
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
		},
		{
			name: 'Sanasto',
			url: '/sanasto'
		}
	];

	$: if ($navigating) {
		closeMenu();
	}

	const toggleMenu = () => {
		if (isMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	const openMenu = () => {
		isMenuOpen = true;
		document.body.style.overflow = 'hidden';
	};

	const closeMenu = () => {
		isMenuOpen = false;
		document.body.style.overflow = 'auto';
	};

	const setHeaderHeight = (header: HTMLElement) => {
		headerHeight = header.offsetHeight;
	};

	onMount(async () => {
		const header = document.querySelector('.site-header') as HTMLElement;
		setHeaderHeight(header);

		// Handle scrolling events
		let prevScrollY = window.scrollY;
		window.addEventListener('scroll', (evt) => {
			const currentScrollY = window.scrollY;

			if (prevScrollY < currentScrollY) {
				direction = 'down';
			} else {
				direction = 'up';
			}

			prevScrollY = currentScrollY;
		});
	});
</script>

<div class="wrapper">
	<header class="site-header" class:hidden={direction === 'down' ? true : false}>
		<a href="/" class="title">Arvostaja</a>
		<nav id="nav" class="nav-primary">
			<ul>
				{#each menuItems as menuItem}
					<li>
						<a
							href={menuItem.url}
							aria-current={$page.url.pathname === menuItem.url ? 'page' : undefined}
							>{menuItem.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="settings">
			<button
				aria-haspopup="true"
				aria-expanded={isMenuOpen}
				aria-controls="nav-mobile"
				aria-label="Päävalikko"
				class="nav-toggle"
				on:click={toggleMenu}
			>
				{#if isMenuOpen}
					<svg
						width="24"
						height="24"
						viewBox="0 -0.5 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
							fill="#ffffff"
						/>
					</svg>
				{:else}
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20 7L4 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
						<path d="M20 12L4 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
						<path d="M20 17L4 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
					</svg>
				{/if}
			</button>
			{#if isMenuOpen}
				<div
					class="mobile-menu"
					style={`bottom: ${headerHeight}px;`}
					in:slide|global
					out:slide|global
				>
					<nav id="nav-mobile" class="nav-mobile">
						<ul>
							{#each menuItems as menuItem}
								<li>
									<a
										href={menuItem.url}
										aria-current={$page.url.pathname === menuItem.url ? 'page' : undefined}
										>{menuItem.name}</a
									>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			{/if}
		</div>
	</header>
	{#if $navigating}
		<div class="loading" in:fly|global out:fly|global>
			<Loader />
			<span>Ladataan...</span>
		</div>
	{/if}
	<main>
		<slot />
	</main>
	<SiteFooter />
	{#if isMenuOpen}
		<div
			class="overlay"
			transition:fade|global={{ duration: 150 }}
			on:click={closeMenu}
			on:keydown={() => {}}
			tabindex="-1"
			aria-hidden="true"
		/>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.site-header {
		--height-header: 92px;
		--height-header-mobile: 72px;

		height: var(--height-header-mobile);
		background-color: var(--color-background-site);
		border-top: 1px solid #4a4a4a;
		margin-left: auto;
		margin-right: auto;
		max-width: 1520px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: var(--padding-container-horizontal);
		padding-right: var(--padding-container-horizontal);
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		transition: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		transition-property: transform;

		@media (min-width: 1000px) {
			height: var(--height-header);
			border-top: none;
			position: static;
		}

		@media (max-width: calc(1000px - 1px)) {
			&.hidden {
				transform: translateY(var(--height-header-mobile));
			}
		}
	}

	.title {
		color: var(--color-white);
		text-decoration: none;
		font-weight: 700;
		font-size: 24px;

		&:hover,
		&:focus {
			color: #6b5dff;
			transform: rotate(5deg);
		}
	}

	.nav-primary {
		display: none;

		@media (min-width: 1000px) {
			display: block;
		}

		ul {
			display: flex;
			gap: 2.6rem;
			list-style: none;
			padding: 0;
			margin: 0;
		}

		a {
			color: var(--color-cadet-blue);
			display: inline-block;
			font-weight: 500;
			text-decoration: none;

			&:hover,
			&:focus {
				color: #6b5dff;
				transform: rotate(5deg);
			}
		}
	}

	.nav-toggle {
		display: flex;
		justify-content: center;
		align-items: center;

		@media (min-width: 1000px) {
			display: none;
		}
	}

	.mobile-menu {
		background-color: var(--color-background-site);
		position: fixed;
		left: 0;
		right: 0;
		border-top: 1px solid #4a4a4a;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.nav-mobile {
		ul {
			list-style: none;
			margin: 0;
			padding-top: 0.6rem;
			padding-bottom: 0.6rem;
			padding-left: var(--padding-container-horizontal);
			padding-right: var(--padding-container-horizontal);
			overflow-y: scroll;
			pointer-events: all;
			max-height: 55vh;
		}

		a {
			display: block;
			padding: 2px 12px;
			margin: 4px 0;
			border-radius: 4px;

			&:focus,
			&:hover {
				background-color: rgb(30, 30, 30);
				text-decoration: none;
			}

			&[aria-current='page'] {
				background-color: #6b5dff20;
				color: #6b5dff;
			}
		}
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #1a1a1a;
		opacity: 0.7;
	}

	.loading {
		position: fixed;
		top: 24px;
		right: 24px;
		background-color: var(--color-white);
		border-radius: 8px;
		padding: 1.8rem;
		display: flex;
		align-items: center;
		color: black;
		gap: 2rem;
	}
</style>
