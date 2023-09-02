import { SectionProps } from '@/types/components/SectionProps'

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id || ''}
      className={`container py-8 sm:py-12 xl:py-16 ${props.maxWidthClass ?? 'xl:max-w-screen-xl'} ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </section>
  )
}
