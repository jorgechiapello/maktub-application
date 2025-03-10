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
    title: 'Empanadas de carne con salsa de sacha inchi y aceite de oliva',
    description:
      'Empanadas crujientes rellenas de carne de res, con una suave salsa de sacha inchi, semilla originaria de la Amazonía, conocida por sus propiedades afrodisíacas.',
    imageUrl: '/comida/empanadas.jpg',
    imageAlt:
      'Empanadas crujientes de carne con salsa de sacha inchi y aceite de oliva, servidas en un plato decorativo.',
  },
  {
    title: 'Ceviche de camarones con pétalos de rosa y maracuyá',
    description:
      'Camarones frescos, macerados en jugo de limón y maracuyá, con un toque de pétalos de rosa comestibles y un toque de chile. La combinación perfecta para una noche de pasión.',
    imageUrl: '/comida/ceviche_camarones.jpg',
    imageAlt:
      'Ceviche de camarones con pétalos de rosa y maracuyá, decorado con ingredientes frescos y coloridos.',
  },
  {
    title: 'Pulpo a la Gallega con pesto de rocoto',
    description:
      'Pulpo a la parrilla con una crema de patatas y aceite de oliva, acompañado de un pesto picante de rocoto, un toque de Perú que resalta los sabores Mediterráneos.',
    imageUrl: '/comida/pulpo_gallega.jpg',
    imageAlt:
      'Pulpo a la parrilla con crema de patatas y aceite de oliva, decorado con pesto picante de rocoto.',
  },
]

export const cocktails: CardContent[] = [
  {
    title: 'El Beso del Sol',
    description:
      'Pisco, jugo de naranja y maracuyá se entrelazan en un cóctel refrescante, cálido y lleno de energía, como un día de verano.',
    imageUrl: '/cocktails/trago_beso_del_sol.jpg',
    imageAlt:
      'Cóctel "El Beso del Sol" con pisco, maracuyá, servido con hielo cristalino.',
  },
  {
    title: 'Noche de Azúcar y Canela',
    description:
      'Whisky de bourbon, canela y jarabe de arce crean un cóctel dulce y especiado, ideal para una noche de seducción.',
    imageUrl: '/cocktails/trago_noche_azucar_canela.jpg',
    imageAlt:
      'Cóctel "Noche de Azúcar y Canela" con whisky, canela y jarabe de arce, servido con hielo cristalino.',
  },
  {
    title: 'Susurro Nocturno',
    description:
      'Cóctel floral y afrutado con vodka infusionado, hibisco y granada, perfecto para una velada íntima bajo las estrellas.',
    imageUrl: '/cocktails/trago_susurro_nocturno.jpg',
    imageAlt:
      'Cóctel "Susurro Nocturno" oscuro con vodka, hibisco, granada, servido con hielo cristalino.',
  },
]
