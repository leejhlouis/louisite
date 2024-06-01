import ComponentProps from '@/types/components/ComponentProps'

export default interface ProjectProps extends ComponentProps {
  title: string
  link: string
  datePublished: string
  minRead: number
}
