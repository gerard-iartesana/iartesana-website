'use client';

import React, { useRef, useEffect, useState } from 'react';

interface StickyScrollVideoSectionProps {
  src: string;
  children: React.ReactNode;
}

export default function StickyScrollVideoSection({
  src,
  children,
}: StickyScrollVideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState<number>(0);
  const targetTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const updateScrub = () => {
      if (!sectionRef.current || !videoRef.current || !videoRef.current.duration) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Distancia total de scroll disponible mientras la sección está fija
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      // Progreso del scroll dentro de esta sección fija (0 a 1)
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      targetTimeRef.current = progress * videoRef.current.duration;
    };

    // Bucle de aceleración por hardware ultra fluido a 60fps
    const renderLoop = () => {
      if (videoRef.current && videoRef.current.duration) {
        const diff = targetTimeRef.current - videoRef.current.currentTime;
        if (Math.abs(diff) > 0.0005) {
          videoRef.current.currentTime += diff * 0.25;
        }
      }
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', updateScrub, { passive: true });
    updateScrub();
    animationFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', updateScrub);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[170vh] sm:min-h-[200vh] w-full"
    >
      {/* Vídeo fijo en el viewport mientras haces scroll por esta sección */}
      <div className="sticky top-0 h-screen w-screen relative left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Degradados de integración de fondo transparente a oscuro #0B0E14 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/90 via-transparent to-[#0B0E14] pointer-events-none" />
      </div>

      {/* Contenido flotante sobre el vídeo fijo (se desplaza sobre el vídeo mientras este avanza) */}
      <div className="relative z-10 -mt-[85vh] sm:-mt-[90vh] pb-32 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0B0E14]/85 backdrop-blur-xl border border-white/15 p-8 sm:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
