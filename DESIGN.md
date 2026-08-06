# Capitalizarme Design System

> Category: Custom (real estate / proptech investment marketplace)
> Surface: web — marketing landing pages + browse/invest webapp

Capitalizarme is a real estate investment marketplace. The product helps people discover their
mortgage/investment capacity (a "capacidad de inversión" simulator), book a free consultation with
an advisor, and browse investable properties — apartments, land, warehouses ("bodegas"), and parking
spaces ("estacionamientos"). The company has run **multiple themed landing pages** built from a shared
Astro + Tailwind codebase, plus a **webapp for browsing properties for sale**. That landing-page
codebase (`capitalizarme-boilerplate-html`) is still Capitalizarme's live production landing-page repo —
this design system's implementation has since surpassed its functionality, and the evidence captured
from it here is an archived snapshot, not a claim that the repo itself is inactive — see Source Context
below.

**Business model — read this before designing any product surface, not just marketing pages:**

Capitalizarme **does not build or own real estate stock**. It intermediates between real-estate
developers ("inmobiliarias") who sell projects — pre-construction / future delivery or already built — and
individual investors who buy apartments **as an investment, not to live in**. Four actor types compose
every transaction: **Inmobiliaria** (owns the project/stock, drafts the "promesa" contract) →
**Capitalizarme** (marketplace + operations + tech + legal, centralizes the process) →
**MBP / BP / TL / Broker** (the commercial network that sources and advises the investor — a strict,
non-overlapping hierarchy: Master Business Partner → Business Partner → Team Leader → Broker) →
**Cliente inversionista** (the end investor, almost always leveraged with a mortgage). Revenue is an
**intermediation commission** (commonly referenced around 3%, but not a fixed platform-wide rate —
it varies by project/agreement), calculated on the final sale price excluding the developer's down-
payment bonus, earned at the "promesa" (purchase-promise contract) milestone — not at final deed
("escritura"). 60% of that commission flows to the MBP, which pays out the broker.

Beyond the themed marketing landing pages and the applied browse/invest webapp in `ui_kits/app-react/`, the
real product surface set is: the public marketing site, the **Marketplace** (project/unit catalog — the
official source of commercial conditions), **Broker Center** (broker portal: projects, commissions,
"Mi Equipo"), **Seller Center** (developer portal), **Investor Center** (investor portal), and **RPS**
(Reserva Promesa System — reservation/promise state machine). `ui_kits/app-react/` most closely models an
Investor Center surface (browse properties + message your advisor); it is not evidence for the other
portals.

## Source Context

- **`capitalizarme/capitalizarme-boilerplate-html`** (📦 **archived evidence snapshot** — still
  Capitalizarme's live production landing-page codebase; this design system's implementation has
  surpassed its functionality, so it's captured here as a frozen reference for component/layout
  patterns, not a live source to keep syncing with) — one single codebase, reached through two intake
  paths that both resolve to the same repository: the linked local folder
  `/Users/robertosalas/Proyectos/boilerplate-html` is a git clone of this exact repo (`origin` →
  `git@github.com:capitalizarme/capitalizarme-boilerplate-html.git`), so a GitHub-repo intake and a
  local-folder intake captured **identical file contents** — confirmed byte-for-byte via `diff -rq`
  across both snapshot trees. The GitHub intake's file selection covered `package.json`,
  `src/styles/global.css` (Tailwind `@theme` tokens), `src/data/content.ts`, `public/favicon.svg`, the
  wordmark logo, and the 4 step-icon SVGs; the local folder was additionally cross-read directly from
  the linked working directory to reach the full `src/components/*.astro` tree, which the GitHub
  intake's file selection didn't include on its own. Every component file is preserved verbatim in
  `source-evidence/`. Treat the two intake passes as **one evidence source captured twice**, not two
  independent codebases corroborating each other — the raw intake snapshots themselves are not kept in
  this package (only the distilled results here and in `source-evidence/`).
- **Figma — icon-sheet frame export, 6 color layers — source of the official iconset**: the same
  flattened Figma frame exported as SVG six separate times — once in grayscale/ink
  (4123×1773, 311 raw `<path>` elements, no group/id/name metadata — Figma's SVG export flattens layer
  structure) and once per brand semantic color (verde/azul/rojo/amarillo/celeste, each also 311 raw
  paths, uploaded directly to the project). 124 individual icon glyphs were recovered from the grayscale
  layer by clustering paths spatially into per-icon bounding boxes and cropping each to its own viewBox;
  every path's geometry is preserved byte-for-byte, but the original per-icon names Figma had are not
  recoverable from a flattened export. The 5 color layers were then bounding-box matched back to that
  same 124-icon grid (all 6 layers share pixel-identical grid geometry, confirmed via per-path
  center-distance matching within 2px tolerance) — so `icon-NNN` is the same shape/position across every
  color, only the fill differs. 4 stray paths per layer (noise below icon-cluster size) were excluded
  from all 6 extractions. Preserved at `assets/icons/iconset/icon-001.svg` … `icon-124.svg`
  (grayscale) and `assets/icons/iconset/{verde,azul,rojo,amarillo,celeste}/icon-001.svg` …
  `icon-124.svg` (color layers), plus `manifest.json` (grayscale path count + fill colors) and
  `manifest-colors.json` (per-color path count + fill colors) — see §6 Components and
  `preview/icons-iconset.html`, which includes a color switcher to preview any icon across all 6
  layers. **This 124-glyph set is Capitalizarme's official iconset** — company-designated per the
  request that promoted it from unreviewed evidence to canonical brand asset. Filenames remain
  **position-indexed** (`icon-NNN` numbering reflects grid reading position, top-left → bottom-right in
  the original Figma frame, not a meaningful order), but every glyph has since been visually reviewed and
  given a semantic label — content name, category, and a confidence flag — recorded in
  `assets/icons/iconset/labels.json` and shown under each tile in `preview/icons-iconset.html`
  (with a category filter). Pick a glyph by its label or category, not by memorizing grid position; labels
  flagged `medium` confidence are a best visual read on an abstract glyph and should be confirmed before
  adopting one for a specific recurring use.
- **Uploaded brand assets**: the primary wordmark lockup PNG, a full logo color family — a 7-color
  horizontal lockup batch (`assets/logo/horizontal/`, see below) and 7 isotype variants
  (`assets/logo/isotypes/`) — and 20 "Capi" mascot character renders, uploaded directly to the project
  and preserved byte-for-byte in `assets/`.
- **Uploaded font files**: 5 real Space Grotesk TTF weights (Light, Regular, Medium, SemiBold, Bold),
  uploaded directly to the project and preserved byte-for-byte in `fonts/`, self-hosted via
  `@font-face` in `colors_and_type.css`.
- **2021 branding guidelines cover page** ("Uso de color") — a one-page internal document, uploaded
  directly to the project, and the design system's **only official color source** (§2.1) — its five
  pixel-sampled color bars (gold, blue, navy, green, red) are the palette in force. Its stated color
  philosophy ("más que tener un color corporativo, se propone tener una paleta que permita flexibilizar
  la comunicación...") is the earliest documented rationale for why Capitalizarme uses a multi-color
  semantic palette instead of one fixed brand color.
- **Peer-provided 117-page BrandBook text extraction** (Werner Fett Studio, "Brand Guide Lines" /
  "BrandBook 2021 Capitalizarme.com", 2020/2021) — a teammate ran this design system's own intake
  process against the full BrandBook and shared the resulting package; only the **extracted text**
  informed the additions below (brand personality, logo construction rules, verbal-identity rules) —
  the source PDF itself was not preserved in this package, by request. The same "más que tener un color
  corporativo…" quote appears verbatim here, confirming the one-page 2021 color-guidelines cover above
  is an excerpt of this same BrandBook, and its "familia de pictogramas… terminaciones redondas"
  guidance independently corroborates the 124-glyph official iconset in §6. New, non-color content
  folded in below: brand personality (§1), logo construction/clear-space/minimum-size/no-shadow rules
  (§6 Logo system), and verbal-identity rules extending §8.1.
- **Peer-provided horizontal logo lockup, 7 colors, dated batch ("070726")** — a flat-color export of
  the horizontal wordmark lockup, uploaded directly to the project and preserved byte-for-byte at
  `assets/logo/horizontal/070726_logo-capitalizarme-{color}-sin-com.png` for
  amarillo/azul/azul-oscuro/blanco/negro/rojo/verde. **This is now the sole horizontal logo set** — it
  superseded an earlier, near-identical 6-color batch (Azul/Celeste/Rojo/Amarillo/Negro/Blanco) that was
  removed once this batch was in place, since the two were redundant except that this one adds a
  **Verde** horizontal lockup and a new **Azul Oscuro** (dark navy) color not seen in any prior logo/
  isotype batch (the retired batch's one unique color, Celeste, remains available via the isotype set).
  The "sin-com" filename marks these as the current standard wordmark (no ".com" suffix) — see §9
  anti-pattern on the deprecated "Capitalizarme.com" domain-suffixed naming used throughout the archived
  BrandBook. Note: each file's embedded ink color (sampled: azul `#0069CB`, azul-oscuro `#002984`, verde
  `#006726`, rojo `#FF0041`, amarillo `#FFB500`) is close to but **not identical** to the official §2.1
  tokens — same treatment as the existing isotype color variants (pre-rendered decorative colors, not a
  UI token source; see §9). An 8th uploaded file (`Logo sin .com.png`) was a redundant, non-byte-identical
  duplicate of the Blanco variant and was not preserved, to avoid storing near-duplicate evidence twice.

Every section below (§2–§9) cites the specific source file its rule was read from — component names
map 1:1 to files under `source-evidence/capitalizarme-boilerplate-html/components/`.

### Brand asset quick reference — use these, don't invent

Real, preserved brand assets exist for icons, logo, and mascot. **Default to reusing them over
drawing new icon glyphs, redrawing the wordmark, or generating illustrated characters** — that's the
whole point of having preserved them byte-for-byte.

| Asset | Location | Rule |
|---|---|---|
| Official iconset (124 glyphs × 6 colors, labeled) | `assets/icons/iconset/{color}/icon-NNN.svg` | Default source for **any** icon need. Browse `preview/icons-iconset.html` (color switcher + category filter) and pick by its semantic label, e.g. "Property / apartment," "Cart / purchase" — see `assets/icons/iconset/labels.json` and §6. |
| Step icons (4, named) | `assets/icons/step-1-evaluate.svg` … `step-4-recibe.svg` | Use as-is for "how it works" style steps. |
| Logo — horizontal lockup (7 colors incl. Verde, Azul Oscuro) | `assets/logo/horizontal/` | Full wordmark, current "sin .com" naming. Pick color by background — see §6 "Logo system". |
| Logo — isotype (7 colors) | `assets/logo/isotypes/` | Mark alone, for favicon/avatar/watermark scale. |
| Primary wordmark + favicon | `assets/logo/horizontal/070726_logo-capitalizarme-negro-sin-com.png` (Negro/black, "sin com" — the horizontal set's own Negro file, used directly as the default wordmark, no separate root copy), `assets/logo/favicon.png` (Negro/black isotype — byte-for-byte copy of `assets/logo/isotypes/Isotipo Negro.png`) | Default logo files on light surfaces when no themed color is needed. `assets/logo/favicon.svg` is the archived source's original favicon, kept for provenance, no longer the default. |
| Capi mascot (20 renders) | `assets/mascot/` | Use as a whole photographic image for warmth in empty states, hero moments, step call-outs — never recolored, cropped, or vectorized. See §6. |

All of the above render live in `preview/brand-assets.html` and `preview/icons-iconset.html` —
check there before picking a file blind.

## 1. Visual Theme & Atmosphere

🟢 Source: BrandBook text extraction (Werner Fett Studio, 2020/2021 — see Source Context). Capitalizarme's
declared brand personality is five traits: **Vocal** (has a point of view, isn't afraid of pushback),
**Honesta** (direct, no evasion), **Inquieta** (proactive, always looking for the next opportunity),
**Carismática** (surprising, sharp humor, never crude), **Cosmopolita** (global outlook, tracks trends).
The BrandBook frames this as "seamos / no seamos" pairs — rebeldes not seguidores, ágiles not
burocráticos, cercanos not individualistas, simples not complicados — read §8 for how this plays out in
actual copy voice, and §8.1 for the extended verbal-identity rules.

Confident, institutional-but-friendly fintech/proptech. The official palette (the 2021 Capitalizarme
branding guidelines cover page) is a **deep navy** (`#25397f`)
for weight and primary surfaces, with a **medium blue** (`#106cb5`) as the primary accent for links and
badges — on plain white/off-white surfaces, no gradients, no dark mode, no beige/cream washes in the
source. A small evidenced semantic set — red (`#ed1847`) for alerts, gold (`#fbaf17`) for AI/premium
moments, purple (`#8e27c6`) for secondary elements, and green (`#006939`) for success — extends the
system for status and data UI. Darker interactive/hover variants of blue and red are derived via
`oklch()` rather than separately evidenced. Warmth and approachability
come entirely from **Capi**, a 3D-rendered orange bear mascot in business-casual dress (navy vest,
white shirt, maroon tie), used across marketing touchpoints in dozens of poses (on the phone, filing
paperwork, riding a rocket, skating, graduating, giving a thumbs up). Capi is the brand's expressive
layer; the UI chrome itself stays restrained, geometric, and pill-shaped.

Typography carries the same duality: **Space Grotesk** (a geometric, slightly technical sans) for
everything structural — headings, body, nav — and **Raleway** reserved exclusively for call-to-action
buttons, set in bold uppercase with wide tracking, giving every button a distinct "action" register
against the calmer Space Grotesk copy around it.

Copy is in **Spanish (Chile)**, direct-response in tone: short benefit-led headlines, concrete numbers
(“UF 1.665”, “84 cuotas”, “5.000 personas”), and a persistent single CTA — *agenda tu reunión*
(book your meeting) — repeated at nearly every section boundary.

## 2. Color

### 2.1 Official brand palette — 2021 branding guidelines (authoritative)

🟢 **Source: the 2021 branding guidelines cover page** ("Uso de color"), pixel-sampled directly from
its color bars (no hex codes were printed on the page itself). **Per company decision, this is the
platform's official color declaration.** Use these tokens for any new product surface.

| Token | Value | Usage |
|---|---|---|
| `--color-brand-navy` | `#25397F` | Backgrounds, titles, primary |
| `--color-brand-blue` | `#106CB5` | Primary accent — links, badges, default interactive color |
| `--color-brand-gold` | `#FBAF17` | AI, premium elements — **not** a warning color |
| `--color-brand-green` | `#006939` | Success |
| `--color-brand-red` | `#ED1847` | Alerts, critical actions |

The 2021 cover pictured only these five color bars — no purple, no neutrals, no dark/hover variants.
The tokens below fill those functional gaps. The dark hover variants are mechanically derived from the
five colors above; the four supplementary values (purple, off-white, blue-light, slate) have no
evidenced 2021 source and are **unverified functional placeholders** — swap them for real values if the
company ever supplies a source, don't treat them as brand-confirmed:

| Token | Value | Usage |
|---|---|---|
| `--color-brand-blue-dark` | DERIVED — `color-mix(in oklch, var(--color-brand-blue) 78%, black)` | Secondary CTAs, data displays |
| `--color-brand-red-dark` | DERIVED — `color-mix(in oklch, var(--color-brand-red) 78%, black)` | Hover state on red, alert text |
| `--color-brand-purple` | `#8E27C6` — no 2021 equivalent, unverified placeholder | Secondary elements |
| `--color-off-white` | `#F8F9FB` — no 2021 equivalent, unverified placeholder | Background |
| `--color-blue-light` | `#DDE6FF` — no 2021 equivalent, unverified placeholder | Borders, tinted panels |
| `--color-slate` | `#64748B` — no 2021 equivalent, unverified placeholder | Secondary text |

`--status-success` and `--status-danger` in `colors_and_type.css` map directly to Green/Red above;
`--status-warning` remains DERIVED (oklch) since no dedicated warning color was evidenced — do not
repurpose Gold for warning, it's reserved for AI/premium moments per source.

This document's own "Uso de color" text is the earliest documented **rationale** for the multi-color
system:

> "Más que tener un color corporativo se propone tener una paleta que permita flexibilizar la
> comunicación y generar un dinamísmo visual de la marca con sus respectivas combinaciones en sus
> variados formatos."
> — more than having one corporate color, the brand deliberately runs a palette flexible enough to
> generate visual dynamism across combinations and formats.

This confirms the semantic set above (gold/purple/green/red alongside navy/blue) is original brand
strategy, not something this design system invented — new semantic colors (if the product ever needs
one) fit this precedent, so long as they're evidenced, not guessed.

### 2.2 Landing-campaign variant (archived source)

All hex values below are copied verbatim from `src/styles/global.css`'s Tailwind `@theme` block and
inline utility classes in `source-evidence/` — this is the themed **marketing landing-page** codebase
(archived here, see Source Context), kept for component/layout fidelity (spacing, shape, card
structure). Prefer §2.1's tokens for color; use this table only when rebuilding a landing-page section
pixel-for-pixel from `source-evidence/`. An earlier pass on this design system also read `#0169CB` /
`#11224C` / `#878683` from this same archived source — those are close to, but distinct from, the
§2.1 palette above; treat them as a campaign-specific variant, not the platform's brand truth.

| Token | Value | Source | Usage |
|---|---|---|---|
| `--color-brand-blue-tint-50` | `#EAF5FD` | `Features.astro` inline `background-color` | Section-level tint background (landing pages only) |
| `--color-brand-blue-tint-100` | `#E8F0FC` | `Features.astro`, `ImageTextPanel.astro` inline fills | Icon roundels, illustration panels (landing pages only) |
| `--bg` / `--surface` | `#FFFFFF` | every component — no dark backgrounds evidenced | Page and card background |
| `--fg` | `#000000` | `text-black` (Hero desc, ContactForm title, Footer titles) | Primary body/heading text |
| `--border` | `#E5E7EB` (gray-200) | `ContactForm.astro` card border, `input` underline | Card borders, form underlines |
| `--border-subtle` | `#F3F4F6` (gray-100) | `Header.astro`, `Footer.astro` hairlines | Sticky header bottom rule, footer top rule |

Color usage rule observed in source: **one accent does the interactive work everywhere** — buttons,
links, focus states, the CTA banner fill. Navy is used for *text weight*, not backgrounds (except the
tinted panels above), and never competes with blue for attention. This rule still holds with the
official §2.1 tokens: `--color-brand-blue` carries interaction, `--color-brand-navy` carries text
weight.

## 3. Typography

Source: Google Fonts `<link>` in `Layout.astro` —
`family=Raleway:wght@700&family=Space+Grotesk:wght@400;500;700;800`.

| Role | Family | Weight | Observed size | Source |
|---|---|---|---|---|
| Hero display (h1) | Space Grotesk | 800 (extrabold) | `text-5xl` → `lg:text-6xl` (48px → 60px) | `Hero.astro` |
| Section heading (h2) | Space Grotesk | 900 (black) | `text-3xl` → `lg:text-4xl` (30px → 36px) | `Features.astro`, `FeaturedWork.astro`, `CTABanner.astro`, `ContactForm.astro` |
| Body copy | Space Grotesk | 400 | 16px base | `body { font-family: 'Space Grotesk' }` |
| Button / CTA label | **Raleway** | 700, uppercase, `tracking-wider` | 14px | `.font-raleway` class — every `<button>`/CTA `<a>` |
| Footer column title | Space Grotesk | 700, uppercase, `tracking-wider` | 14px (`text-sm`) | `Footer.astro` |
| Footer legal/copyright | Space Grotesk | 400 | 10px (`text-[10px]`) | `Footer.astro` |

Rule: **Raleway never appears outside buttons.** If a design needs a CTA, it's Raleway bold uppercase
pill; everything else — including large display type — stays Space Grotesk. Do not swap this pairing
or introduce a third family.

Space Grotesk is self-hosted: real TTF files (Light 300, Regular 400, Medium 500, SemiBold 600,
Bold 700) were uploaded directly to the project, preserved in `fonts/`, and bound in
`colors_and_type.css` via `@font-face`. Raleway (buttons only) still loads from Google Fonts via
`@import` — no local Raleway file was provided. Weights 800/900 used by the hero h1 and section h2
(see table above) have no discrete local file; browsers fall back to the closest available weight
(700, Bold) rather than the CDN's variable-weight face.

## 4. Spacing

Source: Tailwind utility classes across every section component.

- **Container**: `max-w-[1440px]`, `px-6` (24px) mobile → `lg:px-[140px]` desktop. Every top-level
  section wraps content in this exact container — it is the single layout primitive of the system.
- **Section rhythm**: `py-16` (64px) is the default vertical section padding (Hero, ContactForm,
  ImageTextPanel ×3, FeaturedWork). Features steps up to `lg:py-20` (80px); the CTA banner steps up
  to `lg:py-24` (96px) since it's the page's closing emphasis moment.
- **Card padding**: `p-6` mobile → `md:p-10` desktop (ContactForm card).
- **Grid gaps**: `gap-6` → `lg:gap-8` for the 4-up feature-step grid; `gap-10` → `lg:gap-16` for
  two-column image/text panels.
- Base scale used throughout is the standard Tailwind 4/8px rhythm (`space-1` 4px … `space-16` 64px),
  captured as custom properties in `colors_and_type.css`.

## 5. Layout & Composition

- **Single-page, section-stacked marketing pages (archived source, kept for structural reference).**
  The archived landing-page codebase (`index.astro`) composed exactly one page from ordered
  sections: Header (fixed) → Hero → ContactForm → 2× ImageTextPanel
  (partners, alternating `reverse` layout) → ImageTextPanel (social proof) → FeaturedWork →
  Features → CTABanner → Footer. Each themed landing page was a re-skin of this same section order —
  when rebuilding a landing-page section from `source-evidence/`, check `content.ts` for a matching
  data shape before inventing a new section type.
- **Fixed, translucent header**: `fixed top-0`, `bg-white/95`, `backdrop-blur-sm`, 64px tall, hairline
  bottom border. Main content gets `pt-16` to clear it.
- **Two-column split** is the dominant content pattern (Hero, ImageTextPanel, FeaturedWork): text block
  capped at `max-w-[480–561px]` on one side, an illustration/graphic filling the other, alternating
  sides via a `reverse` prop rather than duplicating markup.
- **4-up card grid** for the "how it works" steps (`Features.astro`): `grid-cols-2` mobile →
  `md:grid-cols-4` desktop, each card a white rounded panel with a tinted icon roundel on top.
- Responsive breakpoint used throughout is a single `lg:` (1024px) step from Tailwind — there is no
  evidenced tablet-specific breakpoint; treat `lg:` as the desktop cut and everything below as one
  mobile/tablet range.
- The **webapp for browsing properties** (the second product surface named in the brief) has no
  captured source in this repo — it is a separate codebase not linked to this project. `ui_kits/app-react/`
  in this package therefore *applies* the landing-page system's tokens and component language to a
  plausible browse/marketplace surface; treat it as a proposal built from the same design language,
  not extracted fact — see `ui_kits/app-react/README.md` for exactly which parts are evidenced vs. applied.

## 6. Components

All patterns below are copied from real component source now preserved in `source-evidence/`.

- **Buttons** — pill (`rounded-full`), Raleway 700 uppercase, `tracking-wider`, `px-8 py-3`.
  Three variants observed:
  - Primary filled: `bg-brand-blue text-white` (ContactForm submit, FeaturedWork/CTABanner CTA)
  - On-accent (inverted): `bg-white text-brand-blue`, used only on the blue CTA banner
  - Outline: `border-2 border-brand-blue text-brand-blue`, fills solid blue on hover (Features CTA)
  - All three: `hover:opacity-90` or full color swap, `transition-all duration-300 ease-in-out`
- **Cards** — `rounded-2xl`, `border border-gray-200`, `shadow-sm`, `p-6 md:p-10` (ContactForm wrapper);
  Features step cards use the same radius/shadow at `p-6` without the border.
- **Form inputs** — no boxed input; underline-only style: `border-b border-gray-300`, transparent
  background, `focus:border-brand-blue`, label above in `font-medium`. Client-side `required` only,
  no boxed/bordered text fields anywhere in the system.
- **Navigation** — flat text links, `text-brand-navy`, `hover:text-brand-blue`, no active-state
  underline or pill background evidenced.
- **Icon roundel** — 100×100px circle, tinted background (`#E8F0FC`), centered icon, used once per
  feature step.
- **Checklist item** (FeaturedWork) — a filled blue circle with a white checkmark stroke (`stroke-width:2`,
  `stroke-linecap:round`) next to plain text — the system's only bespoke icon glyph; do not swap in a
  generic icon font for this.
- **Footer** — 2→5 column responsive grid (link columns + social column), hairline top rule, logo +
  legal/copyright block below, all secondary text in `--color-brand-muted`.
- **Mascot (Capi)** — a rendered 3D character asset, not an icon/illustration system. Used as a full
  standalone image (not tinted, not recolored, not cropped into UI chrome) to add warmth to empty
  states, hero moments, or step call-outs. Never place UI text on top of a Capi image; pair them
  side-by-side instead. See `assets/mascot/` for the preserved set and `preview/brand-assets.html` for
  usage guidance.
- **Logo system** — a horizontal lockup (`assets/logo/horizontal/`, 7 pre-rendered color variants: Azul,
  Azul Oscuro, Verde, Rojo, Amarillo, Negro, Blanco) and a standalone isotype (`assets/logo/isotypes/`,
  7 variants: Azul, Celeste, Rojo, Amarillo, Verde, Negro, Blanco — Celeste appears only at isotype
  scale, not in the current horizontal batch). Use the horizontal lockup wherever the full wordmark fits
  (header, footer, cover slides); use the isotype alone at favicon/avatar/watermark scale or wherever the
  full lockup won't fit legibly. **The default favicon is the black isotype** — `assets/logo/favicon.png`,
  a byte-for-byte copy of `assets/logo/isotypes/Isotipo Negro.png`; the older `assets/logo/favicon.svg`
  (a brand-blue rounded square from the archived source) is kept for provenance only. Pick the color variant by background, not by decoration: Negro on
  white/light surfaces, Blanco only on navy or brand-blue surfaces (never on white — it disappears), and
  the hue variants (Azul/Azul Oscuro/Celeste/Rojo/Amarillo/Verde) for themed section headers or
  partner/co-brand placements where a single flat-color mark is called for. See
  `preview/brand-assets.html` for every variant rendered on its correct contrast background.
  🟢 Construction/usage rules from the BrandBook text extraction (see Source Context): the isotype is
  built from 3 geometric primitives — a semicircle, a rectangle, and a circle — do not redraw it from
  scratch or approximate it with a different shape language. **No drop shadow** — the brand explicitly
  removed shadow from the mark as a "modernizing" gesture; never add one back. Keep a clear-space margin
  around the mark of at least 1/5 of the mark's own height on every side. Minimum legible sizes: print
  6 cm wide (horizontal) / 4 cm (vertical with wordmark) / 3 cm (vertical isotype only); digital 100 px
  wide (horizontal) / 60 px (vertical with wordmark) / 40 px (vertical isotype only) — don't render the
  logo smaller than that. A single-flat-color "pluma" version exists in the original BrandBook for
  substrates that can't reproduce color/greyscale (engraving, embossing) — out of scope for this HTML-only
  package, but relevant if this system is ever extended to print production files.
- **Icon set (official) — `assets/icons/iconset/`, 6 color layers** — 124 flat single/multi-path
  glyphs extracted from a Figma frame export. **This is Capitalizarme's official iconset for product
  UI** — use it as the default source for any icon need in new work, ahead of ad-hoc/AI-generated icons.
  🟢 The BrandBook text extraction (see Source Context) independently calls for exactly this: a
  "familia de pictogramas" with "terminaciones redondas… coherentes con el logotipo" — a rounded-terminal
  pictogram family matching the logo's construction. This corroborates the Figma-extracted set as the
  intended pictogram language, not just a found asset.
  The default/reference layer is grayscale line-art (`#010202` ink, `#B3B3B3`/`#7C7D7D` secondary fills)
  with one gold accent (`#FFB500`, matching `--color-brand-gold`) on a single icon — treat gold fills as
  an AI/premium marker if reused, consistent with §2.1's gold usage rule, not a generic accent. The same
  124-icon grid is also available pre-colored in 5 brand semantic hues, each a two-tone (primary +
  light-tint) fill matching that color's role in §2.1/§2.2: `assets/icons/iconset/verde/`
  (`#006939` / `#99C2A8`, success), `azul/` (`#106CB5` / `#9AAFD3`, primary interactive), `rojo/`
  (`#ED1847` / `#FF99B3`, alerts), `amarillo/` (`#FBAF17`/`#E59100`/`#FFE119`, AI/premium — same
  gold-usage caveat as the grayscale layer), `celeste/` (`#0169CB` / `#99C3EA`, landing-campaign accent
  per §2.2). `icon-NNN.svg` is the identical shape/position across all 6 folders — pick the folder for
  the color you need, not a different icon. Filenames are **position-indexed** (Figma's flattened export
  doesn't preserve per-icon names), but every glyph has a semantic label in
  `assets/icons/iconset/labels.json` — content name (e.g. "Send," "Property / apartment," "Calendar
  / schedule"), one of 8 categories (communication, action, navigation, status, people, commerce,
  real-estate, misc), and a confidence flag (`high` for unambiguous pictograms, `medium` for an abstract
  glyph's best visual read). Open `preview/icons-iconset.html` (color switcher + category filter) to
  browse by label/category, then reference `assets/icons/iconset/{color}/icon-NNN.svg` directly.
  `medium`-confidence labels (shown with a gold `?` in the preview) should be confirmed before adopting
  that glyph for a specific recurring use. When a glyph is adopted for a specific recurring use (a nav
  icon, a status icon, a step icon), promote it into a named file (mirroring `assets/icons/step-*.svg`)
  so future readers don't have to cross-reference the grid.

## 7. Motion & Interaction

- Standard transition timing observed: `transition-colors duration-200` (nav links),
  `transition-all duration-300 ease-in-out` (buttons), `transition-all duration-150 ease-in-out`
  (form input focus).
- No entrance animations, parallax, or scroll-triggered motion in the source — `html { scroll-behavior: smooth }`
  is the only global motion primitive (for the in-page `#contact` anchor link).
- Hover states are **opacity or full-color-swap**, never scale/transform — buttons go to `opacity-90`
  or invert fill/text color; links shift from navy to blue.
- No reduced-motion handling is present in source; since the system has no large-scale motion to begin
  with, `prefers-reduced-motion` mainly needs to disable the `smooth` scroll behavior if you add it —
  a safe, low-risk addition for any UI kit built on this system.

## 8. Voice & Brand

- Spanish (Chile), second person informal (*tú*): "Descubre hasta qué monto puedes invertir",
  "Agenda tu reunión".
- Headlines lead with the reader's benefit or action, not the company: "Agenda tu reunión y averigua
  tu capacidad de inversión", not "Capitalizarme ofrece...".
- Numbers are always concrete and sourced from real product mechanics, never rounded marketing-speak:
  "UF 1.665", "84 cuotas", "$36.000", "5 años de arriendo garantizado", "5.000 personas". When filling
  placeholder content for this system, match that specificity — no "starting from $X" without a real
  figure.
- CTA copy is consistently a verb phrase around the core action: "Agenda tu reunión", "Agenda tu
  reunión online", "Evalúate ahora agendando una reunión online", "Siguiente" (form submit).
- Legal/compliance disclaimer is present in the footer of every page ("las rentabilidades... no
  garantizan retornos futuros") — carry it into every derivative page, not just the homepage.
- Section labels use a small uppercase eyebrow above headings ("Oportunidad de Inversión" above
  "Proyectos Destacados") — Space Grotesk bold, not Raleway (Raleway is reserved for buttons only).

### 8.1 Internal tone standard (extends to any product surface with written copy)

🟢 Source: internal corporate context documentation (confidential, not included in this package) — the
defined tone for Capitalizarme's internal assistant, explicitly called "extensible a la comunicación con
brokers" — treat it as the house voice for any UI copy, not only chat:

- **"Colega experto"**: close, direct, Chilean. No unnecessary jargon, no filler, no flattery.
- **Anti-sycophancy**: never open with "¡Claro!", "¡Por supuesto!", "¡Excelente pregunta!" — go straight
  to the point.
- **Never translate rubro (industry) terms**: *pie, promesa, escritura, RPS, CFG* stay in Spanish/jargon
  as-is, even in otherwise-simplified copy.
- **Certainty calibration**: distinguish confirmed facts from general/market knowledge in copy tone —
  e.g. "en términos generales…", "históricamente en el mercado chileno…" for anything not a hard,
  sourced fact.
- **Perishable data always carries a disclaimer**: rates, stock, prices, commission figures are dated —
  UI copy showing them must show or link a freshness disclaimer (see §10 legal disclaimers below).

🟢 The following extends §8.1, sourced from the BrandBook text extraction (Werner Fett Studio, 2020/2021
— see Source Context), independent of and consistent with the internal tone doc above:

- **Creative and bold, but close and simple**: the BrandBook frames verbal identity along 3 axes —
  personality (creativo y audaz), register (cercano y vanguardista), format (simple, not simplista).
  Don't write flat/generic corporate copy, and don't over-explain — say it once, clearly.
- **First person, "tú" register**: address the reader directly and informally ("Hola, ¿cómo estás? ¿En
  qué te puedo ayudar?"), never "usted" and never a cold third-person tone.
  - Avoid: "Estimado/a", "Cordialmente", "Queridísimo", or any overly formal/protocolar closing.
- **No anglicisms that already have a Spanish word** — don't reach for an English term when a
  perfectly normal Spanish equivalent exists.
- **No slang, but colloquial is fine**: coloquial ≠ informal. Casual, warm phrasing is on-brand; internet
  slang, forced-casual openers ("Holi"), or throwaway sign-offs ("Besos") are not.
- **Email / written-response length cap**: 90–150 words, 600–800 characters for a support/info response.
  Prefer linking to the site over writing a long explanation inline — "a veces un link vale más que un
  mail."

## 9. Anti-patterns

- ❌ Don't introduce a third typeface. Space Grotesk (structure) + Raleway (buttons only) is the whole
  system.
- ❌ Don't put Raleway anywhere except button/CTA labels — not headings, not body, not nav.
- ❌ Don't add gradients, dark surfaces, or beige/cream backgrounds — every evidenced surface is flat
  white or a pale blue tint (`#EAF5FD` / `#E8F0FC`).
- ❌ Don't square off the buttons — every CTA in source is `rounded-full`. A rectangular or
  slightly-rounded button breaks the system's one recognizable UI signature.
- ❌ Don't box the form inputs. Underline-only inputs are deliberate; a bordered/filled input field is
  off-system.
- ❌ Don't recolor, crop, or flatten the Capi mascot into a 2D icon — it's a photographic 3D render and
  should always be used as a whole image, not a design element to be tinted or vectorized.
- ❌ Don't invent new section types for landing pages without checking whether `content.ts` already has
  a matching data shape — the archived source's whole point was that sections are reusable across
  themed pages via shared content contracts, and that reuse pattern still applies when rebuilding from
  `source-evidence/`.
- ❌ Don't fabricate specific investment numbers/returns beyond what's in the evidenced copy — the
  brand is compliance-conscious (see the footer disclaimer) and the real content is already concrete;
  invented stats undermine that.
- ❌ Don't treat the `ui_kits/app-react/` browse-properties kit as extracted fact — no webapp source was
  linked to this project. It's a same-language application of the landing-page tokens, not evidence.
- ❌ Don't pull Celeste, Rojo, Amarillo, Verde, or Azul Oscuro from the logo variant set into UI chrome
  (buttons, backgrounds, status colors). Those hues exist only as pre-rendered logo lockup colors for
  background contrast — the product UI's interactive accent stays the official brand-blue (`#106CB5`),
  per §1/§2.1. This applies to `assets/logo/horizontal/` the same as `assets/logo/isotypes/` — the
  embedded ink colors (e.g. azul `#0069CB`) are close to but distinct from the §2.1 tokens and are not a
  token source.
- ❌ Don't place the Blanco (white) logo or isotype variant on a white/light surface — it was uploaded
  specifically for dark/navy/brand-blue backgrounds and is invisible on light ones.
- ❌ Don't add a drop shadow to the logo/isotype in any placement. The brand explicitly removed it as a
  deliberate modernization — see §6 Logo system.
- ❌ Don't use "Capitalizarme.com" (domain-suffixed) as the brand name in new copy or lockups. The
  archived 2020/2021 BrandBook uses "CAPITALIZARME.COM" throughout as the formal name, but current brand
  usage — including this package's existing logo/isotype files and the newer 2026 "sin com" lockup batch
  — drops the ".com" suffix. Treat the domain-suffixed form as historical/deprecated naming, not a style
  to reproduce.
- ❌ Don't use `#0169CB` / `#11224C` (the archived landing-page source's campaign colors) as the
  platform's primary brand accent for new product surfaces — the official identity is `#106CB5` (blue)
  on `#25397F` (navy), per the 2021 branding guidelines in §2.1. Those campaign values stay valid only
  for reproducing `source-evidence/` landing components pixel-for-pixel.
- ❌ **Never guarantee profitability, appreciation, or returns in any copy** — this is a hard compliance
  rule: the broker is solidarily liable under Chilean consumer law (Ley 19.496 Art. 43) for what's
  promised to a client. Write "históricamente…" / "según fundamentos…", never "garantizado" /
  "asegurado" next to a return figure.
- ❌ Don't invent specific investment figures — comisiones, plazos, tasas, cifras de stock — that aren't
  sourced from real data. Use an honest placeholder (`—`, "dato no confirmado") instead of a plausible-
  looking fake number; this system's brand voice explicitly treats invented data as a client-harming
  error (§8.1).
- ❌ Don't show internal routing emails or personal names anywhere a broker or client could see them
  (contact/support UI, escalation flows). Surface only the **area/department name** — internal routing
  details are confidential.
- ❌ Don't depict "arriendo garantizado" (guaranteed rent) as a Capitalizarme benefit. It's a
  **developer promotion** that Capitalizarme only surfaces on the marketplace, time-bound per project —
  label it as such if it appears in any product UI, never as a permanent platform guarantee.
- ❌ Don't build a report or printable/paginated document without paged.js (see §10). A manually
  scripted print stylesheet, an absolutely-positioned "fake pages" hack, or a single scrolling page
  standing in for a report is off-system for any report deliverable.
- ❌ Don't build a Capitalizarme slide deck or keynote without reveal.js (see §11). A hand-rolled
  scale-to-fit script, a custom keyboard/nav handler, or a single scrolling page standing in for a deck
  is off-system for any presentation deliverable.
- ❌ Don't render a chart, graph, or data visualization with hand-drawn SVG/canvas, a third-party
  charting library other than Chart.js, or a static image of a chart (see §12). Every chart must be a
  live Chart.js instance bound to this system's tokens.
- ❌ Don't hand-roll layout/utility CSS or reach for a different CSS framework when building a web
  surface (see §13). Every landing page, app screen, dashboard, or prototype built from this system
  must be styled with Tailwind CSS, with this system's tokens bound into its theme — not ad-hoc classes
  in a `<style>` block and not Bootstrap/Bulma/plain-CSS-from-scratch.
- ❌ Don't build a Capitalizarme video, animated brand intro, or motion presentation without Hyperframes
  (see §14). A hand-rolled CSS-keyframe/canvas animation timeline, a different video-generation tool, or
  a static image sequence standing in for a video is off-system for any video deliverable.

## 10. Reports & Print Documents

Rule: **every Capitalizarme report, business summary, or printable/paginated document must be built
with [paged.js](https://pagedjs.org)** — not a hand-rolled print stylesheet, not absolutely-positioned
"fake page" divs, not a single scrolling page standing in for a paginated document. This covers
investor reports, commission/broker statements, project performance summaries, KPI/business-overview
decks exported to print, and any other PDF-bound deliverable.

- Load the paged.js polyfill (`<script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>`)
  and paginate with real CSS `@page` rules — margins, running headers/footers, page counters — instead
  of faking page breaks with fixed-height divs.
- **Default page size is US Letter (`8.5in × 11in`)**, not A4. Set `@page { size: 8.5in 11in; margin: ... }`
  unless the brief explicitly asks for A4 or another format. A prior report on this system used A4 before
  this rule was set — treat that as a one-off, not the default to copy forward.
- Bind this system's tokens into the report: load `colors_and_type.css`, use the official §2.1 palette,
  and keep the Space Grotesk (structure) / Raleway (buttons/CTA only — reports rarely need Raleway at
  all) split. A report is still Capitalizarme-branded, not a generic print template.
- Charts, tables, and KPI tiles reuse this system's spacing, radius, and color tokens (§4 Spacing,
  §6 Components) rather than inventing a separate visual language for print, and every chart is a live
  Chart.js instance per §12 — not a static image or a hand-drawn SVG.
- Reference shape: a prior paged.js business report on this system ran cover → table of contents → KPI
  tile section → chart pages → data-table pages, as an 11-page document with self-hosted Space
  Grotesk, the official 2021 palette, and real logo/mascot assets (that report predates the US Letter
  default and used A4 — new reports should use US Letter). Treat cover → TOC → KPI → charts → tables as
  the default starting shape for a new report unless the brief calls for something else.

## 11. Slide Decks & Presentations

Rule: **every Capitalizarme slide deck, keynote, or presentation must be built with
[reveal.js](https://revealjs.com)** — not a hand-rolled scale-to-fit script, not a custom keyboard/nav
handler, not a single scrolling page standing in for a deck. This covers investor pitch decks, business
overview decks, broker/partner presentations, and any other keynote-style deliverable.

- Load reveal.js from CDN (`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js/dist/reveal.css">`
  plus the `reveal.js` script) and structure slides as `<section>` elements inside
  `<div class="reveal"><div class="slides">…</div></div>` — reveal.js owns navigation, keyboard handling,
  fragment reveals, and scaling; don't reimplement any of it.
- Bind this system's tokens into the deck theme instead of using a stock reveal.js theme unmodified: set
  reveal.js's CSS custom properties (or override `.reveal` styles) to the official §2.1 palette, Space
  Grotesk for headings/body, and Raleway bold-uppercase for any on-slide CTA/button element.
- Buttons, cards, and icon usage inside slides follow the same rules as everywhere else in this system —
  pill buttons, the official iconset (§6), Capi used as a whole image never recolored.
- Charts embedded in slides are live Chart.js instances (§12) bound to this system's tokens, not static
  images pasted into a slide.

## 12. Charts & Data Visualization

Rule: **every chart, graph, or data visualization must be a live [Chart.js](https://www.chartjs.org)
instance** — not hand-drawn SVG/canvas, not a different charting library, not a static image of a chart.
This covers charts inside reports (§10), slide decks (§11), dashboards, and any other product surface.

- Load Chart.js from CDN (`<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`) and render
  into a real `<canvas>` bound by a `Chart()` instance — not a static export or a screenshot.
- Bind this system's tokens into chart color scales instead of Chart.js defaults: Space Grotesk for axis
  labels and legends, and the same border/radius language as cards elsewhere in the system where Chart.js
  options allow it (tooltip corner radius, grid line color from `--border`).
- Never guarantee or imply investment outcomes through chart framing (e.g. don't extrapolate a trend
  line into "projected returns") — this is the same compliance rule as §9's anti-pattern on guaranteed
  returns, and applies to data visualization just as much as to copy.

### 12.1 Pick the form before the color

Decide what the data's job is before touching Chart.js options — the job picks the chart type, and
sometimes the right answer isn't a chart at all:

| The data is… | Use | Not |
|---|---|---|
| A single current KPI (+ maybe a trend) | Stat tile (value + delta + sparkline) | A one-bar bar chart |
| A handful of headline numbers (e.g. commission YTD, active brokers, projects live) | A KPI row of stat tiles | A grouped bar chart |
| Compare magnitude across categories (units sold per project, commission per broker) | Bar / column; heatmap for a grid | — |
| Trend over time (monthly "promesas" signed, commission accrual) | Line; area for a single series | — |
| Tell distinct series apart (Marketplace vs. Broker Center activity) | Grouped/stacked bar, multi-line | — |
| One series is the point, the rest are context | Emphasis (highlight one series, gray the rest) | Coloring every series equally |
| Above/below a target or baseline | Diverging bar, or line vs. baseline | — |
| Part-to-whole (commission split by actor: Capitalizarme / MBP / BP / broker) | Stacked bar | A pie past 3–4 slices |

Sequential (one hue, more-is-darker) is the safe default for plain magnitude comparisons — reach for
categorical color only when the series identity itself is the story.

### 12.2 Color by job, using this system's tokens — not by decoration

Every chart color does exactly one job. Map each job to a token family already defined in this system
instead of inventing new hex values:

| Job | What it encodes | Capitalizarme tokens to use |
|---|---|---|
| **Sequential** (magnitude) | how much | one hue, light→dark steps of `--color-brand-blue` (the default — safe, legible, hard to misread) |
| **Categorical** (identity) | which series | fixed order: `--color-brand-blue`, `--color-brand-navy`, `--color-brand-purple` — see cap below |
| **Diverging** (polarity) | above/below a baseline | `--color-brand-blue` (positive arm) vs. `--color-brand-red-dark` (negative arm), neutral gray (`--color-slate`) at the midpoint |
| **Status** (state) | good → critical | `--status-success` (green), `--status-warning`, `--status-danger` (red) — reserved, never reused as "series N" |

**Gold and green/red are reserved, not general-purpose categorical hues.** Per §2.1, gold
(`--color-brand-gold`) marks AI/premium moments and red/green are the status pair — pulling them into a
plain multi-series chart as decoration (e.g. "series 3 happens to be green") overloads a meaning this
system already assigned elsewhere. That leaves **three** genuinely neutral categorical hues (blue, navy,
purple) — a real constraint, not an oversight. Past 3–4 series: fold the tail into "Other," split into
small multiples, or use direct labels + a single accent hue (emphasis form) instead of stretching the
palette into colors it doesn't have. Never generate a new hue to cover a missing slot.

**Never cycle or reorder categorical assignment.** A given series (e.g. "Marketplace") keeps the same
color across every chart in a document — a legend/filter that changes which series are visible must not
repaint the survivors into different colors.

**One axis, always.** Never a dual-axis (two y-scales) chart — two measures of different scale become two
charts, small multiples, or one indexed to a common base instead.

### 12.3 Marks, labels, and legend

- Bars/columns: capped thickness (don't fill the whole slot), flat baseline; lines: 2px; markers: ≥8px.
  Gridlines are a hairline, one step off the surface color (`--border`), never dashed.
- A legend is always present for 2+ series (a single-series chart needs none — the title already names
  it). Direct-label sparingly — the endpoint, the extreme, or the one series the story is about, not a
  number on every point.
- **Text never wears the series color.** Axis labels, legends, and values stay in text tokens
  (`--fg`, `--color-brand-muted`) — a light hue (gold, a tint) is illegible as text on `--bg`/`--surface`.
  Identity comes from the colored mark beside the label, never from coloring the text itself.
- Status colors always pair with an icon + label, never color alone — the same rule as any status pill
  elsewhere in this system.

### 12.4 Before shipping a new categorical order

If a chart genuinely needs to introduce a new series color beyond the three neutral hues in §12.2 (a
rare case — prefer folding into "Other" or small multiples first), validate it for colorblind
accessibility before shipping rather than eyeballing it. `dataviz`'s
`scripts/validate_palette.js` runs the standard six checks (fixed hue order, lightness band, chroma
floor, CVD separation, contrast, documented-palette-only) — use it, don't guess.

## 13. Styling & CSS Framework

Rule: **every Capitalizarme web surface must be built with [Tailwind CSS](https://tailwindcss.com)** —
not hand-rolled layout/utility CSS in a `<style>` block, not a different CSS framework (Bootstrap,
Bulma, Material). This covers landing pages, marketing sections, app/product screens, dashboards, and
any other HTML-based prototype or deliverable built from this system. This matches the archived source
codebase itself, which was Astro + **Tailwind v4** (`@theme` tokens) — see §2.2 and Source Context.

- Load Tailwind via the Play CDN (`<script src="https://cdn.tailwindcss.com"></script>`) for
  single-file HTML deliverables, or via a real Tailwind build step when the project already has one
  (e.g. an Astro/Vite/Next codebase). Use Tailwind utility classes for layout, spacing, typography, and
  responsive behavior instead of writing equivalent rules by hand.
- **Bind this system's tokens into Tailwind's theme**, don't just use Tailwind's stock palette/scale
  alongside unrelated brand colors. With the Play CDN, configure `tailwind.config` inline:
  ```html
  <script>
    tailwind.config = {
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
    };
  </script>
  ```
  Still load `colors_and_type.css` alongside Tailwind for the `@font-face` bindings (self-hosted Space
  Grotesk) and any component classes (`.btn`, `.card`, `.input-underline`) — Tailwind utilities and
  this system's token classes are complementary, not a replacement for each other.
- Component shape rules from §6 still apply regardless of Tailwind usage: pill buttons (`rounded-full`),
  underline-only inputs (no `border` box), `rounded-2xl` cards — express them as Tailwind utility classes
  bound to the brand tokens above (`bg-brand-blue text-white rounded-full px-8 py-3`), not Tailwind's
  default blue/gray palette.
- Reports (§10), slide decks (§11), and charts (§12) are governed by their own dedicated tools
  (paged.js, reveal.js, Chart.js respectively) and don't need Tailwind for their pagination/navigation/
  rendering internals — but any surrounding layout markup in those deliverables (cover pages, slide
  content, dashboard chrome around a chart) should still use Tailwind utilities bound to this system's
  tokens rather than hand-written CSS.

## 14. Video & Motion Content

Rule: **every Capitalizarme video, animated brand intro, product walkthrough, or motion presentation
must be built with Hyperframes** — not a hand-rolled CSS-keyframe or canvas animation timeline, not a
different video-generation tool, and not a static image sequence standing in for a video. This covers
investor/brand intro videos, product walkthroughs, social/marketing motion content, and any other
video-format deliverable.

- Use Hyperframes as the tool/method for composing and rendering the video — don't reimplement scene
  timing, transitions, or playback control by hand when Hyperframes already owns that.
- Bind this system's tokens into every scene instead of generic stock styling: the official §2.1
  palette, Space Grotesk (structure) / Raleway (CTA/button moments only), pill-shaped UI elements, the
  official iconset (§6), and Capi used as a whole image, never recolored or flattened.
- Use the full specified/expected duration with real production effort and dynamic content — don't
  finish early or pad a short runtime with a single static hold; a prior brand-intro attempt on this
  system was rejected for underusing its duration and reading as boring.
- Never guarantee or imply investment outcomes through video framing (return figures, growth curves,
  success narratives without a source) — the same compliance rule as §9's anti-pattern on guaranteed
  returns applies to video content just as much as to copy and charts.
