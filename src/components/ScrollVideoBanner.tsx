'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollVideoBannerProps {
  src: string;
}

export default function ScrollVideoBanner({ src }: ScrollVideoBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular la posición del scroll dentro del elemento
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación de escala sutil al hacer scroll
  const scale = 0.96 + Math.min(scrollProgress * 0.08, 0.04);

  return (
    <div
      ref={containerRef}
      className="w-screen relative left-1/2 -translate-x-1/2 my-10 sm:my-16 overflow-hidden pointer-events-none"
    >
      <div
        className={`w-full transition-all duration-700 ease-out ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className="relative w-full overflow-hidden">
          {/* Reproductor de vídeo limpio de fondo sin marcos, bordes ni etiquetas */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] sm:h-[480px] md:h-[560px] object-cover object-center"
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Degradados de integración limpia arriba y abajo para fundir con el fondo oscuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-[#080A0E] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080A0E] via-transparent to-[#080A0E] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
