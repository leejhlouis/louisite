import ComponentProps from '@/types/components/ComponentProps'

export default interface BadgeProps extends ComponentProps {
  active?: boolean | false
  size?: string
  onClick?: () => void
}
