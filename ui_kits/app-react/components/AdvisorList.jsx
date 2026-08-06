// AdvisorList — the "Mensajes" rail: real advisor threads a Capitalizarme investor is talking to.
// This is the direct product application of ContactForm.astro's whole purpose (booking time with
// an advisor) continued as an ongoing conversation — see ui_kits/app/README.md "Messaging surface".
const ADVISORS = [
  { id: 'camila', initials: 'CV', name: 'Camila Vidal', role: 'Ejecutiva de Inversión Inmobiliaria', lastMessage: '¿Agendamos una reunión de 45 minutos?' },
  { id: 'jorge', initials: 'JR', name: 'Jorge Reyes', role: 'Ejecutivo — Bodegas y Estacionamientos', lastMessage: 'Hola, soy Jorge, ¿cómo te ayudo?' },
];
window.ADVISORS = ADVISORS;

function AdvisorList({ selectedAdvisor, onSelect }) {
  return (
    <div className="advisor-list">
      <h2>Mensajes</h2>
      <ul>
        {ADVISORS.map((advisor) => (
          <li key={advisor.id}>
            <button
              type="button"
              className={selectedAdvisor === advisor.id ? 'selected' : ''}
              onClick={() => onSelect(advisor.id)}
            >
              <span className="avatar">{advisor.initials}</span>
              <span className="meta">
                <span className="name">{advisor.name}</span>
                <span className="last-message">{advisor.lastMessage}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
window.AdvisorList = AdvisorList;
