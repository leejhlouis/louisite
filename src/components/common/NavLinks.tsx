import { lazy } from 'react'
import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'
import NavItemsProps from '@/types/NavItemsProps'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))

export default function NavLinks(): JSX.Element {
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li
        className='flex'
        key={index}
      >
        <NavLink
          key={index}
          to={item.href}
        >
          {({ isActive }) => <PrimaryButton active={isActive}>{item.name}</PrimaryButton>}
        </NavLink>
      </li>
    )
  )

  return <ul className='flex flex-row items-center space-x-4'>{links}</ul>
}
