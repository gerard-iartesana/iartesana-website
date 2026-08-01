import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reserva tu Primera Sesión (45 min sin coste) | iARTESANA',
  description:
    'Conversación inicial de 45 minutos sin coste ni compromiso con David y Gerard para evaluar el punto de partida y la implantación de IA en tu empresa.',
  alternates: {
    canonical: '/agendar',
  },
  openGraph: {
    title: 'Reserva tu Primera Sesión Gratuita · iARTESANA',
    description:
      '45 minutos de evaluación inicial sin coste ni compromiso para analizar los datos y procesos de tu empresa.',
    url: 'https://iartesana.com/agendar',
    siteName: 'iARTESANA',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://iartesana.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reserva tu Primera Sesión Gratuita · iARTESANA',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reserva tu Primera Sesión Gratuita · iARTESANA',
    description:
      '45 minutos de evaluación inicial sin coste ni compromiso para analizar los datos y procesos de tu empresa.',
    images: ['https://iartesana.com/og-image.png'],
  },
};

export default function AgendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
