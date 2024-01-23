<script lang="ts">
	export let data;
	const title = data.meta.title;
</script>

<!-- SEO -->
<svelte:head>
	<title>{title} | Arvostaja</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${title} | Arvostaja`} />
</svelte:head>

<div class="container">
	<h1>Mitä {title} tarkoittaa?</h1>
</div>
