<div class="card">
	<slot />
</div>

<style lang="scss">
	.card {
		border: 1px solid var(--color-border);
		border-radius: 6px;
		box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		color: var(--color-heading);
		font-size: 16px;
	}
</style>
