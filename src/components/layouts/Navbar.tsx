import { lazy, useState } from 'react'
import useEventListener from '@/hooks/useEventListener'
import Dropdown from '@/components/common/Dropdown'
import Title from '@/components/common/Title'

const IconButton = lazy(() => import('@/components/common/reusable/button/IconButton.tsx'))
const NavLinks = lazy(() => import('@/components/common/NavLinks.tsx'))
const ThemeSwitcher = lazy(() => import('@/components/common/ThemeSwitcher'))
const Menu3FillIcon = lazy(() => import('remixicon-react/Menu3FillIcon'))

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [toggle, setToggle] = useState(false)

  const handleWidthChange = () => setIsMobile(window.innerWidth < 640)
  useEventListener('resize', handleWidthChange)

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-xl'>
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <Title size='sm' />
        <div className='flex items-center space-x-2 sm:space-x-6'>
          {!isMobile && <NavLinks />}
          {isMobile && (
            <div className='relative'>
              <IconButton
                icon={<Menu3FillIcon size={20} />}
                screenReaderText='Toggle dropdown'
                onClick={() => setToggle(!toggle)}
              />
              {toggle && <Dropdown />}
            </div>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
