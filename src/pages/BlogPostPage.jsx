import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getBlogPostById } from '../data/blogPosts';

const markdownComponents = {
	h1: ({ children }) => (
		<h1 className="text-5xl font-bold mb-8 mt-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
			{children}
		</h1>
	),
	h2: ({ children }) => (
		<h2 className="text-3xl font-bold mb-4 mt-10 text-[#00FF94] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3 className="text-2xl font-bold mb-3 mt-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
			{children}
		</h3>
	),
	p: ({ children }) => (
		<p className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
			{children}
		</p>
	),
	ul: ({ children }) => (
		<ul className="mb-6 list-disc list-inside space-y-2 text-lg text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
			{children}
		</ul>
	),
	ol: ({ children }) => (
		<ol className="mb-6 list-decimal list-inside space-y-2 text-lg text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
			{children}
		</ol>
	),
	li: ({ children }) => <li className="leading-relaxed">{children}</li>,
	strong: ({ children }) => (
		<strong className="font-bold text-white/95">{children}</strong>
	),
	em: ({ children }) => (
		<em className="italic text-white/80">{children}</em>
	),
	code: ({ children }) => (
		<code className="px-1.5 py-0.5 bg-white/10 text-[#00FF94] rounded text-sm font-mono">
			{children}
		</code>
	),
};

export default function BlogPostPage({ postId, navigate, setIsHovering }) {
	const post = getBlogPostById(postId);

	if (!post) {
		return (
			<div className="page-enter min-h-screen px-8 py-32">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
						Post Not Found
					</h1>
					<button
						onClick={() => navigate('/blog')}
						className="flex items-center gap-2 text-[#00FF94] hover:underline"
						onMouseEnter={() => setIsHovering(true)}
						onMouseLeave={() => setIsHovering(false)}
					>
						<ArrowLeft size={20} />
						Back to Blog
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="page-enter min-h-screen px-8 py-32">
			<div className="max-w-4xl mx-auto">
				{/* Back button */}
				<button
					onClick={() => navigate('/blog')}
					className="flex items-center gap-2 text-white/80 hover:text-[#00FF94] mb-8 transition-colors"
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
				>
					<ArrowLeft size={20} />
					Back to Blog
				</button>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="px-3 py-1 backdrop-blur-sm bg-white/10 text-[#00FF94] rounded-full text-sm"
						>
							{tag}
						</span>
					))}
				</div>

				{/* Title */}
				<h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
					{post.title}
				</h1>

				{/* Meta info */}
				<div className="flex flex-wrap gap-6 mb-12 text-white/70">
					<div className="flex items-center gap-2">
						<Calendar size={18} />
						<span>{post.date}</span>
					</div>
					<div className="flex items-center gap-2">
						<Clock size={18} />
						<span>{post.readTime}</span>
					</div>
				</div>

				{/* Content */}
				<article className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-none p-8 md:p-12">
					<div className="prose prose-invert max-w-none">
						<ReactMarkdown components={markdownComponents}>{post.content}</ReactMarkdown>
					</div>
				</article>

				{/* Back button at bottom */}
				<button
					onClick={() => navigate('/blog')}
					className="flex items-center gap-2 text-white/80 hover:text-[#00FF94] mt-12 transition-colors"
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
				>
					<ArrowLeft size={20} />
					Back to Blog
				</button>
			</div>
		</div>
	);
}
