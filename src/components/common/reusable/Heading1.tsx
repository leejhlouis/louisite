import HeadingProps from '@/types/HeadingProps.ts'

export default function Heading2(props: HeadingProps) {
  return (
    <h1
      className={`pt-4 pb-6 text-3xl font-bold md:pt-6 md:pb-8 md:text-4xl ${
        props.className ?? ''
      }`}
    >
      {props.children}
    </h1>
  )
}
