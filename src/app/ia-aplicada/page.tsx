import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import HeroVideo from '@/components/HeroVideo';
import StickyScrollVideoSection from '@/components/StickyScrollVideoSection';
import ScrollRevealChecklist from '@/components/ScrollRevealChecklist';

export const metadata: Metadata = {
  title: 'IA Aplicada · La Inteligencia en Acción | iARTESANA',
  description: 'Inteligencia artificial que conoce tu empresa antes de actuar. Escala de intervención transparente con supervisión humana.',
};

const pieza01Items = [
  { title: 'Asistente documental:', description: 'respuestas inmediatas basadas en tus manuales y protocolos.' },
  { title: 'Búsqueda semántica:', description: 'localiza información exacta entre miles de documentos en segundos.' },
  { title: 'Borradores inteligentes:', description: 'propuestas de respuestas a clientes o correos listas para revisar.' },
];

const pieza02Items = [
  { title: 'Procesamiento de documentos:', description: 'extracción automática de datos de facturas, albaranes y pedidos.' },
  { title: 'Trazabilidad total:', description: 'registro detallado de cada ejecución, motivo y datos procesados.' },
  { title: 'Acción reversible:', description: 'capacidad de deshacer o auditar cualquier paso automatizado.' },
];

const pieza03Items = [
  { title: 'Validación en un clic:', description: 'el agente presenta la propuesta y el humano aprueba o corrige.' },
  { title: 'Definición de límites:', description: 'zonas protegidas donde la IA nunca actúa de forma autónoma.' },
  { title: 'Identificador de autoría:', description: 'registro transparente de quién validó y autorizó cada acción.' },
];

const escalaIntervencion = [
  {
    nivel: 'Asiste',
    queHace: 'Propone, resume o busca información operativa.',
    registro: 'Consulta registrada',
    reversible: 'No aplica (no modifica datos)',
    badgeColor: 'bg-[#38A8E0]/20 text-[#38A8E0] border-[#38A8E0]/40',
  },
  {
    nivel: 'Automatiza',
    queHace: 'Ejecuta procesos ya definidos y estandarizados.',
    registro: 'Log completo de cada ejecución',
    reversible: 'Sí (auditable)',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  {
    nivel: 'Actúa',
    queHace: 'Usa herramientas dentro de límites establecidos.',
    registro: 'Registro de acción, motivo y contexto',
    reversible: 'Sí, con deshacer explícito',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  {
    nivel: 'Pide aprobación',
    queHace: 'Se detiene cuando la decisión requiere criterio experto.',
    registro: 'Identificador de quién aprobó y qué',
    reversible: 'Garantizado (nada ocurre sin visto bueno)',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  },
];

export default function IaAplicadaPage() {
  return (
    <div className="text-[#E2E8F0] bg-[#080A0E]">
      {/* ── Hero con vídeo de fondo extendido ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroVideo src="/videos/video-ia-aplicada-hero.mp4" opacity={0.45} blendMode="screen" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 flex flex-col justify-center items-center">
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-100 font-semibold block [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]">
            CAPA 02
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight [text-shadow:_0_4px_24px_rgba(0,0,0,0.98)]">
            IA aplicada
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal [text-shadow:_0_2px_16px_rgba(0,0,0,0.98)]">
            Inteligencia artificial que conoce tu empresa antes de actuar. Agentes, asistentes y automatizaciones operativas integradas sobre tu Base Digital con niveles transparentes de autonomía.
          </p>

          <div className="space-y-4 pt-4 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight">
              No implantamos IA sin una Base Digital sana. No vendemos chatbots flotantes sobre información desordenada.
            </p>
            <p className="text-base sm:text-lg text-[#38A8E0] font-semibold">
              Cada agente opera únicamente sobre conocimiento verificado de tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* ── Título de las 3 piezas / formas de interacción ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-12 pb-6">
        <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
          ESCALA Y AUTONOMÍA
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Las 3 formas de interacción con la IA
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal">
          Adaptamos el nivel de intervención a las necesidades reales y la sensibilidad de cada proceso de tu empresa.
        </p>
      </div>

      {/* ── PIEZA 01 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#38A8E0] tracking-tight">
          Asistencia y consulta
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Agentes que buscan, resumen y extraen información de tu Base Digital para responder preguntas de tu equipo en segundos, sin modificar datos ni ejecutar acciones por su cuenta.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-ia.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza01Items} />
      </StickyScrollVideoSection>

      {/* ── PIEZA 02 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#38A8E0] tracking-tight">
          Automatización de procesos
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Sistemas autónomos que ejecutan tareas estructuradas (clasificación de facturas, procesamiento de formularios, sincronización de registros) dejando un log completo e inalterable.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-apps.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza02Items} />
      </StickyScrollVideoSection>

      {/* ── PIEZA 03 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#38A8E0] tracking-tight">
          Supervisión y control humano
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Para las decisiones críticas o de alta sensibilidad, la IA prepara el trabajo completo pero se detiene para solicitar la aprobación explícita de un profesional de tu plantilla.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-base.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza03Items} />
      </StickyScrollVideoSection>

      {/* ── Secciones finales ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pt-16 pb-24 text-center">
        {/* Tabla Escala de Intervención */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
            NIVELES DE AUTONOMÍA
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escala de intervención transparente
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal">
            Cada proceso de tu empresa se clasifica explícitamente en uno de los 4 niveles de autonomía con trazabilidad total y reversibilidad garantizada.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-[#0C1017] shadow-xl text-left">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-800 text-xs font-mono text-gray-400 uppercase bg-gray-900/60">
                  <th className="py-4 px-6">Nivel</th>
                  <th className="py-4 px-6">Qué hace</th>
                  <th className="py-4 px-6">Qué registro deja</th>
                  <th className="py-4 px-6">¿Reversible?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 text-base">
                {escalaIntervencion.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-900/40 transition-colors">
                    <td className="py-5 px-6 font-bold text-white">
                      <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border ${item.badgeColor}`}>
                        {item.nivel}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-gray-200 font-normal">{item.queHace}</td>
                    <td className="py-5 px-6 text-gray-400 font-mono text-xs">{item.registro}</td>
                    <td className="py-5 px-6 text-[#38A8E0] font-semibold text-xs">{item.reversible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA final */}
        <div className="space-y-6 max-w-3xl mx-auto pt-4">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Quieres aplicar Inteligencia Artificial en tu empresa?
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-xl mx-auto leading-relaxed font-normal">
            Comenzamos con una conversación directa de 45 minutos para auditar tu punto de partida sin coste ni compromiso.
          </p>
          <div className="pt-2">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-lg sm:text-xl font-normal text-white bg-[#0A3D62] hover:bg-[#009DF8] hover:shadow-[0_0_35px_rgba(0,157,248,1)] hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)]"
            >
              <span>Reserva primera reunión</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
