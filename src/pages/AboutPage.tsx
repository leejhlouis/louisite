import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'
import about from '@/_data/about/about.md'

const Navbar = lazy(() => import('@/components/layouts/Navbar.tsx'))
const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Footer = lazy(() => import('@/components/layouts/Footer.tsx'))
const About = lazy(() => import('@/components/sections/About.tsx'))

export default function AboutPage() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(about as RequestInfo | URL)
      .then(response => response.text())
      .then(text => {
        setContent(text)
        localStorage.about = text
      })
      .catch(() => {
        setContent('Failed to load content. Please reload the page')
      })
  }, [content])

  return (
    <>
      <Helmet>
        <title>About | Louis Gustavo</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <About children={content} />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
