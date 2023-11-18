<script lang="ts">
	export let source: string;
</script>

<blockquote>
	<slot />
	{#if source}
		<span class="source">{source}</span>
	{/if}
</blockquote>

<style lang="scss">
	blockquote {
		background-color: #003e5e;
		border-left: 10px solid #0284c7;
		color: white;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
		padding-top: 2.4rem;
		padding-bottom: 2.4rem;
		margin: 0;
		position: relative;
		font-style: italic;

		@media (min-width: 600px) {
			padding-left: 4rem;
			padding-right: 4rem;
		}

		&::before {
			content: '\201c';
			font-size: 80px;
			color: white;
			font-style: normal;
			display: block;
			margin-bottom: -48px;
			margin-top: -24px;
		}

		.source {
			display: block;
			font-style: normal;
			font-weight: var(--font-weight-semibold);
			text-align: right;
			margin-top: 20px;

			&::before {
				content: '\2014\0020';
			}
		}
	}
</style>
