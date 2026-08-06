// App — the applied kit's shell. Composes Header, Sidebar, SimulatorBanner, FilterBar,
// PropertyGrid, AdvisorList, and ChatArea into the two-view "browse properties" / "mensajes"
// product surface, owning all interactive state (view, filter type, advisor threads).
const INITIAL_THREADS = {
  camila: [
    { from: 'advisor', text: 'Hola, soy Camila 👋 ¿En qué tipo de propiedad estás pensando invertir?' },
    { from: 'user', text: 'Me interesa un departamento desde UF 1.665, el de Vista Las Condes.' },
    { from: 'advisor', text: 'Perfecto, con esa capacidad calificas. ¿Agendamos una reunión de 45 minutos?' },
  ],
  jorge: [
    { from: 'advisor', text: 'Hola, soy Jorge, ejecutivo de bodegas y estacionamientos. ¿Cómo te ayudo?' },
  ],
};

function App() {
  const [view, setView] = React.useState('explorar');
  const [activeType, setActiveType] = React.useState('Departamentos');
  const [selectedAdvisor, setSelectedAdvisor] = React.useState('camila');
  const [threads, setThreads] = React.useState(INITIAL_THREADS);

  function handleNavigate(key) {
    setView(key === 'mensajes' ? 'mensajes' : 'explorar');
  }

  function handleSend(text) {
    setThreads((prev) => ({
      ...prev,
      [selectedAdvisor]: [...prev[selectedAdvisor], { from: 'user', text }],
    }));
  }

  const advisor = window.ADVISORS.find((a) => a.id === selectedAdvisor);

  return (
    <React.Fragment>
      <Header />
      <div className="app-shell">
        <Sidebar view={view === 'mensajes' ? 'mensajes' : 'explorar'} onNavigate={handleNavigate} />
        {view === 'explorar' ? (
          <div style={{ flex: 1, minWidth: 0 }}>
            <SimulatorBanner />
            <FilterBar activeType={activeType} onTypeChange={setActiveType} />
            <PropertyGrid />
          </div>
        ) : (
          <div className="messages-view">
            <AdvisorList selectedAdvisor={selectedAdvisor} onSelect={setSelectedAdvisor} />
            <ChatArea advisor={advisor} messages={threads[selectedAdvisor]} onSend={handleSend} />
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}
window.App = App;
