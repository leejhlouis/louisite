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
          'font-extrabold text-primary-dark dark:text-white': active,
          'font-semibold': !active
        },
        {
          'text-primary-dark underline dark:text-primary-light': inverted,
          'hover:text-primary-lighter-dark dark:hover:text-primary-lighter': inverted && !active,
          'hover:text-primary-dark hover:underline dark:hover:text-primary-light':
            !inverted && !active
        }
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  )
}
