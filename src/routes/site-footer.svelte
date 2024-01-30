<footer class="site-footer">
	<div class="container">
		<p>
			Tällä sivustolla esitetty ei ole, eikä sitä tule käsittää kehotukseksi merkitä, ostaa tai
			myydä arvopapereita.
		</p>
		<p class="copyright">Kaikki oikeudet pidätetään. Arvostaja {new Date().getFullYear()}.</p>
	</div>
</footer>

<style lang="scss">
	.site-footer {
		p {
			font-size: 14px;
			margin: 0.4rem;
			padding: 0;
			text-align: center;

			@media (min-width: 600px) {
				font-size: 16px;
			}
		}

		p.copyright {
			color: var(--color-white);
			font-weight: 500;
		}
	}
</style>
