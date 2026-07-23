import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070A] border-t border-surface-border py-16 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-surface-border/60 pb-12">
          <div className="space-y-3">
            {/* Logo iARTESANA más grande, igual al de la barra superior */}
            <div className="relative w-64 sm:w-80 h-14 sm:h-16">
              <Image
                src="/logo/Logo iARTESANA.svg"
                alt="iARTESANA Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-base text-gray-200 font-medium">
              Ordenamos. Automatizamos. Protegemos. Acompañamos.
            </p>
          </div>

          <Link
            href="/agendar"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-base font-bold text-white bg-[#1864A6] hover:bg-[#009DF8] hover:shadow-[0_0_25px_rgba(0,157,248,0.75)] hover:scale-[1.03] transition-all duration-300 shrink-0"
          >
            <span>Reserva primera reunión</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Navigation & Legal Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="#metodo" className="text-gray-300 hover:text-white transition-colors">Método iARTESANA</Link></li>
              <li><Link href="#capas" className="text-gray-300 hover:text-white transition-colors">Las 4 capas</Link></li>
              <li><Link href="#equipo" className="text-gray-300 hover:text-white transition-colors">Equipo humano</Link></li>
              <li><Link href="/diagnostico" className="text-gray-300 hover:text-white transition-colors">Diagnóstico 350 €</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Transparencia & IA</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/llms.txt" target="_blank" className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>llms.txt (Directorio IA)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38A8E0]" />
                </Link>
              </li>
              <li><Link href="/legal" className="text-gray-300 hover:text-white transition-colors">Aviso legal y privacidad</Link></li>
              <li><Link href="/legal" className="text-gray-300 hover:text-white transition-colors">Política de cookies</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">Filosofía</h4>
            <p className="text-xs text-gray-400 leading-relaxed italic">
              "Artesanía no significa hacerlo todo a mano. Significa saber qué cosas no se deben automatizar."
            </p>
          </div>
        </div>

        {/* Copyright Footer Line */}
        <div className="pt-8 border-t border-surface-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} iARTESANA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Soberanía de Datos</span>
            <span>•</span>
            <span>Reglamento Europeo IA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
