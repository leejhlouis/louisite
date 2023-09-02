import PrimaryButtonProps from '@/types/ButtonProps'

export default function PrimaryButton({
  className,
  onClick,
  icon,
  children,
  inverted,
  active
}: PrimaryButtonProps) {
  const computeClasses = () => {
    const fontWeightClass = active ? 'font-extrabold' : 'font-medium'
    if (inverted) {
      const classes = `text-blue-800 dark:text-blue-300 underline ${fontWeightClass}`

      if (active) {
        return classes
      }
      return `${classes} hover:text-blue-600 dark:hover:text-blue-100`
    }
    return `${fontWeightClass} ${
      active ? '' : 'font-semibold hover:text-blue-800 dark:hover:text-blue-300 hover:underline'
    }`
  }

  return (
    <button
      className={`${computeClasses()} flex w-fit items-center space-x-1 transition duration-300 ease-in-out ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  )
}
