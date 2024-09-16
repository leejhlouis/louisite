import { RefObject, useEffect } from 'react'

export default function useEventListener(
  eventType: string,
  listener: (e: Event) => void,
  element?: RefObject<HTMLElement>
): void {
  const el = element?.current ?? window
  useEffect((): (() => void) => {
    el.addEventListener(eventType, listener)
    return (): void => {
      el.removeEventListener(eventType, listener)
    }
  }, [el, eventType, listener])
}
