<script lang="ts">
	import Chart from '$lib/components/Chart/Chart.svelte';
	import Container from '$lib/components/Container/Container.svelte';

	let startAmount: number = 2000;
	let savingTime: number = 10;
	let recurringAmount: number = 0;
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
		<label for="recurring-amount">Säännöllinen sijoitus (€ / kk)</label>
		<input
			id="recurring-amount"
			type="number"
			bind:value={recurringAmount}
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
		<Chart {startAmount} {savingTime} {recurringAmount} {profitPerYearPercentage} />
	</div>
</Container>

<style lang="scss">
	.container-chart {
		margin-left: auto;
		margin-right: auto;
	}
</style>
