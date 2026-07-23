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

      // Distancia de recorrido del scroll en la sección
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      targetTimeRef.current = progress * videoRef.current.duration;
    };

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
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[220vh] overflow-x-hidden"
    >
      {/* Vídeo de fondo: 100% de lado a lado de la pantalla (w-screen h-screen) anclado al scroll */}
      <div className="sticky top-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
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

        {/* Capa de contraste transparente para asegurar la legibilidad del texto en blanco */}
        <div className="absolute inset-0 bg-[#0B0E14]/65 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none" />
      </div>

      {/* Texto flotante encima con transparencia completa */}
      <div className="relative z-10 -mt-[100vh] min-h-screen flex items-center justify-center pointer-events-auto py-20 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto bg-transparent text-white space-y-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          {children}
        </div>
      </div>
    </div>
  );
}
