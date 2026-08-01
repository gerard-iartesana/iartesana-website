'use client';

import React, { useState } from 'react';
import { ShieldCheck, X, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

interface PreparationExplanationModalProps {
  buttonText?: string;
  variant?: 'button' | 'link' | 'pill';
}

export default function PreparationExplanationModal({
  buttonText = 'Qué significa esta preparación',
  variant = 'button',
}: PreparationExplanationModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {variant === 'button' && (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7361A8]/20 border border-[#7361A8]/50 text-[#B8A8DD] hover:text-white hover:bg-[#7361A8]/40 text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(115,97,168,0.2)]"
        >
          <HelpCircle className="w-4 h-4 text-[#7361A8]" />
          <span>{buttonText}</span>
        </button>
      )}

      {variant === 'link' && (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7361A8] hover:text-[#9B89C9] hover:underline transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
          <span>{buttonText}</span>
        </button>
      )}

      {variant === 'pill' && (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-[#7361A8] transition-all"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#7361A8]" />
          <span>{buttonText}</span>
        </button>
      )}

      {/* Modal / Dialog Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div
            className="relative w-full max-w-2xl bg-[#0D1117] border border-[#7361A8]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(115,97,168,0.3)] space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7361A8]/20 border border-[#7361A8]/40 text-xs font-mono text-[#B8A8DD]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7361A8]" />
                <span>MARCO NORMATIVO EUROPEO (EU AI ACT)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                ¿Qué significa «Arquitectura preparada para alinearse con el Reglamento Europeo de IA»?
              </h3>
            </div>

            {/* Modal Body Content */}
            <div className="space-y-5 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              <p>
                La aplicación del Reglamento Europeo de IA (<strong className="text-white">EU AI Act</strong>) no funciona como una «certificación de producto» estática o un sello automático, ya que la ley establece obligaciones escalonadas que dependen de:
              </p>

              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#7361A8] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">El papel de tu empresa:</strong> Si actúas como proveedor de la tecnología, desplegador (usuario profesional), distribuidor o importador.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#7361A8] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">La clasificación de riesgo del sistema:</strong> Desde sistemas prohibidos (riesgo inaceptable) o de alto riesgo (recursos humanos, infraestructuras, evaluación crediticia), hasta sistemas con deberes específicos de transparencia (chatbots, IA generativa) o de riesgo mínimo.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#7361A8] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Aplicación escalonada en el tiempo:</strong> Las exigencias y regímenes sancionadores entran en vigor progresivamente entre 2024 y 2027.
                  </span>
                </li>
              </ul>

              <div className="p-5 rounded-2xl bg-[#131924] border border-[#7361A8]/30 space-y-3">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7361A8]"></span>
                  Lo que construye iARTESANA en tu empresa:
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  En lugar de promesas vacías o sellos comerciales engañosos, estructuramos una <strong className="text-white">base técnica e infraestructura de gobernanza real</strong>:
                </p>
                <ul className="text-xs sm:text-sm space-y-1.5 text-gray-300 list-disc pl-5">
                  <li><strong>Inventario de sistemas:</strong> Registro claro de qué datos y modelos se utilizan.</li>
                  <li><strong>Trazabilidad y logs forenses:</strong> Historial inalterable de cada consulta y acción ejecutada.</li>
                  <li><strong>Explicabilidad documental:</strong> Cada respuesta cita su fuente oficial de referencia.</li>
                  <li><strong>Gobernanza de accesos:</strong> Datos aislados para evitar fugas o entrenamiento no autorizado.</li>
                  <li><strong>Soberanía y portabilidad:</strong> Formatos abiertos para adaptar tus obligaciones según evolucione tu negocio y la ley.</li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#7361A8] hover:bg-[#8572BC] text-white text-sm font-semibold transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
