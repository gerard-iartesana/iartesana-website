import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IsometricBackground from '@/components/IsometricBackground';

export const metadata: Metadata = {
  title: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
  description:
    'Implantamos inteligencia artificial en tu empresa ordenando primero el conocimiento, los datos y los procesos. Soberanía de datos, explicabilidad y acompañamiento humano.',
  keywords: [
    'Inteligencia Artificial pymes',
    'Implantación IA por capas',
    'Base digital',
    'Sistema Base iARTESANA',
    'Agentes IA explicables',
    'Seguridad y control de datos',
    'EU AI Act cumplimiento',
    'Consultoría IA España',
  ],
  authors: [{ name: 'iARTESANA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
    description:
      'Primero ordenamos. Después automatizamos. Descubre el método iARTESANA para empresas.',
    url: 'https://iartesana.com',
    siteName: 'iARTESANA',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://iartesana.com/hero_dark_bg.png',
        width: 1200,
        height: 630,
        alt: 'iARTESANA Inteligencia y Comunicación',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
    description: 'Primero ordenamos. Después automatizamos.',
    images: ['https://iartesana.com/hero_dark_bg.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for SEO & GEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iARTESANA',
    url: 'https://iartesana.com',
    logo: 'https://iartesana.com/logo/Logo%20iARTESANA.svg',
    description:
      'Implantación de Inteligencia Artificial por capas para empresas y pymes.',
    slogan: 'Ordenamos. Automatizamos. Protegemos. Acompañamos.',
    founders: [
      { '@type': 'Person', name: 'David' },
      { '@type': 'Person', name: 'Gerard' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Data Sovereignty',
      'Automation',
      'EU AI Act Regulation',
      'Internal Management Systems',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Implantación de IA',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diagnóstico iARTESANA',
            description:
              'Análisis de procesos, estado de datos, oportunidades y hoja de ruta para implantar IA.',
          },
          price: '350.00',
          priceCurrency: 'EUR',
        },
      ],
    },
  };

  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-[#38A8E0]/30 selection:text-white">
        <IsometricBackground />
        <Navbar />
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
