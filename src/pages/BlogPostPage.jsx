import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowUpRight, Check, Copy } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);
  const post = getBlogPostById(postId);
  if (!post) return <div className="missing-page section-shell"><p className="eyebrow">404</p><h1>That post doesn&apos;t exist.</h1><button className="text-link" onClick={() => navigate('/writing')}><ArrowLeft /> Back to writing</button></div>;

  const copyArticleLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement('textarea');
      input.value = url;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="page-enter article-page">
      <header className="article-header section-shell">
        <button className="text-link article-back" onClick={() => navigate('/writing')}><ArrowLeft size={17} /> All writing</button>
        <p className="eyebrow">Field note · {post.date}</p>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.excerpt}</p>
      </header>
      <div className="article-layout section-shell">
        <aside><span>Share</span><button type="button" onClick={copyArticleLink}>{copied ? <>Copied <Check size={15} /></> : <>Copy link <Copy size={15} /></>}</button></aside>
        <article className="article-body"><ReactMarkdown components={markdownComponents}>{post.content || ''}</ReactMarkdown></article>
      </div>
      <div className="article-end section-shell"><span>End.</span><button className="button button-primary" onClick={() => navigate('/writing')}>More writing <ArrowUpRight size={18} /></button></div>
    </div>
  );
}
