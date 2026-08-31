import React from 'react';

export default function Footer({ navigate }) {
  return (
    <footer className="footer compact-footer">
      <button onClick={() => navigate('/')}>© 2026 Shrey Mittal</button>
      <div>
        <a href="https://www.github.com/shreymittal1000/shreyws" target="_blank" rel="noreferrer">Proudly hosted on ShreyWS. If you know Shrey, get in touch with him to host your website too!</a>
      </div>
      <div>
        <a href="https://www.github.com/shreymittal1000/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/shrey-mittal-101" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:shreymittal1000@gmail.com">Email</a>
      </div>
    </footer>
  );
}
