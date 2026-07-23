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
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[120%] min-h-[90vh] overflow-hidden pointer-events-none z-0">
      {/* Vídeo al 100% de intensidad constante sin fade in/out de opacidad ni bucle */}
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

      {/* Exclusivamente degradado inferior para integrarse con el fondo negro #080A0E */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#080A0E]" />
    </div>
  );
}
