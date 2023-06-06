<script lang="ts">
	import Button from '../components/Button/Button.svelte';
	import Chart from '../components/Chart/Chart.svelte';
	import Container from '../components/Container/Container.svelte';
	import ContainerSlim from '../components/Container/ContainerSlim.svelte';
</script>

<Container>Arvostaja</Container>
<ContainerSlim>
	<h1>Arvostaja</h1>
	<p>
		Ankkurointivinouma on yksi monista kognitiivisista vinoumista, joita me ihmiset koemme
		päivittäisessä elämässämme. Tämä vinouma tapahtuu, kun henkilö käyttää ensimmäistä saamaansa
		tietoa viitepisteenä päätöksenteossa, jolloin myöhemmät päätökset perustuvat tähän
		viitepisteeseen. Tämä voi johtaa virheellisiin päätöksiin ja arvioihin, sillä viitepiste voi
		olla epäluotettava tai harhaanjohtava. <a href="#">Ankkurointivinouma</a> on erityisen merkittävä
		esimerkiksi hinnoittelussa ja neuvotteluissa. Hinta tai tarjous, jonka henkilö ensimmäiseksi kuulee,
		voi muodostaa viitepisteen, johon myöhemmät tarjoukset verrataan. Tämä voi johtaa siihen, että henkilö
		hyväksyy tarjouksen, joka ei olisi ollut hyväksyttävissä, jos hän olisi saanut erilaisen viitepisteen.
		Mietitään asiaa esimerkin kautta:
	</p>
</ContainerSlim>
<div class="container-chart">
	<Chart />
</div>
<ContainerSlim>
	<p>
		Ankkurointivinouma on yksi monista kognitiivisista vinoumista, joita me ihmiset koemme
		päivittäisessä elämässämme. Tämä vinouma tapahtuu, kun henkilö käyttää ensimmäistä saamaansa
		tietoa viitepisteenä päätöksenteossa, jolloin myöhemmät päätökset perustuvat tähän
		viitepisteeseen. Tämä voi johtaa virheellisiin päätöksiin ja arvioihin, sillä viitepiste voi
		olla epäluotettava tai harhaanjohtava. <a href="#">Ankkurointivinouma</a> on erityisen merkittävä
		esimerkiksi hinnoittelussa ja neuvotteluissa. Hinta tai tarjous, jonka henkilö ensimmäiseksi kuulee,
		voi muodostaa viitepisteen, johon myöhemmät tarjoukset verrataan. Tämä voi johtaa siihen, että henkilö
		hyväksyy tarjouksen, joka ei olisi ollut hyväksyttävissä, jos hän olisi saanut erilaisen viitepisteen.
		Mietitään asiaa esimerkin kautta:
	</p>
</ContainerSlim>

<style lang="scss">
	.container-chart {
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
