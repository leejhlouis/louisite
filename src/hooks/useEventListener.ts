import { useEffect } from 'react'

export const useEventListener = (eventType: string, listener: () => void): void => {
  useEffect(() => {
    window.addEventListener(eventType, listener)
    return () => {
      window.removeEventListener(eventType, listener)
    }
  }, [eventType, listener])
}
