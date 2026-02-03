import React from 'react';

export default function HomePage({ navigate, setIsHovering }) {
  return (
    <section className="min-h-[92vh] flex items-center justify-center px-8 pt-0 page-enter">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 flex items-center justify-center gap-4 fade-in-up">
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-4 fade-in-up delay-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          SHREY
          <br/>
          <span className="text-[#00FF94]">MITTAL</span>
        </h1>
        
        <p className="text-xl text-white max-w-2xl mx-auto mb-6 fade-in-up delay-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          I love building in AI - whether it be the research, engineering, or business aspect!
        </p>

        <div className="mb-8 p-6 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg fade-in-up delay-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-sm font-medium text-[#00FF94]">Current Status</span>
          </div>
          <p className="text-white/90 mb-2">
            Working in the Investment Team @ Merantix Capital, a VC investing in early-stage tech startups
          </p>
          <p className="text-white/90">
            Also playing around with LLMs in my free time - reach out if you're interested in collaborating :{")"}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center fade-in-up delay-4">
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-[#00FF94] text-black font-bold hover:bg-white transition-colors shadow-lg hover:shadow-[#00FF94]/50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            View Projects
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 backdrop-blur-sm bg-white/10 border-2 border-white hover:border-[#00FF94] hover:text-[#00FF94] transition-colors shadow-lg"
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
