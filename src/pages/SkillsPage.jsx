import React from 'react';

export default function SkillsPage() {
  return (
    <div className="page-enter min-h-screen px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="text-[#00FF94]">SKILLS</span>
        </h1>
        <p className="text-xl mb-12 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Technical expertise meets business acumen</p>

        <div className="space-y-8">
          {/* Technical Skills */}
          <div className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 rounded-none">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Technical Skills</h2>
            <div className="space-y-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <p>
                Backend developer fluent in Java, Python, C/C++, and Scala,
                plus lower-level work in Assembly (MIPS), Verilog, and VHDL when the project demands it.
                Currently teaching myself React (this site is the result), with Rust and Go next.
              </p>
              <p>
                On ML/AI: full-stack capabilities, from building and finetuning models from scratch
                to prompt engineering with foundation models.
              </p>
              <p>
                I've also spent time breaking different models. Unpublished blogs on that coming soon :)
              </p>
            </div>
          </div>

          {/* Business Skills */}
          <div className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 rounded-none">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Business & Leadership</h2>
            <div className="space-y-4 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <p>
                From 2nd-ever hire at a startup to companies with 300,000+ employees,
                I've seen how businesses operate at every scale: startup consulting,
                operations management, and now early-stage VC investing.
              </p>
              <p>
                I've led projects through ambiguity, aligned diverse stakeholders in
                resource-constrained environments, and I'm comfortable bridging
                technical and business perspectives.
              </p>
            </div>
          </div>

          {/* Sweet Spot */}
          <div className="p-8 backdrop-blur-sm bg-gradient-to-r from-[#00FF94]/30 to-[#00D9FF]/30 border-2 border-[#00FF94] rounded-none">
            <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">The Sweet Spot</h2>
            <p className="text-lg text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              I love roles at this intersection: building technically sophisticated products
              while weighing market dynamics and business viability, whether that's evaluating
              startups from both angles or architecting systems that solve real business problems.
              Mostly though, I just like solving hard problems, especially deeptech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
