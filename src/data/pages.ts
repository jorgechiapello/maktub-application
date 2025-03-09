import { blogCategories, blogPosts } from '@data/blogs'

const blogs = blogPosts.reduce((acc, post) => ({ ...acc, [post.postId]: post.title }), {})

export const pages: Record<string, string> = {
  '': 'Inicio',
  ambientes: 'Ambientes',
  blog: 'Blog',
  conocenos: 'Conocenos',
  contactanos: 'Contactanos',
  'la-app': 'La app',
  [blogCategories.datingStrategies.id]: blogCategories.datingStrategies.title,
  [blogCategories.datingTips.id]: blogCategories.datingTips.title,
  [blogCategories.events.id]: blogCategories.events.title,
  ...blogs,
}
console.log(pages)
