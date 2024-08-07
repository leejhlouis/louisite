import { lazy, useState } from 'react'
import useEventListener from '@/hooks/useEventListener'
import clsx from 'clsx'

const IconButton = lazy(() => import('@/components/common/reusable/button/IconButton.tsx'))
const ArrowUpFillIcon = lazy(() => import('remixicon-react/ArrowUpFillIcon.js'))

const SCROLL_OFFSET = 120

export default function ScrollToTopFAB() {
  const [isButtonVisible, setButtonVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEventListener('scroll', () => {
    const { scrollY, innerHeight } = window
    const { scrollHeight } = document.documentElement
    setButtonVisible(
      scrollY + SCROLL_OFFSET > innerHeight && scrollY + innerHeight < scrollHeight - SCROLL_OFFSET
    )
  })

  return (
    <div className='fixed bottom-0 right-0 mb-8 mr-8'>
      <IconButton
        className={clsx('duration-300', {
          'opacity-100': isButtonVisible,
          'opacity-0': !isButtonVisible
        })}
        icon={<ArrowUpFillIcon size={24} />}
        screenReaderText='Scroll to top'
        onClick={scrollToTop}
      />
    </div>
  )
}
