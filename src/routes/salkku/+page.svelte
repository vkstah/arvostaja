<script lang="ts">
	import { Container } from '$lib/components';
	import type { Stock } from '$lib/types';
	import Chart from './Chart.svelte';

	const data: Stock[] = [
		{
			title: 'Admicom Oyj',
			weight: 36.3,
			acquisitionPrice: 42.67,
			profit: -15.16,
			color: '#cce04c'
		},
		{
			title: 'Kesko Corporation B',
			weight: 23.9,
			acquisitionPrice: 19.06,
			profit: -4.67,
			color: '#ed722e'
		},
		{
			title: 'Nordea Bank Abp',
			weight: 13.3,
			acquisitionPrice: 10.03,
			profit: 0.7,
			color: '#0e7490'
		},
		{
			title: 'Tokmanni Group Oyj',
			weight: 6.4,
			acquisitionPrice: 11.77,
			profit: 13.25,
			color: '#cd3c2f'
		},
		{
			title: 'Remedy Entertainment Oyj',
			weight: 6.0,
			acquisitionPrice: 21.24,
			profit: 17.47,
			color: '#4b5563'
		},
		{ title: 'Olvi Plc A', weight: 5.9, acquisitionPrice: 28.03, profit: 9.72, color: '#1e293b' },
		{ title: 'Gofore Plc', weight: 4.3, acquisitionPrice: 25.91, profit: -19.34, color: '#27272a' },
		{ title: 'Sampo Plc A', weight: 3.9, acquisitionPrice: 46.88, profit: -13.16, color: '#3f3f46' }
	];
</script>

<svelte:head>
	<title>Salkku - Arvostaja</title>
	<meta
		name="description"
		content="Kurkista henkilökohtaiseen salkkuuni. Sijoitan yksinomaan laadukkaisiin vapaata kassavirtaa tuottaviin yhtiöihin, joiden tulevaisuus on mielestäni valoisa."
	/>
</svelte:head>

<Container
	><h1>Salkku</h1>
	<p>
		Kurkista henkilökohtaiseen salkkuuni. Sijoitan yksinomaan laadukkaisiin vapaata kassavirtaa
		tuottaviin yhtiöihin, joiden tulevaisuus on mielestäni valoisa.
	</p>
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
					{#each data as row}
						<tr style="border-left: 5px solid {row.color}">
							<td>{row.title}</td>
							<td>{row.acquisitionPrice.toFixed(2).replace('.', ',')} EUR</td>
							<td class="profit" class:positive={row.profit >= 0} class:negative={row.profit < 0}
								>{row.profit.toFixed(1).replace('.', ',')} %</td
							>
							<td>{row.weight.toFixed(1).replace('.', ',')} %</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="col col-chart">
			<Chart {data} />
		</div>
	</div>
</Container>

<style lang="scss">
	.cols {
		display: grid;
		row-gap: 3rem;

		@media (min-width: 1000px) {
			grid-template-columns: 2fr 1fr;
			column-gap: 4rem;
		}
	}

	.col-table {
		overflow-x: auto;
	}

	table {
		text-align: left;
		color: rgb(225, 225, 225);
		border-spacing: 0;
		border-collapse: collapse;

		th,
		td {
			padding: 12px 20px;
			background-color: #202020;

			@media (min-width: 600px) {
				padding: 16px 24px;
			}
		}

		th {
			background-color: #171717;
			font-weight: var(--font-weight-medium);
		}

		tbody > tr {
			border-top: 1px solid #3b3b3b;
			border-bottom: 1px solid #3b3b3b;
			border-right: 1px solid #3b3b3b;
		}

		td.profit {
			font-weight: var(--font-weight-medium);

			&.positive {
				color: #22c55e;

				&::after {
					border-bottom-color: #22c55e;
				}
			}
			&.negative {
				color: #ef4444;

				&::after {
					border-bottom-color: #ef4444;
					transform: rotate(180deg);
				}
			}

			&::after {
				content: '';
				display: inline-block;
				width: 0;
				height: 0;
				border-left: 8px solid transparent;
				border-right: 8px solid transparent;
				border-bottom: 8px solid transparent;
				margin-left: 0.4rem;
			}
		}
	}
</style>
