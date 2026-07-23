import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Cpu, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, RotateCcw, FileText, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IA Aplicada · La Inteligencia en Acción | iARTESANA',
  description: 'Inteligencia artificial que conoce tu empresa antes de actuar. Escala de intervención transparente con supervisión humana.',
};

export default function IaAplicadaPage() {
  const escalaIntervencion = [
    {
      nivel: 'Asiste',
      queHace: 'Propone, resume o busca información operativa.',
      registro: 'Consulta registrada',
      reversible: 'No aplica (no modifica datos)',
      badgeColor: 'bg-[#38A8E0]/10 text-[#38A8E0] border-[#38A8E0]/30',
    },
    {
      nivel: 'Automatiza',
      queHace: 'Ejecuta procesos ya definidos y estandarizados.',
      registro: 'Log completo de cada ejecución',
      reversible: 'Sí (auditable)',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      nivel: 'Actúa',
      queHace: 'Usa herramientas dentro de límites establecidos.',
      registro: 'Registro de acción, motivo y contexto',
      reversible: 'Sí, con deshacer explícito',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
    {
      nivel: 'Pide aprobación',
      queHace: 'Se detiene cuando la decisión requiere criterio experto.',
      registro: 'Identificador de quién aprobó y qué',
      reversible: 'Garantizado (nada ocurre sin visto bueno)',
      badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
      {/* Header Section */}
      <div className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38A8E0]/10 border border-[#38A8E0]/30 text-xs font-mono text-[#38A8E0]">
          <Cpu className="w-3.5 h-3.5" />
          <span>BLOQUE 02 · LA INTELIGENCIA EN ACCIÓN</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          IA aplicada
        </h1>

        <p className="text-xl text-[#38A8E0] font-medium italic">
          "Inteligencia artificial que conoce tu empresa antes de actuar."
        </p>

        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Agentes, asistentes, buscadores internos y automatizaciones operativas construidos sobre tu propia Base Digital.
        </p>
      </div>

      {/* La Regla de Oro */}
      <div className="p-8 rounded-3xl bg-surface-card border border-[#38A8E0]/30 flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 rounded-2xl bg-[#38A8E0]/10 text-[#38A8E0] shrink-0">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold text-white">La regla no negociable:</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            No implantamos IA hasta que la Base Digital está sana. No vendemos chatbots flotantes sobre información desordenada. Cada agente opera únicamente sobre conocimiento verificado de tu negocio.
          </p>
        </div>
      </div>

      {/* Escala de Intervención */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Escala de intervención</h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            No todos los procesos necesitan la misma autonomía. Cada sistema se clasifica en uno de los 4 niveles con trazabilidad total y reversibilidad garantizada.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-surface-border text-xs font-mono text-gray-400 uppercase">
                <th className="py-4 px-4">Nivel</th>
                <th className="py-4 px-4">Qué hace</th>
                <th className="py-4 px-4">Qué registro deja</th>
                <th className="py-4 px-4">¿Reversible?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border text-sm">
              {escalaIntervencion.map((item, index) => (
                <tr key={index} className="hover:bg-surface-hover/50 transition-colors">
                  <td className="py-5 px-4 font-bold text-white">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono border ${item.badgeColor}`}>
                      {item.nivel}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-gray-200">{item.queHace}</td>
                  <td className="py-5 px-4 text-gray-300 font-mono text-xs">{item.registro}</td>
                  <td className="py-5 px-4 text-[#38A8E0] font-medium text-xs">{item.reversible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Los Límites los Pone el Cliente */}
      <div className="p-8 sm:p-12 rounded-3xl glass-card border border-surface-border space-y-6">
        <h2 className="text-2xl font-bold text-white">Los límites los pones tú</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          En cada proyecto realizamos una pregunta clave: <em className="text-white font-semibold">"¿Dónde no querríais nunca que hubiera IA en vuestro negocio?"</em>.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          Respetamos profundamente las zonas delicadas de trato humano, decisiones emocionales o validaciones críticas. La IA entra solo donde aporta claridad y ahorra tiempo sin arriesgar la calidad.
        </p>
      </div>

      {/* CTA Box */}
      <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-[#38A8E0]/40 space-y-6">
        <h3 className="text-2xl font-bold text-white">¿Quieres evaluar qué automatizar en tu empresa?</h3>
        <p className="text-sm text-gray-300 max-w-lg mx-auto">
          Agenda la primera sesión de 45 minutos para definir tus necesidades.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-all shadow-lg shadow-[#38A8E0]/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>Reservar primera sesión</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
