import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
// import ParticleCanvas from './components/ParticleCanvas';
import BackgroundImage from './components/PhotoCanvas';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import './styles/animations.css';

// Simple hash-based router
const useHashRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const navigate = (path) => {
    window.location.hash = path;
  };
  
  return { currentPath, navigate };
};

export default function App() {
  const { currentPath, navigate } = useHashRouter();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor cursorPos={cursorPos} isHovering={isHovering} />
      {/* <ParticleCanvas cursorPos={cursorPos} /> */}
      <BackgroundImage />

      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation 
          currentPath={currentPath} 
          navigate={navigate} 
          setIsHovering={setIsHovering} 
        />

        {currentPath === '/' && <HomePage navigate={navigate} setIsHovering={setIsHovering} />}
        {currentPath === '/about' && <AboutPage setIsHovering={setIsHovering} />}
        {currentPath === '/projects' && <ProjectsPage setIsHovering={setIsHovering} />}
        {currentPath === '/skills' && <SkillsPage setIsHovering={setIsHovering} />}
        {currentPath === '/blog' && <BlogPage setIsHovering={setIsHovering} />}
        {currentPath === '/contact' && <ContactPage setIsHovering={setIsHovering} />}

        <Footer setIsHovering={setIsHovering} />
      </div>
    </div>
  );
}
