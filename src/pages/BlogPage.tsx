import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'
import calculateMinRead from '@/utils/calculateMinRead'
import ArticleProps from '@/types/ArticleProps'
import truncateText from '@/utils/truncateText'

const Navbar = lazy(() => import('@/components/layouts/Navbar.tsx'))
const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Footer = lazy(() => import('@/components/layouts/Footer.tsx'))
const Blog = lazy(() => import('@/components/sections/Blog.tsx'))

export default function BlogPage() {
  const [articles, setArticles] = useState<ArticleProps[]>([])

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
          const preview = truncateText(parsedContent.body.textContent ?? '', 150)

          loadedItems.push({
            title,
            link,
            datePublished: formattedDate,
            minRead,
            preview
          })
        }

        setArticles(loadedItems)
      })
  }, [])

  return (
    <>
      <Helmet>
        <title>Blog | Louis Gustavo</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Blog articles={articles} />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
