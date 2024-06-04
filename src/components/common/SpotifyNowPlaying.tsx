import { lazy, useEffect, useRef } from 'react'
import useSWR from 'swr'

const Card = lazy(() => import('@/components/common/reusable/Card'))
const SpotifyFillIcon = lazy(() => import('remixicon-react/SpotifyFillIcon.js'))

export default function SpotifyNowPlaying() {
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data } = useSWR('/spotify', fetcher)

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    marqueeRef.current?.classList.remove('animate-marquee')
    if (
      marqueeRef.current?.scrollWidth &&
      containerRef.current?.clientWidth &&
      marqueeRef.current.scrollWidth > containerRef.current.clientWidth
    ) {
      setTimeout(() => {
        marqueeRef.current?.classList.add('animate-marquee')
      }, 100)
      return
    }
  }, [data])

  return (
    data?.isPlaying && (
      <div className='mx-auto max-w-sm py-3'>
        <a
          href={data.songUrl}
          target='_blank'
          title={`${data.title} - ${data.artist}`}
        >
          <Card className='flex items-center'>
            <img
              className='aspect-square size-16 rounded-xl p-[2px] sm:size-20'
              src={data.albumImageUrl}
            />
            <div
              ref={containerRef}
              className='items flex w-[calc(100%-5.5rem)] flex-col px-2 sm:w-[calc(100%-7rem)] sm:px-3'
            >
              <div className='overflow-hidden whitespace-nowrap'>
                <span
                  ref={marqueeRef}
                  className='inline-block whitespace-nowrap pb-0 pr-2 font-bold'
                >
                  {data.title}
                </span>
              </div>
              <span className='mr-1 truncate text-sm text-muted-dark dark:text-muted'>
                {data.artist}
              </span>
            </div>
            <div className='mr-2 w-6'>
              <SpotifyFillIcon size={20} />
            </div>
          </Card>
        </a>
      </div>
    )
  )
}
