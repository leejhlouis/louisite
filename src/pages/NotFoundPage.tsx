import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader.tsx'

const NotFound = lazy(() => import('@/components/sections/NotFound.tsx'))

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | LOUISITE</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <NotFound />
      </Suspense>
    </>
  )
}
