<script lang="ts">
	import type { Holding } from '$lib/types';
	import Chart from './Chart.svelte';

	let selectedIndex: number | null = null;

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

<svelte:head>
	<title>Salkku - Arvostaja</title>
	<meta
		name="description"
		content="Kurkista henkilökohtaiseen salkkuuni. Sijoitan yksinomaan laadukkaisiin vapaata kassavirtaa tuottaviin yhtiöihin, joiden tulevaisuus on mielestäni valoisa."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div class="container container-banner">
	<h1>Salkku</h1>
	<p class="description">
		Kurkista henkilökohtaiseen salkkuuni. Sijoitan yksinomaan laadukkaisiin vapaata kassavirtaa
		tuottaviin yhtiöihin, joiden tulevaisuus on mielestäni valoisa. Salkku on avattu marraskuussa
		2021.
	</p>
</div>
<div class="container container-summary">
	<div class="cols cols-key-data">
		<div class="col col-key-data">
			<h2>Päivitetty</h2>
			<p class="value">19.11.2023</p>
		</div>
		<div class="col col-key-data">
			<h2>YTD</h2>
			<p class="value profit negative">-0,38 %</p>
		</div>
		<div class="col col-key-data">
			<h2>Aloituksesta</h2>
			<p class="value profit negative">-20,85 %</p>
		</div>
	</div>
</div>
<div class="container container-visualization">
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
</div>

<style lang="scss">
	.container-banner {
		padding-bottom: 0;
	}

	.container-summary {
		padding-top: 0;
		padding-bottom: 0;
	}

	.container-visualization {
		padding-top: 0;

		@media (max-width: calc(1000px - 1px)) {
			padding-left: 0;
			padding-right: 0;
		}
	}

	.description {
		margin-bottom: 0;
	}

	.cols-key-data {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-top: 4rem;
		margin-bottom: 1.4rem;

		@media (min-width: 580px) {
			grid-template-columns: repeat(3, 1fr);
			gap: 2.8rem;
			margin-bottom: 2.8rem;
		}

		@media (min-width: 1000px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.col-key-data {
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #202020;
		padding: 1rem 1.4rem;
		border-radius: 12px;

		@media (min-width: 600px) {
			padding: 1.6rem 2rem;
		}

		h2 {
			margin-bottom: 0;
			font-size: 16px;
			color: white;

			@media (min-width: 600px) {
				font-size: 20px;
			}
		}

		.value {
			margin-top: 0.6rem;
			font-weight: var(--font-weight-bold);
			font-size: 20px;

			@media (min-width: 600px) {
				font-size: 24px;
			}
		}

		.profit {
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
		width: 100%;

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
