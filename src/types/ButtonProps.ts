export default interface ButtonProps {
  onClick?: () => void
  icon?: React.ReactNode
  textContent: string | JSX.Element
  className?: string
}
