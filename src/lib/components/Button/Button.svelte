<button class="button">
	<slot />
</button>

<style lang="scss">
	.button {
		appearance: none;
		background-color: var(--color-governor-bay);
		border: 1px solid var(--color-governor-bay);
		border-radius: 3px;
		color: var(--color-white);
		cursor: pointer;
		display: inline-block;
		font-family: var(--font-paragraph);
		font-size: var(--font-size-16);
		font-weight: var(--font-weight-semibold);
		line-height: 1.39;
		margin-bottom: 0;
		max-width: 23rem;
		overflow: hidden;
		padding-bottom: 12px;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 12px;
		position: relative;
		text-decoration: none;
		text-overflow: ellipsis;
		transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		white-space: nowrap;
		width: auto;

		&.focus,
		&:hover,
		&:focus {
			// TODO: Add hover effect
		}
	}
</style>
