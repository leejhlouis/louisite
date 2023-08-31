import HeadingProps from '@/types/HeadingProps.ts'

export default function Heading2(props: HeadingProps) {
  return (
    <h1
      className={`pb-6 pt-4 text-[1.75rem] font-bold leading-8 md:pb-8 md:pt-6 md:text-4xl ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </h1>
  )
}
