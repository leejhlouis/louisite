import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'

export default function Dropdown() {
  const links = navItems.map((item, index) => (
    <NavLink
      key={index}
      className='hover:color-[inherit] w-full hover:no-underline'
      to={item.href}
      style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal'
      })}
    >
      <li className='cursor-pointer py-1 px-2 hover:bg-slate-200 hover:dark:bg-slate-800'>
        {item.name}
      </li>
    </NavLink>
  ))

  return (
    <ul className='absolute right-0 mt-2 flex w-32 flex-col rounded-lg bg-white py-2 shadow-lg dark:bg-slate-900'>
      {links}
    </ul>
  )
}
