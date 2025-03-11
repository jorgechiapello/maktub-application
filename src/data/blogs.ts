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
  image: '/app-features/cellphone_profile.webp',
  imageAlt: 'Dos personas charlando',
  readMoreUrl: `/blog/${blogCategories.innovation.id}/${blogMaktubAppId}`,
}

const blogUnlockingLoveId = 'consejos-para-tu-primera-cita'
export const blogUnlockingLove = {
  categoryTitle: blogCategories.datingTips.title,
  categoryId: blogCategories.datingTips.id,
  title: 'Consejos para tu primera cita',
  postId: blogUnlockingLoveId,
  excerpt:
    'Cinco consejos prácticos para asegurarte de que tu primera cita en Maktub sea una experiencia memorable y exitosa.',
  image: '/dating-tips.jpg',
  imageAlt: 'Dos personas tomando un trago',
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
  image: '/dos_amigos_celebrando.jpg',
  imageAlt: 'People dancing in a bar',
  readMoreUrl: `/blog/${blogCategories.events.id}/${blogHottestSpotId}`,
}

export const blogPosts = [blogMaktubApp, blogUnlockingLove, blogHottestSpot]
