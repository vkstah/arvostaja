<script lang="ts">
	import type { Period } from '$lib/types';
	import { separateThousands } from '$lib/utils';
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data: Period[];

	let chart: Chart;
	let canvas: ChartItem;

	$: if (chart) {
		// Update the years
		chart.data.labels = data.map((row, index) => index);

		// Update the invested amount
		chart.data.datasets[0].data = data.map((row) => Math.round(row.investedAmount));

		// Update the generated amount
		chart.data.datasets[1].data = data.map((row) => Math.round(row.generatedAmount));

		// Update the chart
		chart.update();
	}

	onMount(async () => {
		chart = new Chart(canvas, {
			type: 'bar',
			data: {
				labels: data.map((row, index) => index),
				datasets: [
					{
						label: 'Sijoitettu summa',
						data: data.map((row) => Math.round(row.investedAmount)),
						backgroundColor: '#652cd1',
						borderColor: '#652cd1',
						stack: 'stack1'
					},
					{
						label: 'Kokonaiskorko',
						data: data.map((row) => Math.round(row.generatedAmount)),
						backgroundColor: 'rgba(101, 44, 209, 0.25)',
						borderColor: 'rgba(101, 44, 209, 0.25)',
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
								return `Yhteensä: ${separateThousands(Math.round(total))} €`;
							},
							title: function (tooltipItems) {
								const item = tooltipItems[0];
								if (item.dataIndex === 0) return 'Aloitusvuosi';
								const label = item.label;
								return `${label}. vuosi`;
							}
						}
					}
				}
			}
		});
	});
</script>

<canvas bind:this={canvas} />
