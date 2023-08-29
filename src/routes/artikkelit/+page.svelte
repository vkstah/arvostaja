<script lang="ts">
	import { articles } from '$lib/articles';
	import { Container, Articles } from '$lib/components';
</script>

<Container>Artikkelit</Container>

<Container>
	<Articles {articles} />
</Container>

<style lang="scss">
</style>
