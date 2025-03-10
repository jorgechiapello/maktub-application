import { blogCategories, blogPosts } from '@data/blogs'

const blogsPathsAndTitles = blogPosts.reduce(
  (acc, post) => ({ ...acc, [`/${post.postId}`]: post.title }),
  {},
)

const blogCategoriesPathsAndName = Object.entries(blogCategories).reduce(
  (acc, [key, value]) => ({ ...acc, [`/${value.id}`]: value.title }),
  {},
)

type Page = { label: string; path: string }

export const siteUrl = 'https://maktub-app.vercel.app'

export const initialPage: Page = { label: 'Inicio', path: '/' }
export const ambientesPage: Page = { label: 'Ambientes', path: '/ambientes' }
export const blogPage: Page = { label: 'Blog', path: '/blog' }
export const conocenosPage: Page = { label: 'Conocenos', path: '/conocenos' }
export const contactanosPage: Page = {
  label: 'Contactanos',
  path: '/contactanos',
}
export const laAppPage: Page = { label: 'La app', path: '/la-app' }
export const comeAquiPage: Page = { label: 'Come aqui', path: '/come-aqui' }

export const topLevelPages = [
  conocenosPage,
  laAppPage,
  blogPage,
  ambientesPage,
  comeAquiPage,
  contactanosPage
]

export const pagesTitles: Record<string, string> = {
  [initialPage.path]: initialPage.label,
  [ambientesPage.path]: ambientesPage.label,
  [blogPage.path]: blogPage.label,
  [conocenosPage.path]: conocenosPage.label,
  [contactanosPage.path]: contactanosPage.label,
  [laAppPage.path]: laAppPage.label,
  [comeAquiPage.path]: comeAquiPage.label,
  ...blogsPathsAndTitles,
  ...blogCategoriesPathsAndName
}
