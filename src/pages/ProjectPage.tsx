import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const Navbar = lazy(() => import('@/components/layouts/Navbar.tsx'))
const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Footer = lazy(() => import('@/components/layouts/Footer.tsx'))
const Projects = lazy(() => import('@/components/sections/Projects.tsx'))

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Louis Gustavo</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Projects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
