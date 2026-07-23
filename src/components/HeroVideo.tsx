'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full min-h-[90vh] overflow-hidden pointer-events-none z-0">
      {/* Vídeo de fondo v2 1080 a pantalla completa sin gradientes ni desvanecimientos (fade) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-100"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
