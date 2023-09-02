import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const PageWrapper = React.lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Navbar = React.lazy(() => import('@/components/layouts/Navbar.tsx'))
const Hero = React.lazy(() => import('@/components/sections/Hero.tsx'))
const Projects = React.lazy(() => import('@/components/sections/Projects.tsx'))
const Footer = React.lazy(() => import('@/components/layouts/Footer.tsx'))
const ScrollToTopFAB = React.lazy(() => import('@/components/common/ScrollToTopFAB.tsx'))

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Louis Gustavo | Software Engineer and Computer Science Student</title>
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
