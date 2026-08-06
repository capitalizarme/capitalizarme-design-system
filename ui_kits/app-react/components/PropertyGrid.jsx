// PropertyGrid — applied from Features.astro / FeaturedWork.astro. Copy specificity (UF price,
// cuotas, pie, plazo) mirrors the real pattern in source-evidence/capitalizarme-boilerplate-html/data/content.ts, never
// generic "Property 1 / Property 2" filler — see DESIGN.md §9.
const PROPERTIES = [
  {
    label: 'Oportunidad de Inversión',
    title: 'Edificio Vista Las Condes',
    subtitle: 'Departamentos desde UF 1.665',
    checks: ['Hasta 84 cuotas', 'Pie desde $36.000', '5 años de arriendo garantizado'],
  },
  {
    label: 'Proyecto Nuevo',
    title: 'Parcelas Alto Colina',
    subtitle: 'Terrenos desde UF 980',
    checks: ['Sin pie', 'Urbanización incluida', 'Entrega inmediata'],
  },
  {
    label: 'Renta Garantizada',
    title: 'Bodegas Industrial Sur',
    subtitle: 'Bodegas desde UF 520',
    checks: ['Arriendo garantizado 3 años', 'Acceso 24/7', 'Financiamiento directo'],
  },
];

function PropertyCheckItem({ text }) {
  return (
    <li className="check-item">
      <svg width="18" height="18" viewBox="0 0 25 25" aria-hidden="true">
        <circle cx="12.5" cy="12.5" r="12.5" fill="var(--accent)" />
        <path d="M7 12.5l3.5 3.5 7-7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{text}</span>
    </li>
  );
}

function PropertyCard({ property }) {
  return (
    <div className="card property-card">
      <div className="photo"><span>foto de la propiedad</span></div>
      <div className="body">
        <p className="label">{property.label}</p>
        <h3>{property.title}</h3>
        <p className="subtitle">{property.subtitle}</p>
        <ul className="checks">
          {property.checks.map((check) => <PropertyCheckItem key={check} text={check} />)}
        </ul>
        <a className="btn btn-outline" href="#">Ver detalle</a>
      </div>
    </div>
  );
}

function PropertyGrid() {
  return (
    <section className="container section">
      <h2 className="property-grid-heading">Proyectos destacados</h2>
      <div className="property-grid">
        {PROPERTIES.map((property) => <PropertyCard key={property.title} property={property} />)}
      </div>
    </section>
  );
}
window.PropertyGrid = PropertyGrid;
