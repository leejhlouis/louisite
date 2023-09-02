import InlineLinkProps from '@/types/components/InlineLinkProps'

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='dark:hover:text-blue-1w00 dark:hover:decoration-blue-1w00 font-semibold text-blue-800 decoration-blue-800 duration-300 hover:text-blue-600 hover:underline hover:decoration-blue-600 dark:text-blue-300 dark:decoration-blue-300'
    >
      {children}
    </a>
  )
}
