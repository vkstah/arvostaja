<div class="highlight">
	<slot />
</div>

<style lang="scss">
	.highlight {
		background-color: #003e5e;
		border-left: 10px solid #0284c7;
		color: white;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
		padding-top: 2.4rem;
		padding-bottom: 2.4rem;

		@media (min-width: 600px) {
			padding-left: 4rem;
			padding-right: 4rem;
		}
	}
</style>
