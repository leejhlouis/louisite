import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function Heading1({ id, className, children }: ComponentProps) {
  return (
    <h1
      id={id}
      className={clsx(
        className,
        'pb-8 pt-6',
        'text-[1.75rem] font-bold leading-8 md:text-4xl'
      )}
    >
      {children}
    </h1>
  )
}
