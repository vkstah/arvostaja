<script lang="ts">
	import type { InputType } from '$lib/types';

	export let type: InputType = 'text';
	export let value: any = undefined;
	export let unit: string = '';
</script>

<div class="wrapper">
	<input
		{...$$restProps}
		bind:value
		on:blur
		on:change
		on:click
		on:contextmenu
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:paste
		on:input
		{...{ type }}
	/>
	{#if unit}
		<div class="unit">{unit}</div>
	{/if}
</div>

<style lang="scss">
	$padding-horizontal: 1.8rem;
	$padding-vertical: 1.2rem;

	.wrapper {
		background-color: #26272e;
		border-radius: 6px;
		display: inline-flex;
		justify-content: space-between;
		width: 100%;
	}

	input {
		background-color: transparent;
		border: none;
		color: var(--color-white);
		font-weight: var(--font-weight-medium);
		outline: none;
		padding-left: $padding-horizontal;
		padding-right: $padding-horizontal;
		padding-top: $padding-vertical;
		padding-bottom: $padding-vertical;
		width: 100%;
	}

	.unit {
		align-items: center;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		display: flex;
		justify-content: center;
		flex-shrink: 0;
		width: 100px;
		background-color: #1a1b22;
		opacity: 0.5;

		&::selection {
			background-color: transparent;
		}
	}

	/* Remove arrows / spinners */
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
