import { RefObject, useEffect } from 'react'

export default function useEventListener (
  eventType: string,
  listener: (e: Event) => void,
  element?: RefObject<HTMLElement>
) {
  const el = element?.current ?? window
  useEffect(() => {
    el.addEventListener(eventType, listener)
    return () => {
      el.removeEventListener(eventType, listener)
    }
  }, [el, eventType, listener])
}
