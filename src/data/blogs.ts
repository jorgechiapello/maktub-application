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

const blogArtOfConversationId ='the-art-of-conversation-dating-strategies-for'
export const blogArtOfConversation = {
  categoryTitle: blogCategories.datingStrategies.title,
  categoryId: blogCategories.datingStrategies.id,
  title: 'El arte de la conversación: Estrategias de citas para Maktub',
  postId: blogArtOfConversationId,
  excerpt:
  'Domina el arte de la conversación y crea conexiones duraderas en Maktub.',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_rx9hefrca.webp',
  imageAlt: 'Maktub Interior',
  readMoreUrl: `/blog/${blogCategories.datingStrategies.id}/${blogArtOfConversationId}`,
}

const blogUnlockingLoveId = 'unlocking-love-in-barcelona-your-guide-to'
export const blogUnlockingLove = {
  categoryTitle: blogCategories.datingTips.title,
  categoryId: blogCategories.datingTips.id,
  title: 'Descubriendo el Amor en Barcelona: Tu Guía de Maktub',
  postId: blogUnlockingLoveId,
  excerpt:
  'Maktub es más que un bar; es una experiencia. Sumérgete en la atmósfera vibrante, explora nuestras salas temáticas y descubre la conexión perfecta.',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_R7ZFYALQF.webp',
  imageAlt: 'Maktub Interior',
  readMoreUrl: `/blog/${blogCategories.datingTips.id}/${blogUnlockingLoveId}`,
}

const blogHottestSpotId = 'barcelonas-hottest-spot-maktub-events'
export const blogHottestSpot = {
  categoryTitle: blogCategories.events.title,
  categoryId: blogCategories.events.id,
  title: 'El lugar más vibrante de Barcelona: Eventos Maktub',
  postId: blogHottestSpotId,
  excerpt:
  'Vive la vibrante vida nocturna y los eventos exclusivos de Maktub, el bar de citas líder en Barcelona.',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_rrzsflcu0.webp',
  imageAlt: 'People dancing in a bar',
  readMoreUrl: `/blog/${blogCategories.events.id}/${blogHottestSpotId}`,
}

export const blogPosts = [blogArtOfConversation, blogUnlockingLove, blogHottestSpot]