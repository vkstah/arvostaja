<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		max-width: 1360px;
		margin: 0 auto;
		margin-left: auto;
		margin-right: auto;
		padding-left: var(--padding-container-horizontal);
		padding-right: var(--padding-container-horizontal);
		padding-top: var(--padding-container-vertical);
		padding-bottom: var(--padding-container-vertical);
	}
</style>
