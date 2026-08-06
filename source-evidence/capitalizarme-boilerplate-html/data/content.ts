export const content = {
  header: {
    logoAlt: 'Capitalizarme',
    nav: [
      { label: 'Inicio', href: '#' },
      { label: 'Cómo funciona', href: '#features' },
      { label: 'Agenda tu reunión', href: '#contact' },
    ],
  },
  hero: {
    title: 'Agenda tu reunión y averigua tu capacidad de inversión',
    subtitle: 'Descubre hasta qué monto puedes invertir acorde a tu situación financiera y para qué propiedades te alcanza.',
    description: 'Evalúate en línea, sin compromisos, con un ejecutivo de nuestro equipo, podrás estimar el crédito hipotecario que puedes conseguir con los bancos, y saber si con eso puedes invertir en departamentos u otros activos inmobiliarios como terrenos, bodegas y estacionamientos.',
  },
  contactForm: {
    title: 'Descubre cómo funciona',
    description: 'Regístrate con tus datos de contacto y agenda una reunión con alguien de nuestro equipo de solo 45 minutos sin costo.',
    fields: [
      { name: 'name', label: '¿Cómo te llamas?', type: 'text' as const },
      { name: 'lastname', label: '¿Cuál es tu apellido?', type: 'text' as const },
      { name: 'phone', label: '¿Cuál es tu teléfono?', type: 'tel' as const },
      { name: 'email', label: '¿Cuál es tu email?', type: 'email' as const },
    ],
    submit: 'Siguiente',
  },
  partnersPrimary: {
    heading: 'Trabajamos con todos los bancos y mutuarias',
    description: 'Así te ayudamos a conseguir las mejores condiciones para un crédito hipotecario, y que sea fácil y rápido.',
  },
  partnersSecondary: {
    heading: 'Y con las principales inmobiliarias',
    description: 'Para mostrarte la mejor selección de propiedades en que puedes invertir, como departamentos, terrenos, estacionamientos, bodegas y otros más.',
  },
  socialProof: {
    heading: 'Hemos ayudado a más de 5.000 personas',
    description: 'A descubrir su capacidad de inversión, y encontrar la propiedad ideal para invertir en ella.',
  },
  featuredWork: {
    label: 'Oportunidad de Inversión',
    heading: 'Proyectos Destacados',
    subtitle: 'Departamentos desde UF 1.665',
    features: [
      'Hasta 84 cuotas',
      'Cuotas para el pie desde $36.000',
      '5 años de arriendo garantizado.',
      'Proyectos SIN PIE.',
    ],
    cta: 'Agenda tu reunión',
  },
  features: {
    heading: 'Invertir es simple con Capitalizarme.com',
    subtitle: 'Sigue estos 4 pasos 100% online',
    steps: [
      { icon: '01-evaluate-en-nuestro-simulador-capitalizarme-1.svg', title: '1. Evalúate en nuestro simulador' },
      { icon: '02-conoce-tus-opciones-capitalizarme-1.svg', title: '2. Conoce tus opciones' },
      { icon: '03-elige-las-que-te-interesan-capitalizarme-1.svg', title: '3. Elige las que te interesan' },
      { icon: '04-recibe-la-informacion-capitalizarme-1.svg', title: '4. Recibe la información' },
    ],
    cta: 'Evalúate ahora agendando una reunión online',
  },
  cta: {
    title: 'Conviértete en inversionista',
    subtitle: 'Empieza tu camino hacia la libertad financiera.',
    description: 'Construye tu patrimonio con activos inmobiliarios, que además de valorizarse en el tiempo, generan ingresos pasivos todos los meses.',
    button: 'Agenda tu reunión online',
  },
  footer: {
    columns: [
      { title: 'Invierte', links: ['Explorar inversiones'] },
      { title: 'Aprende', links: ['Primeros pasos de inversión'] },
      { title: 'Ayuda y soporte', links: ['Centro de ayuda'] },
      { title: 'Comunidad', links: ['Comunidad'] },
    ],
    social: [
      { name: 'Facebook' },
      { name: 'Instagram' },
      { name: 'Youtube' },
      { name: 'Twitter' },
      { name: 'Linkedin' },
    ],
    legal: 'Todas las rentabilidades y retornos mostrados en la página son referenciales, los rendimientos pasados no garantizan retornos futuros.',
    copyright: '©Capitalizarme 2026 • Condiciones de uso • Políticas de privacidad',
    address: 'Hendaya 60, OF. 901 Las Condes.',
  },
};
