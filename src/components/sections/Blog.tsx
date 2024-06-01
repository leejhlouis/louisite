import { lazy, useEffect, useState } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import calculateMinRead from '@/utils/calculateMinRead'
import BlogProps from '@/types/components/BlogProps'
import InlineLink from '../common/reusable/InlineLink'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const BlogCard = lazy(() => import('@/components/common/BlogCard'))

export default function Blog() {
  const { animationClass } = useFadeInMounted()
  const [articles, setArticles] = useState<BlogProps[]>([])

  const getProperty = (item: Element, query: string) => item.querySelector(query)?.textContent ?? ''

  useEffect(() => {
    fetch('/blog/rss')
      .then(res => res.text())
      .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then(data => {
        const items = data.querySelectorAll('item')
        const loadedItems = []

        for (const item of items) {
          const title = getProperty(item, 'title')
          const link = getProperty(item, 'link')

          const pubDate = new Date(getProperty(item, 'pubDate'))
          const formattedDate = pubDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })

          const content = item.getElementsByTagNameNS('*', 'encoded').item(0)
          const parser = new DOMParser()
          const parsedContent = parser.parseFromString(content?.textContent ?? '', 'text/html')
          const minRead = calculateMinRead(parsedContent.body.textContent ?? '')

          loadedItems.push({
            title,
            link,
            datePublished: formattedDate,
            minRead
          })
        }

        setArticles(loadedItems)
      })
  }, [])

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
        Collection of my writings and thoughts.
        Subscribe to <InlineLink href='/blog/rss'>RSS feed</InlineLink>.
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
