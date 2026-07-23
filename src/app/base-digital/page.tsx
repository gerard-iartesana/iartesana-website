import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Layers, Database, Wrench, CheckCircle2, ArrowRight, Sparkles, Shield, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Base Digital · Los Cimientos | iARTESANA',
  description: 'Ordenamos la marca, el conocimiento, los datos vivos y las herramientas conectadas sobre los que operará la Inteligencia Artificial.',
};

export default function BaseDigitalPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
      {/* Header Section */}
      <div className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#86BF58]/10 border border-[#86BF58]/30 text-xs font-mono text-[#86BF58]">
          <Layers className="w-3.5 h-3.5" />
          <span>BLOQUE 01 · LOS CIMIENTOS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Base digital
        </h1>

        <p className="text-xl text-[#86BF58] font-medium italic">
          "Primero ordenamos. Después automatizamos."
        </p>

        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Marca, conocimiento, datos y herramientas conectadas. La base sobre la que trabajan las personas y la inteligencia artificial.
        </p>
      </div>

      {/* Tesis Central / Promesa */}
      <div className="p-8 sm:p-12 rounded-3xl glass-card border-l-4 border-l-[#86BF58] space-y-6">
        <h2 className="text-2xl font-bold text-white">Dos certezas fundamentales sobre la Base Digital:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="font-semibold text-[#86BF58] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              1. Sirve al equipo humano desde el día uno
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Un manual de buenas prácticas y un protocolo de incidencias son útiles hoy mismo para tus empleados, aunque nunca se implantase un agente. No preparas cosas para un futuro incierto: ganas orden de inmediato.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-[#86BF58] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              2. No hay que rehacer la empresa de cero
            </h3>
            <p className="text-gray-300 leading-relaxed">
              No sustituimos todo lo que ya tienes. Revisamos qué funciona, qué puede conectarse y qué necesita ordenarse. Aprovechamos tus herramientas actuales y creamos los puentes necesarios.
            </p>
          </div>
        </div>
      </div>

      {/* Las 3 Piezas de la Base Digital */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Las 3 piezas que componen la Base Digital</h2>
          <p className="text-sm text-gray-400">Cómo se estructuran los cimientos de tu empresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Piece 1 */}
          <div className="p-8 rounded-3xl glass-card border border-surface-border space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#86BF58]/10 flex items-center justify-center text-[#86BF58]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">1. Contexto estable</h3>
            <p className="text-xs text-[#86BF58] font-mono">Sistema Base & Identidad</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Quién sois, cómo habláis, cómo trabajáis y qué criterios seguís. Es la identidad codificada que sirve de referencia inmutable para humanos e IA.
            </p>
          </div>

          {/* Piece 2 */}
          <div className="p-8 rounded-3xl glass-card border border-surface-border space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#86BF58]/10 flex items-center justify-center text-[#86BF58]">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">2. Datos vivos</h3>
            <p className="text-xs text-[#86BF58] font-mono">Base de datos estructurada</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lo que cambia cada día: clientes, operaciones, incidencias, disponibilidad e histórico. Datos limpios, aislados y exportables.
            </p>
          </div>

          {/* Piece 3 */}
          <div className="p-8 rounded-3xl glass-card border border-surface-border space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#86BF58]/10 flex items-center justify-center text-[#86BF58]">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">3. Herramientas conectadas</h3>
            <p className="text-xs text-[#86BF58] font-mono">Aplicaciones & Integraciones</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Por donde el equipo consulta, introduce y utiliza la información diaria sin fricción ni datos duplicados.
            </p>
          </div>
        </div>
      </div>

      {/* Legado de comunicación */}
      <div className="p-8 rounded-3xl bg-surface-card border border-surface-border space-y-4">
        <h3 className="text-lg font-bold text-white">Sobre diseño, identidad de marca y comunicación</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          iARTESANA nació ofreciendo diseño, identidad visual y estrategia de comunicación. Esos servicios no han desaparecido: se han integrado dentro de la Base Digital. Entendemos la marca como la primera capa de un sistema mayor. Si necesitas renovar tu imagen, protocolo de diseño o presencia, queda integrado desde el primer paso.
        </p>
      </div>

      {/* CTA Box */}
      <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-[#86BF58]/40 space-y-6">
        <h3 className="text-2xl font-bold text-white">¿Quieres ordenar la base de tu negocio?</h3>
        <p className="text-sm text-gray-300 max-w-lg mx-auto">
          Comenzamos con una conversación de 45 minutos para entender tu punto de partida.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#86BF58] hover:bg-[#86BF58]/90 transition-all shadow-lg shadow-[#86BF58]/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>Reservar primera sesión</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
