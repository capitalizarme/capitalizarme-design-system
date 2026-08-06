// Same two advisors as ui_kits/app-react/components/AdvisorList.jsx and
// ui_kits/app-astro/src/data/advisors.ts — kept identical across all three applied kits so
// they stay comparable, not divergent product concepts.
export const advisors = [
  {
    id: 'camila',
    initials: 'CV',
    name: 'Camila Vidal',
    role: 'Ejecutiva de Inversión Inmobiliaria',
    lastMessage: '¿Agendamos una reunión de 45 minutos?',
  },
  {
    id: 'jorge',
    initials: 'JR',
    name: 'Jorge Reyes',
    role: 'Ejecutivo — Bodegas y Estacionamientos',
    lastMessage: 'Hola, soy Jorge, ¿cómo te ayudo?',
  },
];

export const initialThreads = {
  camila: [
    { from: 'advisor', text: 'Hola, soy Camila 👋 ¿En qué tipo de propiedad estás pensando invertir?' },
    { from: 'user', text: 'Me interesa un departamento desde UF 1.665, el de Vista Las Condes.' },
    { from: 'advisor', text: 'Perfecto, con esa capacidad calificas. ¿Agendamos una reunión de 45 minutos?' },
  ],
  jorge: [
    { from: 'advisor', text: 'Hola, soy Jorge, ejecutivo de bodegas y estacionamientos. ¿Cómo te ayudo?' },
  ],
};
