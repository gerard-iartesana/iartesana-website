'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProcessStepsSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular el avance exacto del scroll a medida que la sección baja por la pantalla
      const start = windowHeight * 0.88;
      const end = windowHeight * 0.30;

      const current = rect.top;
      let p = (start - current) / (start - end);
      p = Math.max(0, Math.min(1, p));

      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Primera conversación',
      subtitle: 'Gratuita · 45 minutos',
      text: 'Sesión sin coste para conocernos, escuchar tus necesidades y evaluar si existe encaje técnico.',
      border: 'border-surface-border',
      triggerAt: 0.1,
    },
    {
      num: '02',
      title: 'Diagnóstico iARTESANA',
      subtitle: '350 € (Descontables al 100%)',
      text: 'Análisis detallado de tu operativa, oportunidades de automatización y hoja de ruta con presupuesto cerrado.',
      border: 'border-white/30',
      triggerAt: 0.4,
    },
    {
      num: '03',
      title: 'Implantación por capas',
      subtitle: 'Presupuesto personalizado',
      text: 'Construcción progresiva de tu Base Digital, agentes de IA, seguridad y formación continua a tu equipo.',
      border: 'border-surface-border',
      triggerAt: 0.7,
    },
  ];

  return (
    <section id="pasos" ref={sectionRef} className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-12 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
          Paso a Paso
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Cómo empezar a trabajar juntos
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal">
          Un recorrido transparente en 3 etapas sin sorpresas ni costes ocultos.
        </p>
      </div>

      {/* Tarjetas monocromas que van apareciendo progresivamente a medida que el usuario hace scroll hacia abajo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => {
          const isCardVisible = scrollProgress >= step.triggerAt;

          return (
            <div
              key={idx}
              className={`space-y-3 p-6 rounded-2xl bg-surface-card border ${step.border} transition-all duration-700 ease-out transform ${
                isCardVisible
                  ? 'opacity-100 translate-x-0 shadow-lg'
                  : 'opacity-0 -translate-x-16 shadow-none'
              }`}
            >
              <span className="text-4xl sm:text-5xl font-bold text-gray-400 font-['Open_Sans',sans-serif] block">{step.num}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
              <p className="text-sm font-normal text-gray-300 font-['Open_Sans',sans-serif]">{step.subtitle}</p>
              <p className="text-base text-gray-200 leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA principal con azul oscuro corporativo e iluminación 100% intensa al hover */}
      <div className="text-center pt-2">
        <Link
          href="/agendar"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-base sm:text-lg font-bold text-white bg-[#0A3D62] hover:bg-[#009DF8] hover:shadow-[0_0_35px_rgba(0,157,248,1)] hover:scale-[1.03] transition-all duration-300"
        >
          <span>Reserva primera reunión</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
