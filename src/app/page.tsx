import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScrollTimeline from '@/components/ScrollTimeline';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24 text-[#E2E8F0] bg-[#080A0E]">
      {/* 1. HERO (LIMPIO Y CONTUNDENTE) */}
      <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        {/* Descriptor en Open Sans tipografía normal */}
        <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
          MÉTODO iARTESANA
        </span>

        {/* Gran titular con color SOLO en una frase clave */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
          Implantamos inteligencia artificial para que tu empresa{' '}
          <span className="text-[#38A8E0]">trabaje mejor.</span>
        </h1>

        {/* Explicación breve (máximo dos líneas) */}
        <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal">
          Menos tareas repetidas y mejores decisiones ordenando primero el conocimiento, los datos y los procesos de tu negocio.
        </p>

        {/* Único CTA principal con texto más grande y menor margen interior */}
        <div className="pt-4 flex items-center justify-center">
          <Link
            href="/agendar"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-lg text-base sm:text-lg font-bold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-colors shadow-none"
          >
            <span>Reserva primera reunión</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Frase discreta aclarando que la primera conversación es gratuita */}
        <p className="text-base text-gray-400 font-normal pt-2 font-['Open_Sans',sans-serif]">
          Una primera conversación de 45 minutos, sin coste ni compromiso.
        </p>
      </section>

      {/* 2. PRINCIPIO DE LA CASA (TRANSICIÓN CENTRADA SIN TARJETA) */}
      <section id="metodo" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6 py-12 border-t border-b border-surface-border/50">
        {/* Descriptor en Open Sans tipografía normal */}
        <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
          Principio fundamental
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-snug">
          "Primero ordenamos.{' '}
          <span className="text-[#38A8E0]">Después automatizamos."</span>
        </h2>

        <p className="text-lg sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-normal">
          Intentar automatizar sobre información desordenada solo genera errores a mayor velocidad. Construimos primero la base limpia sobre la que operan las personas y la inteligencia artificial.
        </p>
      </section>

      {/* 3. RECORRIDO DE LAS 4 CAPAS (SCROLL TIMELINE CONTINUO UNIFICADO) */}
      <ScrollTimeline />

      {/* 4. EQUIPO HUMANO (GERARD A LA IZQUIERDA, DAVID A LA DERECHA, SIN CONTORNOS) */}
      <section id="equipo" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 space-y-12 border-t border-surface-border/50">
        <div className="text-center space-y-3">
          {/* Descriptor en Open Sans tipografía normal */}
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
            Acompañamiento humano
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Quiénes acompañan a tu empresa
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal">
            Trato humano directo con quien diseña e instala tu sistema. Sin intermediarios ni tickets de soporte anónimos.
          </p>
        </div>

        {/* Gerard a la izquierda, David a la derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gerard (Izquierda) */}
          <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-surface-card border border-surface-border">
            <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
              <Image src="/team/gerard.jpg" alt="Gerard" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Gerard</h3>
              <p className="text-base text-gray-400 font-['Open_Sans',sans-serif] font-normal">
                Ingeniería de Sistemas & Datos
              </p>
              <p className="text-base text-gray-200 leading-relaxed pt-1 font-normal">
                Desarrolla la base de datos, la seguridad y los agentes autónomos. Garantiza el rendimiento técnico, la explicabilidad y la soberanía de los datos.
              </p>
            </div>
          </div>

          {/* David (Derecha) */}
          <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-surface-card border border-surface-border">
            <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
              <Image src="/team/david.jpg" alt="David" fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">David</h3>
              <p className="text-base text-gray-400 font-['Open_Sans',sans-serif] font-normal">
                Estrategia y Contexto IA
              </p>
              <p className="text-base text-gray-200 leading-relaxed pt-1 font-normal">
                Estructura los procesos, el conocimiento y el tono de marca. Garantiza que la IA refleje fielmente la cultura y criterios de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESO COMERCIAL (3 PASOS CLAROS CON UN SOLO CTA PRINCIPAL AL PIE) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 space-y-12 border-t border-surface-border/50">
        <div className="text-center space-y-3">
          {/* Descriptor en Open Sans tipografía normal */}
          <span className="text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-400 font-normal block">
            Paso a Paso
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cómo empezar a trabajar juntos
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal">
            Un recorrido transparente en 3 etapas sin sorpresas ni costes ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="space-y-3 p-6 rounded-2xl bg-surface-card border border-surface-border">
            <span className="text-3xl font-extrabold text-[#38A8E0] font-mono">01</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Primera conversación</h3>
            <p className="text-sm font-semibold text-[#38A8E0]">Gratuita · 45 minutos</p>
            <p className="text-base text-gray-200 leading-relaxed font-normal">
              Sesión sin coste para conocernos, escuchar tus necesidades y evaluar si existe encaje técnico.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 p-6 rounded-2xl bg-surface-card border-2 border-[#86BF58]">
            <span className="text-3xl font-extrabold text-[#86BF58] font-mono">02</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Diagnóstico iARTESANA</h3>
            <p className="text-sm font-semibold text-[#86BF58]">350 € (Descontables al 100%)</p>
            <p className="text-base text-gray-200 leading-relaxed font-normal">
              Análisis detallado de tu operativa, oportunidades de automatización y hoja de ruta con presupuesto cerrado.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 p-6 rounded-2xl bg-surface-card border border-surface-border">
            <span className="text-3xl font-extrabold text-[#E15A9C] font-mono">03</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Implantación por capas</h3>
            <p className="text-sm font-semibold text-gray-400">Presupuesto personalizado</p>
            <p className="text-base text-gray-200 leading-relaxed font-normal">
              Construcción progresiva de tu Base Digital, agentes de IA, seguridad y formación continua a tu equipo.
            </p>
          </div>
        </div>

        {/* Un solo CTA principal bajo la secuencia */}
        <div className="text-center pt-4">
          <Link
            href="/agendar"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg text-base sm:text-lg font-bold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-colors shadow-none"
          >
            <span>Reserva primera reunión</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
