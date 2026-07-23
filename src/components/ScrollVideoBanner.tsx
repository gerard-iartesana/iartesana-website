'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollVideoBannerProps {
  src: string;
}

export default function ScrollVideoBanner({ src }: ScrollVideoBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(0);
  const targetTimeRef = useRef<number>(0);
  const parallaxOffsetRef = useRef<number>(0);
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

    const updateVideoAndParallax = () => {
      if (!containerRef.current || !videoRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el avance del scroll dentro de la ventana (0 a 1)
      const startOffset = windowHeight;
      const endOffset = -rect.height;
      const totalDistance = startOffset - endOffset;
      const currentPos = startOffset - rect.top;

      const rawProgress = currentPos / totalDistance;
      const progress = Math.min(1, Math.max(0, rawProgress));

      // 1. Scrubbing del tiempo del vídeo (avanza y retrocede con el scroll)
      if (videoRef.current.duration) {
        targetTimeRef.current = progress * videoRef.current.duration;
      }

      // 2. Parallax vertical Intenso y claramente perceptible (-180px a +180px)
      const maxShift = 180; 
      // Multiplicamos por (0.5 - progress) para crear el movimiento opuesto al scroll
      parallaxOffsetRef.current = (0.5 - progress) * maxShift * 2;
    };

    // Bucle de aceleración por hardware ultra fluido (60fps)
    const renderLoop = () => {
      if (videoRef.current) {
        // Scrubbing de fotogramas del vídeo
        if (videoRef.current.duration) {
          const diff = targetTimeRef.current - videoRef.current.currentTime;
          if (Math.abs(diff) > 0.001) {
            videoRef.current.currentTime += diff * 0.2;
          }
        }

        // Aplicar desplazamiento físico Parallax al vídeo
        if (videoContainerRef.current) {
          videoContainerRef.current.style.transform = `translate3d(0, ${parallaxOffsetRef.current}px, 0) scale(1.15)`;
        }
      }
      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', updateVideoAndParallax, { passive: true });
    updateVideoAndParallax();
    animationFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', updateVideoAndParallax);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration]);

  return (
    <div
      ref={containerRef}
      className="w-screen relative left-1/2 -translate-x-1/2 my-12 sm:my-20 h-[360px] sm:h-[520px] md:h-[620px] overflow-hidden bg-[#0B0E14] pointer-events-none"
    >
      {/* Contenedor ampliado con Parallax profundo de 360px de recorrido */}
      <div
        ref={videoContainerRef}
        className="relative w-full h-[160%] -top-[30%] will-change-transform"
      >
        {/* Reproductor de vídeo de fondo */}
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
      </div>

      {/* Degradados de integración limpia con el fondo oscuro #0B0E14 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] via-transparent to-[#0B0E14] pointer-events-none z-10" />
    </div>
  );
}
