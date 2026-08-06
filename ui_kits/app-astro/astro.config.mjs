import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Capitalizarme app-astro kit — Astro + Tailwind, per DESIGN.md §13.
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
});
