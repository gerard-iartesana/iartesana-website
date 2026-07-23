import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solicitud Recibida | iARTESANA',
  description: 'Gracias por solicitar tu primera sesión en iARTESANA.',
};

export default function GraciasPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center space-y-8">
      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#38A8E0]">SOLICITUD CONFIRMADA</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          ¡Gracias por contactar!
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Hemos recibido los datos de tu empresa. En menos de 24 horas laborables, David o Gerard se pondrán en contacto contigo por correo electrónico para confirmar la fecha y hora exactas de la sesión de 45 minutos.
        </p>
      </div>

      <div className="p-8 rounded-3xl glass-card border border-surface-border text-left space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Próximos pasos</h3>
        <ul className="space-y-3 text-xs text-gray-300">
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#86BF58]/20 text-[#86BF58] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
            <span>Revisaremos los detalles preliminares de tu sector y empresa.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#38A8E0]/20 text-[#38A8E0] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
            <span>Te enviaremos la invitación de videoconferencia para los 45 minutos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#E15A9C]/20 text-[#E15A9C] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
            <span>Realizaremos la sesión en directo sin compromiso comercial.</span>
          </li>
        </ul>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-white bg-surface-card hover:bg-surface-hover border border-surface-border transition-all"
        >
          <span>Volver al inicio</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
