import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import InteractiveGrid from './components/InteractiveGrid';
import { getBlogPostById } from './data/blogPosts';
import './styles/animations.css';

const canonicalizePath = (path) => {
  const cleanPath = path.length > 1 ? path.replace(/\/$/, '') : path;
  if (cleanPath === '/notes' || cleanPath === '/blog') return '/writing';
  if (cleanPath.startsWith('/notes/')) return cleanPath.replace('/notes/', '/writing/');
  if (cleanPath.startsWith('/blog/')) return cleanPath.replace('/blog/', '/writing/');
  return cleanPath || '/';
};

const getBrowserPath = () => canonicalizePath(window.location.hash.slice(1) || window.location.pathname || '/');

const useHistoryRouter = () => {
  const [currentPath, setCurrentPath] = useState(getBrowserPath);
  useEffect(() => {
    const syncPath = () => {
      const nextPath = getBrowserPath();
      if (window.location.hash || window.location.pathname !== nextPath) {
        window.history.replaceState(null, '', `${nextPath}${window.location.search}`);
      }
      setCurrentPath(nextPath);
    };
    syncPath();
    window.addEventListener('popstate', syncPath);
    return () => window.removeEventListener('popstate', syncPath);
  }, []);
  const navigate = (path) => {
    const nextPath = canonicalizePath(path);
    if (nextPath === currentPath) return;
    window.history.pushState(null, '', nextPath);
    setCurrentPath(nextPath);
  };
  return { currentPath, navigate };
};

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const [key, keyValue] = attribute;
    element.setAttribute(key, keyValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

export default function App() {
  const { currentPath, navigate } = useHistoryRouter();
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('shrey-theme', theme);
  }, [theme]);
  useEffect(() => {
    const post = currentPath.startsWith('/writing/') ? getBlogPostById(currentPath.slice('/writing/'.length)) : null;
    const title = post ? `${post.title} | Shrey Mittal` : currentPath === '/writing' ? 'Writing | Shrey Mittal' : 'Shrey Mittal';
    const description = post?.excerpt || (currentPath === '/writing'
      ? 'Essays and field notes from Shrey Mittal on AI, engineering, and things he could not leave alone.'
      : 'Shrey Mittal works across AI agents, engineering, research, and early-stage technology in Zürich.');
    const type = post ? 'article' : 'website';
    document.title = title;
    setMeta('meta[name="description"]', ['name', 'description'], description);
    setMeta('meta[property="og:title"]', ['property', 'og:title'], title);
    setMeta('meta[property="og:description"]', ['property', 'og:description'], description);
    setMeta('meta[property="og:type"]', ['property', 'og:type'], type);
    setMeta('meta[property="og:url"]', ['property', 'og:url'], window.location.href);
    setMeta('meta[name="twitter:card"]', ['name', 'twitter:card'], 'summary');
    setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], title);
    setMeta('meta[name="twitter:description"]', ['name', 'twitter:description'], description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', new URL(currentPath, window.location.origin).href);
  }, [currentPath]);

  let page = <HomePage navigate={navigate} />;
  if (currentPath === '/writing') page = <BlogPage navigate={navigate} />;
  if (currentPath.startsWith('/writing/')) page = <BlogPostPage postId={currentPath.split('/writing/')[1]} navigate={navigate} />;

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
