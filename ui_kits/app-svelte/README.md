# ui_kits/app-svelte/ — Browse Properties (Svelte + Tailwind variant)

The same **applied, invented** "browse properties / mensajes" product concept as
[`ui_kits/app-react/`](../app-react/README.md) and [`ui_kits/app-astro/`](../app-astro/README.md),
rebuilt as real `.svelte` components. This kit is **not extracted fact** — no webapp source was
ever linked to this project — it's a proposal built from this design system's tokens, same as the
other two kits. See `DESIGN.md` §9 for that caveat.

## Why a third kit

Three build targets, three tradeoffs:

- **`ui_kits/app-react/`** — React + Babel-standalone via CDN, zero build step, opens directly as
  a static HTML file. Fastest way to preview the applied concept inside Open Design.
- **`ui_kits/app-astro/`** — real `.astro` components matching the archived source's actual stack
  (Astro + Tailwind), meant to be dropped into an actual Astro codebase, most obviously the real
  `capitalizarme-boilerplate-html` repo.
- **`ui_kits/app-svelte/`** (this kit) — real `.svelte` components + Vite + Tailwind, for teams
  evaluating or standardizing on Svelte instead. Same product concept, same tokens, same copy,
  idiomatic Svelte reactivity (`export let`, `$:`, `createEventDispatcher`) in place of React
  props/state or Astro's `data-*` + vanilla `<script>` pattern.

It cannot be opened directly as a static HTML file — Svelte requires a build step (`npm run dev` /
`npm run build` via Vite) to compile `.svelte` files. If you just want to look at the applied
concept without setting up a project, use `ui_kits/app-react/index.html` instead.

## Structure

```
ui_kits/app-svelte/
├── package.json            — svelte + vite + @sveltejs/vite-plugin-svelte + tailwindcss
├── vite.config.js          — Svelte plugin
├── tailwind.config.js      — brand tokens bound into Tailwind's theme (DESIGN.md §13's snippet)
├── postcss.config.js       — tailwindcss + autoprefixer
├── index.html              — Vite entry, mounts #app
├── src/
│   ├── main.js              — imports global.css, mounts App.svelte into #app
│   ├── App.svelte           — app shell — composes every component below, owns all interactive
│   │                          state (view, filter type, selected advisor, message threads)
│   ├── styles/global.css    — imports ../../../../colors_and_type.css, then @tailwind layers
│   ├── data/
│   │   ├── properties.js    — the 3 listings (same content as the React/Astro kits)
│   │   └── advisors.js      — the 2 advisors + seed chat threads (same as the React/Astro kits)
│   └── components/
│       ├── Header.svelte        — sticky nav + CTA, modeled on source-evidence/.../Header.astro
│       ├── Sidebar.svelte       — logged-in product nav + Capi mark
│       ├── SimulatorBanner.svelte
│       ├── FilterBar.svelte     — underline inputs + property-type pill toggle
│       ├── PropertyGrid.svelte
│       ├── AdvisorList.svelte   — the "Mensajes" rail
│       ├── ChatArea.svelte      — composes MessageBubble + InputBar, auto-scrolls on new message
│       ├── MessageBubble.svelte
│       ├── InputBar.svelte      — the chat composer, owns its own draft text
│       └── Footer.svelte        — includes the §8 compliance disclaimer
```

Each component file's header comment names the source `.astro` component it's applied from (same
traceability discipline as the other two kits), so a reader can trace any piece of markup back to
real evidence under `../../source-evidence/`.

## How the interactivity works

`App.svelte` owns all state as plain reactive `let` bindings — `view`, `activeType`,
`selectedAdvisor`, `threads` — and passes it down as props. Child components report user actions
back up via Svelte's `createEventDispatcher` (`on:navigate`, `on:typechange`, `on:select`,
`on:send`) rather than mutating props directly, the idiomatic Svelte equivalent of React's
`onClick={() => setView(...)}` callback-prop pattern in `ui_kits/app-react/`. `ChatArea.svelte`
auto-scrolls to the newest message via a reactive statement (`$:`) plus `tick()`.

## Using this in a real project

1. Copy `src/`, `index.html`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, and
   `package.json` into your own Svelte/Vite project, or use them as a direct reference.
2. Copy this design system's `assets/`, `fonts/`, and `colors_and_type.css` into the target
   project (`assets/` and `fonts/` under `public/`, so `/assets/...` paths resolve;
   `colors_and_type.css` alongside `src/styles/global.css`, adjusting the `@import` path).
3. `npm install && npm run dev`.

## Design notes

- Tailwind utility classes are bound to the official §2.1 palette via `tailwind.config.js`
  (`brand-navy`, `brand-blue`, `brand-gold`, `brand-green`, `brand-red`, `brand-purple`), per
  `DESIGN.md` §13 — identical values to `ui_kits/app-astro/tailwind.config.mjs`.
- Buttons stay pill-shaped (`rounded-full`), inputs stay underline-only (no boxed fields), per
  `DESIGN.md` §9 anti-patterns — same component-shape rules as every other surface in this
  package.
- Real listing/advisor copy, not filler — see `src/data/properties.js` and `src/data/advisors.js`,
  identical content to the React and Astro kits so all three stay directly comparable.
- Mascot: `SimulatorBanner.svelte` places `capi-searching.png` beside the headline, `Sidebar.svelte`
  uses `capi-3.png` as a small brand mark — both whole, uncropped images, never recolored.

## Source basis

- `../../DESIGN.md` — full rules this kit follows
- `../../source-evidence/capitalizarme-boilerplate-html/components/*.astro` — the real components each section is applied from
- `../../source-evidence/capitalizarme-boilerplate-html/data/content.ts` — real Spanish marketing copy patterns
- `../../colors_and_type.css` — every token consumed here
