import React from 'react';

export default function HomePage({ navigate, setIsHovering }) {
  return (
    <section className="min-h-[92vh] flex items-center justify-center px-8 pt-0 page-enter">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 flex items-center justify-center gap-4 fade-in-up">
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-4 fade-in-up delay-1">
          SHREY <span className="text-[#00FF94]">MITTAL</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6 fade-in-up delay-2">
          AI researcher, Software/AI engineer, and VC
        </p>

        <div className="mb-8 p-6 bg-[#151515] border-2 border-[#252525] rounded-lg fade-in-up delay-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#00FF94]">Current Status</span>
          </div>
          <p className="text-gray-400 text-left">
            <span className="text-[#00FF94]">{'>'}</span> Working in the Investment Team @ Merantix Capital, a VC investing in early-stage tech startups
          </p>
          <p className="text-gray-400 text-left">
            <span className="text-[#00FF94]">{'>'}</span> LLM research in my free time with Prof. Zhijing Jin
          </p>
          <p className="text-gray-400 text-left">
            <span className="text-[#00FF94]">{'>'}</span> Building side-projects (TBA)
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center fade-in-up delay-4">
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-[#00FF94] text-black font-bold hover:bg-white transition-colors"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            View Projects
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 border-2 border-white hover:border-[#00FF94] hover:text-[#00FF94] transition-colors"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
