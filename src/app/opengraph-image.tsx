import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'iARTESANA · Implantación de Inteligencia Artificial por Capas';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080A0E',
          backgroundImage:
            'radial-gradient(circle at 50% 35%, rgba(56, 168, 224, 0.18), transparent 70%), radial-gradient(circle at 80% 80%, rgba(134, 191, 88, 0.12), transparent 50%)',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Subtle top accent border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #86BF58 0%, #38A8E0 33%, #7361A8 66%, #E15A9C 100%)',
          }}
        />

        {/* Brand Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <span style={{ color: '#ffffff' }}>i</span>
          <span style={{ color: '#86BF58' }}>ARTESANA</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#F8FAFC',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '920px',
            lineHeight: 1.25,
          }}
        >
          Implantación de Inteligencia Artificial por Capas
        </div>

        {/* Slogan */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 400,
            color: '#94A3B8',
            textAlign: 'center',
            marginBottom: '44px',
            maxWidth: '800px',
          }}
        >
          Ordenamos. Automatizamos. Protegemos. Acompañamos.
        </div>

        {/* 4 Layer Pills */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(134, 191, 88, 0.15)',
              border: '1px solid rgba(134, 191, 88, 0.4)',
              color: '#86BF58',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            01 · Base Digital
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 168, 224, 0.15)',
              border: '1px solid rgba(56, 168, 224, 0.4)',
              color: '#38A8E0',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            02 · IA Aplicada
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(115, 97, 168, 0.15)',
              border: '1px solid rgba(115, 97, 168, 0.4)',
              color: '#7361A8',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            03 · Seguridad
          </div>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(225, 90, 156, 0.15)',
              border: '1px solid rgba(225, 90, 156, 0.4)',
              color: '#E15A9C',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            04 · Acompañamiento
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            fontSize: '18px',
            color: '#64748B',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          iartesana.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
