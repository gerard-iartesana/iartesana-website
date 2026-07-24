import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Key, Database, Search, FileCheck, ShieldCheck } from 'lucide-react';
import HeroVideo from '@/components/HeroVideo';
import StickyScrollVideoSection from '@/components/StickyScrollVideoSection';
import ScrollRevealChecklist from '@/components/ScrollRevealChecklist';

export const metadata: Metadata = {
  title: 'Seguridad y Control · Todo Bajo Control | iARTESANA',
  description: 'Control de accesos, portabilidad de datos, trazabilidad, explicabilidad y alineación con la normativa europea de IA.',
};

const pieza01Items = [
  { title: 'Gobernanza de permisos:', description: 'control granular sobre qué personas e inteligencias ven cada dato.' },
  { title: 'Resguardos automáticos:', description: 'copias de seguridad periódicas y aisladas del entorno de producción.' },
  { title: 'Protocolo de bajas:', description: 'revocación inmediata de accesos sin fugas de información ni pérdidas.' },
];

const pieza02Items = [
  { title: 'Origen de fuente explícito:', description: 'toda respuesta cita el documento y versión oficial de referencia.' },
  { title: 'Registro de auditoría:', description: 'log inalterable de cada consulta, acción ejecutada y autorización.' },
  { title: 'Explicabilidad técnica:', description: 'comprensión clara de cómo la IA llegó a cada conclusión o propuesta.' },
];

const pieza03Items = [
  { title: 'Portabilidad sin ataduras:', description: 'exportación completa de tu información sin dependencia de proveedor.' },
  { title: 'Alineación EU AI Act:', description: 'cumplimiento estructural de las exigencias europeas sobre Inteligencia Artificial.' },
  { title: 'Sostenibilidad a largo plazo:', description: 'sistemas construidos para perdurar ante cambios tecnológicos.' },
];

const pilares = [
  {
    icon: Key,
    titulo: '1. Protección y accesos',
    descripcion: 'Definición precisa de quién puede consultar o modificar información. Copias automáticas y protocolos claros si alguien deja la empresa.',
  },
  {
    icon: Database,
    titulo: '2. Control y portabilidad',
    descripcion: 'Datos estructurados, documentados y exportables, sin quedar encerrados en software cerrado. Construimos para que conserves el control absoluto.',
  },
  {
    icon: Search,
    titulo: '3. Trazabilidad y supervisión',
    descripcion: 'Registro forense de cada interacción: qué hizo la IA, en qué momento, qué datos utilizó y quién la autorizó.',
  },
  {
    icon: FileCheck,
    titulo: '4. Explicabilidad',
    descripcion: 'Una respuesta de IA sin fuente es una opinión; con fuente, es una herramienta de trabajo. Cada respuesta muestra su origen de información.',
  },
  {
    icon: ShieldCheck,
    titulo: '5. Preparación normativa',
    descripcion: 'Estructuración alineada con el Reglamento Europeo de IA (EU AI Act). Te dejamos preparado para cumplir las exigencias normativas.',
  },
];

export default function SeguridadControlPage() {
  return (
    <div className="text-[#E2E8F0] bg-[#080A0E]">
      {/* ── Hero con vídeo de fondo ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroVideo src="/videos/video-seguridad-hero.mp4" opacity={0.45} blendMode="screen" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 flex flex-col justify-center items-center">
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-100 font-semibold block [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]">
            CAPA 03
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight [text-shadow:_0_4px_24px_rgba(0,0,0,0.98)]">
            Seguridad y control
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal [text-shadow:_0_2px_16px_rgba(0,0,0,0.98)]">
            Construimos para que la empresa conserve el control de lo suyo. Tu información no se queda atrapada en plataformas de alquiler; garantizamos portabilidad, gobernanza y trazabilidad forense.
          </p>

          <div className="space-y-4 pt-4 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight">
              Datos estructurados, documentados y exportables desde el primer día.
            </p>
            <p className="text-base sm:text-lg text-[#7361A8] font-semibold">
              Garantizamos la soberanía digital de tu empresa sin permanencias ni ataduras.
            </p>
          </div>
        </div>
      </section>

      {/* ── Título de las 3 piezas de seguridad ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-12 pb-6">
        <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
          GOBERNANZA Y SOBERANÍA
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Las 3 piezas de la seguridad digital
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal">
          Protegemos tus datos y garantizamos el cumplimiento normativo con transparencia total.
        </p>
      </div>

      {/* ── PIEZA 01 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#7361A8] tracking-tight">
          Protección y accesos
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Definición precisa de permisos, roles y políticas de seguridad para que cada empleado y sistema de IA acceda únicamente a la información que le corresponde.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-bbdd.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza01Items} />
      </StickyScrollVideoSection>

      {/* ── PIEZA 02 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#7361A8] tracking-tight">
          Trazabilidad y explicabilidad
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Auditoría forense de cada respuesta y proceso ejecutado por la Inteligencia Artificial. Cada interacción indica su fuente exacta de información y el motivo de su resultado.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-base.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza02Items} />
      </StickyScrollVideoSection>

      {/* ── PIEZA 03 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#7361A8] tracking-tight">
          Portabilidad y normativa
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Tus datos se estructuran en formatos abiertos e independientes de cualquier software propietario, dejándote 100% preparado para la regulación europea (EU AI Act).
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-apps.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza03Items} />
      </StickyScrollVideoSection>

      {/* ── Secciones finales ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pt-16 pb-24 text-center">
        {/* Grid de Pilares */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
            PILARES DE SEGURIDAD
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestra promesa de gobernanza
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <div key={index} className="p-6 rounded-2xl bg-[#0C1017] border border-gray-800 space-y-3 shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-[#7361A8]/20 border border-[#7361A8]/30 flex items-center justify-center text-[#7361A8]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{pilar.titulo}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">{pilar.descripcion}</p>
                </div>
              );
            })}

            {/* 6th Card: Transparencia Legal */}
            <div className="p-6 rounded-2xl bg-[#0C1017] border border-gray-800 space-y-3 text-left">
              <span className="text-xs font-mono text-[#7361A8] font-bold block">Criterio Ético y Legal</span>
              <h4 className="text-lg font-bold text-white">Transparencia legal</h4>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                iARTESANA no es una asesoría jurídica. La promesa exacta es <em className="text-white font-semibold">"te dejamos preparado para cumplir"</em> las exigencias del Reglamento Europeo de IA, sin promesas vacías ni letra pequeña.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="space-y-6 max-w-3xl mx-auto pt-4">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Quieres asegurar el control de tus datos?
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
