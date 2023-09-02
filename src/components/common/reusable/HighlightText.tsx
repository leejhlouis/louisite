import { useEffect, useRef, useState } from 'react'
import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function HighlightText({ children }: ComponentProps) {
  const ref = useRef<HTMLLinkElement>(null)
  const [degree, setDegree] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDegree((degree + 15) % 360)
      if (ref.current) {
        ref.current.style.backgroundImage = `linear-gradient(${degree}deg, var(--tw-gradient-stops))`
      }
    }, 75)
    return () => clearInterval(interval)
  })

  return (
    <span
      ref={ref}
      className={clsx(
        'from-fuchsia-700 to-blue-700 bg-clip-text',
        'dark:from-fuchsia-400 dark:to-blue-400',
        'text-transparent transition'
      )}
    >
      {children}
    </span>
  )
}
