<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Chart from './Chart.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Label from '$lib/components/forms/Label.svelte';
	import type { YearlyResult } from '$lib/types';
	import { calculateTotalCompoundedValue, separateThousands } from '$lib/utils/utils';

	let startAmount: number = 2000;
	let savingTime: number = 10;
	let recurringAmount: number = 0;
	let profitPerYearPercentage: number = 8;
	let investedAmount: number;
	let yearlyResults: YearlyResult[] = [];
	let lastYear: YearlyResult | undefined;

	$: {
		const profitPercentage = profitPerYearPercentage / 100;
		yearlyResults = [];
		for (let year = 0; year <= savingTime; year++) {
			const totalCompoundedAmount = startAmount * Math.pow(1 + profitPercentage, year);

			// Calculate the generated amount for this year
			const generatedAmount = totalCompoundedAmount - startAmount;

			// Round the result to the nearest integer
			const roundedAmount = Math.round((totalCompoundedAmount * 100) / 100);
			const roundedGeneratedAmount = Math.round((generatedAmount * 100) / 100);

			yearlyResults.push({
				year,
				totalAmount: roundedAmount,
				generatedAmount: roundedGeneratedAmount
			});
		}
		investedAmount = startAmount;
		lastYear = yearlyResults.at(-1);
	}

	console.log(calculateTotalCompoundedValue(1000, 1, 10, 10));
</script>

<Container>
	<h1>Korkoa korolle -laskuri</h1>
	<p>
		Arvioi joko kerta- tai säännöllisen sijoituksesi tuottoa kätevästi korkoa korolle -laskurilla.
		Laskurista näet sijoituksen kokonaisarvon lisäksi jakauman sijoitetun summan ja kokonaiskoron
		välillä.
	</p>
	<div class="inputs">
		<div class="input">
			<Label for="start-amount" class="label">Aloitussumma</Label>
			<Input
				unit="€"
				id="start-amount"
				type="number"
				bind:value={startAmount}
				placeholder="2000"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="saving-time" class="label">Säästöaika</Label>
			<Input
				unit="vuotta"
				id="saving-time"
				type="number"
				bind:value={savingTime}
				placeholder="10"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="recurring-amount" class="label">Säännöllinen sijoitus</Label>
			<Input
				unit="€ / kk"
				id="recurring-amount"
				type="number"
				bind:value={recurringAmount}
				placeholder="0"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="profit-per-year-percentage" class="label">Tuotto / vuosi</Label>
			<Input
				unit="%"
				id="profit-per-year-percentage"
				type="number"
				bind:value={profitPerYearPercentage}
				placeholder="8"
				min="0"
				max="100"
			/>
		</div>
	</div>
	<div class="results">
		{#if lastYear}
			<div class="details">
				<div class="cols">
					<div class="col col-total">
						<h2>Sijoituksen kokonaisarvo</h2>
						<p>{separateThousands(lastYear.totalAmount)} €</p>
					</div>
					<div class="col col-generated">
						<h2>Kokonaiskorko</h2>
						<p>{separateThousands(lastYear.generatedAmount)} €</p>
					</div>
					<div class="col col-invested">
						<h2>Sijoitettu summa</h2>
						<p>{separateThousands(investedAmount)} €</p>
					</div>
				</div>
			</div>
		{/if}
		<div class="chart">
			<Chart data={yearlyResults} />
		</div>
	</div>
</Container>

<style lang="scss">
	.inputs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 4rem;
		row-gap: 1.6rem;
	}

	.results {
		margin-top: 8rem;

		.details {
			.cols {
				display: grid;
				grid-template-columns: 1fr;
				gap: 1.6rem;

				@media (min-width: 1000px) {
					grid-template-columns: repeat(4, 1fr);
				}
			}

			.col {
				border-radius: 8px;
				padding: 1.8rem;

				h2 {
					font-size: 20px;
					margin: 0;
				}

				p {
					margin-top: 1rem;
					font-size: 32px;
					font-weight: var(--font-weight-semibold);
					color: white;
				}
			}

			.col-total {
				background-color: #177439;
			}

			.col-generated {
				background-color: rgba(67, 56, 202, 0.4);
			}

			.col-invested {
				background-color: #4338ca;
			}
		}

		.chart {
			margin-top: 6rem;
		}
	}
</style>
