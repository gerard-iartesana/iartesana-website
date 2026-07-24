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
      const totalScroll = rect.height - wh;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      targetTimeRef.current = progress * video.duration;
    };

    // Smooth lerp loop with seeking protection for 60fps silky video scrubbing
    const loop = () => {
      if (video && video.duration) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.003) {
          currentTimeRef.current += diff * 0.08; // Silky smooth lerp factor
          // Only update currentTime when browser decoder isn't busy seeking
          if (!video.seeking) {
            video.currentTime = Math.max(0, Math.min(video.duration - 0.01, currentTimeRef.current));
          }
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
      data-video-section
      className="relative"
      style={{ height: '400vh' }}
    >
      {/* Video de fondo: fijo en pantalla mientras se hace scroll por esta sección */}
      <div className="sticky top-[80px] w-full h-[calc(100vh-80px)] overflow-hidden z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transform-gpu translate-z-0"
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-[#080A0E]/50" />

        {/* Gradientes superior e inferior para integrar con fondo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #080A0E 0%, transparent 20%, transparent 80%, #080A0E 100%)',
          }}
        />

        {/* Contenido sobre el vídeo */}
        <div className="absolute inset-0 flex items-start justify-center pt-6 sm:pt-8 z-10" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-white space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
