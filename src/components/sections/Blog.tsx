import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import BlogProps from '@/types/components/BlogProps'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const BlogCard = lazy(() => import('@/components/common/BlogCard'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))

export default function Blog({ articles }: BlogProps) {
  const { animationClass } = useFadeInMounted()

  const articlesEntry = articles.map((item, index) => (
    <BlogCard
      {...item}
      key={index}
    />
  ))

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
      <Heading1
        className={clsx(
          'animate-fade-in',
          'text-primary-dark dark:text-white',
          'font-extrabold',
          'pb-2 pt-2'
        )}
      >
        Blog
      </Heading1>
      <p className='animate-fade-in !delay-200'>
        Collection of my writings and thoughts. Subscribe to{' '}
        <InlineLink href='/blog/rss'>RSS feed</InlineLink>.
      </p>
      <div
        className={clsx(
          'animate-fade-in !delay-300',
          'grid justify-items-center gap-6 md:grid-cols-2',
          'pt-6'
        )}
      >
        {articlesEntry}
      </div>
    </Section>
  )
}
