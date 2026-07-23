'use client';

import React from 'react';
import { Layers, Cpu, ShieldCheck, Users, ArrowDown, Check } from 'lucide-react';

export default function LayerSystemFlow() {
  return (
    <section className="w-full max-w-5xl mx-auto my-16 px-4">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-[#38A8E0] font-bold">
          Arquitectura Integrada
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Las 4 capas no son servicios aislados: forman un único sistema
        </h2>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Cada capa cumple una función vital de sostenibilidad, gobernanza y usabilidad para tu empresa.
        </p>
      </div>

      {/* Interconnected Flow Diagram */}
      <div className="relative space-y-6">
        {/* Layer 1: Base Digital */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border-l-8 border-l-[#86BF58] border border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#86BF58]/15 border border-[#86BF58]/40 flex items-center justify-center text-[#86BF58] shrink-0">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#86BF58] font-bold">01 · FUNDACIÓN</span>
              <h3 className="text-xl font-bold text-white">Base digital (Cimientos)</h3>
              <p className="text-sm text-gray-300 mt-1">Sostiene la información, el conocimiento y los datos vivos sobre los que trabajará la IA.</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#86BF58]/10 text-[#86BF58] text-xs font-mono font-bold shrink-0">
            Sostiene a la IA
          </div>
        </div>

        {/* Connecting Connector 1 */}
        <div className="flex justify-center -my-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#86BF58] to-[#38A8E0]" />
        </div>

        {/* Layer 2: IA Aplicada */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border-l-8 border-l-[#38A8E0] border border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#38A8E0]/15 border border-[#38A8E0]/40 flex items-center justify-center text-[#38A8E0] shrink-0">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#38A8E0] font-bold">02 · EJECUCIÓN</span>
              <h3 className="text-xl font-bold text-white">IA aplicada (Agentes & Automatización)</h3>
              <p className="text-sm text-gray-300 mt-1">Opera únicamente sobre la Base Digital con niveles claros de autonomía e intervención.</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#38A8E0]/10 text-[#38A8E0] text-xs font-mono font-bold shrink-0">
            Ejecuta procesos
          </div>
        </div>

        {/* Connecting Connector 2 */}
        <div className="flex justify-center -my-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#38A8E0] to-[#7361A8]" />
        </div>

        {/* Layer 3: Seguridad y Control */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border-l-8 border-l-[#7361A8] border border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#7361A8]/15 border border-[#7361A8]/40 flex items-center justify-center text-[#7361A8] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#7361A8] font-bold">03 · ENVOLVENTE DE CONTROL</span>
              <h3 className="text-xl font-bold text-white">Seguridad y control (Protección)</h3>
              <p className="text-sm text-gray-300 mt-1">Envuelve todo el sistema garantizando auditoría, explicabilidad y portabilidad de los datos.</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#7361A8]/10 text-[#7361A8] text-xs font-mono font-bold shrink-0">
            Envuelve y protege
          </div>
        </div>

        {/* Connecting Connector 3 */}
        <div className="flex justify-center -my-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#7361A8] to-[#E15A9C]" />
        </div>

        {/* Layer 4: Acompañamiento Humano */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-card border-l-8 border-l-[#E15A9C] border border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E15A9C]/15 border border-[#E15A9C]/40 flex items-center justify-center text-[#E15A9C] shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#E15A9C] font-bold">04 · ADOPCIÓN HUMANA</span>
              <h3 className="text-xl font-bold text-white">Acompañamiento humano (David & Gerard)</h3>
              <p className="text-sm text-gray-300 mt-1">Capacita al equipo y hace evolucionar todo el conjunto para asegurar su uso real.</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#E15A9C]/10 text-[#E15A9C] text-xs font-mono font-bold shrink-0">
            Acompaña todo el proceso
          </div>
        </div>
      </div>
    </section>
  );
}
