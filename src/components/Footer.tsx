import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Cpu, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#080A0E] border-t border-surface-border pt-16 pb-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Manifest Bar */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-surface-card via-surface-hover to-surface-card border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-mono tracking-widest text-[#38A8E0] uppercase">Manifiesto iARTESANA</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ordenamos. Automatizamos. Protegemos. Acompañamos.
            </h3>
          </div>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-all shadow-lg shadow-[#38A8E0]/20 shrink-0"
          >
            <span>Reservar primera sesión</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Intro */}
          <div className="md:col-span-2 space-y-4">
            <div className="relative w-40 h-10">
              <Image
                src="/logo/Logo iARTESANA.svg"
                alt="iARTESANA Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Implantación de Inteligencia Artificial por capas para empresas que priorizan el orden, el control de datos y el criterio humano.
            </p>
            <p className="text-xs text-gray-500 italic">
              "Artesanía no significa hacerlo todo a mano. Significa saber qué cosas no se deben automatizar."
            </p>
          </div>

          {/* Col 2: Qué construimos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Qué construimos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/base-digital" className="text-gray-400 hover:text-[#86BF58] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86BF58]" />
                  Base digital
                </Link>
              </li>
              <li>
                <Link href="/ia-aplicada" className="text-gray-400 hover:text-[#38A8E0] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38A8E0]" />
                  IA aplicada
                </Link>
              </li>
              <li>
                <Link href="/diagnostico" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Diagnóstico 350 €
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Cómo lo hacemos */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Cómo lo hacemos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/seguridad-control" className="text-gray-400 hover:text-[#7361A8] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7361A8]" />
                  Seguridad y control
                </Link>
              </li>
              <li>
                <Link href="/acompanamiento" className="text-gray-400 hover:text-[#E15A9C] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E15A9C]" />
                  Acompañamiento
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38A8E0]" />
                  Primera sesión gratis
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Transparencia & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Transparencia</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/llms.txt" target="_blank" className="hover:text-gray-200 transition-colors flex items-center gap-1.5 text-xs font-mono">
                  <span>llms.txt (Directorio IA)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#38A8E0]" />
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gray-200 transition-colors text-xs">
                  Aviso Legal y Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-gray-200 transition-colors text-xs">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-surface-border/50 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} iARTESANA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Soberanía de Datos</span>
            <span>•</span>
            <span>Reglamento Europeo IA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
