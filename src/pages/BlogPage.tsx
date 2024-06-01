import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const Navbar = lazy(() => import('@/components/layouts/Navbar.tsx'))
const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Footer = lazy(() => import('@/components/layouts/Footer.tsx'))
const Blog = lazy(() => import('@/components/sections/Blog.tsx'))

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Louis Gustavo</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Blog />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
