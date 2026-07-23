import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0E14",
        foreground: "#F3F4F6",
        surface: {
          DEFAULT: "#121620",
          card: "#161B26",
          hover: "#1D2332",
          border: "rgba(255, 255, 255, 0.08)",
        },
        layer: {
          green: "#86BF58",   // 01 Base Digital
          blue: "#38A8E0",    // 02 IA Aplicada
          violet: "#7361A8",  // 03 Seguridad y Control
          pink: "#E15A9C",    // 04 Acompañamiento Humano
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(56, 168, 224, 0.15), rgba(11, 14, 20, 0))',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
