import React from 'react';

export default function SkillsPage({ setIsHovering }) {
  return (
    <div className="page-enter min-h-screen px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-[#00FF94]">SKILLS</span>
        </h1>
        <p className="text-xl mb-12 text-gray-400">Technical expertise meets business acumen</p>

        <div className="space-y-8">
          {/* Technical Skills */}
          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">💻 Technical Skills</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I'm fluent in backend development with extensive experience in Java, Python, and C/C++. I've also worked with lower-level languages including Assembly (MIPS), Verilog, and VHDL when the project demands it. Currently, I'm spending my free time diving into React.js—which is exactly what this website is built with.
              </p>
              <p>
                On the ML/AI side, I bring full-stack machine learning capabilities: from building and finetuning models from scratch to prompt engineering with LLMs. I'm comfortable across the entire spectrum—whether it's implementing custom architectures or getting the best results from state-of-the-art foundation models.
              </p>
            </div>
          </div>

          {/* Business Skills */}
          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">📊 Business & Leadership</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Having worked across organizations ranging from 2-person startups to companies with 300,000+ employees, I've developed a strong understanding of how businesses operate at different scales. My experience spans startup consulting, operations management, and most recently, early-stage venture capital.
              </p>
              <p>
                Beyond technical execution, I've taken on leadership positions that taught me how to navigate ambiguity, align diverse stakeholders, and drive projects forward in resource-constrained environments. I'm comfortable wearing multiple hats and thrive in settings where I need to bridge technical and business perspectives.
              </p>
            </div>
          </div>

          {/* Sweet Spot */}
          <div className="p-8 bg-gradient-to-r from-[#00FF94] to-[#00D9FF] text-black rounded-lg">
            <h2 className="text-2xl font-bold mb-4">🎯 The Sweet Spot</h2>
            <p className="text-lg">
              I especially love roles where I can combine both skillsets—building technically sophisticated products while understanding market dynamics, user needs, and business viability. Whether it's evaluating startups from both a technical and commercial angle, or architecting systems that solve real business problems, I'm energized by work that sits at this intersection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
