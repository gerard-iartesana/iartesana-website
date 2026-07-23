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
  Lock, 
  FileText, 
  Clock, 
  ChevronRight 
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-surface-border text-xs text-[#38A8E0] font-mono tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Método iARTESANA · Implantación por Capas</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
          Implantamos inteligencia artificial para que tu empresa trabaje con{' '}
          <span className="bg-gradient-to-r from-[#86BF58] via-[#38A8E0] to-[#E15A9C] bg-clip-text text-transparent">
            menos tareas repetidas
          </span>{' '}
          y mejor información.
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Pero no empezamos instalando herramientas. Primero ordenamos el conocimiento, los datos y los procesos sobre los que deberá trabajar la IA.
        </p>

        {/* CTA Box */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/agendar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#38A8E0] via-[#7361A8] to-[#E15A9C] shadow-xl shadow-[#38A8E0]/20 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reservar primera sesión</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/diagnostico"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-gray-300 bg-surface-card hover:bg-surface-hover border border-surface-border transition-all"
          >
            <span>Ver Diagnóstico (350 €)</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </Link>
        </div>

        <p className="text-xs text-gray-500 font-mono">
          Una primera conversación de 45 minutos, sin coste ni compromiso.
        </p>
      </section>

      {/* 2. EL PRINCIPIO (COLUMNA VERTEBRAL) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-surface-card to-[#0F131D] border border-surface-border text-center space-y-6 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#86BF58]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#38A8E0]/10 rounded-full blur-3xl" />

          <p className="text-xs font-mono uppercase tracking-widest text-[#86BF58]">El principio de la casa</p>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            "Primero ordenamos.{' '}
            <span className="text-[#38A8E0]">Después automatizamos.</span>"
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Intentar automatizar el caos solo genera caos a más velocidad. Creamos primero la base de datos viva y el contexto estable que la IA necesita para no inventar ni equivocarse.
          </p>
        </div>
      </section>

      {/* 3. QUÉ CONSTRUIMOS (BASE DIGITAL + IA APLICADA) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400">Dimensión 1</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Qué construimos</h2>
          <p className="text-sm text-gray-400">Los activos tangibles que quedan instalados en tu empresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 01: Base digital */}
          <Link href="/base-digital" className="group">
            <div className="h-full p-8 rounded-3xl glass-card transition-all duration-300 group-hover:-translate-y-1 space-y-6 border-t-4 border-t-[#86BF58]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#86BF58]/10 text-[#86BF58]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#86BF58] font-bold">BLOQUE 01</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#86BF58] transition-colors">
                      Base digital
                    </h3>
                  </div>
                </div>
                <span className="text-xs italic text-gray-400 font-serif">"Los cimientos"</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Marca, conocimiento, datos y herramientas conectadas. La base sobre la que trabajan las personas y la inteligencia artificial.
              </p>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#86BF58] shrink-0" />
                  <span>Contexto estable: quién sois, cómo habláis y qué criterios seguís.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#86BF58] shrink-0" />
                  <span>Datos vivos: información operativa que cambia cada día.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#86BF58] shrink-0" />
                  <span>Herramientas conectadas para el equipo.</span>
                </li>
              </ul>

              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#86BF58]">
                <span>Explorar Base Digital</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 02: IA Aplicada */}
          <Link href="/ia-aplicada" className="group">
            <div className="h-full p-8 rounded-3xl glass-card transition-all duration-300 group-hover:-translate-y-1 space-y-6 border-t-4 border-t-[#38A8E0]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#38A8E0]/10 text-[#38A8E0]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#38A8E0] font-bold">BLOQUE 02</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#38A8E0] transition-colors">
                      IA aplicada
                    </h3>
                  </div>
                </div>
                <span className="text-xs italic text-gray-400 font-serif">"La inteligencia en acción"</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Inteligencia artificial que conoce tu empresa antes de actuar. Agentes, asistentes y automatizaciones operativas con límites claros.
              </p>

              <ul className="space-y-2.5 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38A8E0] shrink-0" />
                  <span>Escala de intervención (Asiste, Automatiza, Actúa, Pide Aprobación).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38A8E0] shrink-0" />
                  <span>Agentes conectados a conocimiento real del negocio.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38A8E0] shrink-0" />
                  <span>Procesamiento documental y respuesta asistida.</span>
                </li>
              </ul>

              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#38A8E0]">
                <span>Explorar IA Aplicada</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. CÓMO LO HACEMOS (SEGURIDAD Y CONTROL + ACOMPAÑAMIENTO) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400">Dimensión 2</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Cómo lo hacemos</h2>
          <p className="text-sm text-gray-400">Garantías permanentes que atraviesan todo el servicio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 03: Seguridad y Control */}
          <Link href="/seguridad-control" className="group">
            <div className="h-full p-8 rounded-3xl glass-card transition-all duration-300 group-hover:-translate-y-1 space-y-6 border-t-4 border-t-[#7361A8]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#7361A8]/10 text-[#7361A8]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#7361A8] font-bold">BLOQUE 03</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#7361A8] transition-colors">
                      Seguridad y control
                    </h3>
                  </div>
                </div>
                <span className="text-xs italic text-gray-400 font-serif">"Todo bajo control"</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Datos estructurados, documentados y exportables. Trazabilidad de cada acción, explicabilidad y alineación con la normativa europea de IA.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-gray-300 font-mono">
                <span className="p-2 rounded-lg bg-surface-card border border-surface-border">✓ Portabilidad</span>
                <span className="p-2 rounded-lg bg-surface-card border border-surface-border">✓ Explicabilidad</span>
                <span className="p-2 rounded-lg bg-surface-card border border-surface-border">✓ Logs de auditoría</span>
                <span className="p-2 rounded-lg bg-surface-card border border-surface-border">✓ EU AI Act Ready</span>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#7361A8]">
                <span>Ver Seguridad y Control</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 04: Acompañamiento Humano */}
          <Link href="/acompanamiento" className="group">
            <div className="h-full p-8 rounded-3xl glass-card transition-all duration-300 group-hover:-translate-y-1 space-y-6 border-t-4 border-t-[#E15A9C]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#E15A9C]/10 text-[#E15A9C]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#E15A9C] font-bold">BLOQUE 04</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#E15A9C] transition-colors">
                      Acompañamiento humano
                    </h3>
                  </div>
                </div>
                <span className="text-xs italic text-gray-400 font-serif">"Personas cerca"</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Formación para tu equipo, soporte continuo y evolución del sistema. Alguien que conoce tu empresa y responde sin sistemas de tickets anónimos.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden">
                  <Image src="/team/david.jpg" alt="David" width={36} height={36} className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0E14] object-cover" />
                  <Image src="/team/gerard.jpg" alt="Gerard" width={36} height={36} className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0E14] object-cover" />
                </div>
                <span className="text-xs text-gray-400">David & Gerard al frente</span>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#E15A9C]">
                <span>Conocer al Equipo y Acompañamiento</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. PRESENCIA HUMANA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-card border border-surface-border flex flex-col md:flex-row items-center gap-8">
          <div className="flex shrink-0 -space-x-4">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#86BF58] shadow-lg">
              <Image src="/team/david.jpg" alt="David" fill className="object-cover" />
            </div>
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#38A8E0] shadow-lg">
              <Image src="/team/gerard.jpg" alt="Gerard" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">David & Gerard · Socios Fundadores</h3>
            <p className="text-sm text-gray-300 leading-relaxed italic">
              "No vendemos software de alquiler ni plantillas genéricas. Acompañamos a cada cliente a ordenar su conocimiento y construir un sistema del que sea dueño absoluto."
            </p>
          </div>
        </div>
      </section>

      {/* 6. CÓMO SE EMPIEZA (PRODUCTO ENTRADA) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
        <div className="p-10 rounded-3xl glass-card border border-[#38A8E0]/30 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#38A8E0]/10 text-[#38A8E0] text-xs font-mono font-bold">
            PASO 1 · PRODUCTO DE ENTRADA
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">Diagnóstico iARTESANA</h2>

          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
            Diagnóstico de procesos y hoja de ruta para implantar IA. Análisis riguroso con oportunidades priorizadas y evaluación de datos.
          </p>

          <div className="inline-block px-6 py-3 rounded-2xl bg-surface-hover border border-surface-border text-center">
            <span className="text-3xl font-extrabold text-white">350 €</span>
            <span className="block text-xs text-gray-400 mt-0.5">Se descuentan 100% si avanzamos juntos en la implantación</span>
          </div>

          <div className="pt-4">
            <Link
              href="/agendar"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#38A8E0] via-[#7361A8] to-[#E15A9C] shadow-xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reservar primera sesión</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
