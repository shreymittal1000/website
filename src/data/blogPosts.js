import matter from 'gray-matter';

// Import post content from .content.js (plain JS, no ?raw or .md – works everywhere)
import llmStartChatRaw from '../posts/llm_start_chat_blog.content.js';
import physicsToCsRaw from '../posts/physics-to-cs-journey.content.js';

function parsePost(raw) {
  if (typeof raw !== 'string') return null;
  try {
    const { data, content } = matter(raw);
    return {
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      tags: Array.isArray(data.tags) ? data.tags : [],
      content: content ?? '',
    };
  } catch {
    return null;
  }
}

const posts = [
  parsePost(llmStartChatRaw),
  parsePost(physicsToCsRaw),
].filter((post) => post && post.id && post.title);

// Sort by date descending (newest first)
posts.sort((a, b) => (new Date(b.date) || 0) - (new Date(a.date) || 0));

export const blogPosts = posts;
export const getBlogPostById = (id) => posts.find((post) => post.id === id);
export default blogPosts;
