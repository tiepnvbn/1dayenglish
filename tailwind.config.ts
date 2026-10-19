import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-be-vietnam)', 'system-ui', 'sans-serif'] },
      colors: {
        navy: '#0F2A66', brand: '#2563EB', sky: '#EAF2FF',
        sun: '#FFC93C', cta: '#FF7A1A', ctaDark: '#E8600A',
      },
    },
  },
  plugins: [],
};
export default config;
