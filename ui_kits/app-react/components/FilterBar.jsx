// FilterBar — reuses the underline-input pattern from ContactForm.astro (no boxed inputs, per
// DESIGN.md §9) plus the pill-button property-type toggle.
function FilterBar({ activeType, onTypeChange }) {
  const types = ['Departamentos', 'Terrenos', 'Bodegas', 'Estacionamientos'];
  return (
    <div className="container">
      <div className="card filter-bar">
        <div className="field">
          <label htmlFor="filter-city">Comuna</label>
          <input id="filter-city" className="input-underline" type="text" placeholder="Las Condes" />
        </div>
        <div className="field">
          <label htmlFor="filter-min">Desde (UF)</label>
          <input id="filter-min" className="input-underline" type="number" placeholder="1.665" />
        </div>
        <div className="field">
          <label htmlFor="filter-max">Hasta (UF)</label>
          <input id="filter-max" className="input-underline" type="number" placeholder="5.000" />
        </div>
        <div className="types" id="property-types">
          {types.map((type) => (
            <button
              key={type}
              type="button"
              className={'btn ' + (activeType === type ? 'btn-primary' : 'btn-outline')}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
window.FilterBar = FilterBar;
