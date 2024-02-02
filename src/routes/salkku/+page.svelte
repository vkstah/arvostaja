<script lang="ts">
	import {
		Card,
		CardDescription,
		CardHeader,
		CardTitle,
		CardContent
	} from '$lib/components/ui/card';
	import { Icon } from '$lib/components/ui/icon';
	import DataSection from './data-section.svelte';
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
<DataSection />

<style lang="scss">
	.container-banner {
		padding-bottom: 0;
	}

	.container-summary {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.description {
		margin-bottom: 0;
	}

	.cols-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		margin-top: 4rem;
		margin-bottom: 1.4rem;

		@media (min-width: 580px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 2.8rem;
			margin-bottom: 2.8rem;
		}

		@media (min-width: 1000px) {
			gap: 2.4rem;
			grid-template-columns: repeat(3, 1fr);
		}

		@media (min-width: 1400px) {
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
</style>
