import { lazy, useState } from 'react'
import SunLineIcon from 'remixicon-react/SunLineIcon.js'
import MoonLineIcon from 'remixicon-react/MoonLineIcon.js'
import checkDarkTheme from '@/utils/checkDarkTheme.ts'

const IconButton = lazy(() => import('@/components/common/reusable/button/IconButton.tsx'))

export default function ThemeSwitcher() {
  const [isDark, setDark] = useState(checkDarkTheme)

  const toggleDarkTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'light' : 'dark'
    setDark(!isDark)
  }

  return (
    <IconButton
      className='duration-300'
      icon={isDark ? <MoonLineIcon size={20} /> : <SunLineIcon size={20} />}
      screenReaderText='Toggle theme'
      onClick={toggleDarkTheme}
    />
  )
}
