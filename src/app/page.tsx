import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Layers, 
  Cpu, 
  ChevronRight, 
  MessageSquare,
  FileSearch,
  Zap,
  Lock,
  Compass
} from 'lucide-react';
import HeroSystemDiagram from '@/components/HeroSystemDiagram';
import LayerSystemFlow from '@/components/LayerSystemFlow';

export default function HomePage() {
  return (
    <div className="space-y-28 pb-24 text-[#E2E8F0]">
      {/* 1. SIMPLIFIED HERO */}
      <section className="relative pt-8 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-surface-border text-xs text-[#38A8E0] font-mono tracking-wide">
          <Sparkles className="w-4 h-4 text-[#38A8E0]" />
          <span>Método iARTESANA · Implantación por Capas</span>
        </div>

        {/* Headline directo en blanco y una sola frase destacada en color */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]">
          Implantamos inteligencia artificial para que tu empresa{' '}
          <span className="bg-gradient-to-r from-[#86BF58] via-[#38A8E0] to-[#E15A9C] bg-clip-text text-transparent">
            trabaje mejor.
          </span>
        </h1>

        {/* Subtitular de apoyo claro y legible */}
        <p className="text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto font-normal leading-relaxed">
          Menos tareas repetidas y mejores decisiones ordenando primero el conocimiento, los datos y los procesos de tu negocio.
        </p>

        {/* Único CTA Principal */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/agendar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#38A8E0] via-[#7361A8] to-[#E15A9C] shadow-2xl shadow-[#38A8E0]/30 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            <span>Reservar primera sesión</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/diagnostico"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-gray-200 bg-surface-card hover:bg-surface-hover border border-surface-border transition-all"
          >
            <span>Ver Diagnóstico (350 €)</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        </div>

        <p className="text-sm text-gray-400 font-medium">
          ✓ Una primera conversación de 45 minutos, sin coste ni compromiso.
        </p>
      </section>

      {/* 2. ELEMENTO VISUAL PROTAGONISTA EN HERO (DIAGRAMA INTERACTIVO DE SISTEMA) */}
      <HeroSystemDiagram />

      {/* 3. EL PRINCIPIO (SECCIÓN ABIERTA SIN TARJETA REPETITIVA) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#86BF58] font-bold">
          El principio de la casa
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          "Primero ordenamos.{' '}
          <span className="text-[#38A8E0]">Después automatizamos."</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Intentar automatizar el caos solo genera caos a más velocidad. Creamos primero la base de datos viva y el contexto estable que la IA necesita para no inventar ni equivocarse.
        </p>
      </section>

      {/* 4. FLUSO VISUAL INTEGRADO DE LAS 4 CAPAS */}
      <LayerSystemFlow />

      {/* 5. QUÉ CONSTRUIMOS (SECCIÓN A ANCHO COMPLETO CON IDENTIDAD CROMÁTICA) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
            Lo que queda instalado en tu empresa
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Las 4 capas del producto
          </h2>
        </div>

        {/* Alternancia de bloques grandes con código cromático real */}
        <div className="space-y-8">
          {/* Layer 01: Base digital (Green) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#86BF58]/10 via-surface-card to-surface-card border-l-8 border-l-[#86BF58] border border-surface-border grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#86BF58] text-white text-xs font-mono font-bold">
                  CAPA 01
                </span>
                <h3 className="text-3xl font-bold text-white">Base digital</h3>
                <span className="text-sm italic text-[#86BF58] font-serif">"Los cimientos"</span>
              </div>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Marca, conocimiento, datos vivos y herramientas conectadas. Construimos la estructura digital sobre la que trabajan tanto tus empleados como los futuros agentes de inteligencia artificial.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0" />
                  <span>Contexto estable de marca y criterios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#86BF58] shrink-0" />
                  <span>Base de datos operativa aislada y exportable</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-end">
              <Link
                href="/base-digital"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#86BF58] hover:bg-[#86BF58]/90 transition-all shadow-lg shadow-[#86BF58]/20"
              >
                <span>Explorar Base Digital</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Layer 02: IA Aplicada (Blue) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#38A8E0]/10 via-surface-card to-surface-card border-l-8 border-l-[#38A8E0] border border-surface-border grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#38A8E0] text-white text-xs font-mono font-bold">
                  CAPA 02
                </span>
                <h3 className="text-3xl font-bold text-white">IA aplicada</h3>
                <span className="text-sm italic text-[#38A8E0] font-serif">"La inteligencia en acción"</span>
              </div>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Agentes y asistentes con la Escala de Intervención. Sistemas que asisten en respuestas, automatizan tareas repetitivas y se detienen cuando se requiere aprobación humana.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#38A8E0] shrink-0" />
                  <span>Escala: Asiste, Automatiza, Actúa, Aprueba</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#38A8E0] shrink-0" />
                  <span>Procesamiento documental e información interna</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-end">
              <Link
                href="/ia-aplicada"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-all shadow-lg shadow-[#38A8E0]/20"
              >
                <span>Explorar IA Aplicada</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Layer 03: Seguridad y Control (Violet) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#7361A8]/10 via-surface-card to-surface-card border-l-8 border-l-[#7361A8] border border-surface-border grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#7361A8] text-white text-xs font-mono font-bold">
                  CAPA 03
                </span>
                <h3 className="text-3xl font-bold text-white">Seguridad y control</h3>
                <span className="text-sm italic text-[#7361A8] font-serif">"Todo bajo control"</span>
              </div>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Portabilidad absoluta de la información, trazabilidad de cada acción ejecutada por la IA y alineación con la normativa europea de inteligencia artificial (EU AI Act).
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#7361A8] shrink-0" />
                  <span>Trazabilidad y explicabilidad en cada respuesta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#7361A8] shrink-0" />
                  <span>Preparados para cumplir exigencias normativas</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-end">
              <Link
                href="/seguridad-control"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#7361A8] hover:bg-[#7361A8]/90 transition-all shadow-lg shadow-[#7361A8]/20"
              >
                <span>Ver Seguridad y Control</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Layer 04: Acompañamiento Humano (Pink) */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#E15A9C]/10 via-surface-card to-surface-card border-l-8 border-l-[#E15A9C] border border-surface-border grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-[#E15A9C] text-white text-xs font-mono font-bold">
                  CAPA 04
                </span>
                <h3 className="text-3xl font-bold text-white">Acompañamiento humano</h3>
                <span className="text-sm italic text-[#E15A9C] font-serif">"Personas cerca"</span>
              </div>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Formación directa para tu plantilla, soporte sin tickets anónimos y evolución técnica contínua. Alguien con nombre propio que conoce tu proyecto.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E15A9C] shrink-0" />
                  <span>Trato humano directo con David y Gerard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#E15A9C] shrink-0" />
                  <span>Autonomía y formación continua del equipo</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start lg:items-end">
              <Link
                href="/acompanamiento"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#E15A9C] hover:bg-[#E15A9C]/90 transition-all shadow-lg shadow-[#E15A9C]/20"
              >
                <span>Conocer al Equipo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROTAGONISMO DEL COMPONENTE HUMANO (DAVID & GERARD AMPLIADO) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E15A9C] font-bold">
            El diferencial de iARTESANA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Quienes acompañan a tu empresa
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Sin intermediarios, comerciales agresivos ni sistemas de tickets automatizados.
          </p>
        </div>

        {/* Tarjeta de equipo a gran escala */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-card border border-surface-border grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-2xl">
          {/* David */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-surface-hover/40 border border-surface-border">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[#86BF58] shadow-xl">
              <Image src="/team/david.jpg" alt="David" fill className="object-cover" />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">David</h3>
              <p className="text-xs font-mono text-[#86BF58] font-bold">Estrategia & Contexto de Negocio</p>
              <p className="text-sm text-gray-200 leading-relaxed">
                Especialista en estructuración de procesos organizativos, tono de marca y contexto. Diseña los cimientos estratégicos para que la IA responda con el verdadero criterio de la empresa.
              </p>
            </div>
          </div>

          {/* Gerard */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-surface-hover/40 border border-surface-border">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[#38A8E0] shadow-xl">
              <Image src="/team/gerard.jpg" alt="Gerard" fill className="object-cover" />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">Gerard</h3>
              <p className="text-xs font-mono text-[#38A8E0] font-bold">Ingeniería de Sistemas & Datos</p>
              <p className="text-sm text-gray-200 leading-relaxed">
                Desarrollador de infraestructura, bases de datos y agentes. Garantiza el rendimiento técnico, la seguridad en la nube, la explicabilidad y la soberanía de los datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLARIFICACIÓN DE RECORRIDO Y CTAs (3 PASOS CLAROS) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38A8E0] font-bold">
            El Recorrido Comercial
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Cómo empezamos a trabajar juntos
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Tres pasos progresivos para devolver el orden y la tranquilidad a tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#38A8E0]/15 text-[#38A8E0] font-mono font-bold text-base flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Primera conversación</h3>
              <p className="text-xs text-[#38A8E0] font-semibold">Gratuita · 45 minutos</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Sesión sin coste ni compromiso para conocernos, escuchar tus miedos y evaluar si existe encaje para implantar IA en tu negocio.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/agendar"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-all"
              >
                <span>Reservar conversación</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-3xl bg-surface-card border-2 border-[#86BF58]/50 space-y-4 relative flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#86BF58]/20 text-[#86BF58] font-mono font-bold text-base flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Diagnóstico iARTESANA</h3>
              <p className="text-xs text-[#86BF58] font-semibold">350 € (Descontables al 100%)</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Análisis exhaustivo de tu operativa, inventario de datos, mapa de oportunidades y propuesta con presupuesto de implantación.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/diagnostico"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-[#86BF58] hover:bg-[#86BF58]/90 transition-all"
              >
                <span>Ver Diagnóstico 350€</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E15A9C]/15 text-[#E15A9C] font-mono font-bold text-base flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Implantación por capas</h3>
              <p className="text-xs text-[#E15A9C] font-semibold">Desarrollo a medida</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Construcción progresiva de tu Base Digital, agentes de IA, envolvente de seguridad y acompañamiento a tu equipo.
              </p>
            </div>
            <div className="pt-4">
              <span className="w-full inline-block text-center py-3 text-xs font-mono text-gray-400 bg-surface-hover rounded-full">
                Siguiente paso tras el Diagnóstico
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CIERRE & CTA FINAL */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-surface-border space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            ¿Listo para ordenar la información de tu empresa?
          </h2>
          <p className="text-base text-gray-200 max-w-xl mx-auto">
            Hablemos directamente durante 45 minutos para evaluar tus necesidades.
          </p>
          <div>
            <Link
              href="/agendar"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#38A8E0] via-[#7361A8] to-[#E15A9C] shadow-2xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Reservar primera sesión</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
