'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Si el dispositivo es táctil, no renderizar cursor personalizado
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detectar si estamos sobre un elemento interactivo
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, .timeline-step'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Animación fluida de seguimiento (lerp) para el anillo exterior
  useEffect(() => {
    if (isTouch) return;
    let animationFrameId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Punto nítido central */}
      <div
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out ${
          isHovered ? 'bg-[#009DF8] scale-125' : 'bg-[#38A8E0] scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
        }}
      />

      {/* Anillo exterior animado con expansión, relleno brillante y anillo concéntrico al interactuar */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 border-2 border-[#009DF8] bg-[#009DF8]/15 shadow-[0_0_30px_rgba(0,157,248,0.7)] animate-pulse'
            : 'w-8 h-8 border border-[#38A8E0]/40 bg-transparent shadow-none'
        }`}
        style={{
          transform: `translate3d(${
            isHovered ? trailingPos.x - 28 : trailingPos.x - 16
          }px, ${isHovered ? trailingPos.y - 28 : trailingPos.y - 16}px, 0)`,
        }}
      >
        {/* Anillo concéntrico sutil interior presente en estado hover */}
        {isHovered && (
          <div className="w-8 h-8 rounded-full border border-white/40 animate-ping opacity-60 pointer-events-none" />
        )}
      </div>
    </>
  );
}
