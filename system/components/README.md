# system/components/ — React primitives library

A general-purpose, importable React component library for Capitalizarme — the piece this design
system didn't previously have. Everything else in this repo defines the system as CSS tokens
(`colors_and_type.css`, `system/tokens.default.json`) plus prose rules (`DESIGN.md`) plus one
*applied screen* per stack (`ui_kits/app-react/`, `ui_kits/app-astro/`, `ui_kits/app-svelte/`). None
of those are reusable primitives a real codebase can `import`. These are.

**Not extracted fact.** Every component is derived strictly from evidenced patterns — button pill
shape, underline inputs, card radius/shadow, the checklist glyph, the real logo/mascot/iconset
files — cross-checked against `DESIGN.md` §6 and the copy-paste markup in `components/*.html` and
`ui_kits/app-react/components/*.jsx`. No invented primitives beyond the ones below.

## Structure

```
system/components/
├── core/
│   ├── Button.jsx          Pill CTA, 4 variants × 3 sizes
│   ├── Card.jsx             White/tinted rounded-16px panel
│   ├── ChecklistItem.jsx    Filled-circle check row — the one bespoke glyph
│   ├── EyebrowLabel.jsx     Uppercase kicker
│   ├── Icon.jsx             Official iconset glyph by index
│   ├── IconRoundel.jsx      Tinted circle frame for a step icon
│   ├── Logo.jsx             Real logo file, never styled text
│   └── Mascot.jsx           Capi render, whole and untinted
├── forms/
│   └── Field.jsx            Underline label + input
└── navigation/
    ├── NavLink.jsx           Flat nav text link
    ├── SiteHeader.jsx        Fixed translucent header
    └── SiteFooter.jsx        5-column footer + compliance disclaimer
```

Every `.jsx` has a sibling `.d.ts` (props contract) and `.prompt.md` (one-line usage note + a real
example). Plain React (`export function Name(props)`, real ES `import`/`export`) styled only via the
CSS custom properties in `colors_and_type.css` — no new dependencies, no CSS-in-JS library, no
Tailwind requirement.

## Using this in a real project

These are ES modules meant for a bundler-based codebase (Vite, Next, CRA, the real
`capitalizarme-boilerplate-html` if it ever migrates off static Astro+Tailwind) — unlike
`ui_kits/app-react/`, they will **not** run from a plain `<script type="text/babel">` tag, because
that has no module resolution. If you want a zero-build-step browser preview of the applied concept
instead, use `ui_kits/app-react/index.html`.

1. Copy `system/components/` into your project.
2. Copy `colors_and_type.css`, `assets/`, and `fonts/` alongside it (or point `basePath`/`assetBase`
   props at wherever you land `assets/`).
3. `import { Button } from './components/core/Button.jsx'` (or wire up an `index.js` barrel export
   per your bundler's convention) and load `colors_and_type.css` once, globally.

## Design notes

- Every component reads asset paths (logo, icons, mascot) via a `basePath`/`assetBase` prop
  defaulting to `assets/...`, so nothing needs rewriting to match a target repo's asset layout.
- `Icon` sizes glyphs by `max-width`/`max-height` with `width`/`height: auto`, not a forced square
  box — several iconset glyphs aren't square, and forcing both dimensions distorts them.
- `Logo` never renders the brand name as text, and its usage note calls out the one real anti-pattern
  this system caught while auditing a peer email: don't box the mark in a white "badge" tile to fake
  contrast on a dark surface — use `color="blanco"` directly (`DESIGN.md` §9).
- `SiteHeader`/`SiteFooter` use this repo's existing `.container` layout helper from
  `colors_and_type.css` — load that stylesheet on any page that mounts them.
- **Before adopting into a real, already-shipping codebase:** confirm the prop names/variant enums
  here against whatever component API (if any) already exists there — these were derived purely from
  the landing-page markup and `DESIGN.md`, not from a live consuming app.
