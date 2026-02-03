import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation({ currentPath, navigate, setIsHovering }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center backdrop-blur-sm">
        {/* <div 
          className="text-3xl font-bold cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => navigate('/')}
        >
          {'>'} Shrey
        </div> */}
        
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`social-link text-base hover:text-[#00FF94] transition-colors ${
                currentPath === link.path ? 'text-[#00FF94]' : ''
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-95 z-40 p-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => {
                navigate(link.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-1 text-base ${
                currentPath === link.path ? 'text-[#00FF94]' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
