<div class="highlight">
	<slot />
</div>

<style lang="scss">
	.highlight {
		--color-highlight-border: #652cd1;

		background-color: #662cd11c;
		border-left: 8px solid var(--color-highligh-border);
		border-radius: 8px;
		color: var(--color-white);
		padding: 1.6rem;

		@media (min-width: 600px) {
			border-left: 10px solid var(--color-highlight-border);
			padding: 2.4rem;
		}
	}
</style>
