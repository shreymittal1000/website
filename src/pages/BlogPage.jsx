import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import blogPosts from '../data/blogPosts';

export default function BlogPage({ navigate }) {
  return (
    <div className="page-enter">
      <header className="page-hero section-shell writing-hero">
        <p className="eyebrow">~/notes / Field observations</p>
        <h1>Things I noticed<br />and couldn&apos;t <em>leave alone.</em></h1>
        <p>A public notebook for documenting my thoughts and experiments.</p>
      </header>
      <section className="section-shell post-list">
        {blogPosts.map((post, index) => (
          <article key={post.id} className="post-row" onClick={() => navigate(`/writing/${post.id}`)}>
            <span className="post-index">{String(index + 1).padStart(2, '0')}</span>
            <div><p className="eyebrow">Essay · {post.date}</p><h2>{post.title}</h2><p>{post.excerpt}</p></div>
            <button aria-label={`Read ${post.title}`}><ArrowUpRight /></button>
          </article>
        ))}
      </section>
    </div>
  );
}
