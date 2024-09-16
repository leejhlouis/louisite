import NavItemsProps from '@/types/NavItemsProps'

const navItems: NavItemsProps[] = [
  {
    name: 'Home',
    href: '/',
    isNew: false
  },
  {
    name: 'Blog',
    href: '/blog',
    isNew: true
  },
  {
    name: 'Projects',
    href: '/projects',
    isNew: false
  },
  {
    name: 'About',
    href: '/about',
    isNew: false
  }
]

export default navItems
