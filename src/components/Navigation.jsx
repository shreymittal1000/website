import React, { useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { path: '/writing', label: 'Writing' },
];

export default function Navigation({ currentPath, navigate, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const go = (path) => { navigate(path); setOpen(false); };

  return (
    <header className="nav-wrap">
      <nav className="nav-bar" aria-label="Primary navigation">
        <button className="wordmark" onClick={() => go('/')} aria-label="Shrey Mittal, home"><span className="prompt-mark">~/</span>shrey<span className="cursor-block">_</span></button>
        <div className="nav-links">
          {navLinks.map((link) => (
            <button key={link.path} onClick={() => go(link.path)} className={currentPath === link.path || currentPath.startsWith(`${link.path}/`) ? 'active' : ''}>
              ./{link.label.toLowerCase()}
            </button>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}<span>{theme === 'dark' ? 'light()' : 'dark()'}</span>
          </button>
          <a className="nav-contact" href="mailto:shreymittal1000@gmail.com">contact() <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => <button key={link.path} onClick={() => go(link.path)}>{link.label}</button>)}
          <button onClick={toggleTheme}>{theme === 'dark' ? 'light()' : 'dark()'} {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <a href="mailto:shreymittal1000@gmail.com">Let&apos;s talk <ArrowUpRight size={18} /></a>
        </div>
      )}
    </header>
  );
}
