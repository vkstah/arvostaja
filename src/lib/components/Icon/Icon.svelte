<script lang="ts">
	export let name: string;
	export let width = '48';
	export let height = '48';
	let icons = [
		{
			box: 24,
			name: 'save',
			svg: `<g stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></g>`
		},
		{
			box: 32,
			name: 'trash',
			svg: `<path d="M12 12h2v12h-2z" /><path d="M18 12h2v12h-2z" /><path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z" /><path d="M12 2h8v2h-8z" />`
		},
		{
			box: 32,
			name: 'trend',
			svg: `<path
		d="m24 2v2h2.586l-10.586 10.586-4-4-9.707 9.707 1.414 1.414 8.293-8.293 4 4 12-12v2.586h2v-6z"
	/><path d="m8.414 23h-4.828l-1.586 1.586v5.414h8v-5.414z" /><path
		d="m13.59 19-1.59 1.59v9.41h8v-9.41l-1.59-1.59z"
	/><path d="m23.59 13-1.59 1.59v15.41h8v-15.41l-1.59-1.59z" />`
		},
		{
			box: 24,
			name: 'pen',
			svg: `<path
		d="M20.24,7.95L6.18,22.11c-.93,.93-2.32,1.12-3.45,.58l-1.02,1.02c-.2,.2-.45,.29-.71,.29s-.51-.1-.71-.29c-.39-.39-.39-1.02,0-1.41l1.02-1.02c-.54-1.13-.36-2.52,.58-3.46L14.39,5.26c-1.09-.43-2.42-.23-3.28,.63l-3.03,3.03c-.2,.2-.45,.29-.71,.29s-.51-.1-.71-.29c-.39-.39-.39-1.02,0-1.41l3.03-3.03c.94-.94,2.2-1.46,3.54-1.46,1.19,0,2.3,.43,3.19,1.18,.04,0,3.81,3.76,3.81,3.76ZM22.84,.65c-1.18-.97-3-.84-4.13,.3l-1.33,1.33,4.27,4.27,1.42-1.42c.6-.6,.92-1.44,.88-2.29-.04-.85-.45-1.65-1.11-2.19Z"
	/>`
		}
	];
	let displayIcon = icons.find((e) => e.name === name);
</script>

{#if displayIcon}
	<svg class={$$props.class} {width} {height} viewBox="0 0 {displayIcon.box} {displayIcon.box}"
		>{@html displayIcon.svg}</svg
	>
{/if}
