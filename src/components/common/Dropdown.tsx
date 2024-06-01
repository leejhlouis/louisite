import { lazy } from 'react'
import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'
import clsx from 'clsx'

const Badge = lazy(() => import('@/components/common/reusable/Badge.tsx'))

export default function Dropdown() {
  const links = navItems.map((item, index) => (
    <NavLink
      key={index}
      className={({ isActive }) =>
        clsx('hover:color-[inherit] flex w-full hover:no-underline', {
          'font-bold': isActive,
          'font-nomal': !isActive
        })
      }
      to={item.href}
    >
      <li className='cursor-pointer px-2 py-1 hover:bg-slate-100 hover:dark:bg-slate-900'>
        {item.name}
      </li>
      {item.isNew && <Badge size='small'>NEW</Badge>}
    </NavLink>
  ))

  return (
    <ul
      className={clsx(
        'absolute right-0',
        'mt-2 py-2',
        'bg-slate-50 dark:bg-slate-950',
        'flex w-32 flex-col rounded-lg shadow-lg'
      )}
    >
      {links}
    </ul>
  )
}
