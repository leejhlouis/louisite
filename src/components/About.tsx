import ReactMarkdown from 'react-markdown'
import Section from '@/components/layouts/Section.tsx'
import Heading1 from '@/components/common/reusable/Heading1.tsx'
import Heading2 from '@/components/common/reusable/Heading2.tsx'
import InlineLink from '@/components/common/reusable/InlineLink.tsx'

export default function About(props: { children: string }) {
  return (
    <Section
      className='md:px-0'
      maxWidthClass='md:max-w-screen-sm'
    >
      <ReactMarkdown
        children={(localStorage.about as string) ?? props.children}
        components={{
          h1: Heading1,
          h2: Heading2,
          a: InlineLink,
          p: ({ ...props }: object) => (
            <p
              className='text-muted-dark dark:text-muted'
              {...props}
            />
          ),
          ul: ({ ...props }: object) => (
            <ul
              className='pb-4 text-muted-dark dark:text-muted md:pb-6'
              {...props}
            />
          ),
          li: ({ ...props }: object) => (
            <li
              className='mb-2 mr-2 inline-block rounded-xl bg-slate-50/50 px-3 text-base hover:shadow dark:bg-slate-700/50'
              {...props}
            />
          )
        }}
      />
    </Section>
  )
}
