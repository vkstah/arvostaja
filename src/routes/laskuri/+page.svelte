<script lang="ts">
	import Input from '$lib/components/forms/Input.svelte';
	import Chart from '$lib/components/chart/Chart.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Label from '$lib/components/forms/Label.svelte';

	let startAmount: number = 2000;
	let savingTime: number = 10;
	let recurringAmount: number = 0;
	let profitPerYearPercentage: number = 8;
</script>

<Container>
	<h1>Korkoa korolle -laskuri</h1>
	<p>
		Korkoa korolle -laskurimme auttaa sinua suunnittelemaan säästämisen tavoitteesi ja kertoo kuinka
		paljon sinulle voisi olla kertynyt varallisuutta säästöajan päättyessä. Voit myös tutustua
		korkoa korolle -ilmiöön ja sen toimintaan. Laske laskurilla, miten säästösi voisivat kertyä!
	</p>
	<div class="inputs">
		<div class="input">
			<Label for="start-amount">Aloitussumma</Label>
			<Input
				unit="€"
				id="start-amount"
				type="number"
				bind:value={startAmount}
				placeholder="0"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="saving-time">Säästöaika</Label>
			<Input
				unit="vuotta"
				id="saving-time"
				type="number"
				bind:value={savingTime}
				placeholder="0"
				min="0"
				step="1"
			/>
		</div>
		<div class="input">
			<Label for="recurring-amount">Säännöllinen sijoitus</Label>
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
			<Label for="profit-per-year-percentage">Tuotto / vuosi</Label>
			<Input
				unit="%"
				id="profit-per-year-percentage"
				type="number"
				bind:value={profitPerYearPercentage}
				placeholder="0"
				min="0"
				max="100"
			/>
		</div>
	</div>
	<div class="cols">
		<div class="col col-results">
			<div class="total">
				<h2>Sijoituksen kokonaisarvo</h2>
				<p>4 318 €</p>
			</div>
		</div>
		<div class="col col-chart">
			<Chart {startAmount} {savingTime} {recurringAmount} {profitPerYearPercentage} />
		</div>
	</div>
</Container>

<style lang="scss">
	.cols {
		display: grid;
		grid-template-columns: 1fr;

		@media (min-width: 1300px) {
			grid-template-columns: 2fr 3fr;
			column-gap: 3rem;
		}
	}
</style>
