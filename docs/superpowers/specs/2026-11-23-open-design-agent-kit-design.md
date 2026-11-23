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
- `colors_and_type.css` is the single token source of truth; `tokens.css` must
  derive from it (`@import`), not fork values.
- `brand.json` is referenced by `CHANGELOG.md` and `preview/`; preserve every
  existing fact.
- `DESIGN.md` §§1–9 already match the kit's required outline — leave as-is.

## Approaches considered
1. **Rename** `colors_and_type.css` → `tokens.css`. Rejected: breaks ~40
   references across `ui_kits/*`, README, and `global.css`.
2. **Create** `.open-design/design-systems/capitalizarme/` here. Rejected:
   duplicates `DESIGN.md`/`brand.json`/assets; that folder is a consumer-side
   deployment location, and this repo is the package.
3. **Root `tokens.css`** (`@import` + aliases) + **in-place `brand.json`** +
   **docs**. **Chosen.**

## Decided how
- Add root `tokens.css`: `@import "./colors_and_type.css";`, then a `:root`
  block adding `--motion-fast`/`--motion-base` (from `--duration-*`) and
  `--elev-*` (from `--shadow-*`) aliases.
- Convert `brand.json`: add `version: 1` and `kind: "own"`; map `logo` →
  `marks`, `typography` → `fonts`, keep `imagery`/mascot facts intact.
- Add `docs/open-design-agent-kit.md` plus a short README pointer.

## Left to the builder
Exact `--elev-*`/`--motion-*` value mapping, doc wording, and README placement.
