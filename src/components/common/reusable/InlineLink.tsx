import InlineLinkProps from '@/types/components/InlineLinkProps'
import clsx from 'clsx'

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'cursor-pointer',
        'font-semibold duration-300 hover:underline',
        'text-primary-dark decoration-primary-dark',
        'hover:text-primary-lighter-dark hover:decoration-primary-lighter-dark',
        'dark:text-primary-light dark:decoration-primary-light',
        'dark:hover:text-primary-lighter dark:hover:decoration-primary-lighter'
      )}
    >
      {children}
    </a>
  )
}
