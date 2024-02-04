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
		const doughnutHoverLabel = {
			id: 'doughnutHoverLabel',
			afterDraw(chart: Chart, args: any, pluginOptions: any) {
				const { ctx, data } = chart;

				if (!data.labels) return;
				if (!chart.getActiveElements()[0]) return;

				const index = chart.getActiveElements()[0].index;
				const dataObject = `${data.datasets[0].data[index]}`;

				const text = `${dataObject.replace('.', ',')} %`;

				const xCoord = chart.getDatasetMeta(0).data[0].x;
				const yCoord = chart.getDatasetMeta(0).data[0].y;
				ctx.font = 'bold 32px Ubuntu';
				ctx.fillStyle = 'white';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(text, xCoord, yCoord);

				ctx.save();
			}
		};

		const config: ChartConfiguration = {
			type: 'doughnut',
			data: {
				labels: data.map((row) => row.title),
				datasets: [
					{
						data: data.map((row) => row.weight),
						backgroundColor: 'rgba(73, 98, 140, 0.3)',
						borderColor: 'hsl(224 71.4% 4.1%)',
						borderWidth: 8,
						hoverOffset: 25,
						hoverBackgroundColor: '#652cd1'
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
			},
			plugins: [doughnutHoverLabel]
		};
		chart = new Chart(canvas, config);
	});
</script>

<canvas bind:this={canvas} />
