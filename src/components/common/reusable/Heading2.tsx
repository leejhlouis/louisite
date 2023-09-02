import ComponentProps from '@/types/components/ComponentProps'

export default function Heading2({ id, className, children }: ComponentProps) {
  return (
    <h2
      id={id}
      className={`pb-4 pt-3 text-2xl font-bold md:pb-6 md:pt-4 md:text-3xl ${className ?? ''}`}
    >
      {children}
    </h2>
  )
}
