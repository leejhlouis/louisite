import { Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/HomePage.tsx'
import AboutPage from '@/pages/AboutPage.tsx'
import ProjectPage from '@/pages/ProjectPage.tsx'
import NotFoundPage from '@/pages/NotFoundPage.tsx'

export default function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/projects'
        element={<ProjectPage />}
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
