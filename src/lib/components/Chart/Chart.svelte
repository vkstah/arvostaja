<script lang="ts">
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	type Year = {
		year: number;
		amount: number;
	};

	export let startAmount;
	export let savingTime;
	export let profitPerYearPercentage;

	let chart: Chart;
	let data: Year[] = [];
	for (let i: number = 1; i <= savingTime; i++) {
		let amount;
		if (i === 1) {
			amount = (startAmount * profitPerYearPercentage) ^ i;
		} else {
			amount = (data[i - 2].amount * profitPerYearPercentage) ^ i;
		}
		data.push({ year: i, amount: amount });
	}

	onMount(async () => {
		const canvas = document.getElementById('acquisitions') as ChartItem;
		chart = new Chart(canvas, {
			type: 'line',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Arvo (€)',
						data: data.map((row) => row.amount),
						backgroundColor: '#4338ca',
						borderColor: '#4338ca'
					}
				]
			}
		});
	});
</script>

<canvas id="acquisitions" />
