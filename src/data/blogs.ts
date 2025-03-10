export const blogCategories = {
  datingTips: {
    id: 'dating-tips',
    title: 'Consejos de citas',
  },
  events: {
    id: 'events',
    title: 'Eventos',
  },
  innovation: {
    id: 'innovation-tech',
    title: 'Innovación y Tecnología',
  },
}

const blogMaktubAppId = 'como-la-app-maktub-revoluciona-las-citas'
export const blogMaktubApp = {
  categoryTitle: blogCategories.innovation.title,
  categoryId: blogCategories.innovation.id,
  title: 'Cómo la App Maktub revoluciona las citas en Maktub',
  postId: blogMaktubAppId,
  excerpt:
  'Descubre cómo la app Maktub combina tecnología de vanguardia con experiencias reales para transformar el mundo de las citas modernas.',
  image: '/wp-content/uploads/sites/128/2025/03/tenweb_media_rx9hefrca.webp',
  imageAlt: 'App Maktub en smartphone',
  readMoreUrl: `/blog/${blogCategories.innovation.id}/${blogMaktubAppId}`,
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

export const blogPosts = [blogMaktubApp, blogUnlockingLove, blogHottestSpot]