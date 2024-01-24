<script lang="ts">
	import {
		Card,
		CardDescription,
		CardHeader,
		CardTitle,
		CardContent
	} from '$lib/components/ui/card';
	import { Icon } from '$lib/components/ui/icon';
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
	<div class="cols cols-cards">
		<Card>
			<CardHeader>
				<CardTitle>Viimeisin päivitys</CardTitle>
				<CardDescription>Viimeisin päivitysajankohta.</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="icon-value">
					<Icon name="calendar" />
					<span class="value">19.11.2023</span>
				</div>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>YTD</CardTitle>
				<CardDescription>Salkun tuotto vuoden alusta.</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="icon-value">
					<Icon name="arrow-up" />
					<span class="value">-0,38 %</span>
				</div>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Yhteensä</CardTitle>
				<CardDescription>Salkun tuotto koko ajalta.</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="icon-value">
					<Icon name="arrow-down" />
					<span class="value">-20,85 %</span>
				</div>
			</CardContent>
		</Card>
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
		padding-top: 1rem;
		padding-bottom: 1rem;
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

	.cols-cards {
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
			gap: 2.4rem;
			grid-template-columns: repeat(4, 1fr);
		}

		.icon-value {
			align-items: center;
			display: flex;
			font-size: 20px;
			font-weight: 700;
			gap: 14px;

			:global(svg) {
				color: var(--color-primary);
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
		border: 1px solid var(--color-border);
		border-radius: 6px;
		overflow-x: auto;
	}

	.col-chart {
		align-self: center;
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
			padding: 8px 14px;
			font-size: 16px;

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
