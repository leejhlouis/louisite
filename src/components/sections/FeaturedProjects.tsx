import { lazy, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '@/_data/projects'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'

const ArrowRightSLineIcon = lazy(() => import('remixicon-react/ArrowRightSLineIcon'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const Heading2 = lazy(() => import('@/components/common/reusable/heading/Heading2'))
const ProjectCard = lazy(() => import('@/components/common/ProjectCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Projects(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, (): void => {
    ref.current?.classList.add('animate-start')
  })

  const projectsEntry: JSX.Element[] = projects
    .filter(({ featured }) => !!featured)
    .map(project => (
      <ProjectCard
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
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
          )}
        >
          {projectsEntry}
        </div>
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
