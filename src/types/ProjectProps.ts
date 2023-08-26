import LinkProps from '@/types/LinkProps'

export default interface ProjectProps {
  id: string
  title: string
  description: string | JSX.Element
  category: string
  techStacks: string[]
  links: LinkProps[]
}
