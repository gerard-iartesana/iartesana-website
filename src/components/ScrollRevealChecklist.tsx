'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealChecklistProps {
  items: { title: string; description: string }[];
}

export default function ScrollRevealChecklist({ items }: ScrollRevealChecklistProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;

      // Start revealing when the list enters the viewport
      const listTop = rect.top;
      const listHeight = rect.height;
      // How far into view the list is (0 = just entering, 1 = fully past)
      const progress = Math.max(0, Math.min(1, (wh - listTop) / (wh * 0.6 + listHeight * 0.5)));

      // Map progress to number of visible items
      const count = Math.floor(progress * (items.length + 0.5));
      setVisibleCount(Math.min(items.length, count));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [items.length]);

  // Layout order: left(0), right(1), left(2), right(3), center(4)
  const getPosition = (index: number, total: number) => {
    if (index === total - 1 && total % 2 === 1) return 'center';
    return index % 2 === 0 ? 'left' : 'right';
  };

  return (
    <div ref={listRef} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {items.map((item, i) => {
          const position = getPosition(i, items.length);
          const isVisible = i < visibleCount;
          const isCenter = position === 'center';

          return (
            <div
              key={i}
              className={`
                flex items-start gap-4 transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${isCenter ? 'sm:col-span-2 sm:justify-center sm:max-w-lg sm:mx-auto' : ''}
              `}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Green square indicator */}
              <div
                className={`
                  w-3 h-3 rounded-[2px] shrink-0 mt-2 transition-all duration-500
                  ${isVisible
                    ? 'bg-[#86BF58] shadow-[0_0_12px_rgba(134,191,88,0.6)]'
                    : 'bg-gray-700'
                  }
                `}
              />
              <span className="text-base sm:text-lg text-gray-100 leading-relaxed">
                <strong className="text-white">{item.title}</strong> {item.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
