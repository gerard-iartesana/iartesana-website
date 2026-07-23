'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function ScrollTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({});
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: 'Base digital',
      color: '#86BF58',
      mainIdea: 'Ordenamos el conocimiento, los datos y las herramientas de la empresa.',
      description: 'Construimos el contexto estable inmutable y la base de datos viva sobre la que operan las personas y la inteligencia artificial sin generar caos.',
      results: [
        'Contexto estable e identidad codificada',
        'Base de datos viva estructurada y exportable',
        'Herramientas operativas conectadas para la plantilla',
      ],
      linkText: 'Explorar Base digital',
      href: '/base-digital',
    },
    {
      title: 'IA aplicada',
      color: '#38A8E0',
      mainIdea: 'Inteligencia artificial que conoce tu empresa antes de actuar.',
      description: 'Agentes, asistentes y automatizaciones operativas integradas sobre tu Base Digital con niveles transparentes de autonomía e intervención.',
      results: [
        'Escala de intervención (Asiste, Automatiza, Actúa, Aprueba)',
        'Agentes conectados a conocimiento real sin alucinaciones',
        'Procesamiento automático de documentos e información',
      ],
      linkText: 'Explorar IA aplicada',
      href: '/ia-aplicada',
    },
    {
      title: 'Seguridad y control',
      color: '#7361A8',
      mainIdea: 'Construimos para que la empresa conserve el control de lo suyo.',
      description: 'Garantía de portabilidad absoluta, trazabilidad forense de cada acción de IA y preparación estructural ante la normativa europea (EU AI Act).',
      results: [
        'Datos estructurados y portables sin software cerrado',
        'Trazabilidad y explicabilidad en cada respuesta',
        'Alineación estructural con el Reglamento Europeo de IA',
      ],
      linkText: 'Ver Seguridad y control',
      href: '/seguridad-control',
    },
    {
      title: 'Acompañamiento humano',
      color: '#E15A9C',
      mainIdea: 'No vendemos software y nos vamos. Garantizamos que el sistema se use de verdad.',
      description: 'Formación para el equipo, soporte directo con David y Gerard y evolución continua del sistema a medida que el negocio crece.',
      results: [
        'Trato humano directo sin sistemas de tickets anónimos',
        'Formación práctica para la autonomía de tu plantilla',
        'Evolución del sistema adaptada al crecimiento real',
      ],
      linkText: 'Conocer al Equipo',
      href: '/acompanamiento',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const elements = timelineRef.current.querySelectorAll('.timeline-step');
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.6) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="capas" className="w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8" ref={timelineRef}>
      <div className="text-center space-y-4 mb-16">
        <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-gray-400 font-semibold block">
          Recorrido de Implantación
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Cómo se construye el sistema
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          Haz clic en cada capa para desplegar los detalles de implantación.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative pl-6 sm:pl-12 space-y-16">
        {/* Vertical line connecting nodes */}
        <div className="absolute left-2.5 sm:left-5 top-4 bottom-4 w-0.5 bg-surface-border">
          <div
            className="w-full transition-all duration-500 ease-out"
            style={{
              height: `${((activeStep + 1) / steps.length) * 100}%`,
              backgroundColor: steps[activeStep]?.color || '#38A8E0',
            }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const isActive = activeStep >= index;
          const isExpanded = !!expandedSteps[index];

          return (
            <div
              key={index}
              className={`timeline-step relative transition-opacity duration-500 ${
                isActive ? 'opacity-100' : 'opacity-60'
              }`}
            >
              {/* Step indicator node */}
              <div
                className="absolute -left-6 sm:-left-12 top-1.5 w-6 h-6 rounded-full border-2 bg-[#080A0E] flex items-center justify-center transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
                style={{
                  borderColor: isActive ? step.color : 'rgba(255, 255, 255, 0.2)',
                  boxShadow: isActive ? `0 0 12px ${step.color}60` : 'none',
                }}
              >
                <div
                  className="w-2 h-2 rounded-full transition-transform"
                  style={{ backgroundColor: isActive ? step.color : 'transparent' }}
                />
              </div>

              {/* Content block */}
              <div 
                className="pl-4 sm:pl-8 space-y-4 border-l-2 transition-all duration-300"
                style={{ borderColor: isActive ? `${step.color}40` : 'transparent' }}
              >
                {/* Always Visible Header Block */}
                <div 
                  className="cursor-pointer space-y-2.5 group"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl sm:text-5xl font-normal text-white tracking-tight group-hover:text-gray-200 transition-colors">
                      {step.title}
                    </h3>
                    {/* Texto limpio en gris sin pestaña ni borde */}
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-gray-400 group-hover:text-white transition-colors shrink-0"
                    >
                      <span>{isExpanded ? 'Menos detalles' : 'Saber más'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-white" /> : <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white" />}
                    </button>
                  </div>

                  <p className="text-xl sm:text-3xl font-extrabold text-white max-w-3xl leading-snug">
                    {step.mainIdea}
                  </p>
                </div>

                {/* Expandable Details Block con animación suave */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[600px] opacity-100 pt-3 space-y-5' : 'max-h-0 opacity-0 pt-0 space-y-0'
                  }`}
                >
                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-200 max-w-3xl leading-relaxed border-t border-surface-border/40 pt-4">
                    {step.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2.5">
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-wider block font-semibold">Resultados concretos:</span>
                    <ul className="space-y-2.5 text-base sm:text-lg text-gray-200">
                      {step.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: step.color }} />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link */}
                  <div className="pt-2">
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-2 text-base sm:text-lg font-bold transition-colors hover:underline"
                      style={{ color: step.color }}
                    >
                      <span>{step.linkText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
