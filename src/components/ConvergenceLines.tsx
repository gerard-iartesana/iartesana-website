'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function ConvergenceLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress as user scrolls past the container
      const start = windowHeight * 0.92; // enters near bottom
      const end = windowHeight * 0.25;   // moves toward top

      const current = rect.top;
      let p = (start - current) / (start - end);
      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalLines = 28;
  const initialGap = 26; // Spacing at top (wide / unorganized)
  const finalGap = 3.5;   // Spacing at bottom (ordered / compressed)

  // Current gap interpolated based on scroll
  const currentGap = initialGap - progress * (initialGap - finalGap);

  // Opacity & glow intensity
  const opacity = 0.3 + progress * 0.6;

  return (
    <div
      ref={containerRef}
      className="pt-4 pb-0 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <div className="relative h-24 sm:h-32 flex items-center justify-center w-full max-w-3xl">
        {Array.from({ length: totalLines }).map((_, index) => {
          const offset = index - (totalLines - 1) / 2;
          const translateX = offset * currentGap;

          return (
            <div
              key={index}
              className="absolute top-0 bottom-0 w-[1.5px] rounded-full transition-transform duration-75 ease-out"
              style={{
                transform: `translateX(${translateX}px)`,
                background: `linear-gradient(to bottom, rgba(255,255,255,${opacity * 0.3}), rgba(56,168,224,${opacity}), rgba(255,255,255,${opacity * 0.15}))`,
                boxShadow: progress > 0.5 ? `0 0 10px rgba(56,168,224,${(progress - 0.5) * 1.6})` : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
