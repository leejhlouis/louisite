import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'

export default function NavLinks() {
  const links = navItems.map((item, index) => (
    <li key={index}>
      <NavLink
        key={index}
        to={item.href}
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        {item.name}
      </NavLink>
    </li>
  ))

  return <ul className='flex flex-row items-center space-x-4 sm:space-x-6'>{links}</ul>
}
