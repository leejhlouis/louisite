import ReactMarkdown from 'react-markdown'
import Section from '@/components/layouts/Section.tsx'
import Heading1 from '@/components/common/reusable/Heading1.tsx'
import Heading2 from '@/components/common/reusable/Heading2.tsx'
import InlineLink from '@/components/common/reusable/InlineLink.tsx'
import { useState } from 'react'
import { useMounted } from '@/hooks/useMounted'
import { useEventListener } from '@/hooks/useEventListener'

export default function About(props: { children: string }) {
  const { mounted } = useMounted()

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
          children={(localStorage.about as string) ?? props.children}
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
