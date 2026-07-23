import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Lock, Database, Search, FileCheck, ArrowRight, Sparkles, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seguridad y Control · Todo Bajo Control | iARTESANA',
  description: 'Control de accesos, portabilidad de datos, trazabilidad, explicabilidad y alineación con la normativa europea de IA.',
};

export default function SeguridadControlPage() {
  const pilares = [
    {
      icon: Key,
      titulo: '1. Protección y accesos',
      descripcion: 'Definición precisa de quién puede consultar o modificar información. Copias automáticas y protocolos claros si alguien deja la empresa.',
    },
    {
      icon: Database,
      titulo: '2. Control y portabilidad',
      descripcion: 'Datos estructurados, documentados y exportables, sin quedar encerrados en software cerrado. Construimos para que conserves el control absoluto.',
    },
    {
      icon: Search,
      titulo: '3. Trazabilidad y supervisión',
      descripcion: 'Registro forense de cada interacción: qué hizo la IA, en qué momento, qué datos utilizó y quién la autorizó.',
    },
    {
      icon: FileCheck,
      titulo: '4. Explicabilidad',
      descripcion: 'Una respuesta de IA sin fuente es una opinión; con fuente, es una herramienta de trabajo. Cada respuesta muestra su origen de información.',
    },
    {
      icon: ShieldCheck,
      titulo: '5. Preparación normativa',
      descripcion: 'Estructuración alineada con el Reglamento Europeo de IA (EU AI Act). Te dejamos preparado para cumplir las exigencias normativas.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-24 text-[#E2E8F0]">
      {/* Header Section */}
      <div className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7361A8]/10 border border-[#7361A8]/30 text-xs font-mono text-[#7361A8] font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>CAPA 03 · TODO BAJO CONTROL</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Seguridad y control
        </h1>

        <p className="text-xl sm:text-2xl text-[#7361A8] font-semibold italic">
          "Construimos para que la empresa conserve el control de lo suyo."
        </p>

        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Tu información no se queda atrapada en plataformas de alquiler. Portabilidad, gobernanza de datos y supervisión continua.
        </p>
      </div>

      {/* Manifest Block */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#7361A8]/15 via-surface-card to-surface-card border-l-8 border-l-[#7361A8] border border-surface-border space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Nuestra promesa sobre tus datos</h2>
        <blockquote className="text-gray-100 text-lg sm:text-xl italic leading-relaxed">
          "Datos estructurados, documentados y exportables, sin quedar encerrados en una herramienta cerrada. Construimos para que la empresa conserve el control y la capacidad de trasladar su información en cualquier momento."
        </blockquote>
      </div>

      {/* Grid de Pilares */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pilares.map((pilar, index) => {
          const Icon = pilar.icon;
          return (
            <div key={index} className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#7361A8]/15 border border-[#7361A8]/30 flex items-center justify-center text-[#7361A8]">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">{pilar.titulo}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{pilar.descripcion}</p>
            </div>
          );
        })}

        {/* 6th Card: Nota de Rigor Legal */}
        <div className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-3">
          <span className="text-xs font-mono text-[#7361A8] font-bold">Criterio Ético y Legal</span>
          <h3 className="text-xl font-bold text-white">Transparencia legal</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            iARTESANA no es una asesoría jurídica. La promesa exacta es <em className="text-white font-semibold">"te dejamos preparado para cumplir"</em> las exigencias del Reglamento Europeo de IA, sin promesas vacías ni letra pequeña.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-[#7361A8]/40 space-y-6 shadow-2xl">
        <h3 className="text-3xl font-extrabold text-white">¿Quieres asegurar el control de tus datos?</h3>
        <p className="text-base text-gray-200 max-w-lg mx-auto">
          Revisemos tus sistemas actuales en la primera sesión de 45 minutos.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-[#7361A8] hover:bg-[#7361A8]/90 transition-all shadow-lg shadow-[#7361A8]/20"
        >
          <span>Reservar primera sesión</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
