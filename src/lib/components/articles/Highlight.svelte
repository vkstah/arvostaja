<div class="highlight">
	<slot />
</div>

<style lang="scss">
	.highlight {
		background-color: rgba(2, 132, 199, 0.1);
		border-left: 8px solid #0284c7;
		border-radius: 8px;
		color: #4bc3ff;
		padding: 1.6rem;

		@media (min-width: 600px) {
			border-left: 10px solid #0284c7;
			padding: 2.4rem;
		}
	}
</style>
