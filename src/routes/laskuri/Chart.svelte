<script lang="ts">
	import type { YearlyResult } from '$lib/types';
	import { separateThousands } from '$lib/utils/utils';
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data: YearlyResult[];
	let startAmount = data[0].totalAmount;

	let chart: Chart;
	let canvas: ChartItem;

	$: {
		startAmount = data[0].totalAmount;
	}

	$: if (chart) {
		// Update the years
		chart.data.labels = data.map((row) => row.year);

		// Update the start amount
		chart.data.datasets[0].data = data.map((row) => startAmount);

		// Update the generated amount
		chart.data.datasets[1].data = data.map((row) => row.generatedAmount);

		// Update the chart
		chart.update();
	}

	onMount(async () => {
		chart = new Chart(canvas, {
			type: 'bar',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Sijoitettu summa (€)',
						data: data.map((row) => startAmount),
						backgroundColor: '#4338ca',
						borderColor: '#4338ca',
						stack: 'stack1'
					},
					{
						label: 'Kokonaiskorko (€)',
						data: data.map((row) => row.generatedAmount),
						backgroundColor: 'rgba(67, 56, 202, 0.4)',
						borderColor: 'rgba(67, 56, 202, 0.4)',
						stack: 'stack1'
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
						min: 0,
						stacked: true
					},
					x: {
						stacked: true
					}
				},
				interaction: {
					mode: 'index',
					intersect: false
				},
				plugins: {
					tooltip: {
						callbacks: {
							footer: function (tooltipItems) {
								const total = tooltipItems.reduce((a, b) => a + b.parsed.y, 0);
								return `Yhteensä: ${separateThousands(total)} €`;
							},
							title: function (tooltipItems) {
								const label = tooltipItems[0].label;
								return `${label}. vuosi`;
							}
						}
					}
				}
			}
		});
	});
</script>

<canvas id="acquisitions" bind:this={canvas} />
