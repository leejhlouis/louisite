import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon.js'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton.tsx'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText.tsx'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks.tsx'))
const Section = lazy(() => import('@/components/layouts/Section.tsx'))

export default function Hero() {
  const { animationClass } = useFadeInMounted()
  const scrollToProjects = () => window.location.assign('#projects')

  return (
    <Section
      id='hero'className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <div className='flex h-3/4 flex-col justify-center space-y-6'>
        <h2 className={clsx('animate-fade-in', 'text-2xl md:text-4xl')}>
          Hey👋, I'm Louis Gustavo
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-4xl xs:text-5xl md:text-6xl xl:text-7xl',
            'break-words font-extrabold tracking-tight'
          )}
        >
          A <HighlightText>software engineer</HighlightText> and a{' '}
          <HighlightText>Computer Science</HighlightText> undergraduate.
        </h1>
        <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
      </div>
      <PrimaryButton
        className='mx-auto animate-bounce'
        icon={<ArrowDownSLineIcon />}
        onClick={scrollToProjects}
      >
        Featured projects
      </PrimaryButton>
    </Section>
  )
}
