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
      const scrollDistance = rect.height + wh;
      const scrolled = wh - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollDistance));
      targetTimeRef.current = progress * video.duration;
    };

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
    <section
      ref={wrapperRef}
      className="relative w-[100vw] -ml-[50vw] left-[50%]"
      style={{ minHeight: '400vh' }}
    >
      {/* Video de fondo: fijo en pantalla, 100% edge-to-edge */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        >
          <source src={src} type="video/mp4" />
        </video>

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-[#0B0E14]/55" />

        {/* Gradientes de entrada/salida */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #0B0E14 0%, transparent 15%, transparent 85%, #0B0E14 100%)',
          }}
        />
      </div>

      {/* Texto que se desplaza sobre el vídeo fijo */}
      <div className="relative z-10 -mt-[100vh] pointer-events-auto">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-[25vh]">
          <div className="w-full max-w-4xl mx-auto text-white space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
