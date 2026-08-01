import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IsometricBackground from '@/components/IsometricBackground';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://iartesana.com'),
  title: {
    default: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
    template: '%s | iARTESANA',
  },
  description:
    'Implantamos inteligencia artificial en tu empresa ordenando primero el conocimiento, los datos y los procesos. Soberanía de datos, explicabilidad y acompañamiento humano.',
  keywords: [
    'Inteligencia Artificial pymes',
    'Implantación IA por capas',
    'Base digital empresa',
    'Sistema Base iARTESANA',
    'Agentes IA explicables',
    'Seguridad y control de datos',
    'EU AI Act cumplimiento',
    'Consultoría IA España',
    'Automatización de procesos IA',
    'Gobernanza de datos IA',
  ],
  authors: [{ name: 'iARTESANA' }],
  creator: 'iARTESANA',
  publisher: 'iARTESANA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
    description:
      'Primero ordenamos. Después automatizamos. Descubre la implantación de IA por capas con soberanía y control sobre tus datos.',
    url: 'https://iartesana.com',
    siteName: 'iARTESANA',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://iartesana.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iARTESANA · Implantación de Inteligencia Artificial por Capas',
    description: 'Primero ordenamos. Después automatizamos. Soberanía y control sobre tus datos.',
    images: ['https://iartesana.com/og-image.png'],
    creator: '@iARTESANA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for SEO & LLM Knowledge Graph
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://iartesana.com/#organization',
      name: 'iARTESANA',
      url: 'https://iartesana.com',
      logo: 'https://iartesana.com/logo/Logo%20iARTESANA.svg',
      image: 'https://iartesana.com/og-image.png',
      description:
        'Consultoría e ingeniería especializada en la implantación de Inteligencia Artificial por capas para empresas y pymes.',
      slogan: 'Ordenamos. Automatizamos. Protegemos. Acompañamos.',
      founders: [
        { '@type': 'Person', name: 'David', jobTitle: 'Estrategia y Arquitectura de Conocimiento' },
        { '@type': 'Person', name: 'Gerard', jobTitle: 'Ingeniería de Sistemas y Datos' },
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'Data Sovereignty',
        'Process Automation',
        'EU AI Act Regulation',
        'Internal Knowledge Systems',
        'AI Agents',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Catálogo de Servicios de Implantación de IA',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Base Digital',
              description: 'Estructura digital estable: marca, conocimiento, datos vivos y herramientas conectadas.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IA Aplicada',
              description: 'Agentes y automatizaciones operativas con escala de intervención transparente.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Seguridad y Control',
              description: 'Gobernanza de accesos, explicabilidad, trazabilidad forense y arquitectura preparada para alinearse con el Reglamento Europeo de IA.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Acompañamiento Humano',
              description: 'Formación práctica, soporte directo con David y Gerard y evolución continua.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Diagnóstico iARTESANA',
              description: 'Auditoría integral de procesos, datos y herramientas con hoja de ruta personalizada.',
            },
            price: '360.00',
            priceCurrency: 'EUR',
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://iartesana.com/#website',
      url: 'https://iartesana.com',
      name: 'iARTESANA',
      description: 'Implantación de Inteligencia Artificial por Capas para Empresas',
      publisher: { '@id': 'https://iartesana.com/#organization' },
      inLanguage: 'es-ES',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cómo trabaja iARTESANA la implantación de IA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabajamos en 4 capas estructuradas: Base Digital (ordenamos datos y conocimiento), IA Aplicada (automatizamos con agentes verificados), Seguridad y Control (protegemos la soberanía de datos) y Acompañamiento Humano (formamos y damos soporte directo).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es la Base Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es la primera capa del sistema. Organiza el contexto de la empresa, los datos vivos y las herramientas operativas antes de desplegar cualquier agente de IA.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Conservo el control sobre los datos de mi empresa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, 100%. Toda la información es portable, estructurada y transparente. No atamos a los clientes a softwares cerrados y garantizamos explicabilidad e historial de cada acción de la IA.',
          },
        },
      ],
    },
  ];

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
        <link rel="help" href="/llms.txt" type="text/plain" title="LLM Knowledge File" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-[#38A8E0]/30 selection:text-white">
        <CustomCursor />
        <IsometricBackground />
        <Navbar />
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
