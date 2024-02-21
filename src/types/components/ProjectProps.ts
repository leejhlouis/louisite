import ComponentProps from '@/types/components/ComponentProps'
import LinkProps from '@/types/LinkProps'

export default interface ProjectProps extends ComponentProps {
  title: string
  featured?: boolean | false
  description: string | JSX.Element
  category: string
  techStacks: string[]
  otherTechStacks?: string[]
  links: LinkProps[]
}
