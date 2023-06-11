<script lang="ts">
	import Chart from '$lib/components/Chart/Chart.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import type { ChartItem } from 'chart.js';

	let startAmount: number = 0;
	let savingTime: number = 1;
	let profitPerYearPercentage: number = 0;
</script>

<Container>
	<div>
		<label for="start-amount">Aloitussumma</label>
		<input id="start-amount" type="number" bind:value={startAmount} placeholder="0" min="0" />
	</div>
	<div>
		<label for="start-amount">Säästöaika</label>
		<input id="start-amount" type="number" bind:value={savingTime} placeholder="0" min="0" />
	</div>
	<div>
		<label for="start-amount">Tuotto / vuosi</label>
		<input
			id="start-amount"
			type="number"
			bind:value={profitPerYearPercentage}
			placeholder="0"
			min="0"
			max="100"
		/>
	</div>
	<div class="container-chart">
		{startAmount}
		<Chart {startAmount} {savingTime} {profitPerYearPercentage} />
	</div>
</Container>

<style lang="scss">
	.container-chart {
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
