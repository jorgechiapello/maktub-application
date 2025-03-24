export interface CardContent {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export const appFeatures: CardContent[] = [
  {
    title: 'Navegación de Perfiles',
    description:
      'Navega fácilmente por los perfiles de otros miembros de Maktub. Filtra por intereses, edad y ubicación para encontrar tu pareja perfecta. Comienza a conectar antes de llegar al bar.',
    imageUrl:
      '/app-features/cellphone_profile.webp',
    imageAlt:
      'Una captura de pantalla de la función de navegación de perfiles de la aplicación Maktub, mostrando posibles coincidencias en Barcelona.',
  },
  {
    title: 'Emparejamiento Inteligente',
    description:
      'Nuestro algoritmo inteligente sugiere coincidencias compatibles basadas en tus preferencias e intereses. Aumenta tus posibilidades de encontrar a alguien especial con nuestra avanzada tecnología de emparejamiento.',
    imageUrl:
      '/app-features/app_stats.webp',
    imageAlt:
      'Una imagen que muestra el algoritmo de emparejamiento de la aplicación Maktub, destacando las puntuaciones de compatibilidad.',
  },
  {
    title: 'Check-in en Salas Temáticas',
    description:
      'Haz check-in en salas temáticas a través de la aplicación para que los demás sepan dónde estás. Ve quién más está en la sala y comienza conversaciones. Mejora tu experiencia en persona con interacción digital.',
    imageUrl:
      '/app-features/lounge.webp',
    imageAlt:
      'Una representación visual de la integración de la aplicación Maktub con las salas temáticas del bar, mostrando usuarios haciendo check-in.',
  },
]