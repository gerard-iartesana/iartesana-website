'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  text: string;
  image: string;
  delay?: number;
}

function TeamCard({ name, role, text, image, delay = 0 }: TeamMemberProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Efecto mecanografía al hacerse visible la tarjeta en pantalla
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setTypedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(interval);
        }
      }, 22);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isVisible, text, delay]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-surface-card border border-surface-border transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0 shadow-xl'
          : 'opacity-0 translate-y-10 shadow-none'
      }`}
    >
      <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="space-y-2 flex-1">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">{name}</h3>
        <p className="text-base text-gray-400 font-['Open_Sans',sans-serif] font-normal">
          {role}
        </p>
        <p className="text-base text-gray-200 leading-relaxed pt-1 font-normal min-h-[5rem]">
          {typedText}
          {!isTypingComplete && isVisible && (
            <span className="inline-block w-2 h-4 ml-1 bg-[#38A8E0] animate-pulse align-middle" />
          )}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="equipo" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-12 space-y-10 border-t border-white/15">
      <div className="text-center space-y-3">
        <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
          Acompañamiento humano
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Quiénes acompañan a tu empresa
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal">
          Trato humano directo con quien diseña e instala tu sistema. Sin intermediarios ni tickets de soporte anónimos.
        </p>
      </div>

      {/* Perfiles de equipo con animación al scroll y efecto mecanografía */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TeamCard
          name="Gerard"
          role="Ingeniería de Sistemas & Datos"
          text="Desarrolla la base de datos, la seguridad y los agentes autónomos. Garantiza el rendimiento técnico, la explicabilidad y la soberanía de los datos."
          image="/team/gerard.jpg"
          delay={100}
        />
        <TeamCard
          name="David"
          role="Estrategia y Contexto IA"
          text="Estructura los procesos, el conocimiento y el tono de marca. Garantiza que la IA refleje fielmente la cultura y criterios de tu empresa."
          image="/team/david.jpg"
          delay={400}
        />
      </div>
    </section>
  );
}
