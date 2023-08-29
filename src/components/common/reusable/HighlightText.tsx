import { useEffect, useRef, useState } from 'react'

export default function HighlightText(props: { children: React.ReactNode }) {
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
      className='from-fuchsia-700 to-blue-700 bg-clip-text text-transparent transition dark:from-fuchsia-400 dark:to-blue-400'
    >
      {props.children}
    </span>
  )
}
