One-line: renders the real logo file — the brand name is never set as text in any deliverable.

```jsx
<Logo height={28} basePath="../../../assets/logo" />                {/* negro, light surfaces */}
<Logo color="blanco" basePath="../../../assets/logo" />              {/* navy or brand-blue surfaces only */}
<Logo variant="isotype" color="azul" height={40} />
```

- Never add a drop shadow; the brand deliberately removed it.
- Keep clear space of at least 1/5 of the mark's height on every side.
- Don't pull the hue variants' ink colours into UI chrome — they are logo colours, not tokens.
- Never wrap the mark in a white tile/badge to force contrast on a dark surface — `color="blanco"`
  already exists for exactly that case (DESIGN.md §9 Anti-patterns).
