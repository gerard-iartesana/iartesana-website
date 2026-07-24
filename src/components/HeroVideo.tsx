'use client';

import React, { useEffect, useRef } from 'react';

interface HeroVideoProps {
  src?: string;
  opacity?: number;
  blendMode?: 'screen' | 'lighten' | 'normal' | 'multiply';
}

export default function HeroVideo({
  src = '/hero-bg.mp4',
  opacity = 0.45,
  blendMode = 'screen',
}: HeroVideoProps) {
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
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full min-h-[100%] overflow-hidden pointer-events-none z-0">
      {/* Vídeo a pantalla completa con opacidad suavizada y mezcla con el fondo #080A0E */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-700"
        style={{
          opacity: opacity,
          mixBlendMode: blendMode as any,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Máscara de degradado radial para oscurecer detrás del texto y fundir bordes */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 35%, rgba(8, 10, 14, 0.35) 0%, rgba(8, 10, 14, 0.7) 60%, rgba(8, 10, 14, 1) 100%)'
        }}
      />

      {/* Degradado inferior amplio para integrarse suavemente con el fondo #080A0E */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#080A0E]/70 to-[#080A0E]" />
    </div>
  );
}
