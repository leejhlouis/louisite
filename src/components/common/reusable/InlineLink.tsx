import InlineLinkProps from '@/types/components/InlineLinkProps'
import clsx from 'clsx'
import SlidingInUnderline from './SlidingInUnderline'

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'cursor-pointer',
        'font-semibold duration-300',
        'text-primary-dark hover:text-primary-lighter-dark',
        'dark:text-primary-light dark:hover:text-primary-lighter'
      )}
    >
      <SlidingInUnderline>{children}</SlidingInUnderline>
    </a>
  )
}
