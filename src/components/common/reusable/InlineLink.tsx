import InlineLinkProps from '@/types/components/InlineLinkProps'
import clsx from 'clsx'

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'font-semibold duration-300 hover:underline',
        'text-blue-800 decoration-blue-800',
        'dark:text-blue-300 dark:decoration-blue-300',
        'hover:text-blue-600 hover:decoration-blue-600',
        'dark:hover:text-blue-100 dark:hover:decoration-blue-100'
      )}
    >
      {children}
    </a>
  )
}
