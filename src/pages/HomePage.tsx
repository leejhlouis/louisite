import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Navbar = lazy(() => import('@/components/layouts/Navbar.tsx'))
const Hero = lazy(() => import('@/components/sections/Hero.tsx'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer.tsx'))

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
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
