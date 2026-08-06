# ui_kits/app/ — kit index (not a fourth kit)

This folder is a **hub page**, not another implementation of the applied "browse properties /
mensajes" concept. It exists so `ui_kits/app/index.html` resolves to something real; the actual
applied kits, each with a full `components/` directory, live in their own named sibling folders:

- [`../app-react/`](../app-react/README.md) — React + Babel-standalone, CDN-loaded, zero build
  step. `App.jsx` composes `Header.jsx`, `Sidebar.jsx`, `SimulatorBanner.jsx`, `FilterBar.jsx`,
  `PropertyGrid.jsx`, `AdvisorList.jsx`, `ChatArea.jsx`, `MessageBubble.jsx`, and `InputBar.jsx`.
  Opens directly as a static HTML file — the fastest way to preview the concept.
- [`../app-astro/`](../app-astro/README.md) — real `.astro` + Tailwind components (same role set:
  Header, Sidebar, SimulatorBanner, FilterBar, PropertyGrid, AdvisorList, ChatArea, MessageBubble,
  InputBar), matching the archived source's actual stack. Needs a Node/Astro build step.
- [`../app-svelte/`](../app-svelte/README.md) — the same components again as real `.svelte` files
  with idiomatic Svelte reactivity. Needs a Node/Vite build step.

## Structure

```
ui_kits/app/
├── index.html   — the hub itself: loads ../../colors_and_type.css, links to the three kits above,
│                   no components of its own
└── README.md    — this file
```

## Usage

Open `index.html` first if you're deciding which kit to reach for — it links straight to each
kit's `index.html` (or README, for the two that need a build step). If you already know your
target stack, skip the hub and go straight to the matching folder: copy or compose the
`components/` files there directly (e.g. `App.jsx` importing `Sidebar.jsx` and `ChatArea.jsx` in
`app-react/`, or the equivalent `.astro`/`.svelte` files in the other two) into your own project.

## Design notes

All three linked kits share one design source: the same tokens (`../../colors_and_type.css`), the
same real listing/advisor copy, and the same component shapes and layout patterns applied from
`../../source-evidence/capitalizarme-boilerplate-html/components/*.astro`. Only the implementation stack differs — see each
kit's own README for its specific structure, usage workflow, and design notes.

## Source basis

- `../../DESIGN.md` §9 — why none of the three kits should be read as extracted product fact
- `../../source-evidence/capitalizarme-boilerplate-html/components/*.astro` — the real components each kit's sections are applied from
- `../../colors_and_type.css` — every token consumed by all three kits
