export const blogCategories = {
  datingStrategies: {
    id: 'dating-strategies',
    title: 'Estrategias de citas',
  },
  datingTips: {
    id: 'dating-tips',
    title: 'Consejos de citas',
  },
  events: {
    id: 'events',
    title: 'Eventos',
  },
}

export const blogArtOfConversation = {
  categoryTitle: blogCategories.datingStrategies.title,
  categoryId: blogCategories.datingStrategies.id,
  title: 'El arte de la conversación: Estrategias de citas para Maktub',
  postId: 'the-art-of-conversation-dating-strategies-for',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_rx9hefrca.webp',
  excerpt:
    'Domina el arte de la conversación y crea conexiones duraderas en Maktub.',
}

export const blogUnlockingLove = {
  categoryTitle: blogCategories.datingTips.title,
  categoryId: blogCategories.datingTips.id,
  title: 'Descubriendo el Amor en Barcelona: Tu Guía de AmorLounge',
  postId: 'unlocking-love-in-barcelona-your-guide-to',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_R7ZFYALQF.webp',
  excerpt:
    'AmorLounge es más que un bar; es una experiencia. Sumérgete en la atmósfera vibrante, explora nuestras salas temáticas y descubre la conexión perfecta.',
}

export const blogHottestSpot = {
  categoryTitle: blogCategories.events.title,
  categoryId: blogCategories.events.id,
  title: 'El lugar más vibrante de Barcelona: Eventos Maktub',
  postId: 'barcelonas-hottest-spot-amorlounge-events',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_rrzsflcu0.webp',
  excerpt:
    'Vive la vibrante vida nocturna y los eventos exclusivos de Maktub, el bar de citas líder en Barcelona.',
}

export const blogPosts = [blogArtOfConversation, blogUnlockingLove, blogHottestSpot]