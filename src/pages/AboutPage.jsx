import React from 'react';

export default function AboutPage({ setIsHovering }) {
  return (
    <div className="page-enter min-h-screen px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12">
          ABOUT <span className="text-[#00FF94]">ME</span>
        </h1>
        
        <div className="space-y-8">
          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">Background</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I'm Swiss-Indian—born in India, raised in Switzerland—currently completing my Master's in Computer Science at ETH Zurich. My journey started in physics before I made a (relatively early) switch to computer science, which turned out to be one of the best decisions I've made.
              </p>
              <p>
                Back in 2018, I had the privilege of being selected for Schweizer Jugend Forscht's Material Science camp, which was an incredible early experience in research and innovation.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">When I'm Not Coding</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                You'll find me on the badminton court, cricket pitch, or hunched over a chessboard. I also love watching and playing football (the kind where you actually use your feet 😄). Basically, I'm always down to try new team sports—the more competitive, the better.
              </p>
              <p>
                In the kitchen, I experiment with wonky vegetarian dishes, treating recipes as gentle suggestions rather than strict rules. The results are... let's say "creative." I also have a soft spot for public speaking challenges, especially PowerPoint karaoke—there's something beautifully chaotic about presenting slides you've never seen before.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">Languages</h2>
            <p className="text-gray-400">
              I speak Hindi, English, and French fluently. I can also confidently order at a döner place in German, which is basically the most important language skill in Switzerland.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
