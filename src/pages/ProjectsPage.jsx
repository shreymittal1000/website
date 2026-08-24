import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const timeline = [
  { years: 'Now', place: 'Droidrun', role: 'AI agents beyond the chat window', text: 'Working where AI agents, mobile devices, and real-world computer use meet.' },
  { years: 'Venture', place: 'Merantix Capital', role: 'Investment team', text: 'Evaluated and supported early-stage AI companies from both technical and commercial perspectives.' },
  { years: '2023–25', place: 'ETH Zürich', role: 'Multi-agent LLM systems', text: 'Studied how identity awareness changes coordination, trust, rhetoric, and strategy in economic games and voting simulations.' },
  { years: 'Open source', place: 'Brel', role: 'Python & iXBRL', text: 'Extended the API for a 10× increase in data-processing speed and added iXBRL support spanning 100+ filing types across 30+ countries.' },
  { years: 'Build', place: 'Startups → scale-up', role: 'Software engineering & AI research', text: 'Worked across the stack and across company stages: from the second hire at a startup to applied AI research in a 600-person organization.' },
  { years: 'Operate', place: 'Global enterprise', role: 'Operations management', text: 'Led ambiguous, cross-functional work inside a 300,000-person multinational and learned what execution looks like at scale.' },
];

export default function ProjectsPage({ navigate }) {
  return (
    <div className="page-enter">
      <header className="page-hero section-shell work-hero">
        <p className="eyebrow">~/work / Research, software & systems</p>
        <h1>Things I&apos;ve built<br />and <em>investigated.</em></h1>
        <p>A selection of research, open-source contributions, and technical work. I&apos;m most interested in projects where building the system is part of answering the question.</p>
      </header>

      <section className="section-shell thesis-feature">
        <div className="thesis-label"><span>EXPERIMENT://FEATURED_RESEARCH</span><span>ETH_ZÜRICH · 2025</span></div>
        <div className="thesis-copy">
          <p className="eyebrow">Master&apos;s thesis</p>
          <h2>From Games to Governance</h2>
          <h3>How identity cues reshape strategy in multi-agent LLMs</h3>
          <p>What happens when language models know who they are talking to? I investigated emergent coordination, trust, and rhetorical strategy across two-player economic games and multi-agent voting simulations.</p>
          <div className="tag-row"><span>LLMs</span><span>Game theory</span><span>Multi-agent systems</span><span>AI behavior</span></div>
          <div className="thesis-links">
            <a className="text-link" href="https://drive.google.com/file/d/12G0gquZL3gppnE5_XkCpl17nbKJHd29c/view?usp=sharing" target="_blank" rel="noreferrer">Read the thesis <ArrowUpRight size={17} /></a>
            <button className="text-link" onClick={() => navigate('/blog')}>Related field notes <ArrowUpRight size={17} /></button>
          </div>
        </div>
        <div className="thesis-visual" aria-hidden="true"><div className="visual-readout">MODEL: MULTI_AGENT<br />TEMP: 0.00<br />RUN: 0042/0100</div><div className="orb orb-one" /><div className="orb orb-two" /><div className="orb orb-three" /><span>IDENTITY</span><span>STRATEGY</span><span>OUTCOME</span></div>
      </section>

      <section className="section-shell open-source-feature">
        <div><p className="eyebrow">Open source / Brel</p><h2>Financial data,<br /><em>without the friction.</em></h2></div>
        <div className="open-source-stats"><div><strong>10×</strong><span>Data-processing speed</span></div><div><strong>100+</strong><span>Supported filing types</span></div><div><strong>30+</strong><span>Countries covered</span></div></div>
        <div className="open-source-copy"><p>I contributed to Brel, a Python library for reading and analyzing XBRL financial reports. The work ranged from DataFrame APIs and large-number architecture to cross-platform iXBRL support.</p><a className="text-link" href="https://github.com/BrelLibrary/brel" target="_blank" rel="noreferrer">View Brel on GitHub <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="section-shell trajectory">
        <div className="section-heading"><p className="eyebrow">Experience</p><h2>Different contexts,<br /><em>one thread.</em></h2></div>
        <div className="timeline">
          {timeline.map(({ years, place, role, text }) => <article key={place}><span className="timeline-year">{years}</span><span aria-hidden="true">↗</span><div><p>{place}</p><h3>{role}</h3></div><p className="timeline-copy">{text}</p></article>)}
        </div>
      </section>
    </div>
  );
}
