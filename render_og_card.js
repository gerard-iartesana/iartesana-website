const fs = require('fs');
const path = require('path');

const svgLogoContent = fs.readFileSync(
  path.join(__dirname, 'public', 'logo', 'Logo iARTESANA.svg'),
  'utf8'
);

// Extract the inner SVG elements from Logo iARTESANA.svg
const innerSvg = svgLogoContent
  .replace(/<\?xml[\s\S]*?\?>/, '')
  .replace(/<svg[\s\S]*?>/, '')
  .replace(/<\/svg>/, '')
  .replace(/<defs>[\s\S]*?<\/defs>/, '');

const fullCardSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#080A0E"/>
  
  <defs>
    <style>
      .cls-1 { fill: #e15a9c; }
      .cls-2 { fill: #fff; }
      .cls-3 { fill: #3c3c3b; }
      .cls-4 { fill: #38a8e0; }
      .cls-5 { fill: #7361a8; }
      .cls-6 { fill: #86bf58; }
    </style>
    <radialGradient id="radial1" cx="50%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#38A8E0" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#080A0E" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="radial2" cx="80%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#86BF58" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#080A0E" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="topBorder" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#86BF58"/>
      <stop offset="33%" stop-color="#38A8E0"/>
      <stop offset="66%" stop-color="#7361A8"/>
      <stop offset="100%" stop-color="#E15A9C"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#radial1)"/>
  <rect width="1200" height="630" fill="url(#radial2)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#topBorder)"/>

  <!-- OFFICIAL LOGO EMBEDDED -->
  <g transform="translate(230, 125) scale(0.675)">
    ${innerSvg}
  </g>

  <!-- Tagline Text -->
  <text x="600" y="340" text-anchor="middle" fill="#F8FAFC" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800">
    Implantación de Inteligencia Artificial por Capas
  </text>

  <!-- Slogan Text -->
  <text x="600" y="390" text-anchor="middle" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400">
    Ordenamos. Automatizamos. Protegemos. Acompañamos.
  </text>

  <!-- Layer Pills -->
  <rect x="235" y="445" width="160" height="38" rx="19" fill="#86BF58" fill-opacity="0.15" stroke="#86BF58" stroke-opacity="0.4" stroke-width="1"/>
  <text x="315" y="470" text-anchor="middle" fill="#86BF58" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700">01 · Base Digital</text>

  <rect x="415" y="445" width="160" height="38" rx="19" fill="#38A8E0" fill-opacity="0.15" stroke="#38A8E0" stroke-opacity="0.4" stroke-width="1"/>
  <text x="495" y="470" text-anchor="middle" fill="#38A8E0" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700">02 · IA Aplicada</text>

  <rect x="595" y="445" width="160" height="38" rx="19" fill="#7361A8" fill-opacity="0.15" stroke="#7361A8" stroke-opacity="0.4" stroke-width="1"/>
  <text x="675" y="470" text-anchor="middle" fill="#7361A8" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700">03 · Seguridad</text>

  <rect x="775" y="445" width="190" height="38" rx="19" fill="#E15A9C" fill-opacity="0.15" stroke="#E15A9C" stroke-opacity="0.4" stroke-width="1"/>
  <text x="870" y="470" text-anchor="middle" fill="#E15A9C" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700">04 · Acompañamiento</text>

  <text x="600" y="565" text-anchor="middle" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" letter-spacing="0.05em">iartesana.com</text>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'public', 'og-card-logo.svg'), fullCardSvg);
console.log('Saved fullCardSvg to public/og-card-logo.svg');
