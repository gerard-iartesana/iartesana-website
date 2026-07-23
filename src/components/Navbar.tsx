'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Base digital', path: '/base-digital', color: '#86BF58' },
    { name: 'IA aplicada', path: '/ia-aplicada', color: '#38A8E0' },
    { name: 'Seguridad y control', path: '/seguridad-control', color: '#7361A8' },
    { name: 'Acompañamiento', path: '/acompanamiento', color: '#E15A9C' },
    { name: 'Diagnóstico 350€', path: '/diagnostico', color: '#FFFFFF' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0E14]/90 backdrop-blur-xl border-b border-surface-border py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo con presencia real (Aumentado bastante) */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-48 sm:w-56 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo/Logo iARTESANA.svg"
                alt="iARTESANA Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navegación abierta sin cápsula de comprimido */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors flex items-center gap-2 py-1 ${
                    isActive
                      ? 'text-white border-b-2 font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ borderColor: isActive ? link.color : 'transparent' }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-sm transition-transform group-hover:scale-125"
                    style={{ backgroundColor: link.color }}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Único CTA Destacado */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              href="/agendar"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#38A8E0] via-[#7361A8] to-[#E15A9C] shadow-lg shadow-[#38A8E0]/20 hover:shadow-[#38A8E0]/40 transition-all duration-300 hover:scale-[1.03]"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Reservar primera sesión</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white bg-surface-card border border-surface-border focus:outline-none"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0E14]/98 backdrop-blur-2xl border-b border-surface-border px-6 pt-4 pb-8 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 border-b border-surface-border/50 text-base font-medium text-gray-200 hover:text-white"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: link.color }} />
                <span>{link.name}</span>
              </div>
            </Link>
          ))}

          <div className="pt-4">
            <Link
              href="/agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#38A8E0] to-[#E15A9C]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reservar primera sesión</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
