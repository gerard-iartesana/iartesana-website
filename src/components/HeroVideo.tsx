'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play().catch((err) => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration && duration > 0) {
      const timeLeft = duration - currentTime;
      // Start smooth fade out 0.8s before video ends
      if (timeLeft <= 0.8 && !isFading) {
        setIsFading(true);
      } else if (currentTime < 0.5 && isFading) {
        // Reset fade in once loop restarts
        setIsFading(false);
      }
    }
  };

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[120%] min-h-[90vh] overflow-hidden pointer-events-none z-0">
      {/* Background Video full viewport width (w-screen), 100% intensity, with smooth loop fade crossfade */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
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
