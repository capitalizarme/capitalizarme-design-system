/** @type {import('tailwindcss').Config} */
// Token binding matches DESIGN.md §13's canonical snippet — official §2.1 palette,
// Space Grotesk (structure) / Raleway (CTA only), pill radii. Same values as
// ui_kits/app-astro/tailwind.config.mjs, kept identical across both build-tooled kits.
export default {
  content: ['./index.html', './src/**/*.{svelte,js}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#25397F',
        'brand-blue': '#106CB5',
        'brand-gold': '#FBAF17',
        'brand-green': '#006939',
        'brand-red': '#ED1847',
        'brand-purple': '#8E27C6',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        cta: ['Raleway', 'sans-serif'],
      },
      borderRadius: { DEFAULT: '12px', full: '9999px' },
    },
  },
  plugins: [],
};
