import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('App error:', error, info);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="min-h-screen bg-black text-white p-8 font-mono">
          <h1 className="text-xl font-bold text-red-400 mb-4">Something went wrong</h1>
          <pre className="text-sm text-white/80 overflow-auto">
            {this.state.error.message}
          </pre>
          <p className="mt-4 text-white/60 text-sm">
            Check the browser console for details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
