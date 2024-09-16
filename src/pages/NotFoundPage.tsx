import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const NotFound = lazy(() => import('@/components/sections/NotFound'))

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Louis Gustavo</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <NotFound />
      </Suspense>
    </>
  )
}
