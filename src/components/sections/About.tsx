import { lazy } from 'react'
import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/Heading1.tsx'))
const Heading2 = lazy(() => import('@/components/common/reusable/Heading2.tsx'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink.tsx'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function About({ children }: ComponentProps) {
  const { animationClass } = useFadeInMounted()

  return (
    <div className={clsx(animationClass)}>
      <Section
        className='[&>*]:animate-fade-in text-muted-dark dark:text-muted md:px-0'
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
                    'bg-slate-50/30 dark:bg-slate-700/30',
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
