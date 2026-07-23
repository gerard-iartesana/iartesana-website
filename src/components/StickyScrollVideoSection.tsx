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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      video.pause();
      video.currentTime = 0;
      setReady(true);
    };

    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper || !video.duration) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wh = window.innerHeight;
      // progress 0→1 based on how far through the section we've scrolled
      const totalScroll = rect.height - wh;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      targetTimeRef.current = progress * video.duration;
    };

    // Smooth lerp loop for video scrubbing
    const loop = () => {
      if (video.duration) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.01) {
          currentTimeRef.current += diff * 0.15;
          video.currentTime = currentTimeRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: '350vh' }}
    >
      {/* Video de fondo: fijo en pantalla mientras se hace scroll por esta sección */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-[#0B0E14]/50" />

        {/* Gradientes superior e inferior para integrar con fondo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #0B0E14 0%, transparent 12%, transparent 88%, #0B0E14 100%)',
          }}
        />

        {/* Contenido centrado sobre el vídeo */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 z-10">
          <div className="w-full max-w-4xl mx-auto text-white space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
