import { lazy, useState } from 'react'
import { Link } from 'react-router-dom'
import useEventListener from '@/hooks/useEventListener'

const IconButton = lazy(() => import('@/components/common/reusable/button/IconButton.tsx'))
const Dropdown = lazy(() => import('@/components/common/Dropdown'))
const NavLinks = lazy(() => import('@/components/common/NavLinks.tsx'))
const ThemeSwitcher = lazy(() => import('@/components/common/ThemeSwitcher'))
const Menu3FillIcon = lazy(() => import('remixicon-react/Menu3FillIcon'))

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480)
  const [toggle, setToggle] = useState(false)

  const handleWidthChange = () => setIsMobile(window.innerWidth < 480)
  useEventListener('resize', handleWidthChange)

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-lg dark:backdrop-blur-xl'>
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <Link
          to='/'
          className='title'
        >
          <p className='pb-0 text-2xl font-light'>
            LOUI<span className='font-bold'>SITE</span>
          </p>
        </Link>
        <div className='flex items-center space-x-2 xs:space-x-6'>
          {!isMobile && <NavLinks />}
          {isMobile && (
            <div className='relative'>
              <IconButton
                icon={<Menu3FillIcon />}
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
