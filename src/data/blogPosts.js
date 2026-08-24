// Posts are built from .md files by scripts/embed-posts.js (run before build).
import { posts } from './generatedBlogPosts.js';

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export const blogPosts = posts;
export const getBlogPostById = (id) => posts.find((post) => post.id === id);
export default blogPosts;
