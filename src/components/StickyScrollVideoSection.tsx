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
  const contentRef = useRef<HTMLDivElement>(null);
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
      // progress goes 0→1 as the section scrolls through the viewport
      // 0 = section top hits viewport bottom, 1 = section bottom hits viewport top
      const scrollDistance = rect.height + wh;
      const scrolled = wh - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollDistance));
      targetTimeRef.current = progress * video.duration;
    };

    // Smooth interpolation loop for video scrubbing
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
    // Wrapper: breaks out of parent max-w container to be full viewport width.
    // Height is tall enough to give ample scroll distance for the video timeline.
    <section
      ref={wrapperRef}
      className="relative w-[100vw] -ml-[50vw] left-[50%]"
      style={{ minHeight: '300vh' }}
    >
      {/* STICKY layer: video + overlay + text all pinned together */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background video: full viewport, edge to edge */}
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

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-[#0B0E14]/55" />

        {/* Top and bottom gradient fades into dark background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #0B0E14 0%, transparent 18%, transparent 82%, #0B0E14 100%)',
          }}
        />

        {/* Text content: centered on the viewport, fully transparent background */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-8"
        >
          <div className="w-full max-w-4xl mx-auto text-white space-y-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
