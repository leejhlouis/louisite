import PrimaryButtonProps from '@/types/components/buttons/PrimaryButtonProps'
import clsx from 'clsx'

export default function PrimaryButton({
  className,
  onClick,
  icon,
  children,
  inverted,
  active
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        className,
        'flex w-fit items-center space-x-1 transition duration-300 ease-in-out',
        {
          'font-extrabold': active,
          'font-semibold': !active
        },
        {
          'text-blue-800 underline dark:text-blue-300': inverted,
          'hover:text-blue-600 dark:hover:text-blue-100': inverted && !active,
          'hover:text-blue-800 hover:underline dark:hover:text-blue-300': !inverted && !active
        }
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  )
}
