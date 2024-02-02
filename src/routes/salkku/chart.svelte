<script lang="ts">
	import Chart, { type ChartItem, type ChartConfiguration } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import type { Holding } from '$lib/types';

	export let data: Holding[];
	export let selectedIndex: number | undefined;

	let chart: Chart;
	let canvas: ChartItem;

	$: if (chart && chart.tooltip) {
		if (selectedIndex != null) {
			if (chart.getActiveElements().length > 0 && chart.tooltip.getActiveElements().length > 0) {
				chart.setActiveElements([]);
				chart.tooltip.setActiveElements([], { x: 0, y: 0 });
			} else {
				const chartArea = chart.chartArea;
				chart.setActiveElements([
					{
						datasetIndex: 0,
						index: selectedIndex
					}
				]);
				chart.tooltip.setActiveElements(
					[
						{
							datasetIndex: 0,
							index: selectedIndex
						}
					],
					{
						x: (chartArea.left + chartArea.right) / 2,
						y: (chartArea.top + chartArea.bottom) / 2
					}
				);
			}
		} else {
			chart.setActiveElements([]);
			chart.tooltip.setActiveElements([], { x: 0, y: 0 });
		}

		// Update the chart
		chart.update();
	}

	onMount(() => {
		const config: ChartConfiguration = {
			type: 'doughnut',
			data: {
				labels: data.map((row) => row.title),
				datasets: [
					{
						data: data.map((row) => row.weight),
						backgroundColor: [
							'#388E3C', // Green
							'#1565C0', // Blue
							'#FFA000', // Yellow
							'#E64A19', // Orange
							'#8E24AA', // Purple
							'#512DA8', // Deep Purple
							'#EF6C00', // Amber
							'#5D4037', // Brown
							'#455A64' // Blue Grey
						],
						borderColor: 'transparent',
						hoverOffset: 25
					}
				]
			},
			options: {
				layout: {
					padding: 20
				},
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						callbacks: {
							label: (tooltipItem) => {
								const value = tooltipItem.parsed;
								return `${value.toFixed(1).replace('.', ',')} %`;
							}
						}
					}
				}
			}
		};
		chart = new Chart(canvas, config);
	});
</script>

<canvas bind:this={canvas} />
