<script lang="ts">
	export let value: any = undefined;
	export let unit: string = '';

	let isFocused = false;
	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);
</script>

<div class={isFocused ? 'wrapper focused' : 'wrapper'}>
	<input
		{...$$restProps}
		bind:value
		on:blur={onBlur}
		on:change
		on:click
		on:contextmenu
		on:focus={onFocus}
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:paste
		on:input
		type="number"
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
		outline: 2px solid transparent;
		outline-offset: 0px;
		transition: all 0.2s;

		&.focused {
			outline: 2px solid rgb(125, 125, 125);
		}
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
