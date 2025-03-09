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
      '/wp-content/uploads/sites/128/2025/03/tenweb_media_srj6v4ctm.webp',
    imageAlt:
      'Una captura de pantalla de la función de navegación de perfiles de la aplicación Maktub, mostrando posibles coincidencias en Barcelona.',
  },
  {
    title: 'Emparejamiento Inteligente',
    description:
      'Nuestro algoritmo inteligente sugiere coincidencias compatibles basadas en tus preferencias e intereses. Aumenta tus posibilidades de encontrar a alguien especial con nuestra avanzada tecnología de emparejamiento.',
    imageUrl:
      '/wp-content/uploads/sites/128/2025/03/tenweb_media_STGCGMSGW.webp',
    imageAlt:
      'Una imagen que muestra el algoritmo de emparejamiento de la aplicación Maktub, destacando las puntuaciones de compatibilidad.',
  },
  {
    title: 'Check-in en Salas Temáticas',
    description:
      'Haz check-in en salas temáticas a través de la aplicación para que los demás sepan dónde estás. Ve quién más está en la sala y comienza conversaciones. Mejora tu experiencia en persona con interacción digital.',
    imageUrl:
      '/wp-content/uploads/sites/128/2025/03/tenweb_media_SPZZWEN9R.webp',
    imageAlt:
      'Una representación visual de la integración de la aplicación Maktub con las salas temáticas del bar, mostrando usuarios haciendo check-in.',
  },
]

export const rooms: CardContent[] = [
  {
    title: 'Sala discoteca',
    description:
      'Una habitación lujosa bañada en suave luz de velas, con cortinas de terciopelo, una cama king-size con pétalos de rosa y un balcón privado con vistas al horizonte de la ciudad.',
    imageUrl: '/rooms/sala_discoteca.jpg',
    imageAlt:
      'Sala con diseño innovador y futurista, combinado con luces de neón, pantallas interactivas y con iluminación dinámica.',
  },
  {
    title: 'Sala entretenimiento',
    description:
      'Sumérgete en un oasis encantador con arreglos florales en cascada, luces de hadas y un rincón íntimo para cenar, perfecto para una velada mágica.',
    imageUrl: '/rooms/sala_entretenimiento.jpg',
    imageAlt:
      'Espacio vibrante y energético colorido, con estética moderna y divertida.',
  },
  {
    title: 'Sala romántica',
    description:
      'Un espacio sofisticado adornado con detalles dorados, mobiliario de lujo y un jacuzzi privado, creando el escenario perfecto para una escapada íntima y opulenta.',
    imageUrl: '/rooms/sala_romantica.jpg',
    imageAlt:
      'Habitación elegante para un ambiente íntimo y romántico con estilo clásico.',
  },
]

export const dishes: CardContent[] = [
  {
    title: 'Empanadas',
    description:
      'Deliciosas empanadas pequeñas de carne, acompañadas de una exquisita salsa de sacha inchi y un toque de aceite de oliva. Presentadas con una decoración vibrante y temática.',
    imageUrl: '/comida/empanadas.jpg',
    imageAlt:
      'Empanadas pequeñas de carne con salsa de sacha inchi y aceite de oliva, servidas en un plato decorativo.',
  },
  {
    title: 'Ceviche de camarones',
    description:
      'Fresco ceviche de camarones con pétalos de rosa y maracuyá, una combinación perfecta de sabores tropicales y marinos, ideal para una experiencia romántica.',
    imageUrl: '/comida/ceviche_camarones.jpg',
    imageAlt:
      'Ceviche de camarones con pétalos de rosa y maracuyá, decorado con ingredientes frescos y coloridos.',
  },
  {
    title: 'Pulpo a la Gallega',
    description:
      'Exquisito pulpo a la gallega con pesto de rocoto, acompañado de una suave crema de patatas y un toque picante. Un plato pequeño pero visualmente impresionante.',
    imageUrl: '/comida/pulpo_gallega.jpg',
    imageAlt:
      'Pulpo a la gallega con pesto de rocoto y crema de patatas, presentado de forma estética y apetecible.',
  },
]

export const cocktails: CardContent[] = [
  {
    title: 'El Beso del Sol',
    description:
      'Un cóctel exclusivo que combina pisco peruano, pulpa de maracuyá fresca, un toque de miel de agave y espuma de lima. Decorado con pétalos comestibles y oro en hoja.',
    imageUrl: '/cocktails/trago_beso_del_sol.jpg',
    imageAlt:
      'Cóctel "El Beso del Sol" con pisco, maracuyá, y decorado con pétalos comestibles y oro en hoja.',
  },
  {
    title: 'Noche de Azúcar y Canela',
    description:
      'Gin premium infusionado con pétalos de rosa, licor St. Germain, jugo de limón y un splash de agua tónica rosada. Servido con hielo cristalino y garnish de rosa orgánica.',
    imageUrl: '/cocktails/trago_noche_azucar_canela.jpg',
    imageAlt:
      'Cóctel "Noche de Azúcar y Canela" rosado con gin, flores y rosa orgánica, servido con hielo cristalino.',
  },
  {
    title: 'Susurro Nocturno',
    description:
      'Mezcla seductora de tequila añejo, licor de café, chocolate negro líquido y un toque de canela. Coronado con espuma de vainilla y polvo de cacao.',
    imageUrl: '/cocktails/trago_susurro_nocturno.jpg',
    imageAlt:
      'Cóctel "Susurro Nocturno" oscuro con tequila, café, chocolate, espuma de vainilla y polvo de cacao.',
  },
]
