#!/usr/bin/env node
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import process from 'node:process';
import matter from 'gray-matter';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, '..');
const distDir = join(root, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');
const siteUrl = (process.env.SITE_URL || 'https://shrey.ws').replace(/\/$/, '');

const formatDate = (date) => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, '0'),
  String(date.getDate()).padStart(2, '0'),
].join('-');

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const renderPage = ({ title, description, type = 'website', canonical }) => {
  const safeTitle = escapeAttribute(title);
  const safeDescription = escapeAttribute(description);
  const absoluteCanonical = `${siteUrl}${canonical === '/' ? '/' : canonical}`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${absoluteCanonical}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${absoluteCanonical}" />`);
};

const writePage = (route, metadata) => {
  const directory = join(distDir, route.replace(/^\//, ''));
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, 'index.html'), renderPage(metadata));
};

writePage('/writing', {
  title: 'Writing | Shrey Mittal',
  description: 'Essays and field notes from Shrey Mittal on AI, engineering, and things he could not leave alone.',
  canonical: '/writing',
});

const postsDir = join(root, 'src', 'posts');
for (const filename of readdirSync(postsDir).filter((name) => name.endsWith('.md') && name !== 'README.md')) {
  const { data } = matter(readFileSync(join(postsDir, filename), 'utf8'));
  if (!data.id || !data.title) continue;
  const route = `/writing/${data.id}`;
  writePage(route, {
    title: `${data.title} | Shrey Mittal`,
    description: data.excerpt || 'Writing by Shrey Mittal.',
    type: 'article',
    canonical: route,
  });
}

const sitemapRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/writing', priority: '0.8' },
];

for (const filename of readdirSync(postsDir).filter((name) => name.endsWith('.md') && name !== 'README.md')) {
  const { data } = matter(readFileSync(join(postsDir, filename), 'utf8'));
  if (!data.id) continue;
  const parsedDate = data.date ? new Date(data.date) : null;
  sitemapRoutes.push({
    path: `/writing/${data.id}`,
    priority: '0.7',
    lastmod: parsedDate && !Number.isNaN(parsedDate.valueOf()) ? formatDate(parsedDate) : null,
  });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map(({ path, priority, lastmod }) => `  <url>
    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${path === '/' ? 'monthly' : 'yearly'}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
writeFileSync(join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

console.log('Generated static metadata entry points, sitemap.xml, and robots.txt.');
