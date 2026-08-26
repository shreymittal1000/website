import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import InteractiveGrid from './components/InteractiveGrid';
import './styles/animations.css';

const useHashRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash.slice(1) || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return { currentPath, navigate: (path) => { window.location.hash = path; } };
};

export default function App() {
  const { currentPath, navigate } = useHashRouter();
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('shrey-theme', theme);
  }, [theme]);

  let page = <HomePage navigate={navigate} />;
  if (currentPath === '/writing' || currentPath === '/notes' || currentPath === '/blog') page = <BlogPage navigate={navigate} />;
  if (currentPath.startsWith('/writing/')) page = <BlogPostPage postId={currentPath.split('/writing/')[1]} navigate={navigate} />;
  if (currentPath.startsWith('/notes/')) page = <BlogPostPage postId={currentPath.split('/notes/')[1]} navigate={navigate} />;
  if (currentPath.startsWith('/blog/')) page = <BlogPostPage postId={currentPath.split('/blog/')[1]} navigate={navigate} />;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <InteractiveGrid />
      <Navigation currentPath={currentPath} navigate={navigate} theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main-content">{page}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
