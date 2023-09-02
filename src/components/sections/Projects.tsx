import { lazy, useRef } from 'react'
import projects from '@/_data/projects'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading2 = lazy(() => import('@/components/common/reusable/Heading2.tsx'))
const ListCard = lazy(() => import('@/components/common/ListCard.tsx'))

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, () => {
    ref.current?.classList.add('animate-start')
  })

  const projectsEntry = projects.map(project => (
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
        <Heading2 className='animate-fade-in text-center'>Featured projects</Heading2>
        <ul className='animate-fade-in mx-auto mt-6 grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-8 xl:grid-cols-3'>
          {projectsEntry}
        </ul>
      </Section>
    </div>
  )
}
