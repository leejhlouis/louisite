import PrimaryButtonProps from '@/types/components/buttons/PrimaryButtonProps'
import clsx from 'clsx'
import { lazy } from 'react'

const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))

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
        'group/underline flex w-fit items-center space-x-1 transition duration-300 ease-in-out',
        {
          'font-extrabold text-primary-dark dark:text-white': active,
          'font-semibold': !active
        },
        {
          'rounded-xl px-3 py-1': inverted,
          'text-primary-dark dark:text-primary-light': inverted,
          'hover:bg-primary-dark/5 dark:hover:bg-primary-light/5': inverted && !active,
          'hover:text-primary-dark dark:hover:text-primary-light': !inverted && !active
        }
      )}
      onClick={onClick}
    >
      <div>{icon}</div>
      <SlidingInUnderline type='secondary'>{children}</SlidingInUnderline>
    </button>
  )
}
