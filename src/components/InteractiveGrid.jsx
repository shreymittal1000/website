import React, { useEffect, useRef, useState } from 'react';

const plotPath = (fn, width = 1200, height = 800, steps = 240) => {
  const points = Array.from({ length: steps + 1 }, (_, index) => {
    const progress = index / steps;
    const x = -7 + progress * 14;
    return [progress * width, height / 2 - fn(x) * 72];
  });
  return points.map(([x, y], index) => `${index ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
};

const curves = [
  { id: 'a', fn: (x) => 1.35 * Math.sin(x) },
  { id: 'b', fn: (x) => .075 * x * x * x - .72 * x },
];

const GraphPlane = () => (
  <svg className="desmos-plane" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" role="presentation">
    <defs>
      <pattern id="minor-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" className="desmos-minor" />
      </pattern>
      <pattern id="major-grid" width="100" height="100" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill="url(#minor-grid)" />
        <path d="M 100 0 L 0 0 0 100" className="desmos-major" />
      </pattern>
    </defs>
    <rect width="1200" height="800" fill="url(#major-grid)" />
    <line className="desmos-axis" x1="0" y1="400" x2="1200" y2="400" />
    <line className="desmos-axis" x1="600" y1="0" x2="600" y2="800" />
    <path className="desmos-curve curve-a" d={plotPath(curves[0].fn)} />
    <path className="desmos-curve curve-b" d={plotPath(curves[1].fn)} />
  </svg>
);

export default function InteractiveGrid() {
  const [pulses, setPulses] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    let frame;
    const updatePosition = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--grid-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--grid-y', `${event.clientY}px`);
        const scale = Math.max(window.innerWidth / 1200, window.innerHeight / 800);
        const offsetX = (window.innerWidth - 1200 * scale) / 2;
        const offsetY = (window.innerHeight - 800 * scale) / 2;
        const svgX = (event.clientX - offsetX) / scale;
        const graphX = svgX / 1200 * 14 - 7;
        setCoordinates(curves.flatMap((curve) => {
          const graphY = curve.fn(graphX);
          const screenY = offsetY + (400 - graphY * 72) * scale;
          if (Math.abs(event.clientY - screenY) > 24) return [];
          return [{ id: curve.id, x: event.clientX, y: screenY, graphX, graphY }];
        }));
      });
    };
    const addPulse = (event) => {
      const id = nextId.current++;
      setPulses((current) => [...current.slice(-3), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => setPulses((current) => current.filter((pulse) => pulse.id !== id)), 900);
    };

    window.addEventListener('pointermove', updatePosition, { passive: true });
    window.addEventListener('pointerdown', addPulse, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerdown', addPulse);
    };
  }, []);

  return (
    <div className="interactive-grid" aria-hidden="true">
      <GraphPlane />
      <div className="grid-crosshair grid-crosshair-x" />
      <div className="grid-crosshair grid-crosshair-y" />
      {coordinates.map((point) => (
        <span key={point.id} className={`graph-coordinate coordinate-${point.id}`} style={{ left: point.x, top: point.y }}>
          <i />
          <b>({point.graphX.toFixed(2)}, {point.graphY.toFixed(2)})</b>
        </span>
      ))}
      {pulses.map((pulse) => (
        <span key={pulse.id} className="grid-pulse" style={{ left: pulse.x, top: pulse.y }} />
      ))}
    </div>
  );
}
