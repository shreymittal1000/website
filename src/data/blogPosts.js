import matter from 'gray-matter';
import llmStartChatRaw from '../posts/llm_start_chat_blog.content.js';
import physicsToCsRaw from '../posts/physics-to-cs-journey.content.js';

// Fallback metadata so the list is never empty even if parsing fails
const FALLBACK_POSTS = [
  {
    id: 'llm-start-chat-blog',
    title: 'When You Tell Two LLMs to "Start a Chat"',
    excerpt: 'I let two LLMs talk with the prompt "Start a chat." The results were bizarre — university websites, legal disclaimers, and zero actual conversation.',
    date: 'March 9, 2026',
    readTime: '8 min read',
    tags: ['AI', 'Research', 'LLMs'],
    content: '',
  },
  {
    id: 'physics-to-cs-journey',
    title: 'From Physics to Computer Science: My Unconventional Journey',
    excerpt: 'Reflections on switching fields and what I learned along the way—from quantum mechanics to machine learning.',
    date: 'February 5, 2026',
    readTime: '6 min read',
    tags: ['Personal', 'Education', 'Career'],
    content: '',
  },
];

function toRawString(raw) {
  if (typeof raw === 'string') return raw;
  if (raw != null && typeof raw.default === 'string') return raw.default;
  if (raw != null && typeof raw.default === 'function') return raw.default();
  return '';
}

function parsePost(raw) {
  const str = toRawString(raw);
  if (!str) return null;
  try {
    const { data, content } = matter(str);
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

const parsed = [
  parsePost(llmStartChatRaw),
  parsePost(physicsToCsRaw),
].filter((p) => p && p.id && p.title);

const byId = {};
FALLBACK_POSTS.forEach((p) => { byId[p.id] = { ...p }; });
parsed.forEach((p) => { byId[p.id] = p; });
const posts = Object.values(byId);

posts.sort((a, b) => (new Date(b.date) || 0) - (new Date(a.date) || 0));

export const blogPosts = posts;
export const getBlogPostById = (id) => posts.find((post) => post.id === id);

/** Load post body by fetching the .md file from public/posts (works in dev and production) */
export async function loadPostContent(id) {
  try {
    const base = typeof window !== 'undefined' ? window.location.origin : '';
    const res = await fetch(`${base}/posts/${id}.md`);
    if (!res.ok) return '';
    const text = await res.text();
    const { content } = matter(text);
    return content ?? '';
  } catch {
    return '';
  }
}

export default blogPosts;
