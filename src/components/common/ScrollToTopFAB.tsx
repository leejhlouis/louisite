import ArrowUpFillIcon from 'remixicon-react/ArrowUpFillIcon.js'
import { useEffect, useState } from 'react'
import IconButton from '@/components/common/reusable/button/IconButton.tsx'

const SCROLL_OFFSET = 120

export default function ScrollToTopFAB() {
  const [isButtonVisible, setButtonVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleScroll = () => {
    const { scrollY, innerHeight } = window
    const { scrollHeight } = document.documentElement
    setButtonVisible(
      scrollY + SCROLL_OFFSET > innerHeight && scrollY + innerHeight < scrollHeight - SCROLL_OFFSET
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='fixed bottom-0 right-0 mb-8 mr-8'>
      <IconButton
        className={`${isButtonVisible ? 'opacity-100' : 'opacity-0'}  duration-300`}
        icon={<ArrowUpFillIcon size={24} />}
        screenReaderText='Scroll to top'
        onClick={scrollToTop}
      />
    </div>
  )
}
