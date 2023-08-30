<div class={`container-medium ${$$props.class}`}>
	<slot />
</div>

<style lang="scss">
	.container-medium {
		max-width: 1180px;
		margin: 0 auto;
		margin-left: auto;
		margin-right: auto;
		padding-left: var(--padding-container-horizontal);
		padding-right: var(--padding-container-horizontal);
		padding-top: var(--padding-container-vertical);
		padding-bottom: var(--padding-container-vertical);
	}
</style>
