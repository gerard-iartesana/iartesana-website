import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, CheckCircle2, ArrowRight, Sparkles, AlertTriangle, ShieldCheck, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diagnóstico iARTESANA (350 €) | Producto de Entrada',
  description: 'Análisis exhaustivo de procesos, estado de datos, matriz de oportunidades y hoja de ruta para la implantación de IA en tu empresa.',
};

export default function DiagnosticoPage() {
  const entregables = [
    'Análisis detallado de procesos repetitivos y pérdidas de tiempo.',
    'Evaluación de la madurez de los datos y herramientas actuales.',
    'Matriz de oportunidades de automatización priorizadas por impacto.',
    'Mapa de riesgos operativos y de privacidad detectados.',
    'Primera propuesta técnica de arquitectura e implantación por capas.',
    'Hoja de ruta recomendada con orden de fases e inversión estimada.',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
      {/* Header */}
      <div className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white">
          <FileText className="w-3.5 h-3.5 text-[#38A8E0]" />
          <span>PRODUCTO DE ENTRADA</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Diagnóstico iARTESANA
        </h1>

        <p className="text-xl text-[#38A8E0] font-medium">
          Diagnóstico y hoja de ruta para implantar IA en tu negocio.
        </p>

        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          No vendemos conversaciones vagas. El Diagnóstico iARTESANA es un análisis riguroso de tu operativa que te entrega claridad absoluta sobre qué hacer, en qué orden y cuánto cuesta.
        </p>
      </div>

      {/* Pricing Box */}
      <div className="p-10 rounded-3xl glass-card border border-[#38A8E0]/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-l from-[#38A8E0] to-[#7361A8] text-white text-xs font-mono font-bold rounded-bl-2xl">
          PRECIO TRANSPARENTE
        </div>

        <div className="space-y-2">
          <span className="text-5xl sm:text-6xl font-black text-white">350 €</span>
          <span className="text-gray-400 text-xs block uppercase tracking-widest font-mono">IVA no incluido</span>
        </div>

        <p className="text-emerald-400 text-sm font-semibold max-w-md mx-auto">
          ✓ Garantía: Los 350 € se descuentan al 100% del importe total si avanzamos juntos en la implantación.
        </p>

        <div className="pt-4">
          <Link
            href="/agendar"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#38A8E0] to-[#E15A9C] shadow-xl hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reservar primera sesión</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-gray-500 font-mono">
          Empieza siempre reservando la conversación gratuita de 45 minutos.
        </p>
      </div>

      {/* Qué incluye el entregable */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">Qué recibe exactamente tu empresa:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entregables.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-surface-card border border-surface-border flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#38A8E0] shrink-0 mt-0.5" />
              <span className="text-sm text-gray-200 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* La diferencia entre la Primera Sesión y el Diagnóstico */}
      <div className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-6">
        <h3 className="text-xl font-bold text-white text-center">Dos pasos bien diferenciados</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-6 rounded-2xl bg-surface-hover/50 border border-surface-border space-y-2">
            <span className="text-xs font-mono text-[#38A8E0]">PASO 0 (GRATUITO)</span>
            <h4 className="font-bold text-white text-base">Primera sesión (45 min)</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Promete una conversación sin coste ni compromiso para conocernos, evaluar si existe encaje mutuo y escuchar tus miedos u objetivos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-hover/50 border border-[#38A8E0]/30 space-y-2">
            <span className="text-xs font-mono text-[#86BF58]">PASO 1 (350 €)</span>
            <h4 className="font-bold text-white text-base">Diagnóstico iARTESANA</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Promete un trabajo de auditoría técnica con informe formal entregado en PDF y sesión de presentación ejecutiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
