<script lang="ts">
	import Chart, { type ChartItem, type ChartConfiguration } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import type { Stock } from '$lib/types';

	export let data: Stock[];
	export let selectedIndex: number | null;

	let chart: Chart;
	let canvas: ChartItem;
	const idleColors = ['#1e293b', '#4b5563', '#27272a', '#3f3f46'];

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

	onMount(async () => {
		const config: ChartConfiguration = {
			type: 'doughnut',
			data: {
				labels: data.map((row) => row.title),
				datasets: [
					{
						backgroundColor: data.map((row) => row.color),
						borderColor: data.map((row) => '#171717'),
						borderWidth: 10,
						hoverOffset: 45,
						data: data.map((row) => row.weight)
					}
				]
			},
			options: {
				layout: {
					padding: 12
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
				},
				onHover: (evt, chartElement) => {
					// Bail if no element is hovered
					if (!chartElement || chartElement.length === 0) {
						selectedIndex = null;
						return;
					}
					const element = chartElement[0];
					selectedIndex = element.index;
				}
			}
		};
		chart = new Chart(canvas, config);
	});
</script>

<canvas bind:this={canvas} />
