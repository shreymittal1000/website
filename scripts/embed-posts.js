#!/usr/bin/env node
/**
 * Reads all .md files from src/posts (except README), parses frontmatter + body
 * with gray-matter, and writes src/data/generatedBlogPosts.js so the app has
 * the full post list with content. Run before build: node scripts/embed-posts.js
 *
 * .md files are the source of truth; this script is the bridge at build time.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const postsDir = join(root, 'src', 'posts');
const outPath = join(root, 'src', 'data', 'generatedBlogPosts.js');

const files = readdirSync(postsDir).filter((f) => f.endsWith('.md') && f !== 'README.md');
const posts = [];

for (const file of files) {
  const path = join(postsDir, file);
  try {
    const raw = readFileSync(path, 'utf-8');
    let data = {};
    let content = '';
    try {
      const parsed = matter(raw);
      data = parsed.data || {};
      content = parsed.content ?? '';
    } catch {
      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
      if (match) {
        content = match[2].trim();
        const id = file.replace(/\.md$/, '').replace(/_/g, '-');
        data = { id, title: id, excerpt: '', date: '' };
      }
    }
    const id = data.id || file.replace(/\.md$/, '').replace(/_/g, '-');
    const title = data.title || id;
    if (!id || !title) continue;
    posts.push({
      id,
      title,
      excerpt: data.excerpt ?? '',
      date: data.date ?? '',
      content,
    });
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

posts.sort((a, b) => (new Date(b.date) || 0) - (new Date(a.date) || 0));

const out = `// Auto-generated from src/posts/*.md by scripts/embed-posts.js – do not edit by hand
export const posts = ${JSON.stringify(posts)};
`;

writeFileSync(outPath, out, 'utf-8');
console.log('Wrote src/data/generatedBlogPosts.js with', posts.length, 'posts');
