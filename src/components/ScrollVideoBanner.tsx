'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollVideoBannerProps {
  src: string;
}

export default function ScrollVideoBanner({ src }: ScrollVideoBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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

    // Pausar el vídeo para que el scroll controle directamente el avance y retroceso del tiempo
    video.pause();

    const updateVideoTime = () => {
      if (!containerRef.current || !videoRef.current || !videoRef.current.duration) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el avance exacto del scroll respecto al vídeo
      const startOffset = windowHeight * 0.8;
      const endOffset = -rect.height * 0.8;
      const totalDistance = startOffset - endOffset;
      const currentPos = startOffset - rect.top;

      const rawProgress = currentPos / totalDistance;
      const progress = Math.min(1, Math.max(0, rawProgress));

      targetTimeRef.current = progress * videoRef.current.duration;
    };

    // Bucle de aceleración por hardware ultra fluido (60fps lerp)
    const renderLoop = () => {
      if (videoRef.current && videoRef.current.duration) {
        const diff = targetTimeRef.current - videoRef.current.currentTime;
        if (Math.abs(diff) > 0.001) {
          videoRef.current.currentTime += diff * 0.2;
        }
      }
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', updateVideoTime, { passive: true });
    updateVideoTime();
    animationFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', updateVideoTime);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration]);

  return (
    <div
      ref={containerRef}
      className="w-screen relative left-1/2 -translate-x-1/2 my-8 sm:my-14 overflow-hidden bg-[#0B0E14] pointer-events-none"
    >
      <div className="relative w-full overflow-hidden">
        {/* Vídeo limpio de fondo controlado por scroll (avanza y retrocede) */}
        <video
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
          muted
          playsInline
          preload="auto"
          className="w-full h-[320px] sm:h-[480px] md:h-[580px] object-cover object-center"
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Degradados de integración perfecta con el fondo oscuro #0B0E14 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none" />
      </div>
    </div>
  );
}
