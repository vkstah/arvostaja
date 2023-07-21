<script lang="ts">
	import Chart from '$lib/components/Chart/Chart.svelte';
	import Container from '$lib/components/Container/Container.svelte';

	let startAmount: number = 2000;
	let savingTime: number = 10;
	let profitPerYearPercentage: number = 8;
</script>

<Container>
	<div>
		<label for="start-amount">Aloitussumma (€)</label>
		<input
			id="start-amount"
			type="number"
			bind:value={startAmount}
			placeholder="0"
			min="0"
			step="1"
		/>
	</div>
	<div>
		<label for="saving-time">Säästöaika (vuotta)</label>
		<input
			id="saving-time"
			type="number"
			bind:value={savingTime}
			placeholder="0"
			min="0"
			step="1"
		/>
	</div>
	<div>
		<label for="profit-per-year-percentage">Tuotto / vuosi (%)</label>
		<input
			id="profit-per-year-percentage"
			type="number"
			bind:value={profitPerYearPercentage}
			placeholder="0"
			min="0"
			max="100"
		/>
	</div>
	<div class="container-chart">
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
