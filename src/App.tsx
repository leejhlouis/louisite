import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage.tsx'
import AboutPage from '@/pages/AboutPage.tsx'
import NotFoundPage from '@/pages/NotFoundPage.tsx'
import checkDarkTheme from '@/utils/checkDarkTheme.ts'

export function App() {
  useEffect(() => {
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/about'
        element={<AboutPage />}
      />
      <Route
        path='/*'
        element={<NotFoundPage />}
      />
    </Routes>
  )
}
