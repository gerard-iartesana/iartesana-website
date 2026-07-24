import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, GraduationCap, LifeBuoy, TrendingUp } from 'lucide-react';
import HeroVideo from '@/components/HeroVideo';
import StickyScrollVideoSection from '@/components/StickyScrollVideoSection';
import ScrollRevealChecklist from '@/components/ScrollRevealChecklist';

export const metadata: Metadata = {
  title: 'Acompañamiento Humano · Personas Cerca | iARTESANA',
  description: 'Adopción real, formación para el equipo, soporte directo con David y Gerard y evolución continua del sistema.',
};

const pieza01Items = [
  { title: 'Sesiones prácticas:', description: 'formación aplicada sobre casos de uso reales de vuestro día a día.' },
  { title: 'Guías de uso rápido:', description: 'manuales operativos sencillos para la consulta diaria de la plantilla.' },
  { title: 'Autonomía de equipo:', description: 'capacidad para operar y utilizar las herramientas con confianza total.' },
];

const pieza02Items = [
  { title: 'Atención personalizada:', description: 'trato humano directo por canales fluidos de comunicación.' },
  { title: 'Resolución ágil:', description: 'respuesta directa de los arquitectos del sistema sin intermediarios.' },
  { title: 'Supervisión compartida:', description: 'revisión conjunta de la evolución y uso real de las herramientas.' },
];

const pieza03Items = [
  { title: 'Ajuste de modelos:', description: 'refinamiento constante del contexto a medida que la empresa cambia.' },
  { title: 'Nuevas integraciones:', description: 'incorporación progresiva de nuevos módulos y herramientas.' },
  { title: 'Escalabilidad natural:', description: 'un sistema que crece al ritmo real de tu plantilla y operaciones.' },
];

const serviciosAcompanamiento = [
  {
    icon: GraduationCap,
    titulo: 'Formación de equipo',
    descripcion: 'Para que tu personal entienda las herramientas, sepa cuándo utilizarlas, conozca sus límites y no dependa de nosotros para cada acción.',
  },
  {
    icon: LifeBuoy,
    titulo: 'Soporte con nombre propio',
    descripcion: 'Hablas directamente con quien conoce tu implantación. Sin sistemas de tickets deshumanizados ni agentes automáticos de primera línea.',
  },
  {
    icon: TrendingUp,
    titulo: 'Evolución continua',
    descripcion: 'A medida que tu negocio crece o surgen nuevos retos operacionales, ajustamos los modelos y conectamos nuevos módulos.',
  },
];

export default function AcompanamientoPage() {
  return (
    <div className="text-[#E2E8F0] bg-[#080A0E]">
      {/* ── Hero con vídeo de fondo ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroVideo src="/videos/video-acompanamiento-hero.mp4" opacity={0.45} blendMode="screen" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 flex flex-col justify-center items-center">
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-100 font-semibold block [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]">
            CAPA 04
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight [text-shadow:_0_4px_24px_rgba(0,0,0,0.98)]">
            Acompañamiento humano
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal [text-shadow:_0_2px_16px_rgba(0,0,0,0.98)]">
            No vendemos software y nos vamos. Garantizamos que el sistema se use de verdad con formación práctica para tu equipo, soporte directo con David y Gerard y evolución continua del sistema.
          </p>

          <div className="space-y-4 pt-4 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight">
              Artesanía no significa hacerlo todo a mano. Significa saber qué cosas no se deben automatizar.
            </p>
            <p className="text-base sm:text-lg text-[#E15A9C] font-semibold">
              Garantizamos la adopción real y la autonomía de tu equipo desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* ── Título de las 3 piezas de acompañamiento ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-12 pb-6">
        <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
          ADOPCIÓN Y PERSONAS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Las 3 piezas del acompañamiento
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal">
          Formación continua, atención personal sin intermediarios y ajuste permanente al crecimiento del negocio.
        </p>
      </div>

      {/* ── PIEZA 01 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E15A9C] tracking-tight">
          Formación y autonomía
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Capacitamos a tu equipo para que entienda cómo interactuar con las herramientas de IA, cuándo utilizarlas y cuáles son sus límites, sin depender de externos.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-base.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza01Items} />
      </StickyScrollVideoSection>

      {/* ── PIEZA 02 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E15A9C] tracking-tight">
          Soporte con nombre propio
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          Contacto directo y constante con David y Gerard. Eliminamos las plataformas de tickets deshumanizadas para ofrecerte respuestas rápidas de quienes mejor conocen tu sistema.
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
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#E15A9C] tracking-tight">
          Evolución continua
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal max-w-3xl">
          A medida que tu negocio crece, aparecen nuevos productos o cambian tus procesos, ajustamos los modelos de IA y conectamos nuevas capacidades sin rehacer el sistema.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-bbdd.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza03Items} />
      </StickyScrollVideoSection>

      {/* ── Secciones finales ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pt-16 pb-24 text-center">
        {/* Equipo Directo: David & Gerard */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
            EQUIPO DIRECTO
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quienes están detrás del acompañamiento
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Sin intermediarios ni agencias subcontratadas. Trato directo con los fundadores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
            {/* David */}
            <div className="p-8 rounded-2xl bg-[#0C1017] border border-gray-800 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 border-2 border-[#86BF58] shadow-2xl">
                <Image src="/team/david.jpg" alt="David" fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-2xl font-bold text-white">David</h4>
                <p className="text-xs font-mono text-[#86BF58] font-semibold">Estrategia & Arquitectura de Conocimiento</p>
                <p className="text-sm text-gray-300 leading-relaxed font-normal pt-1">
                  Especialista en estructuración de procesos, contexto de negocio e identidad. Garantiza que la IA refleje fielmente la cultura y los criterios reales de la empresa.
                </p>
              </div>
            </div>

            {/* Gerard */}
            <div className="p-8 rounded-2xl bg-[#0C1017] border border-gray-800 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 border-2 border-[#38A8E0] shadow-2xl">
                <Image src="/team/gerard.jpg" alt="Gerard" fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="text-2xl font-bold text-white">Gerard</h4>
                <p className="text-xs font-mono text-[#38A8E0] font-semibold">Ingeniería de Sistemas & Datos</p>
                <p className="text-sm text-gray-300 leading-relaxed font-normal pt-1">
                  Desarrollador de infraestructura, bases de datos y agentes autónomos. Garantiza el rendimiento técnico, la seguridad en la nube, la explicabilidad y la soberanía.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="space-y-6 max-w-3xl mx-auto pt-4">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Hablamos directamente?
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-xl mx-auto leading-relaxed font-normal">
            Reserva una primera conversación de 45 minutos con David y Gerard para auditar tu punto de partida.
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
