# Blog Posts

This directory contains blog posts as **Markdown files** with YAML frontmatter. Posts are loaded at build time via Vite's glob import and parsed with `gray-matter`; the body is rendered with `react-markdown`.

## Adding a New Blog Post

1. Create a new `.md` file in this directory with a descriptive filename (e.g., `my-new-post.md`).

2. Add YAML frontmatter at the top, then your markdown content:

```markdown
---
id: my-new-post
title: My New Post Title
excerpt: Brief description for the listing page.
date: February 9, 2026
readTime: 5 min read
tags:
  - Tag1
  - Tag2
---

# Post Title

Your post content here in standard markdown...
```

3. Register the post in `src/data/blogPosts.js`: add a new line `import myNewPostRaw from '../posts/my-new-post.md?raw';` and add `parsePost(myNewPostRaw)` to the `posts` array.

## Frontmatter Fields

| Field     | Required | Description                                      |
|----------|----------|--------------------------------------------------|
| `id`     | Yes      | Unique slug (used in URLs; e.g. `/blog/my-new-post`) |
| `title`  | Yes      | Post title                                       |
| `excerpt`| Yes      | Short summary for the blog listing               |
| `date`   | Yes      | Publication date (e.g. `February 9, 2026`)       |
| `readTime` | Yes    | Reading time (e.g. `5 min read`)                 |
| `tags`   | Yes      | List of tags (YAML array)                        |

## Content Formatting

Use standard Markdown in the body:

- `#`, `##`, `###` for headings
- `**bold**`, `*italic*`
- `-` or `*` for unordered lists, `1.` for ordered lists
- `` `code` `` for inline code
- Blank lines between paragraphs

## Tips

- Keep `id` lowercase with hyphens; it becomes the URL slug.
- Use a filename that matches the post `id` (e.g. `my-new-post.md`).
- Posts are sorted by `date` descending on the blog listing page.
