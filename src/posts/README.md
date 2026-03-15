# Blog Posts

This directory contains blog posts as **Markdown files** with YAML frontmatter. A build script (`scripts/embed-posts.js`) reads these files and inlines the body into `src/data/postBodies.js` so the app can render them.

## Updating an existing post

1. Edit the `.md` file (e.g. `llm_start_chat_blog.md`) — change the body and/or frontmatter (title, excerpt, date, tags).
2. Regenerate the embedded content:
   ```bash
   node scripts/embed-posts.js
   ```
   Or run a full build (it runs this script first):
   ```bash
   npm run build
   ```
3. Refresh the site. Don’t edit `postBodies.js` or the `.content.js` files by hand; they’re generated or legacy.

## Adding a New Blog Post

1. Create a new `.md` file in this directory with a descriptive filename (e.g., `my-new-post.md`).

2. Add YAML frontmatter at the top, then your markdown content:

```markdown
---
id: my-new-post
title: My New Post Title
excerpt: Brief description for the listing page.
date: February 9, 2026
---

# Post Title

Your post content here in standard markdown...
```

3. Register the post in `src/data/blogPosts.js`: add an entry to the `posts` array with `id`, `title`, `excerpt`, `date`, and `content: postBodies['my-new-post'] ?? ''`. Add the filename to `scripts/embed-posts.js` in the `postFiles` array. Run `node scripts/embed-posts.js` (or `npm run build`) to regenerate `src/data/postBodies.js`.

## Frontmatter Fields

| Field     | Required | Description                                      |
|----------|----------|--------------------------------------------------|
| `id`     | Yes      | Unique slug (used in URLs; e.g. `/blog/my-new-post`) |
| `title`  | Yes      | Post title                                       |
| `excerpt`| Yes      | Short summary for the blog listing               |
| `date`   | Yes      | Publication date (e.g. `February 9, 2026`)       |

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
