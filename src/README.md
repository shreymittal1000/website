# Site architecture

The website intentionally uses a small information architecture:

- `/` is the complete personal index: current work, writing, projects, background, and interests.
- `/writing` lists all writing.
- `/writing/:id` renders an individual Markdown post.
- Legacy `/notes` and `/blog` links remain supported by the hash router.

## Main files

- `App.jsx` contains the lightweight hash router and theme state.
- `pages/HomePage.jsx` contains the personal index.
- `pages/BlogPage.jsx` and `pages/BlogPostPage.jsx` contain the writing experience.
- `components/InteractiveGrid.jsx` renders the mathematical background.
- `index.css` contains the visual system and responsive styles.

Blog posts are authored in `src/posts/` and embedded into `src/data/generatedBlogPosts.js` during the build.
