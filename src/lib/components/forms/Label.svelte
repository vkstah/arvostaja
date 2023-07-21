<script lang="ts">
	let node: HTMLLabelElement;
</script>

<label bind:this={node} {...$$restProps} class={$$props.class}><slot /></label>
