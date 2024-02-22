import { useState } from 'react'
import useMounted from '@/hooks/useMounted'
import useEventListener from '@/hooks/useEventListener'

export default function useFadeInMounted() {
  const mounted = useMounted()
  const [hasScrolledToTop, setHasScrolledToTop] = useState(false)

  useEventListener('scroll', () => {
    if (hasScrolledToTop) {
      return
    }
    setHasScrolledToTop(mounted && window.scrollY <= 25)
  })

  const animationClass = {
    'animate-start': mounted || hasScrolledToTop
  }

  return { animationClass }
}
