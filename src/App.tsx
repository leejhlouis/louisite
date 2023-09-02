import { useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme.ts'

export default function App() {
  useEffect(() => {
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return <Router />
}
