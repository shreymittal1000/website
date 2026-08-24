import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getBlogPostById } from '../data/blogPosts';

const markdownComponents = {
  h1: ({ children }) => <h2>{children}</h2>,
  h2: ({ children }) => <h2>{children}</h2>,
  h3: ({ children }) => <h3>{children}</h3>,
  a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>,
  code: ({ children }) => <code>{children}</code>,
  pre: ({ children }) => <pre>{children}</pre>,
};

export default function BlogPostPage({ postId, navigate }) {
  const post = getBlogPostById(postId);
  if (!post) return <div className="missing-page section-shell"><p className="eyebrow">404</p><h1>That note doesn&apos;t exist.</h1><button className="text-link" onClick={() => navigate('/blog')}><ArrowLeft /> Back to writing</button></div>;

  return (
    <div className="page-enter article-page">
      <header className="article-header section-shell">
        <button className="text-link article-back" onClick={() => navigate('/blog')}><ArrowLeft size={17} /> All writing</button>
        <p className="eyebrow">Field note · {post.date}</p>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
      </header>
      <div className="article-layout section-shell">
        <aside><span>Share / discuss</span><a href={`mailto:shreymittal1000@gmail.com?subject=${encodeURIComponent(post.title)}`}>Email me <ArrowUpRight size={15} /></a></aside>
        <article className="article-body"><ReactMarkdown components={markdownComponents}>{post.content || ''}</ReactMarkdown></article>
      </div>
      <div className="article-end section-shell"><span>End note.</span><button className="button button-primary" onClick={() => navigate('/blog')}>More writing <ArrowUpRight size={18} /></button></div>
    </div>
  );
}
