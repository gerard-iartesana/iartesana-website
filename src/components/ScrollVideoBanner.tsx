'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollVideoBannerProps {
  src: string;
  accentColor?: string;
  label?: string;
}

export default function ScrollVideoBanner({
  src,
  accentColor = '#86BF58',
  label,
}: ScrollVideoBannerProps) {
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
      { threshold: 0.15 }
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

      // Calcular qué porcentaje de la pantalla ha recorrido el elemento
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación de escala y opacidad suave al hacer scroll
  const scale = 0.94 + Math.min(scrollProgress * 0.1, 0.06);

  return (
    <div
      ref={containerRef}
      className="w-screen relative left-1/2 -translate-x-1/2 my-8 sm:my-14 overflow-hidden"
    >
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
          {/* Badge opcional de etiqueta */}
          {label && (
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 px-3.5 py-1.5 rounded-full bg-[#080A0E]/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white font-bold tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full inline-block animate-ping" style={{ backgroundColor: accentColor }} />
              <span>{label}</span>
            </div>
          )}

          {/* Reproductor de vídeo de fondo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[260px] sm:h-[400px] md:h-[480px] object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Degradados de integración arriba y abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-[#080A0E]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080A0E]/40 via-transparent to-[#080A0E] pointer-events-none" />

          {/* Resplandor ambiental de borde inferior */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
