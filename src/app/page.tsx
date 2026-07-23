import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScrollTimeline from '@/components/ScrollTimeline';
import HeroVideo from '@/components/HeroVideo';

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 text-[#E2E8F0] bg-[#080A0E] overflow-hidden">
      {/* 1. HERO (CON VÍDEO DE FONDO EN CÁMARA LENTA Y DEGRADADO INFERIOR) */}
      <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 min-h-[75vh] flex flex-col justify-center items-center">
        {/* Vídeo de fondo a cámara lenta y difuminado */}
        <HeroVideo />

        {/* Descriptor en Open Sans tipografía normal */}
        <span className="relative z-10 text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-300 font-normal block drop-shadow-md">
          MÉTODO iARTESANA
        </span>

        {/* Gran titular con color SOLO en una frase clave */}
        <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto drop-shadow-lg">
          Implantamos inteligencia artificial para que tu empresa{' '}
          <span className="text-[#38A8E0]">trabaje mejor.</span>
        </h1>

        {/* Explicación breve */}
        <p className="relative z-10 text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow">
          Menos tareas repetidas y mejores decisiones ordenando primero el conocimiento, los datos y los procesos de tu negocio.
        </p>

        {/* Único CTA principal */}
        <div className="relative z-10 pt-2 flex items-center justify-center">
          <Link
            href="/agendar"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-base sm:text-lg font-bold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-all shadow-xl hover:scale-[1.02]"
          >
            <span>Reserva primera reunión</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Frase discreta */}
        <p className="relative z-10 text-base text-gray-300 font-normal pt-1 font-['Open_Sans',sans-serif] drop-shadow-sm">
          Una primera conversación de 45 minutos, sin coste ni compromiso.
        </p>
      </section>

      {/* 2. PRINCIPIO DE LA CASA (DIVISOR ELEGANTE Y VISIBLE) */}
      <section id="metodo" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-5 py-8 sm:py-12 border-t border-white/15">
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

      {/* 3. RECORRIDO DE LAS 4 CAPAS */}
      <ScrollTimeline />

      {/* 4. EQUIPO HUMANO (DIVISOR ELEGANTE Y VISIBLE) */}
      <section id="equipo" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-12 space-y-10 border-t border-white/15">
        <div className="text-center space-y-3">
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

        {/* Perfiles de equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gerard */}
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

          {/* David */}
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

      {/* 5. PROCESO COMERCIAL (DIVISOR ELEGANTE Y VISIBLE) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 sm:py-12 space-y-10 border-t border-white/15">
        <div className="text-center space-y-3">
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

        {/* Tarjetas monocromas en blanco */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="space-y-3 p-6 rounded-2xl bg-surface-card border border-surface-border">
            <span className="text-3xl font-extrabold text-white font-mono">01</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Primera conversación</h3>
            <p className="text-sm font-normal text-gray-300 font-['Open_Sans',sans-serif]">Gratuita · 45 minutos</p>
            <p className="text-base text-gray-200 leading-relaxed font-normal">
              Sesión sin coste para conocernos, escuchar tus necesidades y evaluar si existe encaje técnico.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 p-6 rounded-2xl bg-surface-card border border-white/30">
            <span className="text-3xl font-extrabold text-white font-mono">02</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Diagnóstico iARTESANA</h3>
            <p className="text-sm font-normal text-gray-300 font-['Open_Sans',sans-serif]">350 € (Descontables al 100%)</p>
            <p className="text-base text-gray-200 leading-relaxed font-normal">
              Análisis detallado de tu operativa, oportunidades de automatización y hoja de ruta con presupuesto cerrado.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 p-6 rounded-2xl bg-surface-card border border-surface-border">
            <span className="text-3xl font-extrabold text-white font-mono">03</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Implantación por capas</h3>
            <p className="text-sm font-normal text-gray-300 font-['Open_Sans',sans-serif]">Presupuesto personalizado</p>
            <p className="text-base text-gray-200 leading-relaxed font-normal">
              Construcción progresiva de tu Base Digital, agentes de IA, seguridad y formación continua a tu equipo.
            </p>
          </div>
        </div>

        {/* CTA principal */}
        <div className="text-center pt-2">
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
