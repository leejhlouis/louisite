import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const PageWrapper = React.lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Navbar = React.lazy(() => import('@/components/layouts/Navbar.tsx'))
const Hero = React.lazy(() => import('@/components/Hero.tsx'))
const Projects = React.lazy(() => import('@/components/Projects.tsx'))
const Footer = React.lazy(() => import('@/components/layouts/Footer.tsx'))
const ScrollToTopFAB = React.lazy(() => import('@/components/common/ScrollToTopFAB.tsx'))

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper className='h-screen min-h-[480px]'>
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
