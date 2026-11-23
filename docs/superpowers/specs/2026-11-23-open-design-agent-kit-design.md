# Open Design Agent Kit compatibility — consolidation

**Date:** 2026-11-23
**Status:** Approved (approach + short design)

## Intent & why
Make this design-system package consumable by `open-design-agent-kit`
(github.com/feimacode/open-design-agent-kit) without breaking the ~40 existing
imports of `colors_and_type.css`, and document the wiring.

## Goals / Non-goals / Anti-goals
- **Goal:** kit-contract `tokens.css`, kit-schema `brand.json`
  (`version: 1`, `kind: "own"`), motion/elevation token aliases, and a kit
  integration doc.
- **Non-goal:** register the kit's MCP server in `.mcp.json` (documented, not
  executed).
- **Anti-goal:** rename `colors_and_type.css` (breaks `ui_kits/*`, README,
  `global.css`); hard-code a `.open-design/design-systems/…` folder in this
  package repo (that's a consumer-side deployment).

## Constraints
- `colors_and_type.css` is the single token source of truth; `tokens.css` is
  generated from it, never forked or hand-edited.
- `tokens.css` must declare all 56 names in the kit's `TOKEN_SCHEMA` and be
  self-contained (no `@import`, every `var()` target declared in the block).
- No new npm dependencies; the generator is plain Node (v24 available).
- `brand.json` is referenced by `CHANGELOG.md` and `preview/`; preserve every
  existing fact.
- `DESIGN.md` §§1–9 already match the kit's required outline — leave as-is.

## Approaches considered
1. **Rename** `colors_and_type.css` → `tokens.css`. Rejected: breaks ~40
   references across `ui_kits/*`, README, and `global.css`.
2. **Create** `.open-design/design-systems/capitalizarme/` here. Rejected:
   duplicates `DESIGN.md`/`brand.json`/assets; that folder is a consumer-side
   deployment location, and this repo is the package.
3. **Root `tokens.css`** + **in-place `brand.json`** + **docs**. **Chosen.**

### Revision (2026-11-23, after reading the kit's real schema)
The kit's token contract (`packages/core/src/vendored/designTokenSchema.ts`,
vendored from open-design v0.22.2) requires every `tokens.css` to declare
**every A1 + A2 + B-slot token** (56 names), because agents paste one `:root`
block into a single `<style>` with no cascade. An `@import`-based `tokens.css`
pastes as empty tokens. Options re-presented: generated self-contained (chosen
by user), `@import` + aliases, hand-written standalone.

## Decided how
- `tokens.css` is **generated** by `scripts/build-tokens.mjs` from
  `colors_and_type.css`: one standalone `:root` block = every source `:root`
  declaration verbatim (so internal `var()` chains resolve inside the block) +
  the kit-contract tokens the source lacks, defined as aliases of source
  tokens. No `@import`. `--check` mode fails on drift. Never hand-edited.
- `--focus-ring` is overridden in `tokens.css` to a box-shadow value (the
  kit uses it as `box-shadow`; the source uses it as an outline color).
  `colors_and_type.css` keeps its color meaning. The generator replaces the
  source declaration in place rather than emitting a duplicate.

### Contract-token mapping (my call; every value is an alias or a marked DERIVED literal)
| Kit token | Value in `tokens.css` |
|---|---|
| `--surface-warm` | `var(--surface)` (B-slot default) |
| `--fg-2` | `var(--fg)` (B-slot default) |
| `--meta` | `var(--muted)` |
| `--border-soft` | `var(--border-subtle)` |
| `--accent-on` | `var(--accent-contrast)` |
| `--accent-hover` / `--accent-active` | kit fallbacks: `color-mix(in oklab, var(--accent), black 8%)` / `14%` — DERIVED |
| `--success` / `--warn` / `--danger` | `var(--status-success)` / `var(--status-warning)` / `var(--status-danger)` |
| `--font-mono` | kit fallback stack — DERIVED (brand has no mono face) |
| `--leading-body` | `1.5` (body rule in `colors_and_type.css`) |
| `--leading-tight` | `1.1` — DERIVED unless DESIGN.md §3 states one |
| `--tracking-display` | `0` — DERIVED (headings untracked) |
| `--space-5` | `20px` — DERIVED |
| `--radius-lg` | `var(--radius-md)` (16px is the largest evidenced radius) |
| `--elev-flat` / `--elev-ring` / `--elev-raised` | `none` / `0 0 0 1px var(--border)` / `var(--shadow-sm)` |
| `--focus-ring` | `0 0 0 2px var(--bg), 0 0 0 4px var(--color-brand-blue)` (matches the 2px outline + 2px offset) |
| `--motion-fast` / `--motion-base` | `var(--duration-fast)` / `var(--duration-base)` |
| `--section-y-desktop` / `-tablet` / `-phone` | `var(--section-py-lg)` / `var(--section-py)` / `var(--section-py)` |
| `--container-gutter-desktop` / `-tablet` / `-phone` | `var(--container-pad-lg)` / `var(--container-pad)` / `var(--container-pad)` |

### `brand.json` (in place)
- Add `version: 1`, `kind: "own"` (the kit ignores a brand.json without
  `kind` — `parseBrandRecord` returns undefined).
- Add `marks` from `logo`: Negro horizontal → `logo`, Blanco horizontal →
  `logo-on-dark` (`seenOn: "#25397f"`), Negro isotype → `icon`,
  `assets/logo/favicon.png` → `touch-icon`. Paths stay package-relative.
- Add `fonts`: Space Grotesk (300–700) and Raleway (700), `source: "google"`,
  `licence: "free"`, `stylesheet` = the Google Fonts URL.
- Add `descriptor`: moods `corporate`, `friendly`; industries `finance`;
  surfaces `web`, `mobile`, `print`, `slides`.
- Add `imagery.hero: "3d"` and `imagery.icons: { set: "custom" }` alongside
  the existing `style`/`subjects`/`treatment` keys (kit spreads unknown keys).
- Keep `name`, `logo`, `typography`, `colors`, and every mascot entry.

### Docs
- `docs/open-design-agent-kit.md`: what the kit is; how this package maps to
  its contract (DESIGN.md §§1–9, generated `tokens.css`, `brand.json`); how a
  consumer installs it as `user:capitalizarme` under
  `.open-design/design-systems/capitalizarme/` and activates it; host setup
  incl. Pi via the generic stdio MCP server
  (`npx -y @feimacode/open-design-agent-kit-mcp`); how to regenerate/check
  `tokens.css`.
- README: a short pointer section; CHANGELOG entry under a new MINOR version.

## Left to the builder
Doc wording, README placement, the generator's internal structure.
