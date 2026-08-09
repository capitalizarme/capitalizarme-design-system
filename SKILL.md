---
name: capitalizarme-design-system
description: Real, source-backed design system for Capitalizarme — a Chilean real estate investment marketplace. Use when building landing pages, marketing sections, or product surfaces for Capitalizarme so color, type, spacing, and components match the real source evidence (Astro+Tailwind landing-page code, archived here as a frozen snapshot) and brand mascot instead of generic defaults.
user-invocable: true
---

# Capitalizarme Design System

## Agent quick-start — read this table first

Before generating anything, match your deliverable to its row below. Every "must use" is a hard rule,
not a suggestion — see the linked `DESIGN.md` section for the full contract (CDN snippets, token
bindings, anti-patterns).

| Deliverable | Mandatory tool/rule | Asset path | DESIGN.md § |
|---|---|---|---|
| Landing page, marketing section, product UI, dashboard, prototype | Tailwind CSS (Play CDN or real build), tokens from `colors_and_type.css` bound into `tailwind.config` | `colors_and_type.css` | §13 |
| Report, business summary, printable/paginated document | paged.js, real `@page` rules, **US Letter default** | `colors_and_type.css` | §10 |
| Slide deck, keynote, presentation | reveal.js, tokens bound into the reveal theme | `colors_and_type.css` | §11 |
| Chart, graph, data visualization | Chart.js, live `<canvas>` instance, official palette for series | `colors_and_type.css` §2.1 | §12 |
| Video, animated brand intro, motion content | Hyperframes, full duration, real production effort | `assets/`, `colors_and_type.css` | §14 |
| Any icon need | Official iconset — pick by label, not filename | `assets/icons/iconset/{color}/icon-NNN.svg` + `labels.json`, browse via `preview/icons-iconset.html` | §6 |
| Logo / wordmark | Real preserved lockups — pick color by background contrast | `assets/logo/horizontal/`, `assets/logo/isotypes/`, browse via `preview/brand-assets.html` | §6 |
| Mascot / warmth moment | Capi — whole image only, never recolored/cropped | `assets/mascot/` | §6 |
| Color / type tokens | Official 2021 brand palette + Space Grotesk/Raleway split | `colors_and_type.css` | §2.1, §3 |

## Brand asset quick reference — use these, don't invent

Real, preserved icons/logo/mascot exist in this package. **Always reuse them instead of drawing new
icon glyphs, redrawing the wordmark, or generating illustrated characters.** **Hard rule: never render
the brand name as styled text / a hand-set wordmark** — in any deliverable, the logo is always an
`<img>` from a real file in `assets/logo/` (horizontal lockup or isotype).

| Asset | Location |
|---|---|
| Official iconset (124 glyphs × 6 colors, labeled) | `assets/icons/iconset/{color}/icon-NNN.svg` — browse by label/category via `preview/icons-iconset.html`, or read `labels.json` directly |
| Logo — horizontal (7 colors incl. Verde, Azul Oscuro) / isotype (7 colors incl. Celeste) | `assets/logo/horizontal/`, `assets/logo/isotypes/` — browse via `preview/brand-assets.html` |
| Primary wordmark + favicon | `assets/logo/horizontal/070726_logo-capitalizarme-negro-sin-com.png` (Negro/black, "sin com" — used directly as the default on light surfaces, no separate root copy), `assets/logo/favicon.png` (default favicon, black isotype) |
| Capi mascot (20 renders) | `assets/mascot/` — whole image only, never recolored/cropped |

See `DESIGN.md`'s "Brand asset quick reference" and §6 Components for full usage rules.

## What's inside

- `DESIGN.md` — canonical rules: product context, color, typography, spacing, layout, components,
  motion, voice, anti-patterns. Read this first, every time.
- `colors_and_type.css` — concrete CSS custom properties + base styles + `.btn`/`.card`/
  `.input-underline`/`.nav-link` component classes. Space Grotesk and Raleway load from Google Fonts
  CDN only (`@import`) — no local `@font-face`, no JS font-loading script.
- `preview/` — 10 focused HTML cards, each loading `colors_and_type.css` live: primary colors, light
  theme surfaces, typography specimens, spacing tokens, radius, shadows, buttons, inputs, brand assets,
  the official iconset (Figma icon-sheet export, with a color switcher across all 6 color layers and a
  category filter over its semantic labels).
- `assets/` — real preserved files: `logo/` (favicon.png, the default favicon, a copy of
  the black isotype; plus `horizontal/` — 7 color variants of the horizontal lockup incl. Verde and
  Azul Oscuro, whose Negro file is used directly as the default wordmark — and `isotypes/` — 7 color
  variants of the standalone mark incl. Celeste),
  `icons/` (4 step icons, plus `iconset/` — **Capitalizarme's official iconset**, 124 icon glyphs
  recovered from a flattened Figma frame export, real geometry; filenames are position-indexed but every
  glyph has a semantic label, category, and confidence flag in `labels.json` — see `DESIGN.md` §6 before
  picking one — and its 5 sibling color folders `verde/ azul/ rojo/ amarillo/ celeste/`, the same
  124-icon grid re-exported per brand color and index-matched to the grayscale set), `mascot/` (20 "Capi"
  character renders).
- `fonts/` — real TTF files uploaded directly to the project: Space Grotesk
  (Light/Regular/Medium/SemiBold/Bold) and Raleway (Bold, BoldItalic — the only weight/style the
  button/CTA rule uses). Preserved as brand assets and read by the Design System pane's Fonts module
  via `fonts/manifest.json`; not bound via `@font-face` in `colors_and_type.css`, which loads both
  faces from Google Fonts CDN only.
- `build/` — not present; the linked repo is a static Astro site with no runtime/installer icon
  evidence.
- `source-evidence/` — EVIDENCE: real Astro component source (Header, Hero, ContactForm, CTABanner,
  Features, FeaturedWork, ImageTextPanel, Footer, Layout, index page) plus real Spanish marketing
  copy (`src/data/content.ts`), copied out verbatim for direct reading. Ground truth — safe to copy
  pixel-for-pixel.
- `ui_kits/app-react/` — APPLIED: an invented "browse properties" webapp screen composed from this
  system's tokens and component language, built as real React `.jsx` components (CDN-loaded
  React/ReactDOM/Babel, no build step — a deliberate stack choice for this interactive kit, separate
  from the design system's real Astro+Tailwind evidence; no webapp source was linked to this
  project — see its README for exactly what's evidenced vs. applied). A starting point for a new
  surface, not a spec to match precisely — don't confuse it with `source-evidence/`.
- `ui_kits/app-astro/` — APPLIED: the same invented "browse properties" screen, rebuilt as real
  `.astro` + Tailwind components (matching the archived source's actual stack and DESIGN.md §13),
  with a plain client `<script>` for interactivity instead of a framework island. Requires a Node/
  Astro build step to run — meant to be dropped into (or referenced against) an actual Astro
  codebase, not previewed as a static file. Use this when the target is a real Astro project; use
  `ui_kits/app-react/` when you just need a zero-setup browser preview of the same concept.
- `ui_kits/app-svelte/` — APPLIED: the same invented "browse properties" screen a third time,
  rebuilt as real `.svelte` + Tailwind components (Vite build, idiomatic Svelte reactivity in place
  of React state/props or Astro's `data-*` + script pattern). Requires a Node/Vite build step to
  run — use this when the target is a real Svelte project.
- `components/` — standalone, copy-paste-ready HTML partials (live render + markup + CSS blocks),
  extracted from `ui_kits/app-react/components/`: `header.html` (sticky top nav) and `footer.html` (5-column
  link grid + the DESIGN.md §8 compliance disclaimer). Use these when you need just the header/footer
  chrome without pulling in the whole `ui_kits/app-react/` kit.
- `system/` — the Design System pane's kit + artifact assets, all real and token-driven (loads
  `colors_and_type.css`): `kit.html`/`kit.dark.html` (condensed brand kit, light + the one evidenced
  inverted navy surface), `index.html` (links to everything below), `tokens.default.json` (flat token
  JSON), and `artifacts/` — landing page, deck cover, poster, email, newsletter, and form page, each
  reusing real Spanish copy from `source-evidence/…/content.ts`.

See "Source context" below for how the archived landing-page repo, the official iconset's Figma export,
and the 2021 branding-guidelines cover page/BrandBook text extraction were captured.

## Source context

- `capitalizarme/capitalizarme-boilerplate-html` — **archived evidence snapshot**; still Capitalizarme's
  live production landing-page codebase, but this design system's implementation has surpassed its
  functionality, so it's captured here as a frozen reference (Astro 5 + Tailwind CSS v4 — the *campaign*
  palette, see `DESIGN.md` §2.2). One codebase reached through two intake paths: the GitHub repo itself and the
  linked local folder `/Users/robertosalas/Proyectos/boilerplate-html`, which is a git clone of that
  same repo. Both intakes captured identical files; treat them as one source, not two.
- Figma — icon-sheet frame export, 6 color layers, source of **Capitalizarme's official iconset**: the
  same flattened frame exported as SVG once in grayscale and once per brand color, split into 124
  index-matched icon glyphs at `assets/icons/iconset/` and its 5 color subfolders; real geometry,
  filenames position-indexed but every glyph now carries a semantic label/category/confidence in
  `labels.json` (`DESIGN.md` §6)
- Uploaded assets: real wordmark logo, a full logo color family (7 horizontal + 7 isotype variants,
  horizontal incl. Verde and Azul Oscuro), and 20 mascot renders
- A 2021 branding-guidelines cover page, the **only authoritative source for the official brand
  palette** (`DESIGN.md` §2.1)
- A peer-provided text extraction of the full 117-page BrandBook (Werner Fett Studio, 2020/2021) — text
  only, PDF not preserved. Corroborates the color-guidelines cover page and the official iconset's
  rounded-pictogram intent; source of the logo construction/clear-space/minimum-size rules and the
  verbal-identity extension in §8.1

## When to use this skill

- Building or editing a Capitalizarme-branded landing page, marketing section, or lead-gen flow.
- Prototyping the "browse properties" webapp surface or any other Capitalizarme product UI.
- Building any Capitalizarme report, business summary, or printable/paginated document — this **must**
  use paged.js (see `DESIGN.md` §10), never a hand-rolled print stylesheet.
- Building any Capitalizarme slide deck, keynote, or presentation — this **must** use reveal.js (see
  `DESIGN.md` §11), never a hand-rolled scale-to-fit/keyboard-nav script.
- Rendering any chart, graph, or data visualization for Capitalizarme — this **must** be a live Chart.js
  instance (see `DESIGN.md` §12), never hand-drawn SVG/canvas or a static chart image.
- Building any Capitalizarme web surface at all — this **must** be styled with Tailwind CSS (see
  `DESIGN.md` §13), never hand-rolled layout/utility CSS or a different CSS framework.
- Building any Capitalizarme video, animated brand intro, product walkthrough, or motion presentation —
  this **must** use Hyperframes (see `DESIGN.md` §14), never a hand-rolled animation timeline or a
  different video-generation tool.
- Any time you'd otherwise guess a color, font, or button shape for a Capitalizarme deliverable —
  check this system first instead.
- Any time you'd otherwise draw a new icon, redraw the logo, or generate an illustrated character —
  use the real preserved iconset, logo, and Capi mascot instead (see "Brand asset quick reference"
  above).

## How to use

1. Read `DESIGN.md` in full before writing any markup — it names the exact source file behind every
   token and component, and lists anti-patterns worth checking against.
2. Load `colors_and_type.css` (link it or paste its contents into your first `<style>` block) to get
   real tokens and base component classes.
3. Check `preview/` for the live-rendered target of the token or component you're about to use.
4. Check `source-evidence/capitalizarme-boilerplate-html/components/*.astro` before inventing a new section — most landing-page
   patterns (image+text panel, checklist card, step grid, CTA banner) already exist.
5. For a new product surface beyond marketing pages, use `ui_kits/app-react/` (React, zero-setup browser
   preview), `ui_kits/app-astro/` (real Astro + Tailwind, needs a build step — matches the archived
   source's actual stack), or `ui_kits/app-svelte/` (real Svelte + Tailwind, needs a build step) as a
   worked example of composing tokens + components into a screen, and read the matching README for
   provenance notes.
6. Use `assets/mascot/` renders for warmth in empty states or hero moments — always as a whole image,
   never recolored or cropped into UI chrome (see `DESIGN.md` §6/§9).
7. Use `assets/logo/` and `assets/icons/` for the wordmark, favicon, and the 4 real step icons instead
   of redrawing them — and **never as styled text**: the brand name is always an `<img>` from a real
   `assets/logo/` file (horizontal lockup or isotype), never a hand-set text wordmark. For the logo
   specifically, pick the color variant by background: Negro on
   light/white, Blanco only on navy or brand-blue (never white), hue variants for themed/co-brand
   placements — see `preview/brand-assets.html` and `DESIGN.md` §6 "Logo system" before choosing one.
8. `assets/icons/iconset/` is **Capitalizarme's official iconset** — use it as the default source
   for any icon need in new work. Open `preview/icons-iconset.html` (color switcher across all 6
   color layers, plus a category filter) and pick the glyph you need by its semantic label — every glyph
   was visually reviewed and recorded in `assets/icons/iconset/labels.json` with a content name, one
   of 8 categories (communication, action, navigation, status, people, commerce, real-estate, misc), and
   a confidence flag (`high`/`medium`). Filenames stay position-indexed (`icon-013.svg` etc. — see
   `DESIGN.md` §6 "Icon set (official)"), so read the label, not the number. `medium`-confidence labels
   are a best visual read on an abstract glyph — confirm before adopting one for a recurring use.
   `icon-NNN.svg` is the same shape in every color folder — only the fill differs. When a glyph is
   adopted for a specific recurring use, promote it into a named file mirroring `assets/icons/step-*.svg`.
9. For any report, business summary, or printable/paginated document, use
   [paged.js](https://pagedjs.org) with real CSS `@page` rules — never a manually scripted print
   stylesheet or absolutely-positioned "fake pages." Default to **US Letter (`8.5in × 11in`)** page size
   unless the brief asks for something else. Bind `colors_and_type.css` tokens into the report so it
   stays on-brand. See `DESIGN.md` §10 for the reference report shape (cover → TOC → KPI tiles →
   charts → tables).
10. For any slide deck, keynote, or presentation, use [reveal.js](https://revealjs.com) — never a
    hand-rolled scale-to-fit script or custom keyboard/nav handler. Bind `colors_and_type.css` tokens
    into the reveal.js theme so slides stay on-brand. See `DESIGN.md` §11.
11. For any chart, graph, or data visualization, render a live [Chart.js](https://www.chartjs.org)
    instance into a real `<canvas>` — never hand-drawn SVG/canvas, a different charting library, or a
    static chart image. Pick the form before the color (stat tile vs. bar vs. line vs. stacked — see
    `DESIGN.md` §12.1), then assign color by job: sequential = one hue of `--color-brand-blue`;
    categorical = fixed order `--color-brand-blue` / `--color-brand-navy` / `--color-brand-purple` only
    (gold and green/red stay reserved for AI/premium and status, not general series color — §12.2);
    status = `--status-success/-warning/-danger`, always icon+label. See `DESIGN.md` §12.
12. Style every web surface with [Tailwind CSS](https://tailwindcss.com) (Play CDN for single-file
    deliverables, a real build step for existing Astro/Vite/Next codebases) — never hand-rolled
    layout/utility CSS or a different CSS framework. Bind this system's brand colors, fonts, and radii
    into `tailwind.config`, and still load `colors_and_type.css` alongside it for the Google Fonts
    `@import`, `.btn`/`.card`/`.input-underline` component classes, and the focus/disabled rules (§2.3,
    §6.1). See `DESIGN.md` §13 for the config snippet.
13. For any video, animated brand intro, product walkthrough, or motion presentation, use Hyperframes —
    never a hand-rolled CSS-keyframe/canvas timeline or a different video-generation tool. Bind this
    system's palette, type split, iconset, and mascot into every scene, and use the full specified
    duration with real production effort rather than finishing early. See `DESIGN.md` §14.
14. Starting a brand-new HTML surface from scratch (not a report/deck/chart/video, which follow their
    own dedicated tool above)? Copy the single `<head>` block in `DESIGN.md` §15 "Implementation
    Quick-Start" — it binds colors, Tailwind config, and `colors_and_type.css` in the right load order,
    plus a checklist cross-referencing every rule a new surface needs to satisfy.

## Design System Highlights

- **Official brand colors** (2021 branding guidelines, the platform's only official declaration): navy
  `#25397F` for weight/backgrounds/titles, blue `#106CB5` as the primary interactive accent, blue-dark
  and red-dark DERIVED via oklch, plus an evidenced semantic set (red `#ED1847` alerts, gold `#FBAF17`
  AI/premium, purple `#8E27C6` secondary — unverified placeholder, green `#006939` success). No
  gradients, no dark theme, no beige/cream surfaces — everything evidenced is flat white/off-white or a
  pale blue tint. (Source: the 2021 branding guidelines cover page; see `DESIGN.md` §2.1. The
  archived landing-page source's close-but-distinct `#0169CB`/`#11224C` is a campaign variant, not
  the platform color — `DESIGN.md` §2.2.)
- **Two-typeface system with a strict split**: Space Grotesk for all structure (headings, body, nav),
  Raleway bold-uppercase reserved *exclusively* for button/CTA labels. Never mix them.
  (Source: `src/layouts/Layout.astro` Google Fonts `<link>`; `.font-raleway` usage in
  `source-evidence/capitalizarme-boilerplate-html/components/*.astro`.)
- **Every button is a full pill** (`border-radius: 9999px`) — this is the system's single most
  recognizable UI signature. Three variants: primary filled, on-accent inverted, outline.
  (Source: `ContactForm.astro`, `CTABanner.astro`, `Features.astro` button markup.)
- **Form inputs are underline-only** — no boxed/bordered fields anywhere in the system.
  (Source: `ContactForm.astro` input classes.)
- **Capi mascot** — a 3D-rendered orange bear in business-casual dress — is the brand's entire
  expressive/warmth layer, always used as a whole photographic image. (Source: 20 uploaded mascot
  renders preserved in `assets/mascot/`.)
- **Official iconset** — 124 glyphs in 6 color layers (grayscale + verde/azul/rojo/amarillo/celeste) at
  `assets/icons/iconset/`, extracted from a Figma frame export. This is the default icon source for
  any Capitalizarme product UI — every glyph is semantically labeled and categorized in
  `assets/icons/iconset/labels.json`; pick a glyph by label/category in
  `preview/icons-iconset.html` rather than by filename, since Figma's flattened export doesn't
  preserve per-icon names.
- **Fixed 1440px container**, `24px` mobile / `140px` desktop side padding, is the single layout
  primitive every landing-page section shares. (Source: `max-w-[1440px] px-6 lg:px-[140px]` repeated
  across every `source-evidence/capitalizarme-boilerplate-html/components/*.astro` file.)
