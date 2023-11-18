<script lang="ts">
	export let value: number;

	const displayValue = () => {
		return value;
	};
</script>

<span
	class="development"
	class:development-negative={value < 0}
	class:development-positive={value >= 0}>{displayValue()}%</span
>

<style lang="scss">
	.development {
		display: inline-block;
		color: white;
		padding: 0 0.375rem;
		border-radius: 6px;
		font-weight: var(--font-weight-bold);

		&-negative {
			background-color: rgba(239, 68, 68, 0.7);

			&::before {
				transform: rotate(180deg);
			}
		}

		&-positive {
			background-color: rgba(34, 197, 94, 0.7);
		}

		&::before {
			content: '';
			display: inline-block;
			width: 0;
			height: 0;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 8px solid transparent;
			margin-right: 0.4rem;
			border-bottom-color: white;
		}
	}
</style>
