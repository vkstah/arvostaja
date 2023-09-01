<script lang="ts">
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import type { Stock } from '$lib/types';

	export let data: Stock[];

	let canvas: ChartItem;
	const idleColors = ['#1e293b', '#4b5563', '#27272a', '#3f3f46'];
	let selected = data[0];

	onMount(async () => {
		const chart = new Chart(canvas, {
			type: 'doughnut',
			data: {
				labels: data.map((row) => row.title),
				datasets: [
					{
						backgroundColor: data.map((row) => row.color),
						borderColor: data.map((row) => '#171717'),
						borderWidth: 10,
						hoverBorderWidth: 4,
						data: data.map((row) => row.weight)
					}
				]
			},
			options: {
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						enabled: false
					},
					datalabels: {
						formatter: (value, ctx) => {
							let sum = 0;
							let dataArr = ctx.chart.data.datasets[0].data;
							dataArr.forEach((data) => {
								if (!data || typeof data !== 'number') {
									sum += 0;
								} else {
									sum += data;
								}
							});
							const result = (value * 100) / sum;

							// Return empty string if the stake is smaller than a certain threshold.
							const threshold = 10;
							if (result < threshold) return '';
							let percentage = result.toFixed(1).replace('.', ',') + ' %';
							return percentage;
						},
						color: '#fff',
						font: {
							size: 15,
							weight: 'bold',
							family: 'Ubuntu'
						}
					}
				},
				onHover: (evt, chartElement) => {
					// Bail if no element is hovered
					if (!chartElement || chartElement.length === 0) return;
					const element = chartElement[0];
					const stock = data[element.index];
					if (selected === stock) return;
					selected = stock;
				}
			},
			plugins: [ChartDataLabels]
		});
	});
</script>

<canvas id="acquisitions" bind:this={canvas} />
