<script lang="ts">
	export let value: number;
</script>

<span
	class="development"
	class:development-negative={value < 0}
	class:development-positive={value >= 0}>{value.toLocaleString()}%</span
>

<style lang="scss">
	.development {
		border-radius: 4px;
		color: var(--color-white);
		display: inline-block;
		font-weight: 500;
		line-height: normal;
		padding: 0.4rem 0.6rem;

		&-negative {
			background-color: #be2f2f;
		}

		&-positive {
			background-color: #22c55e;
		}
	}
</style>
