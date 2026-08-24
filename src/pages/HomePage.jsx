import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const LinkArrow = () => <ArrowUpRight size={14} aria-hidden="true" />;

export default function HomePage({ navigate }) {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <div className="page-enter plain-home section-shell">
      <header className="plain-intro">
        <h2 className="whoami-label">$ whoami <small>about me</small></h2>
        <div className="intro-grid">
          <div>
            <p className="terminal-path">~/shrey-mittal</p>
            <button
              className={`identity-card${cardFlipped ? ' is-flipped' : ''}`}
              type="button"
              onClick={() => setCardFlipped(!cardFlipped)}
              aria-label="Flip Shrey Mittal's name card to reveal his photograph"
              aria-pressed={cardFlipped}
            >
              <span className="identity-card-inner">
                <span className="identity-card-face identity-card-front">
                  <strong>Shrey<br />Mittal</strong>
                  <span className="flip-hint">[ hover / turn over ↻ ]</span>
                </span>
                <span className="identity-card-face identity-card-back">
                  <img src="/background1.jpg" alt="Shrey at a science conference" />
                  <span className="photo-label">shrey_profile_01.jpg</span>
                </span>
              </span>
            </button>
            <p className="intro-role">building @ Droidrun</p>
          </div>
          <div className="intro-about">
            <p>Engineer/Researcher/Builder interested in AI model behaviour, safety & alignment, and robotics. I studied computer science at EPFL and ETH Zürich, with a year at Waterloo.</p>
            <p>Previously, I worked in AI research, software engineering, operations, and early-stage investing. I&apos;m currently at Mobilerun, where we provide the infrastructure, framework, and intelligence for automating tasks on mobile phones.</p>
            <p>You can reach me at <a href="mailto:shreymittal1000@gmail.com">shreymittal1000 [at] gmail [dot] com</a>.</p>
          </div>
        </div>
      </header>

      <section className="plain-section">
        <h2><span>[01]</span> running_processes <small>what I&apos;m doing now</small></h2>
        <ul className="plain-list">
          <li><span className="list-title">Mobilerun</span><span>Working on infrastructure, tools and intelligence for agents that interact with mobile devices.</span></li>
          <li><span className="list-title">ETH Robotics Club</span><span>Research on how to benchmark the robustness and security of World Action Models, AI systems that predict what will happen and use those predictions to choose robot actions.</span></li>
          <li><span className="list-title">Multi-agent alignment</span><span>Continuing to investigate odd coordination patterns and conversational attractors in LLM systems.</span></li>
          <li><span className="list-title">This website</span><span>A place to keep research notes, projects, and things I want to remember.</span></li>
          <li><span className="list-title">ShreyWS</span><span>$300 impulse buy turned into my personal server + devops experiment ground.</span></li>
        </ul>
      </section>

      <section className="plain-section">
        <div className="plain-section-head"><h2><span>[02]</span> ~/.logs <small>writing</small></h2><button onClick={() => navigate('/blog')}>all blogs <LinkArrow /></button></div>
        <ul className="plain-list link-list">
          {blogPosts.map((post) => (
            <li key={post.id} onClick={() => navigate(`/blog/${post.id}`)}>
              <span className="list-date">{post.date}</span>
              <span className="list-title">{post.title}</span>
              <LinkArrow />
            </li>
          ))}
        </ul>
      </section>

      <section className="plain-section">
        <div className="plain-section-head"><h2><span>[03]</span> ~/src <small>projects</small></h2><button onClick={() => navigate('/work')}>inspect projects <LinkArrow /></button></div>
        <ul className="plain-list project-list">
          <li><a className="list-title" href="https://drive.google.com/file/d/12G0gquZL3gppnE5_XkCpl17nbKJHd29c/view?usp=sharing" target="_blank" rel="noreferrer">From Games to Governance <LinkArrow /></a><span>ETH thesis on identity cues and strategic behaviour in multi-agent LLMs.</span><span className="list-tech">Python · LLMs · game theory</span></li>
          <li><a className="list-title" href="https://github.com/BrelLibrary/brel" target="_blank" rel="noreferrer">Brel <LinkArrow /></a><span>Open-source Python library for reading and analysing structured financial reports.</span><span className="list-tech">Python · XBRL · DataFrames</span></li>
          <li><a className="list-title" href="https://github.com/shreymittal1000/WatermarkSmoothing" target="_blank" rel="noreferrer">Watermark Smoothing <LinkArrow /></a><span>Experiments extending watermark-smoothing attacks to different language models.</span><span className="list-tech">Jupyter · language models</span></li>
          <li><a className="list-title" href="https://github.com/shreymittal1000/LlamaJailbreak" target="_blank" rel="noreferrer">LlamaJailbreak <LinkArrow /></a><span>Tests and notes from jailbreaking Llama 2 with different objectives.</span><span className="list-tech">Python · model safety</span></li>
          <li><a className="list-title" href="https://github.com/shreymittal1000/tCHu" target="_blank" rel="noreferrer">tCHu <LinkArrow /></a><span>A Swiss digital version of Ticket to Ride, built as an EPFL university project.</span><span className="list-tech">Java</span></li>
        </ul>
      </section>

      <section className="plain-section">
        <div className="plain-section-head"><h2><span>[04]</span> git log --reverse <small>past background</small></h2><button onClick={() => navigate('/work')}>full history <LinkArrow /></button></div>
        <ul className="plain-list history-list">
          <li><span className="list-date">2025–26</span><span className="list-title">Investment team, Merantix Capital</span><span>Early-stage AI investing in Berlin.</span></li>
          <li><span className="list-date">2023–25</span><span className="list-title">MSc Computer Science, ETH Zürich</span><span>Focus on AI robustness, security and alignment in multi-agent contexts.</span></li>
          <li><span className="list-date">2022–23</span><span className="list-title">Undergraduate Exchange, UWaterloo</span><span>Took advantage of Waterloo's holistic education system.</span></li>
          <li><span className="list-date">2021-now</span><span className="list-title">Research engineering & operations</span><span>Worked across an early startup, an AI scale-up, and a large multinational.</span></li>
          <li><span className="list-date">2020-23</span><span className="list-title">BSc Computer Science, EPFL</span><span>Took many theoretical courses, but also made my own smart glasses.</span></li>
        </ul>
      </section>

      <section className="plain-section small-things">
        <h2><span>[05]</span> offscreen.txt <small>outside work</small></h2>
        <p>Badminton, Cricket, Football, Chess, PowerPoint karaoke, and treating recipes as loose implementation guidelines.</p>
        <p>English · Hindi · French · enough German for the döner shop</p>
      </section>
    </div>
  );
}
