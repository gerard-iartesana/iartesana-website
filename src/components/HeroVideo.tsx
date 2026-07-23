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
      {/* Background Video v2 1080 full viewport width, 100% opacity, continuous loop without fade in/out */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-100"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 95%)',
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Subtle bottom gradient mask integrating smoothly with background */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#080A0E]" />
    </div>
  );
}
