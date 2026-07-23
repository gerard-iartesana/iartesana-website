import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Compass, Database, Wrench, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, RefreshCw, Palette } from 'lucide-react';
import StickyScrollVideoSection from '@/components/StickyScrollVideoSection';

export const metadata: Metadata = {
  title: 'Base Digital · Capa 01 | iARTESANA',
  description: 'Ordenamos el contexto estable, los datos vivos y las herramientas conectadas sobre los que operan las personas y la inteligencia artificial.',
};

export default function BaseDigitalPage() {
  return (
    <div className="text-[#E2E8F0]">
      {/* ── Secciones con ancho limitado ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pt-28 sm:pt-36 pb-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
            CAPA 01 · LOS CIMIENTOS
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Base digital
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
            Marca, conocimiento, datos vivos y herramientas conectadas. La estructura digital estable sobre la que trabajan las personas y la inteligencia artificial sin generar caos.
          </p>
        </div>

        {/* Frase clave */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-[#86BF58]/30 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#86BF58]/5 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-[#86BF58] font-semibold block">
            Principio de implantación
          </span>
          <blockquote className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight">
            &ldquo;No sustituimos todo lo que ya tienes. Revisamos qué funciona, qué puede conectarse y qué necesita ordenarse.&rdquo;
          </blockquote>
          <div className="pt-2 border-t border-surface-border/60 flex items-center gap-3 text-base text-gray-300 font-normal">
            <ShieldCheck className="w-5 h-5 text-[#86BF58] shrink-0" />
            <span><strong className="text-white font-semibold">La regla iARTESANA:</strong> No se implanta Inteligencia Artificial hasta que la Base Digital está sana.</span>
          </div>
        </div>

        {/* Dos Certezas */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
              Garantías operativas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Dos certezas sobre la Base Digital</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-card border border-surface-border space-y-4 hover:border-[#86BF58]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#86BF58]/10 border border-[#86BF58]/30 flex items-center justify-center text-[#86BF58]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">1. Sirve al equipo humano desde el primer día</h3>
              <p className="text-base text-gray-300 leading-relaxed font-normal">
                Un manual de buenas prácticas, un inventario claro y un protocolo de incidencias son útiles hoy mismo para tus empleados, aunque nunca se implantase un agente de IA.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-card border border-surface-border space-y-4 hover:border-[#86BF58]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#86BF58]/10 border border-[#86BF58]/30 flex items-center justify-center text-[#86BF58]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">2. No hay que rehacer la empresa desde cero</h3>
              <p className="text-base text-gray-300 leading-relaxed font-normal">
                Aprovechamos las herramientas que tu plantilla ya domina y construimos las pasarelas de conexión necesarias en lugar de obligarte a cambiar de software.
              </p>
            </div>
          </div>
        </div>

        {/* Título de sección */}
        <div className="text-center space-y-3">
          <span className="text-xs sm:text-sm font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
            Estructura modular
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Las 3 piezas de los cimientos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-normal">
            Todo lo que construimos se traduce en soluciones concretas para el negocio, nunca en tecnología abstracta.
          </p>
        </div>

        {/* ── PIEZA 01: Cabecera + descripción (flujo normal) ── */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#86BF58]/20 border border-[#86BF58]/40 flex items-center justify-center text-[#86BF58] shrink-0">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#86BF58] uppercase tracking-wider">Pieza 01 · La diferencia iARTESANA</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Contexto estable</h3>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#86BF58]/20 text-[#86BF58] border border-[#86BF58]/30 self-start sm:self-auto">
              Prioridad estructural
            </span>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl">
            Quién sois, cómo habláis, cómo trabajáis y qué criterios seguís. Es la documentación estratégica que sirve como guía inmutable de referencia tanto para tu equipo como para los sistemas de Inteligencia Artificial.
          </p>
        </div>
      </div>

      {/* ── PIEZA 01: Vídeo a pantalla completa con checklist encima ── */}
      <StickyScrollVideoSection src="/videos/video-base.mp4">
        <h4 className="text-sm font-['Open_Sans',sans-serif] uppercase tracking-wider text-gray-300 font-semibold">Lo que queda construido:</h4>
        <ul className="grid grid-cols-1 gap-5 text-base sm:text-lg text-gray-100">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Identidad verbal y visual:</strong> cómo sois y cómo se os reconoce.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Tono y criterios de comunicación:</strong> aplicables por personas y por IA.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Buenas prácticas y forma de trabajar:</strong> redactadas y accesibles.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Protocolos de incidencias:</strong> respuesta clara cuando algo falla sin depender de quién esté ese día.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Procesos documentados:</strong> criterios claros de decisión operativa para toda la empresa.</span>
          </li>
        </ul>
      </StickyScrollVideoSection>

      {/* ── PIEZA 02: Cabecera + descripción ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#86BF58]/15 border border-[#86BF58]/30 flex items-center justify-center text-[#86BF58] shrink-0">
            <Database className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#86BF58] uppercase tracking-wider">Pieza 02</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Datos vivos</h3>
          </div>
        </div>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl">
          Lo que cambia cada día: clientes, operaciones, incidencias, disponibilidad e histórico. Una arquitectura de datos limpia, aislada y preparada para nutrir a la IA.
        </p>
      </div>

      {/* ── PIEZA 02: Vídeo ── */}
      <StickyScrollVideoSection src="/videos/video-bbdd.mp4">
        <h4 className="text-sm font-['Open_Sans',sans-serif] uppercase tracking-wider text-gray-300 font-semibold">Lo que queda construido:</h4>
        <ul className="grid grid-cols-1 gap-5 text-base sm:text-lg text-gray-100">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Fuente única de verdad:</strong> se acabaron las hojas de cálculo paralelas y los datos aislados.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Estructura escalable:</strong> diseñada para crecer con el negocio, no un apaño temporal.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Histórico utilizable:</strong> conocimiento valioso listo para consulta y análisis automático.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Sincronización en tiempo real:</strong> lo que se modifica en un sitio se actualiza en todos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Información 100% exportable y tuya:</strong> datos documentados sin quedar atrapado en software propietario.</span>
          </li>
        </ul>
      </StickyScrollVideoSection>

      {/* ── PIEZA 03: Cabecera + descripción ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#86BF58]/15 border border-[#86BF58]/30 flex items-center justify-center text-[#86BF58] shrink-0">
            <Wrench className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#86BF58] uppercase tracking-wider">Pieza 03</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Herramientas conectadas</h3>
          </div>
        </div>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl">
          Las aplicaciones por las que tu equipo consulta, introduce y utiliza la información diaria sin duplicar tareas ni introducir datos a mano.
        </p>
      </div>

      {/* ── PIEZA 03: Vídeo ── */}
      <StickyScrollVideoSection src="/videos/video-apps.mp4">
        <h4 className="text-sm font-['Open_Sans',sans-serif] uppercase tracking-wider text-gray-300 font-semibold">Lo que queda construido:</h4>
        <ul className="grid grid-cols-1 gap-5 text-base sm:text-lg text-gray-100">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Web y captación conectadas:</strong> cada nuevo contacto entra ya clasificado en la base de datos.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Panel de gestión unificado:</strong> las métricas que importan en una sola pantalla clara.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Reservas y agenda sincronizadas:</strong> gestión de reuniones y calendario automatizada.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Tienda y cobros:</strong> integraciones de pago y catálogo cuando el modelo lo requiere.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0 mt-1" />
            <span><strong className="text-white">Integración nativa:</strong> conexión fluida con correo, CRM, ERP y formularios habituales.</span>
          </li>
        </ul>
      </StickyScrollVideoSection>

      {/* ── Secciones finales ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pt-16 pb-24">
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-surface-border space-y-4">
          <div className="flex items-center gap-3 text-[#86BF58]">
            <Palette className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">Diseño, marca y comunicación dentro de la Base Digital</h3>
          </div>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            iARTESANA nació diseñando marcas e identidades visuales. Esos servicios no se han eliminado: se han absorbido de forma natural dentro de la Base Digital. Entendemos la comunicación y el diseño como la primera capa del contexto estable.
          </p>
        </div>

        <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-[#86BF58]/40 space-y-6 shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Quieres construir la Base Digital de tu empresa?
          </h3>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-normal">
            Comenzamos con una conversación directa de 45 minutos para auditar tu punto de partida sin coste ni compromiso.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-lg text-lg font-bold text-white bg-[#0A3D62] hover:bg-[#009DF8] hover:shadow-[0_0_35px_rgba(0,157,248,1)] hover:scale-[1.03] transition-all duration-300 shadow-xl"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>Reserva primera reunión</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
