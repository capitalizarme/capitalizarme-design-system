One-line: the sticky top bar for any Capitalizarme page or app surface.

```jsx
<SiteHeader
  assetBase="../../../assets"
  links={[{ label: 'Inicio', href: '#' }, { label: 'Cómo funciona', href: '#features' }]}
  cta="Agenda tu reunión"
/>
```

64px tall, white/95 with a 4px blur and a gray-100 hairline. Uses the repo's `.container` layout
helper (`colors_and_type.css`), so load that stylesheet on the consuming page. Give the page
`padding-top: var(--header-h)`.
