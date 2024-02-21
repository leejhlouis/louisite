import { lazy } from 'react'
import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton.tsx'))

export default function NavLinks() {
  const links = navItems.map((item, index) => (
    <li key={index}>
      <NavLink
        key={index}
        to={item.href}
      >
        {({ isActive }) => <PrimaryButton active={isActive}>{item.name}</PrimaryButton>}
      </NavLink>
    </li>
  ))

  return <ul className='flex flex-row items-center space-x-6'>{links}</ul>
}
