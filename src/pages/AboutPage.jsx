import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const chapters = [
  ['01', 'Physics first', 'I started in physics: drawn to first principles, mathematical models, and the unreasonable satisfaction of making a complicated system legible. I also taught it and spent time in materials-science research.'],
  ['02', 'Then software', 'The simulations became more interesting than the phenomena I was simulating. That detour became a BSc in computer science at EPFL, an exchange at Waterloo, and an MSc at ETH Zürich.'],
  ['03', 'AI before the rush', 'I worked as an AI researcher at a scale-up before foundation models became the answer to every pitch deck. Later, my ETH thesis explored strategic behavior in multi-agent LLM systems.'],
  ['04', 'Both sides of the table', 'After seeing organizations from a two-person startup to a 300,000-person multinational, I joined the investment team at Merantix Capital. That chapter taught me to evaluate technical companies through both engineering and business lenses.'],
  ['05', 'Back to building', 'Today I am at Droidrun, following my interest in agents, AI safety, and robotics toward systems that can act beyond the chat window.'],
];

export default function AboutPage({ navigate }) {
  return (
    <div className="page-enter">
      <header className="page-hero section-shell about-hero">
        <p className="eyebrow">README.md / About</p>
        <h1>I keep following<br />the <em>interesting bit.</em></h1>
        <p>Swiss-Indian, based around Zürich. I began in physics, moved into computer science and AI, spent time in early-stage investing, and returned to building. The common thread is an interest in understanding difficult systems by working directly with them.</p>
      </header>
      <section className="section-shell story-section">
        <div className="story-photo"><img src="/background3.jpg" alt="Shrey in the Swiss Alps" /></div>
        <div className="story-chapters">
          {chapters.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}
        </div>
      </section>
      <section className="section-shell offscreen-section">
        <p className="eyebrow">Off-screen</p>
        <h2>There&apos;s more to a person<br />than their <em>LinkedIn.</em></h2>
        <div className="fact-grid">
          <div><span>01</span><h3>Competitive by default</h3><p>Badminton, cricket, football, and an unnecessary number of Lichess games.</p></div>
          <div><span>02</span><h3>Recipes are suggestions</h3><p>I cook with conviction and variable reproducibility.</p></div>
          <div><span>03</span><h3>Three continents</h3><p>Home has meant 4 different countries and spread across 3 continents.</p></div>
          <div><span>04</span><h3>Language stack</h3><p>English, French, Hindi, and enough German to order a döner with confidence.</p></div>
        </div>
        <button className="button button-primary" onClick={() => navigate('/work')}>See what I&apos;ve worked on <ArrowUpRight size={18} /></button>
      </section>
    </div>
  );
}
