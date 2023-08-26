import { useState } from 'react'
import SunLineIcon from 'remixicon-react/SunLineIcon.js'
import MoonLineIcon from 'remixicon-react/MoonLineIcon.js'
import checkDarkTheme from '@/utils/checkDarkTheme.ts'
import IconButton from '@/components/common/reusable/button/IconButton.tsx'

export default function ThemeSwitcher() {
  const [isDark, setDark] = useState(checkDarkTheme)

  const toggleDarkTheme = () => {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'light' : 'dark'
    setDark(!isDark)
  }

  return (
    <IconButton
      icon={isDark ? <MoonLineIcon /> : <SunLineIcon />}
      screenReaderText='Toggle theme'
      onClick={toggleDarkTheme}
    />
  )
}
