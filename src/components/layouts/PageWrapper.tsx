import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function PageWrapper({ className, children }: ComponentProps) {
  return (
    <div className={clsx(className, 'bg-primary-overlay dark:bg-primary-overlay-dark pt-18')}>
      {children}
    </div>
  )
}
