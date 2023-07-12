import ReactMarkdown from 'react-markdown'
import Section from '@/components/layouts/Section.tsx'
import Heading2 from '@/components/common/Heading2.tsx'
import Heading3 from '@/components/common/Heading3.tsx'
import InlineLink from '@/components/common/InlineLink.tsx'

export default function About(props: { children: string }) {
  return (
    <Section
      className='md:px-0'
      maxWidthClass='md:max-w-screen-sm'
    >
      <ReactMarkdown
        children={(localStorage.about as string) ?? props.children}
        components={{
          h1: Heading2,
          h2: Heading3,
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
              className='mr-2 mb-2 inline-block rounded-xl bg-slate-50/50 px-3 text-sm  hover:shadow dark:bg-slate-700/50 md:text-base'
              {...props}
            />
          )
        }}
      />
    </Section>
  )
}
