import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import blogPosts from '../data/blogPosts';

export default function BlogPage({ navigate, setIsHovering }) {
	return (
		<div className="page-enter min-h-screen px-8 py-32">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-6xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
					<span className="text-[#00FF94]">BLOG</span>
				</h1>
				<p className="text-xl mb-12 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
					Thoughts on technology, research, and everything in between
				</p>

				<div className="space-y-6">
					{blogPosts.map((post) => (
						<div
							key={post.id}
							onClick={() => navigate(`/blog/${post.id}`)}
							className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 hover:border-[#00FF94] rounded-lg hover-lift cursor-pointer transition-all"
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => setIsHovering(false)}
						>
							<div className="flex flex-wrap gap-2 mb-3">
								{post.tags.map((tag) => (
									<span
										key={tag}
										className="px-3 py-1 backdrop-blur-sm bg-white/10 text-[#00FF94] rounded-full text-sm"
									>
										{tag}
									</span>
								))}
							</div>

							<h2 className="text-2xl font-bold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
								{post.title}
							</h2>

							<p className="mb-4 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
								{post.excerpt}
							</p>

							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4 text-sm text-white/60">
									<span>{post.date}</span>
									<span className="flex items-center gap-1">
										<Clock size={14} />
										{post.readTime}
									</span>
								</div>
								<span className="text-sm font-medium flex items-center gap-1 text-[#00FF94]">
									Read more <ArrowRight size={14} />
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
