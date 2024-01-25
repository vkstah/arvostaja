<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let value: string | number | undefined = undefined;
	export let unit: string = '';
	export let plusMinus: boolean = false;

	$: if ($$restProps.type === 'number') {
		value = Number(value);
	}

	let isFocused = false;
	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);
</script>

<div class="input" class:input-focused={isFocused}>
	<input
		bind:value
		on:focus={onFocus}
		on:blur={onBlur}
		on:change
		on:click
		on:contextmenu
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:paste
		on:input
		{...$$restProps}
	/>
	{#if unit}
		<div class="unit">{unit}</div>
	{/if}
</div>

<style lang="scss">
	.input {
		background-color: transparent;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		display: inline-flex;
		justify-content: space-between;
		width: 100%;
		outline: 2px solid transparent;
		outline-offset: 4px;
		padding-left: 12px;
		transition: all 0.2s;

		&-focused {
			outline: 2px solid var(--color-primary);
		}
	}

	input {
		background-color: transparent;
		border: none;
		color: var(--color-white);
		font-weight: var(--font-weight-medium);
		outline: none;
		height: 48px;
		width: 100%;
	}

	.unit {
		align-items: center;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		color: rgba(255, 255, 255, 0.45);
		display: flex;
		justify-content: center;
		flex-shrink: 0;
		padding-left: 20px;
		padding-right: 20px;
		background-color: var(--color-border);
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
