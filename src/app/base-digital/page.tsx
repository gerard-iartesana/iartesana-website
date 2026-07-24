import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, ArrowRight, RefreshCw } from 'lucide-react';
import StickyScrollVideoSection from '@/components/StickyScrollVideoSection';
import ScrollRevealChecklist from '@/components/ScrollRevealChecklist';
import HeroVideo from '@/components/HeroVideo';

export const metadata: Metadata = {
  title: 'Base Digital · Capa 01 | iARTESANA',
  description: 'Ordenamos el contexto estable, los datos vivos y las herramientas conectadas sobre los que operan las personas y la inteligencia artificial.',
};

const pieza01Items = [
  { title: 'Identidad verbal y visual:', description: 'cómo sois y cómo se os reconoce.' },
  { title: 'Tono y criterios de comunicación:', description: 'aplicables por personas y por IA.' },
  { title: 'Buenas prácticas y forma de trabajar:', description: 'redactadas y accesibles.' },
  { title: 'Protocolos de incidencias:', description: 'respuesta clara cuando algo falla sin depender de quién esté ese día.' },
  { title: 'Procesos documentados:', description: 'criterios claros de decisión operativa para toda la empresa.' },
];

const pieza02Items = [
  { title: 'Fuente única de verdad:', description: 'se acabaron las hojas de cálculo paralelas y los datos aislados.' },
  { title: 'Estructura escalable:', description: 'diseñada para crecer con el negocio, no un apaño temporal.' },
  { title: 'Histórico utilizable:', description: 'conocimiento valioso listo para consulta y análisis automático.' },
  { title: 'Sincronización en tiempo real:', description: 'lo que se modifica en un sitio se actualiza en todos.' },
  { title: 'Información 100% exportable y tuya:', description: 'datos documentados sin quedar atrapado en software propietario.' },
];

const pieza03Items = [
  { title: 'Web y captación conectadas:', description: 'cada nuevo contacto entra ya clasificado en la base de datos.' },
  { title: 'Panel de gestión unificado:', description: 'las métricas que importan en una sola pantalla clara.' },
  { title: 'Reservas y agenda sincronizadas:', description: 'gestión de reuniones y calendario automatizada.' },
  { title: 'Tienda y cobros:', description: 'integraciones de pago y catálogo cuando el modelo lo requiere.' },
  { title: 'Integración nativa:', description: 'conexión fluida con correo, CRM, ERP y formularios habituales.' },
];

export default function BaseDigitalPage() {
  return (
    <div className="text-[#E2E8F0] bg-[#080A0E]">
      {/* ── Hero con vídeo de fondo ── */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <HeroVideo src="/videos/video-base-digital-hero.mp4" opacity={0.45} blendMode="screen" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 flex flex-col justify-center items-center">
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-100 font-semibold block [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]">
            CAPA 01
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight [text-shadow:_0_4px_24px_rgba(0,0,0,0.98)]">
            Base digital
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium [text-shadow:_0_2px_16px_rgba(0,0,0,0.98)]">
            Marca, conocimiento, datos vivos y herramientas conectadas. La estructura digital estable sobre la que trabajan las personas y la inteligencia artificial sin generar caos.
          </p>

          <div className="space-y-4 pt-4 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight">
              Revisamos lo que ya te funciona, qué puede conectarse y qué necesita ordenarse.
            </p>
            <p className="text-base sm:text-lg text-[#86BF58] font-semibold">
              Cuando la Base Digital es sana se implanta la Inteligencia Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* ── Título de las 3 piezas ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 pt-12 pb-6">
        <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
          ESTRUCTURA MODULAR
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Las 3 piezas de los cimientos
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-normal">
          Todo lo que construimos se traduce en soluciones concretas para el negocio, nunca en tecnología abstracta.
        </p>
      </div>

      {/* ── PIEZA 01 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#86BF58] tracking-tight">
          Contexto estable
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal max-w-3xl">
          Quién sois, cómo habláis, cómo trabajáis y qué criterios seguís. Es la documentación estratégica que sirve como guía inmutable de referencia tanto para tu equipo como para los sistemas de Inteligencia Artificial.
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
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#86BF58] tracking-tight">
          Datos vivos
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal max-w-3xl">
          Lo que cambia cada día: clientes, operaciones, incidencias, disponibilidad e histórico. Una arquitectura de datos limpia, aislada y preparada para nutrir a la IA.
        </p>
      </div>

      <StickyScrollVideoSection src="/videos/video-bbdd.mp4">
        <h4 className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-bold mb-4">
          Lo que queda construido:
        </h4>
        <ScrollRevealChecklist items={pieza02Items} />
      </StickyScrollVideoSection>

      {/* ── PIEZA 03 ── */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 pb-4 pt-10 sm:pt-14 space-y-4">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#86BF58] tracking-tight">
          Herramientas conectadas
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed font-normal max-w-3xl">
          Las aplicaciones por las que tu equipo consulta, introduce y utiliza la información diaria sin duplicar tareas ni introducir datos a mano.
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
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block text-center">
            SERVICIOS INTEGRADORES
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diseño, marca y comunicación
          </h3>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal pt-1">
            En iARTESANA desarrollamos aplicaciones y soluciones tecnológicas que han evolucionado integrando de forma natural el diseño, la marca y la comunicación. Todos estos servicios se absorben dentro de la Base Digital, entendiendo la imagen y el mensaje como la primera capa imprescindible del contexto estable.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto pt-4">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Quieres construir la Base Digital de tu empresa?
          </h3>
          <p className="text-lg text-gray-200 font-normal max-w-xl mx-auto">
            Comenzamos con una conversación directa de 45 minutos para auditar tu punto de partida sin coste ni compromiso.
          </p>
          <div className="pt-2">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-lg sm:text-xl font-extrabold text-white bg-[#0A3D62] hover:bg-[#009DF8] hover:shadow-[0_0_35px_rgba(0,157,248,1)] hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)]"
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
