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
      className="relative min-h-[160vh] sm:min-h-[190vh] w-full"
    >
      {/* Vídeo fijo que ocupa el 100% del ancho de la pantalla (Edge-to-Edge) */}
      <div className="sticky top-0 h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pointer-events-none z-0">
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

        {/* Velo oscuro sutil e integración con fondo para asegurar máxima legibilidad de las letras */}
        <div className="absolute inset-0 bg-[#0B0E14]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none" />
      </div>

      {/* Contenido flotante 100% TRANSPARENTE: sin fondo de tarjeta, solo las letras e iconos */}
      <div className="relative z-10 -mt-[85vh] sm:-mt-[90vh] pb-32 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-transparent border-none shadow-none p-0 space-y-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          {children}
        </div>
      </div>
    </div>
  );
}
