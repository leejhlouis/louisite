import SizeProps from '@/types/components/SizeProps'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function Title({ size }: SizeProps) {
  const textSize = (): string => {
    if (size === 'lg') {
      return 'text-2xl md:text-3xl'
    }
    return 'text-xl'
  }

  return (
    <Link
      to='/'
      className='title'
    >
      <p className={clsx('pb-0 font-light uppercase', textSize())}>
        LOUI<span className='font-bold'>SITE</span>
      </p>
    </Link>
  )
}
