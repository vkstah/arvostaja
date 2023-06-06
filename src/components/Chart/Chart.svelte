<script lang="ts">
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	type Year = {
		year: number;
		count: number;
	};

	/*
	const sampleData: Year[] = [
		{ year: 2013, count: 100000 },
		{ year: 2014, count: 115000 },
		{ year: 2015, count: 132250 },
		{ year: 2016, count: 152087 },
		{ year: 2017, count: 174901 },
		{ year: 2018, count: 201136 },
		{ year: 2019, count: 231306 },
		{ year: 2020, count: 266002 },
		{ year: 2021, count: 305902 },
		{ year: 2022, count: 351788 },
		{ year: 2023, count: 404556 }
	];
  */

	const start = 100000;
	const interest = 1.08;
	const years = 30;

	let data: Year[] = [];
	for (let i: number = 1; i <= years; i++) {
		let count;
		if (i === 1) {
			count = (start * interest) ^ i;
		} else {
			count = (data[i - 2].count * interest) ^ i;
		}
		data.push({ year: i, count: count });
	}

	onMount(async () => {
		const canvas = document.getElementById('acquisitions') as ChartItem;
		const test = new Chart(canvas, {
			type: 'line',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
					{
						label: 'Arvo (€)',
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
