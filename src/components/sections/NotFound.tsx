import { lazy, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import useEventListener from '@/hooks/useEventListener'
import useMounted from '@/hooks/useMounted'
import clsx from 'clsx'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/Heading1.tsx'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton.tsx'))
const ArrowLeftSLineIcon = lazy(() => import('remixicon-react/ArrowLeftSLineIcon'))

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null)

  useEventListener('mousemove', e => {
    if (!(e instanceof MouseEvent) || !ref.current) {
      return
    }
    const { clientX, clientY } = e
    ref.current.style.setProperty('--gradientPosition', `${clientX}px ${clientY}px`)
  })

  const mounted = useMounted()

  return (
    <div
      className={clsx({
        'animate-start': mounted
      })}
    >
      <div
        ref={ref}
        className='cursor-tracking-gradient'
      >
        <Section
          className='flex h-screen flex-col justify-center md:items-center'
          maxWidthClass='md:max-w-screen-md'
        >
          {/* prettier-ignore */}
          <Heading1 className={clsx(
            'animate-fade-in', 
            'text-4xl md:text-center md:text-5xl'
            )}
          >
            The page is not available
          </Heading1>
          {/* prettier-ignore */}
          <p
            className={clsx(
              'animate-fade-in',
              'mb-4 text-lg md:text-center md:text-xl'
            )}
          >
            Oh, snap! You're in the middle of nowhere, but don't worry, returning home is just one
            click away.
          </p>
          <NavLink to='/'>
            <PrimaryButton
              icon={<ArrowLeftSLineIcon />}
              className='animate-bounce md:mx-auto'
              inverted
            >
              Go home
            </PrimaryButton>
          </NavLink>
        </Section>
      </div>
    </div>
  )
}
