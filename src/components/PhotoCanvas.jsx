import React from 'react';

export default function BackgroundImage() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Black and white photo with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/background3.jpg)',
          backgroundPosition: 'center calc(50% + 100px)',
          filter: 'grayscale(100%)',
        }}
      />
      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.7 }}
      />
    </div>
  );
}