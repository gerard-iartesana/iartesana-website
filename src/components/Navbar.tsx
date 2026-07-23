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
    { name: 'Base digital', path: '/base-digital', color: '#86BF58', tag: '01' },
    { name: 'IA aplicada', path: '/ia-aplicada', color: '#38A8E0', tag: '02' },
    { name: 'Seguridad y control', path: '/seguridad-control', color: '#7361A8', tag: '03' },
    { name: 'Acompañamiento', path: '/acompanamiento', color: '#E15A9C', tag: '04' },
    { name: 'Diagnóstico', path: '/diagnostico', color: '#FFFFFF', tag: '350€' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0E14]/85 backdrop-blur-md border-b border-surface-border shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 h-9 transition-transform group-hover:scale-105">
              <Image
                src="/logo/Logo iARTESANA.svg"
                alt="iARTESANA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md p-1.5 rounded-full border border-surface-border">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-surface-hover text-white shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-surface-hover/50'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full transition-transform"
                    style={{ backgroundColor: link.color }}
                  />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Single Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/agendar"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#38A8E0] via-[#7361A8] to-[#E15A9C] p-[1px] group shadow-lg shadow-[#38A8E0]/10 hover:shadow-[#38A8E0]/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="w-full h-full bg-[#0B0E14] group-hover:bg-transparent rounded-full px-4 py-2 transition-colors duration-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#38A8E0] group-hover:text-white transition-colors" />
                <span>Reservar primera sesión</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-hover focus:outline-none"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0E14]/95 backdrop-blur-xl border-b border-surface-border px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-surface-card transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: link.color }} />
                <span>{link.name}</span>
              </div>
              <span className="text-xs text-gray-500 font-mono">{link.tag}</span>
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#38A8E0] to-[#E15A9C]"
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
