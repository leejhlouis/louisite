import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import BlogPage from '@/pages/BlogPage'
import AboutPage from '@/pages/AboutPage'
import ProjectPage from '@/pages/ProjectPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/blog'
        element={<BlogPage />}
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
