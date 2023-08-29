type Page = {
	title: string;
	slug: string;
	lastmod: string;
};

const site = 'https://arvostaja.fi';
const pages: Page[] = [
	{ title: 'Etusivu', slug: '', lastmod: '2023-08-29' },
	{ title: 'Laskuri', slug: 'laskuri', lastmod: '2023-08-29' }
];

export async function GET() {
	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
				.map(
					(page) => `
      <url>
        <loc>${site}/${page.slug}</loc>
        <lastmod>${page.lastmod}</lastmod>
      </url>
      `
				)
				.join('')}
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
