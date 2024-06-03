import { lazy, useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme.ts'

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop.tsx'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB.tsx'))

export default function App() {
  useEffect(() => {
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
      return
    }
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <>
      <Router />
      <ScrollToTop />
      <ScrollToTopFAB />
    </>
  )
}
