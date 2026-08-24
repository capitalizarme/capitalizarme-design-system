# Changelog

All notable changes to the Capitalizarme design system are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow
[SemVer](https://semver.org/) — `MAJOR.MINOR.PATCH`:

- **MAJOR** — a token, component API, or file path changes in a way that breaks existing consumers
  (e.g. renaming a CSS custom property, removing an icon, changing the logo file set).
- **MINOR** — backwards-compatible additions (new tokens, new components, new artifacts, new icons).
- **PATCH** — fixes that don't change the public surface (asset path corrections, doc fixes, bug fixes
  in `ui_kits/*`).

## [Unreleased]

## [0.4.0] — 2026-08-24

### Added
- `--status-success-text`, `--status-warning-text`, `--status-danger-text` in `colors_and_type.css` —
  text/icon-safe variants of the status colors. `--status-warning` and `--status-danger` are fill-only
  tokens (~2.5:1 and ~4.35:1 against white respectively); using them directly as text or an icon color
  fails WCAG AA. `--status-danger-text` reuses the existing `--color-brand-red-dark`; the other two are
  new derivatives of the same hues. Rendered side-by-side in `preview/colors-primary.html`.
- Three new copy-paste component partials in `components/`, extracted from `ui_kits/app-react/components/`
  the same way `header.html`/`footer.html` were: `card.html` (property listing card + checklist glyph,
  from `PropertyGrid.jsx` / `Features.astro`/`FeaturedWork.astro`), `filter-bar.html` (underline-input
  fields + pill type-toggle group, from `FilterBar.jsx` / `ContactForm.astro`), and `advisor-list.html`
  (the "Mensajes" thread rail, from `AdvisorList.jsx`). Documented in `README.md` (package contents +
  Preview Manifest), `SKILL.md`, and cross-referenced from the relevant bullets in `DESIGN.md` §6.
- `DESIGN.md` §6 now explicitly notes that modals, data tables, and tab groups have **no evidence**
  anywhere in `source-evidence/` or `ui_kits/` — flagged so a future pass doesn't improvise one from
  generic UI-kit memory instead of designing it fresh against this system's own tokens.

### Fixed
- Accessibility audit of `colors_and_type.css` and its previews/artifacts (contrast measured against
  WCAG 2.1 AA, 4.5:1 for normal text):
  - `--color-slate` (`--muted`) darkened `#64748B` → `#556378` (4.76:1 → 6.10:1 on white). It was
    passing but with almost no margin, and it's the color the system's smallest text leans on — 8-10px
    footer/legal disclaimers in `components/footer.html`, `system/artifacts/{email,newsletter,report}.html`,
    and the `preview/` pages. Synced into `system/tokens.default.json` and the hardcoded email-client
    literals in `system/artifacts/email.html` / `newsletter.html` / `report.html`.
  - `system/kit.dark.html`: `.type-meta` / `.hint` translucent white text bumped `rgba(255,255,255,0.55)`
    → `0.62` (was 4.42:1 against the navy background, under AA).
  - `system/artifacts/deck.html`: `.footer-brand` bumped `rgba(0,0,0,0.4)` → `0.6` on light slides
    (was 2.85:1) and `rgba(255,255,255,0.5)` → `0.62` on `.s-dark` slides (was 3.93:1).
- `DESIGN.md` §2.1 palette table and status-color guidance updated to document the new `-text` tokens
  and the darkened slate value.

## [0.2.1] — 2026-08-11

### Fixed
- Corrected stale "self-hosted `@font-face`" claims in `README.md` and `DESIGN.md` — Space Grotesk
  and Raleway load from Google Fonts CDN only (`@import`) per `colors_and_type.css`; the uploaded
  TTFs in `fonts/` are preserved brand assets, not bound faces.

## [0.2.0] — 2026-08-10

### Added
- Six new Capi mascot renders (`capi-happy.png`, `capi-happy-2.png`, `capi-builder.png`,
  `capi-edi.png`, `capi-edi-2.png`, `capi-edi-3.png`), registered in `brand.json` and the
  `preview/brand-assets.html` gallery. Mascot set now totals 27 renders (was 20); count updated
  across `DESIGN.md`, `README.md`, and `SKILL.md`.

## [0.1.0] — 2026-08-09

### Added
- Initial design-system package: `DESIGN.md`, `colors_and_type.css`, brand tokens, official iconset,
  full logo family, Capi mascot asset set, self-hosted Space Grotesk.
- Reusable component markup (`components/header.html`, `components/footer.html`).
- Reference UI kits: React, Astro, Svelte (`ui_kits/app-react`, `ui_kits/app-astro`, `ui_kits/app-svelte`).
- Example artifacts: landing page, pitch deck, report, poster, email, newsletter, form.
