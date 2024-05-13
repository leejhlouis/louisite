import { lazy, useRef } from 'react'
import { projects } from '@/_data/projects'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

const ArrowRightSLineIcon = lazy(() => import('remixicon-react/ArrowRightSLineIcon.js'))
const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const ListCard = lazy(() => import('@/components/common/ListCard.tsx'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton.tsx'))

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, () => {
    ref.current?.classList.add('animate-start')
  })

  const projectsEntry = projects
    .filter(({ featured }) => !!featured)
    .map(project => (
      <ListCard
        {...project}
        key={project.id}
      />
    ))

  return (
    <div ref={ref}>
      <Section
        id='projects'
        className='scroll-mt-8'
      >
        <Heading2 className='animate-fade-in pb-6 text-center text-primary-dark !delay-200 dark:text-white'>
          Featured projects
        </Heading2>
        <ul
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
          )}
        >
          {projectsEntry}
        </ul>
        <div className='animate-fade-in !delay-500'>
          <NavLink to='/projects'>
            <PrimaryButton
              className='my-8'
              icon={<ArrowRightSLineIcon size={20} />}
              inverted
            >
              More projects
            </PrimaryButton>
          </NavLink>
        </div>
      </Section>
    </div>
  )
}
