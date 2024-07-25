import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'
import clsx from 'clsx'

export default function Dropdown() {
  const links = navItems.map((item, index) => (
    <NavLink
      key={index}
      className={({ isActive }) =>
        clsx('w-full', 'hover:color-[inherit] hover:no-underline', {
          'font-bold': isActive,
          'font-nomal': !isActive
        })
      }
      to={item.href}
    >
      <li
        className={clsx(
          'cursor-pointer',
          'flex w-full px-2 py-1',
          'hover:bg-slate-300/50 hover:dark:bg-slate-950/50'
        )}
      >
        <span>{item.name}</span>
      </li>
    </NavLink>
  ))

  return (
    <ul
      className={clsx(
        'absolute right-0',
        'mt-2 py-2',
        'bg-slate-200/95 dark:bg-slate-900/95',
        'flex w-32 flex-col rounded-lg shadow-lg'
      )}
    >
      {links}
    </ul>
  )
}
