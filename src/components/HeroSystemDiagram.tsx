'use client';

import React, { useState } from 'react';
import { Layers, Cpu, ShieldCheck, Users, Database, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSystemDiagram() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: 0,
      number: '01',
      name: 'Base digital',
      tagline: 'Los cimientos',
      color: '#86BF58',
      bgGlow: 'rgba(134, 191, 88, 0.15)',
      borderColor: 'rgba(134, 191, 88, 0.4)',
      icon: Layers,
      description: 'Ordenamos marca, conocimiento, datos vivos y herramientas conectadas. El suelo estable sobre el que opera la tecnología.',
      features: ['Contexto estable de empresa', 'Base de datos viva aislada', 'Herramientas conectadas del equipo'],
      href: '/base-digital',
    },
    {
      id: 1,
      number: '02',
      name: 'IA aplicada',
      tagline: 'La inteligencia en acción',
      color: '#38A8E0',
      bgGlow: 'rgba(56, 168, 224, 0.15)',
      borderColor: 'rgba(56, 168, 224, 0.4)',
      icon: Cpu,
      description: 'Agentes, asistentes y automatizaciones que conocen tu negocio antes de actuar, clasificados según la Escala de Intervención.',
      features: ['Escala: Asiste, Automatiza, Actúa, Aprueba', 'Agentes con conocimiento real', 'Procesamiento de documentos y procesos'],
      href: '/ia-aplicada',
    },
    {
      id: 2,
      number: '03',
      name: 'Seguridad y control',
      tagline: 'Todo bajo control',
      color: '#7361A8',
      bgGlow: 'rgba(115, 97, 168, 0.15)',
      borderColor: 'rgba(115, 97, 168, 0.4)',
      icon: ShieldCheck,
      description: 'Garantía de portabilidad de datos, trazabilidad completa de cada acción y preparación para la normativa europea de IA (EU AI Act).',
      features: ['Datos estructurados y exportables', 'Trazabilidad y explicabilidad total', 'Reglamento Europeo IA Ready'],
      href: '/seguridad-control',
    },
    {
      id: 3,
      number: '04',
      name: 'Acompañamiento humano',
      tagline: 'Personas cerca',
      color: '#E15A9C',
      bgGlow: 'rgba(225, 90, 252, 0.15)',
      borderColor: 'rgba(225, 90, 156, 0.4)',
      icon: Users,
      description: 'Formación para el equipo, soporte directo con David y Gerard y evolución continua del sistema a medida que crece la empresa.',
      features: ['Sin sistemas de tickets anónimos', 'Formación de autonomía interna', 'Evolución continua del sistema'],
      href: '/acompanamiento',
    },
  ];

  const current = layers[activeLayer];
  const IconComponent = current.icon;

  return (
    <div className="w-full max-w-6xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-[#0F1420] border border-surface-border shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: current.bgGlow }}
      />

      <div className="relative z-10 space-y-8">
        {/* Header of Diagram */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border/60 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38A8E0] font-bold">
              Sistema Visual por Capas iARTESANA
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Explora cómo se conectan los 4 módulos
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Haz clic en cada capa:</span>
          </div>
        </div>

        {/* Layer Selector Grid (The 4 Modules Inspired by Logo) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((layer) => {
            const isSelected = activeLayer === layer.id;
            const LayerIcon = layer.icon;

            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative border flex flex-col justify-between gap-4 ${
                  isSelected
                    ? 'bg-surface-card shadow-xl scale-[1.02]'
                    : 'bg-surface-card/40 hover:bg-surface-card/70 opacity-80 hover:opacity-100'
                }`}
                style={{
                  borderColor: isSelected ? layer.color : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? `0 0 20px -5px ${layer.color}` : 'none',
                }}
              >
                {/* Logo-inspired square indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${layer.color}20` }}>
                    <LayerIcon className="w-4 h-4" style={{ color: layer.color }} />
                  </div>
                  <span className="text-xs font-mono font-bold" style={{ color: layer.color }}>
                    {layer.number}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{layer.name}</h4>
                  <span className="text-xs text-gray-400 block mt-0.5">{layer.tagline}</span>
                </div>

                {/* Active indicator bar */}
                <div 
                  className="h-1 rounded-full w-full transition-all"
                  style={{ backgroundColor: isSelected ? layer.color : 'transparent' }}
                />
              </button>
            );
          })}
        </div>

        {/* Detailed Layer Interactive Stage */}
        <div 
          className="p-6 sm:p-8 rounded-2xl bg-surface-card border transition-all duration-500 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ borderColor: current.borderColor }}
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold text-white" style={{ backgroundColor: current.color }}>
                BLOQUE {current.number}
              </span>
              <h4 className="text-2xl font-bold text-white">{current.name}</h4>
              <span className="text-xs italic text-gray-400">({current.tagline})</span>
            </div>

            <p className="text-base text-gray-200 leading-relaxed">
              {current.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-gray-300">
              {current.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: current.color }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <Link
              href={current.href}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: current.color }}
            >
              <span>Ver {current.name} en detalle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
