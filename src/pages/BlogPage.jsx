import React from 'react';
import { ExternalLink } from 'lucide-react';

const blogPosts = [
	{
		title: 'Understanding Multi-Agent LLM Systems',
		excerpt: 'Exploring how language models interact and coordinate in complex scenarios...',
		date: 'Coming Soon',
		tags: ['AI', 'Research'],
	},
	{
		title: 'From Physics to CS: My Journey',
		excerpt: 'Reflections on switching fields and what I learned along the way...',
		date: 'Coming Soon',
		tags: ['Personal', 'Education'],
	},
	{
		title: 'Early-Stage VC: A Technical Perspective',
		excerpt: 'How technical expertise shapes investment decisions...',
		date: 'Coming Soon',
		tags: ['VC', 'Tech'],
	},
];

export default function BlogPage({ setIsHovering }) {
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
					{blogPosts.map((post, i) => (
						<div
							key={i}
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
								<span className="text-sm text-white/60">{post.date}</span>
								<span className="text-sm font-medium flex items-center gap-1 text-[#00FF94]">
									Read more <ExternalLink size={14} />
								</span>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 p-8 backdrop-blur-sm bg-black/30 border border-dashed border-white/20 rounded-lg text-center">
					<p className="text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
						📝 Blog posts coming soon! Check back later for updates.
					</p>
				</div>
			</div>
		</div>
	);
}
