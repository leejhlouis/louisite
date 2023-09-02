import { lazy, useState } from 'react'
import useMounted from '@/hooks/useMounted'
import { useEventListener } from '@/hooks/useEventListener'
import { SectionProps } from '@/types/SectionProps'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/Heading1.tsx'))
const Heading2 = lazy(() => import('@/components/common/reusable/Heading2.tsx'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink.tsx'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function About({ children }: SectionProps) {
  const mounted = useMounted()

  const [hasScrolledToTop, setHasScrolledToTop] = useState(false)

  useEventListener('scroll', () => {
    if (hasScrolledToTop) {
      return
    }
    setHasScrolledToTop(mounted && window.scrollY <= 25)
  })

  return (
    <div className={`${mounted || hasScrolledToTop ? 'animate-start' : ''}`}>
      <Section
        className='[&>*]:animate-fade-in text-muted-dark dark:text-muted md:px-0 [&_ul]:pb-4 md:[&_ul]:pb-6'
        maxWidthClass='md:max-w-screen-sm'
      >
        <ReactMarkdown
          children={(localStorage.about as string) ?? children}
          components={{
            h1: Heading1,
            h2: Heading2,
            a: InlineLink,
            li: ({ ...props }: object) => (
              <li
                className='mb-2 mr-2 inline-block rounded-xl bg-slate-50/50 px-3 text-base hover:shadow dark:bg-slate-700/50'
                {...props}
              />
            )
          }}
        />
      </Section>
    </div>
  )
}
