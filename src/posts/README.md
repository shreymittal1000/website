# Blog Posts

The **.md files in this directory are the source of truth.** A build-time script (`scripts/embed-posts.js`) reads them and generates `src/data/generatedBlogPosts.js`. The app uses that; Vite’s in-browser glob doesn’t work reliably for .md in this setup.

## Updating a post

1. Edit the `.md` file (e.g. `llm_start_chat_blog.md`) — change the body and/or frontmatter (title, excerpt, date).
2. Regenerate and run:
   ```bash
   node scripts/embed-posts.js
   ```
   Or run a full build (it runs the script first):
   ```bash
   npm run build
   ```
3. Refresh the site.

## Adding a new post

1. Create a new `.md` file in this directory (e.g. `my-new-post.md`).

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

3. Run `node scripts/embed-posts.js` (or `npm run build`). The script picks up all `.md` files here except `README.md`. No need to register the post in any other file.

## Frontmatter fields

| Field     | Required | Description                                      |
|----------|----------|--------------------------------------------------|
| `id`     | Yes      | Unique slug (used in URLs; e.g. `/blog/my-new-post`) |
| `title`  | Yes      | Post title                                       |
| `excerpt`| Yes      | Short summary for the blog listing               |
| `date`   | Yes      | Publication date (e.g. `February 9, 2026`)       |

## Content formatting

Use standard Markdown: `#`–`###` headings, `**bold**`, `*italic*`, lists, `` `code` ``, etc.

## Tips

- Keep `id` lowercase with hyphens; it becomes the URL slug.
- Posts are sorted by `date` descending on the blog listing page.
- If a frontmatter value contains a colon (e.g. a subtitle), wrap it in quotes: `title: "My Title: Subtitle"`.
