import { useEffect, useState } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [])

  const mountedClass = mounted ? 'mounted' : ''

  return {
    mounted,
    mountedClass
  }
}
