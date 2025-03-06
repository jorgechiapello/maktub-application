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
  // {
  //   id: 3,
  //   question: "¿Cómo manejas los conflictos en una relación?",
  //   category: 'preference',
  //   options: [
  //     "Prefiero hablarlo de inmediato y resolverlo",
  //     "Me tomo un tiempo para procesarlo antes de discutirlo",
  //     "Evitando discusiones innecesarias"
  //   ]
  // },
  // {
  //   id: 4,
  //   question: "¿Qué rol prefieres en una relación?",
  //   category: 'preference',
  //   options: [
  //     "Me gusta tomar la iniciativa y sorprender",
  //     "Prefiero que todo sea equilibrado y mutuo",
  //     "Me encanta que me conquisten y me hagan sentir especial"
  //   ]
  // },
  // {
  //   id: 5,
  //   question: "¿Cómo te sientes respecto a las demostraciones de afecto en público?",
  //   category: 'preference',
  //   options: [
  //     "Me encantan, soy muy expresivo/a",
  //     "Depende del contexto y la persona",
  //     "Prefiero la discreción y los gestos más íntimos"
  //   ]
  // },
  // {
  //   id: 6,
  //   question: "¿Cómo te sientes respecto al compromiso?",
  //   category: 'preference',
  //   options: [
  //     "Me gusta la estabilidad y construir algo sólido",
  //     "Prefiero que las cosas fluyan sin presiones",
  //     "Me asusta un poco, pero si es la persona correcta, lo intento"
  //   ]
  // }
];
