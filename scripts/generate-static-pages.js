#!/usr/bin/env node
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, '..');
const distDir = join(root, 'dist');
const template = readFileSync(join(distDir, 'index.html'), 'utf8');

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const renderPage = ({ title, description, type = 'website', canonical }) => {
  const safeTitle = escapeAttribute(title);
  const safeDescription = escapeAttribute(description);
  return template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${safeDescription}" />`)
    .replace('</head>', `    <meta property="og:url" content="${canonical}" />\n    <link rel="canonical" href="${canonical}" />\n  </head>`);
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

console.log('Generated static metadata entry points for writing routes.');
