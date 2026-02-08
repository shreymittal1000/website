import React from 'react';

export default function SkillsPage({ setIsHovering }) {
  return (
    <div className="page-enter min-h-screen px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="text-[#00FF94]">SKILLS</span>
        </h1>
        <p className="text-xl mb-12 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Technical expertise meets business acumen</p>

        <div className="space-y-8">
          {/* Technical Skills */}
          <div className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Technical Skills</h2>
            <div className="space-y-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <p>
                I'm fluent in backend development with extensive experience in Java, Python, C/C++ and Scala.
                I've also worked with lower-level languages including Assembly (MIPS), Verilog, and VHDL
                when the project demands it. Currently, I'm spending my free time diving into React.js,
                which is exactly what this website is built with. After that, I will probably explore Rust and Go.
              </p>
              <p>
                On the ML/AI side, I bring full-stack machine learning capabilities: from building and 
                finetuning models from scratch to prompt engineering with LLMs. I can implement custom
                architectures and also get the best results from state-of-the-art foundation models.
              </p>
              <p>
                I've also spent some time breaking different models. I have some unpublished blogs I would
                love to share on this topic, so stay tuned :)
              </p>
            </div>
          </div>

          {/* Business Skills */}
          <div className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Business & Leadership</h2>
            <div className="space-y-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <p>
                Having worked across organizations ranging from a startup team of 6 to companies with
                300,000+ employees, I've developed a strong understanding of how businesses operate at
                different scales. My experience spans startup consulting, operations management, and
                most recently, investing as an early-stage VC.
              </p>
              <p>
                Beyond technical execution, I've taken on leadership positions that taught me how to
                navigate ambiguity, align diverse stakeholders, and drive projects forward in
                resource-constrained environments. I'm comfortable wearing multiple hats and thrive
                in settings where I need to bridge technical and business perspectives.
              </p>
            </div>
          </div>

          {/* Sweet Spot */}
          <div className="p-8 backdrop-blur-sm bg-gradient-to-r from-[#00FF94]/30 to-[#00D9FF]/30 border-2 border-[#00FF94] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">The Sweet Spot</h2>
            <p className="text-lg text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              I especially love roles where I can combine both skillsets—building technically sophisticated
              products while understanding market dynamics, user needs, and business viability. Whether it's
              evaluating startups from both a technical and commercial angle, or architecting systems that
              solve real business problems, I'm energized by work that sits at this intersection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
