import ArrowUpFillIcon from 'remixicon-react/ArrowUpFillIcon.js'
import { useEffect, useState } from "react";

export default function ScrollToTopFAB() {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleScroll = () => {
    setButtonVisible(window.scrollY + 72 > window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`${isButtonVisible ? 'opacity-100' : 'opacity-0'} fixed bottom-0 right-0 mb-8 mr-8 cursor-pointer rounded-full bg-slate-50/80 p-2 shadow-lg backdrop-filter duration-300 hover:mb-10 hover:bg-slate-50 dark:bg-slate-700/80 hover:dark:bg-slate-700`}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <ArrowUpFillIcon size={24} />
    </div>
  )
}
