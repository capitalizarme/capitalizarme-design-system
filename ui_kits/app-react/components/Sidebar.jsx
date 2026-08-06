// Sidebar — logged-in product nav. Capi appears as a small, uncropped brand mark above the nav
// items (assets/mascot/capi-3.png), never recolored or vectorized — see DESIGN.md §6.
function Sidebar({ view, onNavigate }) {
  const items = [
    { key: 'explorar', label: 'Explorar propiedades' },
    { key: 'favoritos', label: 'Mis favoritos' },
    { key: 'mensajes', label: 'Mensajes' },
    { key: 'simulador', label: 'Mi simulador' },
  ];
  return (
    <aside className="app-sidebar">
      <img className="mascot" src="../../assets/mascot/capi-3.png" alt="Capi" />
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={'nav-item' + (view === item.key ? ' active' : '')}
          onClick={() => onNavigate(item.key)}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
window.Sidebar = Sidebar;
