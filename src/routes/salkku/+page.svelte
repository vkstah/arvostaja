<script lang="ts">
	import { Container } from '$lib/components';
	import type { Stock } from '$lib/types';
	import Chart from './Chart.svelte';

	let selectedIndex: number | null = null;

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

<Container>
	<h1>Salkku</h1>
	<p class="description">
		Kurkista henkilökohtaiseen salkkuuni. Sijoitan yksinomaan laadukkaisiin vapaata kassavirtaa
		tuottaviin yhtiöihin, joiden tulevaisuus on mielestäni valoisa. Salkku on avattu marraskuussa
		2021.
	</p>
	<div class="cols cols-key-data">
		<div class="col col-key-data">
			<h2>YTD</h2>
			<p class="profit negative">-5,86 %</p>
		</div>
		<div class="col col-key-data">
			<h2>Aloituksesta</h2>
			<p class="profit negative">-25,21 %</p>
		</div>
	</div>
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
							style="border-left: 5px solid {row.color}"
							on:mouseover={() => (selectedIndex = index)}
							on:focus={() => (selectedIndex = index)}
							on:mouseleave={() => (selectedIndex = null)}
						>
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
			<Chart {data} {selectedIndex} />
		</div>
	</div>
</Container>

<style lang="scss">
	.description {
		margin-bottom: 0;
	}

	.cols-key-data {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
		margin: 4rem 0;
	}

	.col-key-data {
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #202020;
		color: white;
		width: 220px;
		padding: 1.2rem 1.6rem;
		border-radius: 12px;

		@media (min-width: 600px) {
			padding: 1.6rem 2rem;
		}

		h2 {
			margin-bottom: 0;
			font-size: 16px;

			@media (min-width: 600px) {
				font-size: 20px;
			}
		}

		.profit {
			margin-top: 0.6rem;
			font-weight: var(--font-weight-bold);
			font-size: 20px;

			@media (min-width: 600px) {
				font-size: 24px;
			}

			&::after {
				content: '';
				display: inline-block;
				width: 0;
				height: 0;
				border-left: 10px solid transparent;
				border-right: 10px solid transparent;
				border-bottom: 10px solid transparent;
				margin-left: 0.4rem;
			}

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
		}
	}

	.cols-data {
		display: grid;
		row-gap: 3rem;

		@media (min-width: 1000px) {
			grid-template-columns: 3fr 2fr;
			column-gap: 3rem;
		}
	}

	.col-table {
		overflow-x: auto;
	}

	.col-chart {
		align-self: center;
	}

	table {
		text-align: left;
		color: rgb(225, 225, 225);
		border-spacing: 0;
		border-collapse: collapse;
		font-size: 14px;

		@media (min-width: 600px) {
			font-size: 18px;
		}

		th,
		td {
			padding: 8px 14px;

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
			background-color: #202020;

			&:hover {
				background-color: #3b3b3b;
			}
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
