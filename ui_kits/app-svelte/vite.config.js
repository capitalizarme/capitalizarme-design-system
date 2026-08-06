import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Capitalizarme app-svelte kit — Svelte + Tailwind, per DESIGN.md §13.
export default defineConfig({
  plugins: [svelte()],
});
