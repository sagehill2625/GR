import { useEffect, useState } from 'react';

export function MapAnimation() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Background pattern */}
        <defs>
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#f0fdf4" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dots)" />

        {/* Decorative circles */}
        <circle cx="20" cy="20" r="15" fill="#dcfce7" opacity="0.5" />
        <circle cx="80" cy="80" r="20" fill="#dcfce7" opacity="0.5" />
        <circle cx="70" cy="30" r="10" fill="#dcfce7" opacity="0.5" />

        {/* Curved path for the ride */}
        <path
          d="M 10,50 Q 50,20 90,50"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="3,3"
        />

        {/* Start point with pulse animation */}
        <circle cx="10" cy="50" r="4" fill="#22c55e">
          <animate
            attributeName="r"
            values="3;4;3"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0.4;0.8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* End point with pulse animation */}
        <circle cx="90" cy="50" r="4" fill="#22c55e">
          <animate
            attributeName="r"
            values="3;4;3"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0.4;0.8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Moving car */}
        <g transform={`translate(${10 + offset * 0.8},${50 - Math.sin(offset / 15) * 30})`}>
          <circle r="3" fill="#22c55e" />
          <circle r="2" fill="white" opacity="0.6" />
        </g>

        {/* Other cars moving around */}
        <g transform={`translate(${70 - offset * 0.3},${30 + Math.cos(offset / 10) * 15})`}>
          <circle r="2" fill="#22c55e" opacity="0.4" />
        </g>
        <g transform={`translate(${30 + offset * 0.4},${70 - Math.sin(offset / 12) * 20})`}>
          <circle r="2" fill="#22c55e" opacity="0.4" />
        </g>
      </svg>

      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-green-600 shadow-sm">
        Eco-friendly rides
      </div>
    </div>
  );
}