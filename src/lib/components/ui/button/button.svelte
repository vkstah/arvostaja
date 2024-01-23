<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'white';
	type Size = 'default' | 'sm' | 'lg';

	export let variant: Variant = 'primary';
	export let size: Size = 'default';
	export let href: string | undefined = undefined;
	const tag = href ? 'a' : 'button';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={tag}
	class={`button button-${variant} button-${size}` +
		($$restProps.class ? ` ${$$restProps.class}` : '')}
	{href}
	on:click
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.button {
		appearance: none;
		border: 1px solid var(--color-governor-bay);
		border-radius: 8px;
		color: black;
		cursor: pointer;
		display: inline-flex;
		font-family: var(--font-paragraph);
		font-weight: var(--font-weight-medium);
		justify-content: center;
		margin-bottom: 0;
		max-width: 23rem;
		outline: 2px solid transparent;
		outline-offset: 0px;
		overflow: hidden;
		position: relative;
		text-decoration: none;
		text-overflow: ellipsis;
		transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		white-space: nowrap;
		width: auto;

		&-primary {
			background-color: var(--color-governor-bay);
			color: var(--color-white);

			&:hover,
			&:focus {
				outline: 2px solid var(--color-governor-bay);
			}
		}

		&-white {
			background-color: var(--color-white);

			&:hover,
			&:focus {
				outline: 2px solid var(--color-white);
			}
		}

		&-default {
			font-size: 16px;
			height: 58px;
			padding-bottom: 12px;
			padding-left: 20px;
			padding-right: 20px;
			padding-top: 12px;

			&:hover,
			&:focus {
				outline-offset: 4px;
			}
		}

		&-sm {
			font-size: 14px;
			height: 46px;
			padding-bottom: 8px;
			padding-left: 12px;
			padding-right: 12px;
			padding-top: 8px;

			&:hover,
			&:focus {
				outline-offset: 3px;
			}
		}

		&-lg {
			font-size: 18px;
			height: 76px;
			padding-top: 20px;
			padding-bottom: 20px;
			padding-left: 46px;
			padding-right: 46px;

			&:hover,
			&:focus {
				outline-offset: 6px;
			}
		}
	}
</style>
