interface Question {
  id: number;
  question: string;
  options: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál sería tu cita ideal?",
    options: [
      "Café y conversación",
      "Actividad de aventura",
      "Cena y bebidas",
      "Evento cultural"
    ]
  },
  {
    id: 2,
    question: "¿Cómo prefieres pasar tus fines de semana?",
    options: [
      "Actividades al aire libre",
      "Relajándome en casa",
      "Socializando con amigos",
      "Explorando nuevos lugares"
    ]
  },
  {
    id: 3,
    question: "¿Qué estás buscando?",
    options: [
      "Relación a largo plazo",
      "Citas casuales",
      "Amistad",
      "Aún no estoy seguro/a"
    ]
  },
];
