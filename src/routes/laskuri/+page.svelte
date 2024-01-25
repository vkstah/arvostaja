<script lang="ts">
	import Chart from './Chart.svelte';
	import type { Period } from '$lib/types';
	import { calculateCompoundedAmount, separateThousands } from '$lib/utils';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	let principalAmount: number = 2000;
	let years: number = 10;
	let monthlyRecurringPayment: number = 0;
	let rate: number = 8;
	let periods: Period[] = [];
	let lastYear: Period | undefined;
	let yearPeriods: Period[] = [];

	$: {
		periods = calculateCompoundedAmount(principalAmount, rate, 12, years, monthlyRecurringPayment);
		yearPeriods = periods.filter((period, index) => {
			return index % 12 == 0;
		});
		lastYear = yearPeriods.at(-1);
	}
</script>

<svelte:head>
	<title>Korkoa korolle -laskuri - Arvostaja</title>
	<meta
		name="description"
		content="Näin paljon rahaa voit tuottaa itsellesi sijoittamalla. Laske oma tuottoarviosi korkoa korolle -laskurilla!"
	/>
</svelte:head>

<div class="container">
	<h1>Korkoa korolle -laskuri</h1>
	<p>
		Arvioi joko kerta- tai säännöllisen sijoituksesi tuottoa kätevästi korkoa korolle -laskurilla.
		Laskurista näet sijoituksen kokonaisarvon lisäksi jakauman sijoitetun summan ja kokonaiskoron
		välillä.
	</p>
	<div class="inputs">
		<div class="input">
			<Label for="principal-amount" class="label">Aloitussumma</Label>
			<Input
				unit="€"
				id="principal-amount"
				type="number"
				bind:value={principalAmount}
				placeholder="2000"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="years" class="label">Säästöaika</Label>
			<Input
				unit="vuotta"
				id="years"
				type="number"
				bind:value={years}
				placeholder="10"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="monthly-recurring-payment" class="label">Säännöllinen sijoitus</Label>
			<Input
				unit="€ / kk"
				id="monthly-recurring-payment"
				type="number"
				bind:value={monthlyRecurringPayment}
				placeholder="0"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="rate" class="label">Tuotto / vuosi</Label>
			<Input unit="%" id="rate" type="number" bind:value={rate} placeholder="8" min="0" max="100" />
		</div>
	</div>
	<div class="results">
		<div class="cols cols-results">
			{#if lastYear}
				<div class="cols cols-details">
					<div class="col col-invested">
						<Card>
							<CardHeader>
								<h3 class="title">Sijoitettu summa</h3>
							</CardHeader>
							<CardContent>
								<p class="value">{separateThousands(Math.round(lastYear.investedAmount))} €</p>
							</CardContent>
						</Card>
					</div>
					<div class="col col-generated">
						<Card>
							<CardHeader>
								<h3 class="title">Kokonaiskorko</h3>
							</CardHeader>
							<CardContent>
								<p class="value">{separateThousands(Math.round(lastYear.generatedAmount))} €</p>
							</CardContent>
						</Card>
					</div>
					<div class="col col-total">
						<Card>
							<CardHeader>
								<h3 class="title">Yhteensä</h3>
							</CardHeader>
							<CardContent>
								<p class="value">{separateThousands(Math.round(lastYear.totalAmount))} €</p>
							</CardContent>
						</Card>
					</div>
				</div>
			{/if}
			<div class="chart">
				<Chart data={yearPeriods} />
			</div>
		</div>
	</div>
	<div class="info">
		<h2>Mikä on korkoa korolle -ilmiö?</h2>
		<p>
			Korkoa korolle on taloudellinen ilmiö, joka viittaa siihen, kuinka alkuperäinen pääomasumma
			kasvaa ajan myötä, kun sille kertynyt korko lisätään säännöllisesti pääomaan ja uusi korko
			lasketaan tämän kasvaneen pääoman perusteella. Tämä ilmiö syntyy, kun sijoitettu pääoma tai
			lainattu summa tuottaa korkoa tai voittoa, ja nämä tulot lisätään alkuperäiseen summaan,
			jolloin seuraava korkolaskenta perustuu suurempaan pääomaan.
		</p>
		<h2>Miten korkoa korolle -laskuri toimii?</h2>
		<p>
			Korkoa korolle -laskuri on kätevä työkalu, joka auttaa hahmottamaan, kuinka alkuperäinen
			sijoitus tai lainattu summa kasvaa ajan myötä korkoa korolle -ilmiön vaikutuksesta. Tämä
			laskuri ottaa huomioon alkuperäisen pääoman, korkoprosentin ja sijoitusaikavälin, ja se
			laskee, kuinka suureksi pääomasumma kasvaa, kun sille kertynyt korko lisätään ja uusi korko
			lasketaan aina aikaisemman pääoman perusteella.
		</p>
		<p>
			Kun syötät laskuriin alkuperäisen pääoman, korkoprosentin, ajanjakson sekä kuukausittain
			pääomaan tehtävät lisäykset, laskuri näyttää sinulle, kuinka pääoma kasvaa vuosi vuodelta.
			Tämä antaa selkeän käsityksen siitä, miten alkuperäinen sijoitus kasvaa ajan myötä ilman, että
			sinun tarvitsee manuaalisesti suorittaa korkolaskelmia joka vuodelle.
		</p>
		<p>
			Huomaa, että laskuri käyttää kuukausittaista jaksotusta, jolloin ilmiön aiheuttama tuotto
			lisätään joka <em>kuukauden lopussa</em> summaan. Tällöin jaksotustahti on 12 per vuosi.
		</p>
	</div>
</div>

<style lang="scss">
	.inputs {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 4rem;
		row-gap: 1.6rem;

		@media (min-width: 550px) {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 2.8rem;
		}

		@media (min-width: 1000px) {
			grid-template-columns: repeat(4, 1fr);
			column-gap: 2.8rem;
		}
	}

	.results {
		margin-top: 6rem;

		.cols {
			display: grid;
		}

		.cols-results {
			grid-template-columns: 1fr;
			row-gap: 3rem;

			@media (min-width: 1000px) {
				grid-template-columns: 1fr 4fr;
				column-gap: 4rem;
			}
		}

		.cols-details {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;

			@media (min-width: 1000px) {
				grid-template-columns: 1fr;
			}

			.title {
				font-size: 12px;
				font-weight: 400;
				margin: 0;

				@media (min-width: 600px) {
					font-size: 16px;
				}
			}

			.value {
				font-size: 20px;
				font-weight: var(--font-weight-semibold);
				letter-spacing: -0.02em;
				margin: 0;

				@media (min-width: 600px) {
					font-size: 26px;
				}
			}

			.col-total {
				:global(.card) {
					background-color: var(--color-primary);
					border-color: var(--color-primary);
				}

				:global(.title),
				:global(.value) {
					color: var(--color-white);
				}
			}
		}
	}

	.info {
		margin-top: 6rem;
	}
</style>
