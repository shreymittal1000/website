import React from 'react';
import { Download } from 'lucide-react';

export default function ProjectsPage({ setIsHovering }) {
  return (
    <div className="page-enter min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-[#00FF94]">PROJECTS</span>
        </h1>
        <p className="text-xl mb-12 text-gray-400">Featured work and research</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Master's Thesis - Featured */}
          <div 
            className="md:col-span-2 p-8 bg-[#151515] border-2 border-[#00FF94] rounded-lg hover-lift"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="inline-block px-3 py-1 bg-[#00FF94] text-black rounded-full text-sm font-medium mb-4">
              Featured • Master's Thesis
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              From Games to Governance: How Identity Cues Reshape Strategy in Multi-Agent LLMs
            </h2>
            
            <p className="mb-6 text-gray-400">
              Investigating how identity awareness affects strategic behavior in language model agents across two-player economic games and multi-agent voting simulations. The research explores emergent properties like coordination, trust, and rhetorical strategy in LLM systems.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Multi-Agent Systems', 'LLMs', 'Game Theory', 'AI Safety', 'Behavioral Economics'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-[#252525] text-[#00FF94] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/mnt/user-data/uploads/Shrey_Master_Thesis.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-[#00FF94] text-black font-semibold hover:bg-white transition-colors"
              >
                <Download size={20} />
                Download PDF
              </a>
              <div className="px-6 py-3 bg-[#252525] text-gray-400 rounded-lg">
                📝 In submission to conferences
              </div>
            </div>
          </div>

          {/* Placeholder projects */}
          {[
            { title: 'Coming Soon', desc: 'New projects in the pipeline', status: 'In Progress' },
            { title: 'More to Explore', desc: 'Additional work to be added', status: 'Planning' },
          ].map((project, i) => (
            <div 
              key={i}
              className="p-8 bg-[#151515] border border-dashed border-[#252525] rounded-lg opacity-60"
            >
              <div className="inline-block px-3 py-1 bg-[#252525] text-gray-600 rounded-full text-sm font-medium mb-4">
                {project.status}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
