<script lang="ts">
	let node: HTMLLabelElement;
</script>

<label
	bind:this={node}
	{...$$restProps}
	class={$$props.for ? $$props.class + ' clickable' : $$props.class}><slot /></label
>

<style lang="scss">
	label {
		display: inline-block;
		margin-bottom: 1rem;

		&.clickable {
			cursor: pointer;
		}
	}
</style>
