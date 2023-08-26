import InlineLinkProps from '@/types/InlineLinkProps.ts'

export default function InlineLink(props: InlineLinkProps) {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer'
      className='font-semibold text-blue-800 decoration-blue-800 hover:underline dark:text-blue-300 dark:decoration-blue-300'
    >
      {props.children}
    </a>
  )
}
