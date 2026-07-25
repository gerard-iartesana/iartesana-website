'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealChecklistProps {
  items: { title: string; description: string }[];
  accentColor?: string;
}

export default function ScrollRevealChecklist({ items, accentColor = '#86BF58' }: ScrollRevealChecklistProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const onScroll = () => {
      const section = el.closest('[data-video-section]');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const wh = window.innerHeight;

      const totalScroll = rect.height - wh;
      if (totalScroll <= 0) return;
      const scrolled = -rect.top;
      const sectionProgress = Math.max(0, Math.min(1, scrolled / totalScroll));

      const startAt = 0.0;
      const endAt = 0.65;
      const itemProgress = Math.max(0, Math.min(1, (sectionProgress - startAt) / (endAt - startAt)));

      const count = Math.floor(itemProgress * (items.length + 0.8));
      setVisibleCount(Math.min(items.length, count));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [items.length]);

  const getPosition = (index: number, total: number) => {
    if (index === total - 1 && total % 2 === 1) return 'center';
    return index % 2 === 0 ? 'left' : 'right';
  };

  return (
    <div ref={listRef} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        {items.map((item, i) => {
          const position = getPosition(i, items.length);
          const isVisible = i < visibleCount;
          const isCenter = position === 'center';

          return (
            <div
              key={i}
              className={`
                flex items-start gap-4 transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${isCenter ? 'sm:col-span-2 sm:justify-center sm:max-w-xl sm:mx-auto' : ''}
              `}
            >
              {/* Square indicator dynamically styled with accentColor */}
              <div
                className="w-3.5 h-3.5 rounded-[2px] shrink-0 mt-2.5 transition-all duration-700"
                style={{
                  backgroundColor: isVisible ? accentColor : 'rgba(55, 65, 81, 0.5)',
                  boxShadow: isVisible ? `0 0 14px ${accentColor}b3` : 'none',
                }}
              />
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed">
                <strong className="text-white">{item.title}</strong> {item.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
