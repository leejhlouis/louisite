import ComponentProps from '@/types/components/ComponentProps'

export default function Heading1({ id, className, children }: ComponentProps) {
  return (
    <h1
      id={id}
      className={`pb-6 pt-4 text-[1.75rem] font-bold leading-8 md:pb-8 md:pt-6 md:text-4xl ${
        className ?? ''
      }`}
    >
      {children}
    </h1>
  )
}
