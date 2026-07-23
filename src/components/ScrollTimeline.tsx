'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function ScrollTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openStep, setOpenStep] = useState<number | null>(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      title: 'Base digital',
      color: '#86BF58',
      darkColor: '#2A5222',
      hoverColor: '#86BF58',
      mainIdea: 'Ordenamos el conocimiento, los datos y las herramientas de la empresa.',
      description: 'Construimos el contexto estable y la base de datos viva sobre la que operan las personas y la inteligencia artificial sin generar caos.',
      exploreUrl: '/base-digital',
      results: [
        'Contexto estable e identidad codificada',
        'Base de datos viva estructurada y exportable',
        'Herramientas operativas conectadas para la plantilla',
      ],
    },
    {
      title: 'IA aplicada',
      color: '#38A8E0',
      darkColor: '#0A3D62',
      hoverColor: '#009DF8',
      mainIdea: 'Inteligencia artificial que conoce tu empresa antes de actuar.',
      description: 'Agentes, asistentes y automatizaciones operativas integradas sobre tu Base Digital con niveles transparentes de autonomía e intervención.',
      exploreUrl: '/ia-aplicada',
      results: [
        'Escala de intervención (Asiste, Automatiza, Actúa, Aprueba)',
        'Agentes verificados con tu conocimiento real',
        'Procesamiento automático de documentos e información',
      ],
    },
    {
      title: 'Seguridad y control',
      color: '#7361A8',
      darkColor: '#3A2D5C',
      hoverColor: '#8B76C6',
      mainIdea: 'Construimos para que la empresa conserve el control de lo suyo.',
      description: 'Garantía de portabilidad absoluta, trazabilidad forense de cada acción de IA y preparación estructural ante la normativa europea (EU AI Act).',
      exploreUrl: '/seguridad-control',
      results: [
        'Datos estructurados y portables',
        'Trazabilidad y explicabilidad en cada respuesta',
        'Alineación estructural con el Reglamento Europeo de IA',
      ],
    },
    {
      title: 'Acompañamiento humano',
      color: '#E15A9C',
      darkColor: '#6A1E43',
      hoverColor: '#F56FB2',
      mainIdea: 'No vendemos software y nos vamos. Garantizamos que el sistema se use de verdad.',
      description: 'Formación para el equipo, soporte directo con David y Gerard y evolución continua del sistema a medida que el negocio crece.',
      exploreUrl: '/acompanamiento',
      results: [
        'Trato humano directo sin sistemas de tickets anónimos',
        'Formación práctica para la autonomía de tu plantilla',
        'Evolución del sistema adaptada al crecimiento real',
      ],
    },
  ];

  const scrollToStep = (index: number) => {
    if (stepRefs.current[index]) {
      setTimeout(() => {
        stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  const toggleExpand = (index: number) => {
    setOpenStep((prev) => {
      const next = prev === index ? null : index;
      if (next !== null) {
        scrollToStep(next);
      }
      return next;
    });
  };

  useEffect(() => {
    let lastActive = -1;
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const elements = timelineRef.current.querySelectorAll('.timeline-step');
      
      let currentActive = 0;
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          currentActive = index;
        }
      });

      if (currentActive !== lastActive) {
        lastActive = currentActive;
        setActiveStep(currentActive);
        setOpenStep(currentActive);
        scrollToStep(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="capas" className="w-full max-w-5xl mx-auto pt-2 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8" ref={timelineRef}>
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
          Recorrido de Implantación
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Cómo se construye el sistema
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Una arquitectura en 4 capas para que la inteligencia artificial trabaje sobre bases sólidas, seguras y bajo el control de tu empresa.
        </p>
      </div>

      {/* List of Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isExpanded = openStep === index;

          return (
            <div
              key={index}
              ref={(el) => { stepRefs.current[index] = el; }}
              className={`timeline-step scroll-mt-24 sm:scroll-mt-28 flex gap-5 sm:gap-8 items-stretch transition-all duration-500 ${
                isActive || isExpanded ? 'opacity-100' : 'opacity-50 hover:opacity-80'
              }`}
            >
              {/* Barra lateral con indicador de color */}
              <div
                onClick={() => toggleExpand(index)}
                className="w-5 sm:w-7 shrink-0 rounded-sm cursor-pointer self-stretch transition-all duration-300"
                style={{
                  backgroundColor: step.color,
                  boxShadow: isExpanded ? `0 0 15px ${step.color}88` : 'none',
                }}
                title={step.title}
              />

              {/* Right Content Block for this step */}
              <div className="flex-1 space-y-3 pt-0.5">
                {/* Always Visible Header Block */}
                <div 
                  className="cursor-pointer space-y-2 group"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center justify-between">
                    {/* Título de la capa en BOLD */}
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-gray-200 transition-colors">
                      {step.title}
                    </h3>
                    
                    {/* Indicador minimalista sólo con flecha */}
                    <button
                      type="button"
                      className="p-2 text-gray-400 hover:text-white transition-colors shrink-0 focus:outline-none"
                      aria-label={isExpanded ? 'Plegar detalles' : 'Desplegar detalles'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-white transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-transform duration-300" />
                      )}
                    </button>
                  </div>

                  {/* Texto de debajo en REGULAR / NORMAL */}
                  <p className="text-xl sm:text-2xl font-normal text-gray-200 max-w-3xl leading-relaxed">
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
                  <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed border-t border-surface-border/40 pt-4 font-normal">
                    {step.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2.5">
                    <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] font-normal text-gray-400 uppercase tracking-wider block">Resultados concretos:</span>
                    <ul className="space-y-2.5 text-base sm:text-lg text-gray-200">
                      {step.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: step.color }} />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón de enlace Explorar */}
                  {step.exploreUrl && (
                    <div className="pt-2">
                      <Link
                        href={step.exploreUrl}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                        style={{
                          backgroundColor: step.darkColor,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = step.hoverColor;
                          e.currentTarget.style.boxShadow = `0 0 25px ${step.hoverColor}bb`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = step.darkColor;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <span>Explorar</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
