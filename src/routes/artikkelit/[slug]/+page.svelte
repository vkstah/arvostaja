<script lang="ts">
	import { page } from '$app/stores';
	import { Container, ContainerSlim } from '$lib/components';
	import { formatDate } from '$lib/utils';
	export let data;

	const title = data.meta.title;
	const thumbnail = data.meta.thumbnail;
	const date = formatDate(data.meta.date);
</script>

<!-- SEO -->
<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<ContainerSlim class="header">
		<div class="additional">
			<a class="back" href={`${$page.url.origin}/artikkelit`}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					id="Outline"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					fill="white"
					><path
						d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"
					/></svg
				>
				<span>Takaisin</span>
			</a>
		</div>
		<div class="meta">
			<h1 class="title">{title}</h1>
			<p class="date-read-time">{date} – lukuaika 12 minuuttia</p>
		</div>
	</ContainerSlim>
	<Container class="container-thumbnail">
		<img class="thumbnail" src={`${$page.url.origin}/${thumbnail}`} alt="" />
	</Container>
	<ContainerSlim>
		<div class="content">
			<svelte:component this={data.content} />
		</div>
	</ContainerSlim>
</article>

<style lang="scss">
	* > :global(.container-thumbnail) {
		padding-top: 0;
		padding-bottom: 0;
	}

	.thumbnail {
		max-height: 600px;
		width: 100%;
		object-fit: cover;
		border-radius: 12px;
	}

	.additional {
		margin-bottom: 1.8rem;
	}

	.back {
		display: flex;
		align-items: center;
		gap: 2rem;
		text-decoration: none;
	}

	.title {
		margin-bottom: 0;
	}

	.date-read-time {
		margin-top: 0;
	}
</style>
