# ui_kits/app-react — Browse Properties (React variant)

## What this is

Capitalizarme's product context names two surfaces: themed marketing landing pages, and **"a webapp
to browse appartments for sale."** Only the (archived) landing-page source has linked evidence
(`capitalizarme/capitalizarme-boilerplate-html` — see `../../DESIGN.md` §5). No webapp source was
linked to this project, so this kit is an **applied composition**: it takes the landing page's
real tokens, type pairing, and component shapes (buttons, cards, underline inputs, checklist glyph)
and uses them to build a plausible browse/marketplace screen — a property search + listing grid,
plus a "Mensajes" advisor-chat surface.

**Read this as "same design language, new surface," not as extracted product fact.** Every visual
decision traces back to a specific landing-page component (noted in each component file's header
comment), none of it was copied from an actual webapp codebase, because none was provided.

**Stack note:** this kit is React, loaded via CDN standalone scripts (React, ReactDOM, Babel) with
no build step — real `.jsx` component files, composed and mounted at runtime. This is a deliberate
choice for this *applied concept kit* specifically, separate from this design system's real
evidenced production stack (Astro + Tailwind, see `../../DESIGN.md` §13 and
`../../source-evidence/`) — React lets the kit hold real interactive state (view switching, filter
selection, live chat) with ordinary component patterns instead of hand-rolled DOM wiring.

**Two other build variants of this same screen already exist:**
[`../app-astro/`](../app-astro/README.md) (real `.astro` components with a plain client `<script>`
for interactivity, matching the archived source's actual stack) and
[`../app-svelte/`](../app-svelte/README.md) (real `.svelte` components with idiomatic Svelte
reactivity). Same product concept, same tokens, same copy across all three. Reach for this kit
(`ui_kits/app-react/`) when you want a zero-setup browser preview; reach for `ui_kits/app-astro/`
when the target is an actual Astro project, most obviously `capitalizarme-boilerplate-html`
itself; reach for `ui_kits/app-svelte/` when the target is a Svelte project.

## Structure

```
ui_kits/app-react/
├── index.html                  Loads React/ReactDOM/Babel standalone from CDN, loads
│                                ../../colors_and_type.css, loads every component below as
│                                type="text/babel", then mounts <App /> into #root
├── components/
│   ├── App.jsx                  App shell — composes every component below, owns all interactive
│   │                            state (view, filter type, advisor threads) via React.useState
│   ├── Header.jsx                Sticky top nav — applied from Header.astro
│   ├── Sidebar.jsx                Logged-in product nav + small Capi brand mark
│   ├── SimulatorBanner.jsx        "Averigua tu capacidad de inversión" hero — Hero.astro + ContactForm.astro copy
│   ├── FilterBar.jsx              Comuna/UF-range/property-type filter — ContactForm.astro's underline-input pattern
│   ├── PropertyGrid.jsx           Proyectos destacados grid — Features.astro / FeaturedWork.astro, real UF/cuotas copy
│   ├── AdvisorList.jsx            "Mensajes" rail — the assistant/advisor thread list
│   ├── ChatArea.jsx               Main chat workspace pane for the selected advisor (composes InputBar)
│   ├── MessageBubble.jsx          One chat message row (advisor vs. user styling)
│   └── InputBar.jsx               Chat composer (text input + send button, owns its own draft state)
└── README.md                    This file
```

Each component file's header comment names the source `.astro` component it's applied from, so a
reader can trace any piece of markup back to real evidence under `../../source-evidence/`.

## Usage

Open `index.html` directly in a browser — no build step, no npm install. It loads React, ReactDOM,
and Babel standalone from CDN, loads `colors_and_type.css`, then loads each `components/*.jsx`
file as `type="text/babel"` (in-browser JSX transpilation) and mounts `<App />` into `#root`.
`App.jsx` owns the interactive state — which view is active, which property-type filter is
selected, and each advisor's message thread — and passes it down as props.

To reuse a single piece elsewhere (say, just the property grid), copy that one file
(`components/PropertyGrid.jsx`) plus its matching CSS rules out of `index.html`'s `<style>` block —
every rule is written against `colors_and_type.css` custom properties, so it carries whichever
palette generation is bound in `:root` without further edits. To build a new screen, compose a new
`App`-equivalent component the same way `components/App.jsx` does: import/load the component files
you need and render them together.

## Design notes

- **Palette & type**: every rule in `index.html`'s `<style>` block reads from `--accent` /
  `--color-brand-blue` / `--color-brand-navy` and friends in `colors_and_type.css` — nothing here
  hardcodes a hex value, so the kit automatically picks up whichever palette generation is bound in
  `:root` (currently the official 2021 branding-guidelines values, `#106CB5` blue / `#25397F` navy,
  `../../DESIGN.md` §2.1). Space Grotesk everywhere except button labels (Raleway, via `.btn`).
- **Cards**: `rounded-2xl` + `shadow-sm` via the shared `.card` class, same as `ContactForm.astro`'s
  wrapper and `Features.astro`'s step cards — no new radius or elevation introduced.
- **Filter bar** (`FilterBar.jsx`): reuses the underline-input pattern (`.input-underline`) from
  `ContactForm.astro` rather than inventing a boxed/bordered search field, per `DESIGN.md` §9
  ("Don't box the form inputs").
- **Property card copy** (`PropertyGrid.jsx`): mirrors the real specificity pattern in `content.ts`'s
  `featuredWork` block (UF price, cuotas, plazo, garantía) instead of generic "Property 1 / Property
  2" filler — see `../../source-evidence/capitalizarme-boilerplate-html/data/content.ts` for the source pattern this copy
  follows.
- **Mascot**: `SimulatorBanner.jsx` places `assets/mascot/capi-searching.png` beside the headline,
  and `Sidebar.jsx` uses `assets/mascot/capi-3.png` as a small brand mark above the nav — both
  whole, uncropped images, never recolored or vectorized.
- **Messaging surface** (`AdvisorList.jsx` + `ChatArea.jsx` + `MessageBubble.jsx` + `InputBar.jsx`):
  a direct application of the product's evidenced core flow — the entire purpose of
  `ContactForm.astro` on the landing page is booking time with an advisor, so a logged-in webapp
  plausibly lets a user keep that conversation going. Advisor bubbles reuse `.card`-style borders;
  user bubbles reuse the CTA banner's blue-fill/white-text pairing so "this is you" reads at a
  glance without a new color being introduced. `App.jsx` holds each advisor's thread in
  `React.useState` and appends new user messages (via `MessageBubble`) on send.

## Source basis

- `../../DESIGN.md` — full rules this kit follows
- `../../source-evidence/capitalizarme-boilerplate-html/components/*.astro` — the real components each section is applied from
- `../../source-evidence/capitalizarme-boilerplate-html/data/content.ts` — real Spanish marketing copy patterns
- `../../colors_and_type.css` — every token consumed here
