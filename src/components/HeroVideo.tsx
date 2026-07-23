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
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full min-h-[100%] overflow-hidden pointer-events-none z-0">
      {/* Vídeo a pantalla completa */}
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

      {/* Máscara radial: atenúa el vídeo al ~50% en el centro (detrás del texto) y se abre al 100% de intensidad hacia los bordes */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(8, 10, 14, 0.55) 0%, rgba(8, 10, 14, 0.25) 50%, rgba(8, 10, 14, 0) 100%)'
        }}
      />

      {/* Degradado exclusivamente en la parte inferior para integrarse suavemente con el fondo negro #080A0E */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#080A0E]" />
    </div>
  );
}
