import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Users, GraduationCap, LifeBuoy, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Acompañamiento Humano · Personas Cerca | iARTESANA',
  description: 'Adopción real, formación para el equipo, soporte directo con David y Gerard y evolución continua del sistema.',
};

export default function AcompanamientoPage() {
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24 text-[#E2E8F0]">
      {/* Header Section */}
      <div className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E15A9C]/10 border border-[#E15A9C]/30 text-xs font-mono text-[#E15A9C] font-bold">
          <Users className="w-4 h-4" />
          <span>CAPA 04 · PERSONAS CERCA</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Acompañamiento humano
        </h1>

        <p className="text-xl sm:text-2xl text-[#E15A9C] font-semibold italic">
          "No vendemos software y nos vamos. Garantizamos que el sistema se use de verdad."
        </p>

        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Formación, soporte directo y evolución permanente. El valor real no está en la entrega de la herramienta, sino en su adopción por parte del equipo.
        </p>
      </div>

      {/* Frase Destacada de la Casa */}
      <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-surface-card via-[#1A1322] to-surface-card border-l-8 border-l-[#E15A9C] border border-[#E15A9C]/40 text-center space-y-4 shadow-xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#E15A9C] font-bold">Tesis de Marca</span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug max-w-4xl mx-auto">
          "Artesanía no significa hacerlo todo a mano. Significa saber qué cosas no se deben automatizar."
        </h2>
      </div>

      {/* Servicios de Acompañamiento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviciosAcompanamiento.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#E15A9C]/15 border border-[#E15A9C]/30 flex items-center justify-center text-[#E15A9C]">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.titulo}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{item.descripcion}</p>
            </div>
          );
        })}
      </div>

      {/* Equipo Directo: David & Gerard a Gran Escala */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Quienes están detrás</h2>
          <p className="text-base text-gray-300">Sin intermediarios ni agencias subcontratadas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* David */}
          <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-surface-border flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[#86BF58] shadow-2xl">
              <Image src="/team/david.jpg" alt="David" fill className="object-cover" />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">David</h3>
              <p className="text-xs font-mono text-[#86BF58] font-bold">Estrategia & Arquitectura de Conocimiento</p>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Especialista en estructuración de procesos, contexto de negocio e identidad. Garantiza que la IA refleje fielmente la cultura y los criterios reales de la empresa.
              </p>
            </div>
          </div>

          {/* Gerard */}
          <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-surface-border flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[#38A8E0] shadow-2xl">
              <Image src="/team/gerard.jpg" alt="Gerard" fill className="object-cover" />
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Gerard</h3>
              <p className="text-xs font-mono text-[#38A8E0] font-bold">Ingeniería de Sistemas & Datos</p>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Desarrollador de infraestructura, bases de datos y agentes autónomos. Garantiza el rendimiento técnico, la seguridad en la nube, la explicabilidad y la soberanía.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-[#E15A9C]/40 space-y-6 shadow-2xl">
        <h3 className="text-3xl font-extrabold text-white">¿Hablamos directamente?</h3>
        <p className="text-base text-gray-200 max-w-lg mx-auto">
          Reserva una primera conversación de 45 minutos con David y Gerard.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-[#E15A9C] hover:bg-[#E15A9C]/90 transition-all shadow-lg shadow-[#E15A9C]/20"
        >
          <span>Reservar primera sesión</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
