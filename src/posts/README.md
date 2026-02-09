# Blog Posts

This directory contains individual blog post files. Each post is its own JavaScript module that exports a post object.

## Adding a New Blog Post

1. Create a new `.js` file in this directory with a descriptive filename (e.g., `my-new-post.js`)

2. Export a post object with the following structure:

```javascript
export default {
  id: 'my-new-post',           // Unique ID (usually matches filename)
  title: 'My New Post Title',  // Post title
  excerpt: 'Brief description...', // Short excerpt for the listing page
  date: 'Month DD, YYYY',      // Publication date
  readTime: 'X min read',      // Estimated reading time
  tags: ['Tag1', 'Tag2'],      // Array of tags
  content: `
    # Post Title
    
    Your post content here in markdown-style format...
  `
};
```

3. Import your new post in `index.js`:

```javascript
import myNewPost from './my-new-post';
```

4. Add it to the `posts` array in `index.js`:

```javascript
export const posts = [
  myNewPost,
  // ... other posts
];
```

## Content Formatting

The content field supports the following markdown-style formatting:

- `# Header` - Main heading (H1)
- `## Header` - Section heading (H2)
- `### Header` - Subsection heading (H3)
- `**Bold text**` - Bold standalone lines (subheadings)
- `*Italic text*` - Italic text (usually for emphasis/CTAs)
- Regular paragraphs - Separated by blank lines

## Tips

- Keep post IDs lowercase with hyphens
- Use meaningful filenames that match the post ID
- Update the date when publishing
- Keep excerpts concise (1-2 sentences)
- Add 2-4 relevant tags per post
