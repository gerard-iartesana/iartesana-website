'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080A0E]/95 border-b border-surface-border py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo iARTESANA a la izquierda con mayor tamaño y legibilidad */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-48 sm:w-56 h-12">
              <Image
                src="/logo/Logo iARTESANA.svg"
                alt="iARTESANA Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navegación limpia a la derecha sin píldora encapsulada ni degradados */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#metodo" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Método
            </Link>
            <Link href="#capas" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Las 4 capas
            </Link>
            <Link href="#equipo" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Equipo
            </Link>
            <Link href="/diagnostico" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Diagnóstico
            </Link>
          </nav>

          {/* Un único botón principal sólido en azul/cian sin degradado */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#38A8E0] hover:bg-[#38A8E0]/90 transition-colors shadow-none"
            >
              <span>Reserva primera reunión</span>
            </Link>
          </div>

          {/* Menú móvil sencillo */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil desplegable sencillo */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080A0E] border-b border-surface-border px-6 pt-4 pb-6 space-y-4">
          <Link
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 py-2 border-b border-surface-border/50"
          >
            Método
          </Link>
          <Link
            href="#capas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 py-2 border-b border-surface-border/50"
          >
            Las 4 capas
          </Link>
          <Link
            href="#equipo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 py-2 border-b border-surface-border/50"
          >
            Equipo
          </Link>
          <Link
            href="/diagnostico"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 py-2 border-b border-surface-border/50"
          >
            Diagnóstico
          </Link>

          <div className="pt-2">
            <Link
              href="/agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-lg text-sm font-bold text-white bg-[#38A8E0]"
            >
              <span>Reserva primera reunión</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
