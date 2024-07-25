import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon.js'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton.tsx'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText.tsx'))
const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline.tsx'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink.tsx'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks.tsx'))
const Section = lazy(() => import('@/components/layouts/Section.tsx'))

export default function Hero() {
  const { animationClass } = useFadeInMounted()
  const scrollToProjects = () => window.location.assign('#projects')

  return (
    <Section
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
        <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
          Hey👋, I'm{' '}
          <SlidingInUnderline
            type='secondary'
            height='lg'
          >
            Louis Gustavo
          </SlidingInUnderline>
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-3xl sm:text-5xl lg:text-6xl',
            'break-words font-extrabold tracking-tight'
          )}
        >
          I specialize in both building <HighlightText>web interfaces</HighlightText> and{' '}
          <HighlightText>backend systems</HighlightText>.
        </h1>
        <p
          className={clsx(
            'hidden',
            'animate-fade-in !delay-300',
            'text-muted-dark  dark:text-muted',
            'sm:text-lg lg:text-xl',
            'pb-0'
          )}
        >
          Software Engineer at
        </p>
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
