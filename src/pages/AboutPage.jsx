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
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">Who is this Shrey guy?</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I'm a Swiss-Indian tech dude currently living in Berlin.
                I studied Computer Science at EPFL (BSc) and ETH Zurich (MSc),
                with an exchange year at the University of Waterloo (Go Warriors!).
                I've worked across multiple roles in tech across various company sizes:
                whether it be as a Software Engineer at a startup of 2 full-time employees,
                AI Researcher at a scaleup of 600 people (<b>BEFORE</b> LLMs became all the hype),
                or as an Operations Manager for a 300k-strong large MNC.
                The most recent addition to my journey is working in the Investment Team at Merantix Capital,
                a VC and venture studio building and investing in early-stage AI startups!
              </p>
              <p>
                My "life of many hats" doesn't end there.
                I've also dabbled into Physics (which is what I had initially started university for before
                making an early switch) as both a student and as a TA,
                as well as Material Science during the Schweizer Jugend Forscht student researcher batch of 2018.
              </p>
              <p>
                I've also had the privilege of having lived on three different continents:
                Europe (CH, DE), North America (CA), and Asia (IN). Having lived in many different places and going
                to international schools has led to me having many close friends who are spread out across the globe.
                I also speak 3 languages: English, French and Hindi.;
                and can order a döner in German, which is arguably the most important skill to have anywhere :D
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#00FF94]">When I'm Not Working</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                You'll find me on the badminton court, cricket pitch, or hunched over a chessboard. I also love watching and playing football (the kind where you actually use your feet ;)). Basically, I'm always down to try new team sports—the more competitive, the better.
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
