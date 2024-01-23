import { json } from '@sveltejs/kit';
import type { Term } from '$lib/types';

async function getArticles() {
	const terms: Term[] = [];

	const paths = import.meta.glob('/src/content/terms/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Term, 'slug'>;
			const post = { ...metadata, slug } satisfies Term;
			post.published && terms.push(post);
		}
	}

	return terms;
}

export async function GET() {
	const articles = await getArticles();
	return json(articles);
}
