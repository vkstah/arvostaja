import type { Article } from '$lib/types';
import { navigating } from '$app/stores';

export async function load({ fetch }) {
	const response = await fetch('api/articles');
	const articles: Article[] = await response.json();
	return { articles };
}
