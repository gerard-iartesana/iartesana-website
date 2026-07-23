import React from 'react';
import { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aviso Legal y Privacidad | iARTESANA',
  description: 'Términos de uso, política de privacidad y tratamiento de datos personales de iARTESANA.',
};

export default function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-12 text-gray-300">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white">
          <Shield className="w-3.5 h-3.5 text-[#38A8E0]" />
          <span>TRANSPARENCIA LEGAL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Aviso legal y privacidad
        </h1>
        <p className="text-xs text-gray-400 font-mono">Última actualización: Julio 2026</p>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl glass-card border border-surface-border space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">1. Datos Identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa que el sitio web <strong className="text-white">iARTESANA</strong> es operado por iARTESANA Inteligencia y Comunicación.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">2. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos, diseños de marcas, metodologías ("Implantación por Capas", "Base Digital", "Diagnóstico iARTESANA"), código fuente e ilustraciones de la capa isométrica son propiedad de iARTESANA o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">3. Protección de Datos y Privacidad</h2>
          <p>
            En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la LOPDGDD:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Finalidad del tratamiento:</strong> Atender las solicitudes de contacto y agendamiento de la primera sesión gratuita o Diagnóstico.</li>
            <li><strong>Legitimación:</strong> Consentimiento del interesado al enviar el formulario.</li>
            <li><strong>Destinatarios:</strong> Los datos no se cederán a terceros salvo obligación legal o proveedores de infraestructura propios protegidos (Supabase).</li>
            <li><strong>Derechos:</strong> Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad escribiendo a nuestro correo oficial.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Política de Cookies</h2>
          <p>
            Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el correcto funcionamiento de la navegación. No utilizamos cookies de rastreo publicitario ni perfilado conductual invasivo. Medimos el tráfico con sistemas respetuosos con la privacidad sin cookies de rastreo cruzado.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Alcance de los Servicios e Inteligencia Artificial</h2>
          <p>
            iARTESANA realiza servicios de consultoría, arquitectura de datos e ingeniería de sistemas de IA. Ninguna afirmación en este sitio web constituye asesoramiento jurídico formal. La preparación ante el Reglamento Europeo de IA (EU AI Act) se refiere al cumplimiento técnico y organizativo de los sistemas implantados.
          </p>
        </section>
      </div>
    </div>
  );
}
