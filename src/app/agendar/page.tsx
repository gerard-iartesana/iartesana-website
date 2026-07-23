'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { registrarLead } from '@/lib/supabase';

export default function AgendarPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    sector: '',
    mensaje: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    if (!formData.nombre || !formData.empresa || !formData.email) {
      setErrorMsg('Por favor rellena todos los campos obligatorios.');
      setLoading(false);
      return;
    }

    try {
      const res = await registrarLead({
        nombre: formData.nombre,
        empresa: formData.empresa,
        email: formData.email,
        telefono: formData.telefono,
        sector: formData.sector,
        mensaje: formData.mensaje,
      });

      if (res.ok) {
        router.push('/gracias');
      } else {
        setErrorMsg('No se pudo procesar la solicitud. Por favor inténtalo de nuevo.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38A8E0]/10 border border-[#38A8E0]/30 text-xs font-mono text-[#38A8E0]">
          <Calendar className="w-3.5 h-3.5" />
          <span>PRIMERA SESIÓN · 45 MINUTOS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Reservar primera sesión
        </h1>

        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Una conversación directa de 45 minutos con David y Gerard. Sin coste ni compromiso para analizar el punto de partida de tu empresa.
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl glass-card border border-surface-border shadow-2xl space-y-8">
        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                Tu nombre *
              </label>
              <input
                type="text"
                required
                placeholder="ej. Laura García"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-[#38A8E0] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                Empresa *
              </label>
              <input
                type="text"
                required
                placeholder="ej. Logística del Norte S.L."
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-[#38A8E0] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                Email profesional *
              </label>
              <input
                type="email"
                required
                placeholder="laura@empresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-[#38A8E0] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                placeholder="+34 600 00 00 00"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-[#38A8E0] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
              Sector de actividad
            </label>
            <input
              type="text"
              placeholder="ej. Industrial, Salud, Inmobiliario, Asesoria..."
              value={formData.sector}
              onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-[#38A8E0] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
              ¿Cuál es tu principal reto u objetivo hoy?
            </label>
            <textarea
              rows={4}
              placeholder="Cuéntanos brevemente qué tareas queréis agilizar o qué datos queréis ordenar..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white text-sm focus:outline-none focus:border-[#38A8E0] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-base font-bold text-white bg-[#1864A6] hover:bg-[#009DF8] hover:shadow-[0_0_30px_rgba(0,157,248,0.85)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-50"
          >
            {loading ? (
              <span>Procesando...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Reservar primera sesión</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#86BF58]" />
              Garantía de privacidad
            </span>
            <span>•</span>
            <span>Sin spam</span>
          </div>
        </form>
      </div>
    </div>
  );
}
