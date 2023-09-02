import { SectionProps } from '@/types/components/SectionProps'
import clsx from 'clsx'

export default function Section({ id, className, maxWidthClass, children }: SectionProps) {
  return (
    <section
      id={id || ''}
      className={clsx(
        className,
        maxWidthClass,
        {
          'xl:max-w-screen-xl': !maxWidthClass
        },
        'container py-8 sm:py-12 xl:py-16'
      )}
    >
      {children}
    </section>
  )
}
