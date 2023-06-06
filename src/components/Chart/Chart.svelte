<script lang="ts">
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	const data = [
		{ year: 2010, count: 10 },
		{ year: 2011, count: 20 },
		{ year: 2012, count: 15 },
		{ year: 2013, count: 25 },
		{ year: 2014, count: 22 },
		{ year: 2015, count: 30 },
		{ year: 2016, count: 28 }
	];

	onMount(async () => {
		const canvas = document.getElementById('acquisitions') as ChartItem;
		const test = new Chart(canvas, {
			type: 'bar',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Acquisitions by year',
						data: data.map((row) => row.count),
						backgroundColor: '#4338ca',
						borderColor: '#4338ca'
					}
				]
			}
		});
	});
</script>

<canvas id="acquisitions" />
