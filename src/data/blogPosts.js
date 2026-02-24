// Import all posts from the posts directory
import posts, { getPostById } from '../posts';

// Re-export for backwards compatibility
export const blogPosts = posts;
export const getBlogPostById = getPostById;

export default blogPosts;
