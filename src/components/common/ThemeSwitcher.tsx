import { lazy, useState } from 'react'
import checkDarkTheme from '@/utils/checkDarkTheme.ts'

const IconButton = lazy(() => import('@/components/common/reusable/button/IconButton'))
const SunLineIcon = lazy(() => import('remixicon-react/SunLineIcon'))
const MoonLineIcon = lazy(() => import('remixicon-react/MoonLineIcon'))

export default function ThemeSwitcher(): JSX.Element {
  const [isDark, setDark] = useState<boolean>(checkDarkTheme)

  const toggleDarkTheme = (): void => {
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
