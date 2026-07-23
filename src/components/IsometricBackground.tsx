'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface Props {
  activeState?: number; // 0 to 6
}

export default function IsometricBackground({ activeState }: Props) {
  const pathname = usePathname();
  const [scrollState, setScrollState] = useState<number>(activeState ?? 0);

  useEffect(() => {
    if (activeState !== undefined) {
      setScrollState(activeState);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const progress = scrollY / docHeight;
      if (progress < 0.1) setScrollState(0);
      else if (progress < 0.3) setScrollState(1);
      else if (progress < 0.5) setScrollState(2);
      else if (progress < 0.7) setScrollState(3);
      else if (progress < 0.85) setScrollState(4);
      else if (progress < 0.95) setScrollState(5);
      else setScrollState(6);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeState]);

  // ALL HOOKS MUST RUN BEFORE ANY CONDITIONAL RETURN (fixes React error #310)
  if (pathname !== '/') {
    return null;
  }

  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000"
      style={{ opacity: scrollState === 6 ? 0.05 : 0.12 }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grid-grad" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38A8E0" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#86BF58" stopOpacity="0.02" />
          </linearGradient>
          
          <radialGradient id="pulse-glow" cx="600" cy="400" r="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38A8E0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B0E14" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Grid Lines (Isometric projection) */}
        <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1">
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`diag1-${i}`} x1={i * 100 - 200} y1="0" x2={i * 100 + 400} y2="800" />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`diag2-${i}`} x1={1400 - i * 100} y1="0" x2={800 - i * 100} y2="800" />
          ))}
        </g>

        {/* State 1: Cimientos / Plataforma (Green #86BF58) */}
        <g className={`transition-all duration-700 ${scrollState >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <polygon points="600,320 800,420 600,520 400,420" fill="rgba(134, 191, 88, 0.06)" stroke="#86BF58" strokeWidth="1.5" strokeDasharray="4 4" />
          <polygon points="600,280 760,360 600,440 440,360" fill="rgba(134, 191, 88, 0.1)" stroke="#86BF58" strokeWidth="1" />
        </g>

        {/* State 2: Bloques / Monolitos de Datos (Blue #38A8E0) */}
        <g className={`transition-all duration-700 ${scrollState >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Block 1 */}
          <polygon points="520,330 570,305 620,330 570,355" fill="#38A8E0" fillOpacity="0.2" stroke="#38A8E0" strokeWidth="1" />
          <polygon points="520,330 570,355 570,410 520,385" fill="#1C658C" fillOpacity="0.3" stroke="#38A8E0" strokeWidth="0.8" />
          <polygon points="570,355 620,330 620,385 570,410" fill="#2986B5" fillOpacity="0.3" stroke="#38A8E0" strokeWidth="0.8" />
          
          {/* Block 2 */}
          <polygon points="640,360 690,335 740,360 690,385" fill="#38A8E0" fillOpacity="0.25" stroke="#38A8E0" strokeWidth="1" />
          <polygon points="640,360 690,385 690,440 640,415" fill="#1C658C" fillOpacity="0.3" />
          <polygon points="690,385 740,360 740,415 690,440" fill="#2986B5" fillOpacity="0.3" />
        </g>

        {/* State 3: Conductos de Conexión (Violet #7361A8) */}
        <g className={`transition-all duration-700 ${scrollState >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <path d="M 570 355 L 690 385 L 600 440 Z" fill="none" stroke="#7361A8" strokeWidth="2" strokeDasharray="6 3" />
          <path d="M 440 360 L 570 410 L 690 440" fill="none" stroke="#7361A8" strokeWidth="1.5" />
        </g>

        {/* State 4: Orbes de Luz en Acción (Pink #E15A9C) */}
        <g className={`transition-all duration-700 ${scrollState >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <circle cx="570" cy="355" r="8" fill="#E15A9C" className="animate-pulse" />
          <circle cx="690" cy="385" r="6" fill="#E15A9C" className="animate-ping" />
          <circle cx="600" cy="440" r="10" fill="#E15A9C" fillOpacity="0.6" />
        </g>

        {/* State 5: Envolvente de Seguridad (Blanco frío / Violeta) */}
        <g className={`transition-all duration-700 ${scrollState >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <ellipse cx="600" cy="380" rx="260" ry="150" fill="none" stroke="#7361A8" strokeWidth="1" strokeDasharray="8 8" />
          <ellipse cx="600" cy="380" rx="280" ry="165" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
