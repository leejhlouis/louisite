import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Navbar = lazy(() => import('@/components/layouts/Navbar.tsx'))
const Hero = lazy(() => import('@/components/sections/Hero.tsx'))
const Projects = lazy(() => import('@/components/sections/Projects.tsx'))
const Footer = lazy(() => import('@/components/layouts/Footer.tsx'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB.tsx'))

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Louis Gustavo | Software Engineer and Computer Science Undergraduate</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Hero />
          <Projects />
          <Footer />
          <ScrollToTopFAB />
        </PageWrapper>
      </Suspense>
    </>
  )
}
