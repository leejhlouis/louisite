import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const Navbar = React.lazy(() => import('@/components/layouts/Navbar.tsx'))
const PageWrapper = React.lazy(() => import('@/components/layouts/PageWrapper.tsx'))
const Footer = React.lazy(() => import('@/components/layouts/Footer.tsx'))
const Hero = React.lazy(() => import('@/components/Hero.tsx'))
const Works = React.lazy(() => import('@/components/Works.tsx'))

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
          <Works />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
