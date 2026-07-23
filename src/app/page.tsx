import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollTimeline from '@/components/ScrollTimeline';
import HeroVideo from '@/components/HeroVideo';
import ConvergenceLines from '@/components/ConvergenceLines';
import TeamSection from '@/components/TeamSection';
import ProcessStepsSection from '@/components/ProcessStepsSection';

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 text-[#E2E8F0] bg-[#080A0E] overflow-hidden">
      {/* 1. HERO (VÍDEO A ANCHO COMPLETO DETRÁS DE LA BOTONERA TRANSPARENTE) */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 flex flex-col justify-center items-center">
        {/* Vídeo a pantalla completa (w-screen) detrás del navbar transparente */}
        <HeroVideo />

        {/* Descriptor en Open Sans con sombra para alto contraste */}
        <span className="relative z-10 text-sm sm:text-base font-['Open_Sans',sans-serif] uppercase tracking-widest text-gray-100 font-semibold block [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]">
          MÉTODO iARTESANA
        </span>

        {/* Gran titular con sombras potentes para lectura perfecta sobre el vídeo al 100% */}
        <h1 className="relative z-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto [text-shadow:_0_4px_24px_rgba(0,0,0,0.98)]">
          Implantamos inteligencia artificial para que tu empresa{' '}
          <span className="text-[#38A8E0] [text-shadow:_0_4px_24px_rgba(0,0,0,0.98)]">trabaje mejor.</span>
        </h1>

        {/* Explicación breve con alta legibilidad */}
        <p className="relative z-10 text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-medium [text-shadow:_0_2px_16px_rgba(0,0,0,0.98)]">
          Menos tareas repetidas y mejores decisiones ordenando primero el conocimiento, los datos y los procesos de tu negocio.
        </p>

        {/* Único CTA principal con azul corporativo oscuro e iluminación azul 100% intensa al hover */}
        <div className="relative z-10 pt-2 flex items-center justify-center">
          <Link
            href="/agendar"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-base sm:text-lg font-bold text-white bg-[#0A3D62] hover:bg-[#009DF8] hover:shadow-[0_0_35px_rgba(0,157,248,1)] hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.7)]"
          >
            <span>Reserva primera reunión</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Frase discreta */}
        <p className="relative z-10 text-base text-gray-200 font-normal pt-1 font-['Open_Sans',sans-serif] [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">
          Una primera conversación de 45 minutos, sin coste ni compromiso.
        </p>
      </section>

      {/* 2. PRINCIPIO DE LA CASA */}
      <section id="metodo" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-5 pt-8 sm:pt-12 pb-2 sm:pb-4">
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

        {/* Animación de líneas verticales que se comprimen con el scroll */}
        <ConvergenceLines />
      </section>

      {/* 3. RECORRIDO DE LAS 4 CAPAS */}
      <ScrollTimeline />

      {/* 4. EQUIPO HUMANO (CON ANIMACIÓN DE ENTRADA Y MECANOGRAFÍA) */}
      <TeamSection />

      {/* 5. PROCESO COMERCIAL (#pasos) CON ANIMACIÓN DE ENTRADA DE IZQUIERDA A DERECHA */}
      <ProcessStepsSection />
    </div>
  );
}
