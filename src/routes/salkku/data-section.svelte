<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import type { Holding } from '$lib/types';
	import Chart from './chart.svelte';

	let selectedIndex: number | undefined;

	const data: Holding[] = [
		{
			title: 'Admicom Oyj',
			weight: 41.5,
			acquisitionPrice: 41.19,
			profit: -0.57,
			color: '#cce04c'
		},
		{
			title: 'Kesko Corporation B',
			weight: 24.4,
			acquisitionPrice: 18.38,
			profit: -6.74,
			color: '#ed722e'
		},
		{
			title: 'Nordea Bank Abp',
			weight: 11.9,
			acquisitionPrice: 10.03,
			profit: 4.56,
			color: '#0e7490'
		},
		{
			title: 'Tokmanni Group Oyj',
			weight: 10.7,
			acquisitionPrice: 12.24,
			profit: 3.03,
			color: '#cd3c2f'
		},
		{ title: 'Olvi Plc A', weight: 4.9, acquisitionPrice: 28.02, profit: 5.44, color: '#eaeaea' },
		{ title: 'Gofore Plc', weight: 4.3, acquisitionPrice: 25.91, profit: -6.61, color: '#fb923c' },
		{
			title: 'Mandatum Oyj',
			weight: 0.3,
			acquisitionPrice: 0,
			profit: 0,
			color: '#262626'
		},
		{
			title: 'Käteinen',
			weight: 2.0,
			acquisitionPrice: 0,
			profit: 0,
			color: '#22c55e'
		}
	];
</script>

<div class="container container-visualization">
	<Card>
		<CardHeader>
			<CardTitle>Omistukset</CardTitle>
			<CardDescription>Selaa omistuksia riveittäin.</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="cols cols-data">
				<div class="col col-table">
					<table>
						<thead>
							<tr>
								<th>Nimi</th>
								<th>Keskikurssi</th>
								<th>Tuotto, %</th>
								<th>Painoarvo, %</th>
							</tr>
						</thead>
						<tbody>
							{#each data as row, index}
								<tr
									on:mouseover={() => (selectedIndex = index)}
									on:focus={() => (selectedIndex = index)}
									on:mouseleave={() => (selectedIndex = undefined)}
								>
									<td>{row.title}</td>
									<td>{row.acquisitionPrice.toFixed(2).replace('.', ',')} EUR</td>
									<td
										class="profit"
										class:positive={row.profit >= 0}
										class:negative={row.profit < 0}
									>
										{row.profit.toFixed(1).replace('.', ',')} %
									</td>
									<td>{row.weight.toFixed(1).replace('.', ',')} %</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<div class="col col-chart">
					<Chart {data} {selectedIndex} />
				</div>
			</div>
		</CardContent>
	</Card>
</div>

<style lang="scss">
	.container-visualization {
		padding-top: 0;

		@media (max-width: calc(1000px - 1px)) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.cols-data {
		align-items: center;
		display: grid;
		row-gap: 3rem;

		@media (min-width: 1000px) {
			grid-template-columns: 4fr 3fr;
			column-gap: 2.2rem;
		}
	}

	.col-table {
		border: 1px solid var(--color-border);
		border-radius: 6px;
		overflow-x: auto;
	}

	.col-chart {
		position: relative;
		// padding-left: var(--padding-container-horizontal);
		// padding-right: var(--padding-container-horizontal);
	}

	table {
		text-indent: 0;
		border-color: inherit;
		border-collapse: collapse;
		text-align: left;
		color: #f9fafb;
		font-size: 14px;
		width: 100%;

		@media (min-width: 600px) {
			font-size: 18px;
		}

		th,
		td {
			font-size: 16px;
			padding: 8px 14px;
			white-space: nowrap;

			@media (min-width: 600px) {
				padding: 16px 24px;
			}
		}

		th {
			color: #a1a1aa;
			font-weight: var(--font-weight-medium);
		}

		tr {
			border-bottom: 1px solid var(--color-border);
			transition-property: background-color;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 0.15s;

			&:hover {
				background-color: hsl(215 27.9% 16.9%/0.5);
			}
		}
	}
</style>
