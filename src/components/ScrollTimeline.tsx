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
    <section id="capas" className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.07]" ref={timelineRef}>
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        {/* Descriptor en Open Sans tipografía normal */}
        <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
          Recorrido de Implantación
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Cómo se construye el sistema
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto font-normal">
          Haz clic en cada capa para desplegar los detalles de implantación.
        </p>
      </div>

      {/* List of Steps with Perfectly Aligned Left Modular Blocks */}
      <div className="space-y-8">
        {steps.map((step, index) => {
          const isActive = activeStep >= index;
          const isCurrent = activeStep === index;
          const isExpanded = !!expandedSteps[index];

          return (
            <div
              key={index}
              className={`timeline-step flex gap-5 sm:gap-8 items-stretch transition-all duration-500 ${
                isActive ? 'opacity-100' : 'opacity-50'
              }`}
            >
              {/* Left Modular Block linked strictly to this step */}
              <div
                onClick={() => toggleExpand(index)}
                className={`w-5 sm:w-7 shrink-0 rounded-sm border transition-all duration-500 cursor-pointer relative overflow-hidden self-stretch ${
                  isActive ? 'shadow-lg' : 'opacity-30'
                }`}
                style={{
                  backgroundColor: isActive ? step.color : '#161B26',
                  borderColor: isActive ? step.color : 'rgba(255, 255, 255, 0.15)',
                  boxShadow: isCurrent ? `0 0 15px ${step.color}80` : 'none',
                }}
                title={step.title}
              >
                {isCurrent && (
                  <div className="absolute inset-0 bg-white/25 animate-pulse pointer-events-none" />
                )}
              </div>

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
                  <div className="pt-2 pb-2">
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
