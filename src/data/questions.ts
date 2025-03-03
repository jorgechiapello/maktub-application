export interface Question {
  id: number | string;
  question: string;
  category: 'preference' | 'profile';
  options?: string[];
}

export const preferenceQuestions: Question[] = [
  {
    id: 'gender',
    question: '¿Qué género de pareja prefieres?',
    category: 'preference',
    options: [
      'Hombres',
      'Mujeres',
      'Ambos',
    ],
  },
  {
    id: 1,
    question: '¿Cómo describirías tu enfoque en el amor?',
    category: 'preference',
    options: [
      'Romántico/a y detallista',
      'Aventurero/a y espontáneo/a',
      'Racional y analítico/a',
    ],
  },
  {
    id: 2,
    question: "¿Qué actividad disfrutas más en pareja?",
    category: 'preference',
    options: [
      "En casa viendo películas o leyendo",
      "Haciendo actividades al aire libre o viajando",
      "Explorando nuevos restaurantes y bares"
    ]
  },
  {
    id: 3,
    question: "¿Cómo manejas los conflictos en una relación?",
    category: 'preference',
    options: [
      "Prefiero hablarlo de inmediato y resolverlo",
      "Me tomo un tiempo para procesarlo antes de discutirlo",
      "Evitando discusiones innecesarias"
    ]
  },
  {
    id: 4,
    question: "¿Qué rol prefieres en una relación?",
    category: 'preference',
    options: [
      "Me gusta tomar la iniciativa y sorprender",
      "Prefiero que todo sea equilibrado y mutuo",
      "Me encanta que me conquisten y me hagan sentir especial"
    ]
  },
  {
    id: 5,
    question: "¿Cómo te sientes respecto a las demostraciones de afecto en público?",
    category: 'preference',
    options: [
      "Me encantan, soy muy expresivo/a",
      "Depende del contexto y la persona",
      "Prefiero la discreción y los gestos más íntimos"
    ]
  },
  {
    id: 6,
    question: "¿Cómo te sientes respecto al compromiso?",
    category: 'preference',
    options: [
      "Me gusta la estabilidad y construir algo sólido",
      "Prefiero que las cosas fluyan sin presiones",
      "Me asusta un poco, pero si es la persona correcta, lo intento"
    ]
  },
  {
    id: 7,
    question: "¿Qué tan importante es para ti la independencia en pareja?",
    category: 'preference',
    options: [
      "Necesito mi espacio personal y mi tiempo a solas",
      "Me gusta un balance entre compartir y tener momentos propios",
      "Me gusta estar siempre acompañado/a de mi pareja"
    ]
  },
  {
    id: 8,
    question: "¿Cuál es tu lenguaje del amor?",
    category: 'preference',
    options: [
      "Palabras de afirmación y elogios",
      "Contacto físico y muestras de cariño",
      "Actos de servicio y pequeños detalles"
    ]
  },
  {
    id: 9,
    question: "¿Qué valor no puede faltar en tu pareja ideal?",
    category: 'preference',
    options: [
      "Honestidad",
      "Sentido del humor",
      "Ambición y ganas de crecer"
    ]
  },
  {
    id: 10,
    question: "¿Qué es lo más importante en tu pareja ideal?",
    category: 'preference',
    options: [
      "Que me escuche y me entienda",
      "Que me haga reír y vivir nuevas experiencias",
      "Que compartamos valores y metas a futuro"
    ]
  },
  {
    id: 11,
    question: "¿Qué es lo más importante en una relación para ti?",
    category: 'preference',
    options: [
      "La confianza y comunicación",
      "La diversión y la pasión",
      "El respeto y los valores compartidos"
    ]
  },
  {
    id: 12,
    question: "¿Cómo manejas el uso del celular en una relación?",
    category: 'preference',
    options: [
      "Me gusta estar disponible y responder mensajes rápidamente",
      "Contesto cuando tengo tiempo, pero sin descuidar la comunicación",
      "Prefiero limitar el uso del celular y priorizar el tiempo en persona"
    ]
  },
  {
    id: 13,
    question: "¿Cómo reaccionas cuando tienes un mal día y tu pareja intenta animarte?",
    category: 'preference',
    options: [
      "Aprecio el esfuerzo y trato de mejorar mi ánimo",
      "A veces prefiero estar solo/a antes de hablar del tema",
      "Necesito que me escuchen, pero sin presionarme a cambiar de humor"
    ]
  },
  {
    id: 14,
    question: "¿Qué tipo de conexión buscas en una pareja?",
    category: 'preference',
    options: [
      "Una conexión emocional profunda y sincera",
      "Una relación basada en la diversión y la complicidad",
      "Un equilibrio entre atracción, amistad y respeto"
    ]
  },
  {
    id: 15,
    question: "¿Cómo manejas los celos en una relación?",
    category: 'preference',
    options: [
      "Confío en mi pareja y no me preocupa demasiado",
      "A veces siento celos, pero trato de manejarlos con comunicación",
      "Soy celoso/a y necesito seguridad constante en la relación"
    ]
  }
];
