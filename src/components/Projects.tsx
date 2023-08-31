import Section from '@/components/layouts/Section.tsx'
import Heading2 from '@/components/common/reusable/Heading2.tsx'
import ListCard from '@/components/common/ListCard.tsx'
import projects from '@/_data/projects'
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

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
