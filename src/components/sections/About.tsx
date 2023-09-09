import { lazy, useState } from 'react'
import useMounted from '@/hooks/useMounted'
import useEventListener from '@/hooks/useEventListener'
import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/Heading1.tsx'))
const Heading2 = lazy(() => import('@/components/common/reusable/Heading2.tsx'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink.tsx'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function About({ children }: ComponentProps) {
  const mounted = useMounted()

  const [hasScrolledToTop, setHasScrolledToTop] = useState(false)

  useEventListener('scroll', () => {
    if (hasScrolledToTop) {
      return
    }
    setHasScrolledToTop(mounted && window.scrollY <= 25)
  })

  return (
    <div
      className={clsx({
        'animate-start': mounted || hasScrolledToTop
      })}
    >
      <Section
        className='md:px-0[&>*]:animate-fade-in text-muted-dark dark:text-muted md:px-0'
        maxWidthClass='md:max-w-screen-sm'
      >
        <ReactMarkdown
          components={{
            h1: Heading1,
            h2: Heading2,
            a: InlineLink,
            ul: ({ children }) => (<ul className='pb-4 md:pb-6'>{children}</ul>) as JSX.Element,
            li: ({ children }) =>
              (
                <li
                  className={clsx(
                    'mb-2 mr-2 px-3',
                    'bg-slate-50/50 dark:bg-slate-700/50',
                    'inline-block rounded-xl text-base hover:shadow'
                  )}
                >
                  {children}
                </li>
              ) as JSX.Element
          }}
        >
          {(localStorage.about as string) ?? children}
        </ReactMarkdown>
      </Section>
    </div>
  )
}
