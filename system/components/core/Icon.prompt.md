One-line: the official iconset wrapper — the default source for any icon need, ahead of any CDN icon library.

```jsx
<Icon id="116" size={28} label="Departamento" basePath="../../../assets/icons/iconset" />
<Icon id="119" size={28} label="Broker" />
```

- Filenames are position-indexed; look the meaning up in `assets/icons/iconset/labels.json`.
- All 124 glyphs × 6 color layers ship in this repo. Gold glyphs read as AI/premium, not warning.
- Set `basePath` to the relative path from your page to `assets/icons/iconset`.
- Sizes by `max-width`/`max-height` with `width`/`height: auto`, not a forced square box — several
  glyphs in this set aren't square, and forcing both dimensions to `size` stretches them.
