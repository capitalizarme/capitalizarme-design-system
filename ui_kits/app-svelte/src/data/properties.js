// Copy specificity (UF price, cuotas, pie, plazo) mirrors source-evidence/src/data/content.ts —
// never generic "Property 1 / Property 2" filler, per DESIGN.md §9. Same 3 listings as
// ui_kits/app-react/components/PropertyGrid.jsx and ui_kits/app-astro/src/data/properties.ts.
export const properties = [
  {
    slug: 'vista-las-condes',
    label: 'Oportunidad de Inversión',
    title: 'Edificio Vista Las Condes',
    subtitle: 'Departamentos desde UF 1.665',
    checks: ['Hasta 84 cuotas', 'Pie desde $36.000', '5 años de arriendo garantizado'],
  },
  {
    slug: 'parcelas-alto-colina',
    label: 'Proyecto Nuevo',
    title: 'Parcelas Alto Colina',
    subtitle: 'Terrenos desde UF 980',
    checks: ['Sin pie', 'Urbanización incluida', 'Entrega inmediata'],
  },
  {
    slug: 'bodegas-industrial-sur',
    label: 'Renta Garantizada',
    title: 'Bodegas Industrial Sur',
    subtitle: 'Bodegas desde UF 520',
    checks: ['Arriendo garantizado 3 años', 'Acceso 24/7', 'Financiamiento directo'],
  },
];
