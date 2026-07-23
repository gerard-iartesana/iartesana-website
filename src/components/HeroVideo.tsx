'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set playback speed to slow motion (0.5x speed)
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-[120%] overflow-hidden pointer-events-none -z-10">
      {/* Background Video with slow motion, loop, muted, and bottom fade mask */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-35"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 90%)',
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Radial and Linear Gradient Overlays to smoothly integrate into the dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080A0E]/60 to-[#080A0E]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080A0E]/40 to-[#080A0E]" />
    </div>
  );
}
