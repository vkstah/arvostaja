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
		background-color: rgba(2, 132, 199, 0.1);
		border-left: 8px solid #0284c7;
		border-radius: 8px;
		color: #4bc3ff;
		padding: 1.6rem;
		margin: 0;
		position: relative;
		font-style: italic;

		@media (min-width: 600px) {
			border-left: 10px solid #0284c7;
			padding: 2.4rem;
		}

		&::before {
			content: '\201c';
			font-size: 80px;
			font-style: normal;
			display: block;
			margin-bottom: -48px;
			margin-top: -24px;
		}

		.source {
			display: block;
			font-style: normal;
			text-align: right;
			margin-top: 20px;

			&::before {
				content: '\2014\0020';
			}
		}
	}
</style>
