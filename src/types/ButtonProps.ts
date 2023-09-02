export default interface ButtonProps {
  onClick?: () => void
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  screenReaderText?: string
  inverted?: boolean
  active?: boolean
}
