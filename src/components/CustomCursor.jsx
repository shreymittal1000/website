import React from 'react';

export default function CustomCursor({ cursorPos, isHovering }) {
  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}
