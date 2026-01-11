import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer({ setIsHovering }) {
  return (
    <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-black/20">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#00FF94] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Last Updated - December 2025. Built with React.js so that I can teach myself frontend.
          </div>
          <div className="flex gap-6">
            <a 
              href="https://www.github.com/shreymittal1000/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FF94] hover:opacity-80 transition-opacity"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/shrey-mittal-101" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FF94] hover:opacity-80 transition-opacity"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/shreymittal1000/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FF94] hover:opacity-80 transition-opacity"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
