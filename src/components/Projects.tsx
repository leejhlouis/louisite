import Section from '@/components/layouts/Section.tsx'
import Heading2 from '@/components/common/reusable/Heading2.tsx'
import ListCard from '@/components/common/ListCard.tsx'
import projects from '@/_data/projects'

export default function Projects() {
  const projectsEntry = projects.map(project => (
    <ListCard
      {...project}
      key={project.id}
    />
  ))

  return (
    <Section
      id='projects'
      className='scroll-mt-8'
    >
      <Heading2 className='text-center'>Featured projects</Heading2>
      <ul className='mx-auto mt-6 grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-8 xl:grid-cols-3'>
        {projectsEntry}
      </ul>
    </Section>
  )
}
