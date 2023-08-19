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

  return <ul className='flex flex-row items-center gap-4 sm:gap-8'>{links}</ul>
}
