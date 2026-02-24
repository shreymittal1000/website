import React from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getBlogPostById } from '../data/blogPosts';

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

	// Convert markdown-style content to JSX
	const renderContent = () => {
		const lines = post.content.trim().split('\n');
		const elements = [];
		let currentParagraph = [];

		lines.forEach((line, index) => {
			// Headers
			if (line.startsWith('# ')) {
				if (currentParagraph.length > 0) {
					elements.push(
						<p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
							{currentParagraph.join(' ')}
						</p>
					);
					currentParagraph = [];
				}
				elements.push(
					<h1 key={index} className="text-5xl font-bold mb-8 mt-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
						{line.slice(2)}
					</h1>
				);
			} else if (line.startsWith('## ')) {
				if (currentParagraph.length > 0) {
					elements.push(
						<p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
							{currentParagraph.join(' ')}
						</p>
					);
					currentParagraph = [];
				}
				elements.push(
					<h2 key={index} className="text-3xl font-bold mb-4 mt-10 text-[#00FF94] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
						{line.slice(3)}
					</h2>
				);
			} else if (line.startsWith('### ')) {
				if (currentParagraph.length > 0) {
					elements.push(
						<p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
							{currentParagraph.join(' ')}
						</p>
					);
					currentParagraph = [];
				}
				elements.push(
					<h3 key={index} className="text-2xl font-bold mb-3 mt-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
						{line.slice(4)}
					</h3>
				);
			} else if (line.startsWith('**') && line.endsWith('**')) {
				// Bold standalone lines (subheadings)
				if (currentParagraph.length > 0) {
					elements.push(
						<p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
							{currentParagraph.join(' ')}
						</p>
					);
					currentParagraph = [];
				}
				elements.push(
					<p key={index} className="font-bold mb-3 text-xl text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
						{line.slice(2, -2)}
					</p>
				);
			} else if (line.trim() === '') {
				// Empty line - end current paragraph
				if (currentParagraph.length > 0) {
					elements.push(
						<p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
							{currentParagraph.join(' ')}
						</p>
					);
					currentParagraph = [];
				}
			} else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
				// Italic (emphasis) - often used for CTAs or notes
				if (currentParagraph.length > 0) {
					elements.push(
						<p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
							{currentParagraph.join(' ')}
						</p>
					);
					currentParagraph = [];
				}
				elements.push(
					<p key={index} className="italic mb-6 text-lg text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
						{line.slice(1, -1)}
					</p>
				);
			} else {
				// Regular text
				currentParagraph.push(line);
			}
		});

		// Add any remaining paragraph
		if (currentParagraph.length > 0) {
			elements.push(
				<p key="final-p" className="mb-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
					{currentParagraph.join(' ')}
				</p>
			);
		}

		return elements;
	};

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
				<article className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-lg p-8 md:p-12">
					<div className="prose prose-invert max-w-none">
						{renderContent()}
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
