import { useState, useEffect, RefObject } from 'react'

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  onIntersection: () => void
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-100px' }
    )
    ref.current && observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isIntersecting, ref])

  useEffect(() => {
    if (ref.current && isIntersecting) {
      onIntersection()
    }
  }, [isIntersecting, onIntersection, ref])
}
