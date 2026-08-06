# ui_kits/app-astro/ — Browse Properties (Astro + Tailwind variant)

The same **applied, invented** "browse properties / mensajes" product concept as
[`ui_kits/app-react/`](../app-react/README.md) and [`ui_kits/app-svelte/`](../app-svelte/README.md),
rebuilt as real `.astro` components instead of React or Svelte. This kit is **not extracted fact**
— no webapp source was ever linked to this project — it's a proposal built from this design
system's tokens, same as the other two kits. See `DESIGN.md` §9 for that caveat.

## Why a second (now third) kit

`ui_kits/app-react/` is deliberately React + Babel-standalone, so it runs directly in a browser with no
build step — the fastest way to preview the applied concept inside Open Design. This kit is the
opposite tradeoff: real `.astro` files matching the archived source's actual stack (Astro +
Tailwind — see `source-evidence/` and `DESIGN.md` §2.2, §13), meant to be **dropped into, or used
as a direct reference for, an actual Astro codebase** — most obviously the real
`capitalizarme-boilerplate-html` repo this design system was originally extracted from.
`ui_kits/app-svelte/` covers the same ground for teams standardizing on Svelte instead.

It cannot be opened directly as a static HTML file — Astro requires a Node build step
(`astro dev` / `astro build`) to render `.astro` files. If you just want to look at the applied
concept without setting up a project, use `ui_kits/app-react/index.html` instead.

## Structure

```
ui_kits/app-astro/
├── package.json           — astro + @astrojs/tailwind + tailwindcss
├── astro.config.mjs        — Tailwind integration
├── tailwind.config.mjs     — brand tokens bound into Tailwind's theme (DESIGN.md §13's snippet)
├── src/
│   ├── styles/global.css   — imports ../../../../colors_and_type.css, then @tailwind layers
│   ├── layouts/
│   │   └── AppLayout.astro — <html>/<head>/<body> shell, modeled on source-evidence's Layout.astro
│   ├── data/
│   │   ├── properties.ts   — the 3 listings (same content as ui_kits/app-react/'s PropertyGrid.jsx)
│   │   └── advisors.ts     — the 2 advisors + seed chat threads (same as AdvisorList.jsx)
│   ├── components/
│   │   ├── Header.astro        — sticky nav + CTA, modeled on source-evidence/.../Header.astro
│   │   ├── Sidebar.astro       — logged-in product nav + Capi mark
│   │   ├── SimulatorBanner.astro
│   │   ├── FilterBar.astro     — underline inputs + property-type pill toggle
│   │   ├── PropertyGrid.astro
│   │   ├── AdvisorList.astro   — the "Mensajes" rail
│   │   ├── ChatArea.astro      — composes MessageBubble + InputBar
│   │   ├── MessageBubble.astro
│   │   ├── InputBar.astro      — the chat composer
│   │   └── Footer.astro        — includes the §8 compliance disclaimer
│   └── pages/
│       └── index.astro     — composes every component + the client <script>
```

## How the interactivity works

Astro components render **server-side by default** and hold no client state — there's no React
here, so view-switching, the filter-type toggle, and chat send/scroll are handled by one plain
`<script>` block at the bottom of `src/pages/index.astro`. It's progressive enhancement over
`data-*` attributes (`data-nav-item`, `data-type-filter`, `data-advisor`, `data-chat-panel`,
`data-chat-messages`) rather than a framework island — deliberately, to match this system's
evidenced static-output posture (`DESIGN.md` §2.2, §5) instead of quietly reintroducing a JS
framework dependency into an Astro-shaped deliverable.

## Using this in a real project

1. Copy `src/` (and `astro.config.mjs`, `tailwind.config.mjs`, `package.json`) into your Astro
   project, or use them as a direct reference if you're hand-porting into
   `capitalizarme-boilerplate-html`.
2. Copy this design system's `assets/`, `fonts/`, and `colors_and_type.css` into the target
   project (e.g. `assets/` and `fonts/` under `public/`, so `/assets/...` paths in the components
   resolve; `colors_and_type.css` alongside `src/styles/global.css`, adjusting the `@import` path).
3. `npm install && npm run dev`.

## Design notes

- Every component cites the real `source-evidence/capitalizarme-boilerplate-html/components/*.astro` file it's modeled on
  in its header comment — same traceability discipline as `ui_kits/app-react/`.
- Tailwind utility classes are bound to the official §2.1 palette via `tailwind.config.mjs`
  (`brand-navy`, `brand-blue`, `brand-gold`, `brand-green`, `brand-red`, `brand-purple`), per
  `DESIGN.md` §13 — not Tailwind's stock color scale.
- Buttons stay pill-shaped (`rounded-full`), inputs stay underline-only (no boxed fields), per
  `DESIGN.md` §9 anti-patterns — same component-shape rules as every other surface in this
  package.
- Real listing/advisor copy, not filler — see `src/data/properties.ts` and `src/data/advisors.ts`.
