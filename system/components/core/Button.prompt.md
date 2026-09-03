One-line: the brand's pill CTA — use it for every action label, never a squared or slightly-rounded button.

```jsx
<Button href="#contact">Agenda tu reunión</Button>
<Button variant="outline">Ver detalle</Button>
<Button variant="onAccent">Agenda tu reunión online</Button>  {/* only on a blue/navy surface */}
```

- Labels are Spanish verb phrases ("Agenda tu reunión", "Siguiente", "Ver detalle").
- Hover is opacity 0.9, or a full fill/text swap for `outline` — never scale or transform.
- `disabled` drops opacity only; it never loses the pill shape.
