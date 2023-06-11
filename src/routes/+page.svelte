<script lang="ts">
	import Container from '$lib/components/Container/Container.svelte';

	type Item = {
		title: string;
		url: string;
		color: 'green' | 'blue' | 'purple';
	};

	const items: Item[] = [
		{ title: 'Laskuri', url: '/laskuri', color: 'green' },
		{ title: 'Blogi', url: '/blog', color: 'blue' },
		{ title: 'Salkku', url: '/salkku', color: 'purple' }
	];
</script>

<div>
	<Container>
		<div class="grid">
			{#each items as item}
				<a href={item.url} class={item.color}>{item.title}</a>
			{/each}
		</div>
	</Container>
	<Container>
		<div class="grid">
			{#each items as item}
				<a href={item.url} class={item.color}>{item.title}</a>
			{/each}
		</div>
	</Container>
	<Container>
		<div class="grid">
			{#each items as item}
				<a href={item.url} class={item.color}>{item.title}</a>
			{/each}
		</div>
	</Container>
</div>

<style lang="scss">
	.title {
		text-align: right;
	}

	.grid {
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
</style>
