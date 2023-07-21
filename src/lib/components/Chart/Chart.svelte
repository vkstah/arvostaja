<script lang="ts">
	import { separateThousands } from '$lib/utils/utils';
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	type Year = {
		year: number;
		amount: number;
	};

	export let startAmount: number;
	export let savingTime: number;
	export let profitPerYearPercentage: number;

	let chart: Chart;
	let canvas: ChartItem;
	let data: Year[] = [];

	$: {
		const profitPercentage = profitPerYearPercentage / 100;
		data = [];
		for (let year = 0; year <= savingTime; year++) {
			const totalCompoundedAmount = startAmount * Math.pow(1 + profitPercentage, year);

			// Round the result to the nearest integer
			const roundedAmount = Math.round((totalCompoundedAmount * 100) / 100);

			data.push({ year, amount: roundedAmount });
		}
	}

	$: if (chart) {
		chart.data.labels = data.map((row) => row.year);
		chart.data.datasets[0].data = data.map((row) => row.amount);
		if (chart?.options?.scales?.y) {
			chart.options.scales.y.min = data[0].amount;
		}
		chart.update();
	}

	onMount(async () => {
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
			},
			options: {
				scales: {
					y: {
						ticks: {
							// Include EUR sign (€)
							callback: function (value, index, ticks) {
								return `${separateThousands(value)} €`;
							}
						},
						beginAtZero: true,
						min: 0
					}
				}
			}
		});
	});
</script>

<canvas id="acquisitions" bind:this={canvas} />
