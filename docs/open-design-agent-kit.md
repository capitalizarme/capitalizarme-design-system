# Using this design system with open-design-agent-kit

## 1. What the kit is

[open-design-agent-kit](https://github.com/feimacode/open-design-agent-kit) packages the
Open Design workflow for coding agents (Claude Code, Codex, any MCP host): it lets an agent pick an
active design system, read its rules, paste its tokens into what it builds, and lint the result
against the brand. It reads the same design-system contract as Open Design — a `DESIGN.md`, a
`tokens.css` and a `brand.json` — so this package plugs in without a fork.

## 2. How this package maps to the kit

| Kit file | This package | Notes |
|---|---|---|
| `DESIGN.md` | [`DESIGN.md`](../DESIGN.md) | §§1–9 are exactly the kit's required outline (Visual Theme, Color, Typography, Spacing, Layout, Components, Motion, Voice, Anti-patterns). §§10–15 (print, slides, charts, CSS framework, video, quick-start) are additive and harmless to the kit. |
| `tokens.css` | [`tokens.css`](../tokens.css) — **generated** | Declares all 56 tokens of the kit's contract in one self-contained `:root` block: no `@import`, every `var()` target declared in the same block. It must be self-contained because agents paste that block alone into a single `<style>`. Generated from [`colors_and_type.css`](../colors_and_type.css), which stays the source of truth (and the file every existing page imports). |
| `brand.json` | [`brand.json`](../brand.json) | `version: 1`, `kind: "own"` — so the kit treats it as the user's own brand and recommends it first. `marks` (a `logo*` role) feeds the `brand-mark-missing` lint; `descriptor` feeds the kit's design-system recommender; `fonts` documents where the faces load from. The `brand-off-palette` and `brand-font` lints read colours and `--font-*` families from `tokens.css`, not from `brand.json`. All pre-existing keys (`logo`, `typography`, `imagery`, mascot samples) are kept; the kit passes unknown keys through. |

## 3. Contract-token aliases

`tokens.css` contains every source `:root` declaration verbatim, then appends the contract tokens
the source does not define. Each is an alias of a source token, or a literal marked **DERIVED**
(no direct brand evidence — a reasoned default):

| Kit token | Value in `tokens.css` |
|---|---|
| `--surface-warm` | `var(--surface)` |
| `--fg-2` | `var(--fg)` |
| `--meta` | `var(--muted)` |
| `--border-soft` | `var(--border-subtle)` |
| `--accent-on` | `var(--accent-contrast)` |
| `--accent-hover` / `--accent-active` | `color-mix(in oklab, var(--accent), black 8%)` / `14%` — DERIVED (kit fallbacks) |
| `--success` / `--warn` / `--danger` | `var(--status-success)` / `var(--status-warning)` / `var(--status-danger)` |
| `--font-mono` | `ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Monaco, Consolas, monospace` — DERIVED (the brand has no mono face) |
| `--leading-body` | `1.5` (the body rule in `colors_and_type.css`) |
| `--leading-tight` | `1.1` — DERIVED |
| `--tracking-display` | `0` — DERIVED (headings are untracked) |
| `--space-5` | `20px` — DERIVED |
| `--radius-lg` | `var(--radius-md)` (16px is the largest evidenced radius) |
| `--elev-flat` / `--elev-ring` / `--elev-raised` | `none` / `0 0 0 1px var(--border)` / `var(--shadow-sm)` |
| `--motion-fast` / `--motion-base` | `var(--duration-fast)` / `var(--duration-base)` |
| `--section-y-desktop` / `-tablet` / `-phone` | `var(--section-py-lg)` / `var(--section-py)` / `var(--section-py)` |
| `--container-gutter-desktop` / `-tablet` / `-phone` | `var(--container-pad-lg)` / `var(--container-pad)` / `var(--container-pad)` |

**`--focus-ring` differs between the two files.** The kit applies `--focus-ring` as a
`box-shadow`; `colors_and_type.css` uses it as an outline *color*
(`outline: 2px solid var(--focus-ring)`). So `tokens.css` replaces the source declaration in place
with `0 0 0 2px var(--bg), 0 0 0 4px var(--color-brand-blue)` — the same look as the source's 2px
outline at a 2px offset. `colors_and_type.css` keeps its color meaning; don't load both files on the
same page and expect `--focus-ring` to agree.

`tokens.css` carries no `@font-face`/`@import`, so it does not load Space Grotesk or Raleway by itself.
The kit leaves font loading to the agent; agents can load the faces from the `fonts[].stylesheet`
Google Fonts URLs in `brand.json` (or `colors_and_type.css`'s `@import`).

## 4. Install in a consumer project

The kit reads design systems from the consumer project, not from this package repo:

1. Copy `DESIGN.md`, `tokens.css`, `brand.json` and `assets/` into
   `.open-design/design-systems/capitalizarme/` in the consumer project. Keep `assets/` beside
   `brand.json` — mark paths are package-relative.
2. The kit lists it as `user:capitalizarme`. Activate it by asking the agent
   "use the capitalizarme design system" (the kit's `set_active_design_system` tool).
3. Commit `.open-design/config.json` (and the `design-systems/capitalizarme/` folder) to share the
   active design system with the rest of the team.

## 5. Host setup

- **Claude Code:**
  ```
  /plugin marketplace add feimacode/open-design-agent-kit
  /plugin install open-design
  ```
- **Codex:** `npx @feimacode/open-design-agent-kit init --tools codex`
- **Any MCP host, including Pi:** register the stdio server in the consumer project's `.mcp.json`:
  ```json
  {
    "mcpServers": {
      "open-design": {
        "command": "npx",
        "args": ["-y", "@feimacode/open-design-agent-kit-mcp"]
      }
    }
  }
  ```
  This is documentation only — this package repo does not register the kit server in its own
  `.mcp.json`.

## 6. Maintaining

- Edit tokens in `colors_and_type.css` only. Never hand-edit `tokens.css`.
- Regenerate after any token change: `npm run build:tokens`.
- Before a release: `npm run check:tokens` (fails if `tokens.css` is missing or stale) and
  `npm test` (generator + `brand.json` schema tests).
- If a future source token takes one of the contract-addition names (e.g. `--meta`), the build
  fails on purpose: remove that entry from `CONTRACT_ADDITIONS` in
  [`scripts/build-tokens.mjs`](../scripts/build-tokens.mjs) so the source value wins.
