import ProjectProps from '@/types/components/ProjectProps'
import { lazy, useEffect, useState } from 'react'
import { filters, projects } from '@/_data/projects'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const ProjectCard = lazy(() => import('@/components/common/ProjectCard.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const Badge = lazy(() => import('@/components/common/reusable/Badge.tsx'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink.tsx'))

export default function Projects() {
  const { animationClass } = useFadeInMounted()

  const [filteredProjects, setFilteredProjects] = useState<Array<ProjectProps>>([...projects])
  const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])

  const filterProjects = (newValue: string) => {
    if (selectedFilters.includes(newValue)) {
      setSelectedFilters(selectedFilters.filter(value => value !== newValue))
      return
    }
    setSelectedFilters([...selectedFilters, newValue])
  }
  const removeselectedFilters = () => {
    setSelectedFilters([])
  }

  useEffect(() => {
    let filtered: ProjectProps[] = [...projects]

    if (selectedFilters.length) {
      filtered = projects.filter((project: ProjectProps) => {
        let allTechStacks: string[] = [...project.techStacks]
        if (project.otherTechStacks) {
          allTechStacks = [...allTechStacks, ...project.otherTechStacks]
        }
        console.log(allTechStacks)
        return selectedFilters.every((filter: string) => allTechStacks.includes(filter))
      })
    }

    setFilteredProjects(filtered)
  }, [selectedFilters])

  const projectsEntry = filteredProjects.map(project => (
    <ProjectCard
      {...project}
      key={project.id}
    />
  ))

  const filterEntry = filters.map(filter => (
    <Badge
      key={filter}
      className='animate-fade-in cursor-pointer !delay-200'
      active={selectedFilters.includes(filter)}
      onClick={() => filterProjects(filter)}
    >
      {filter}
    </Badge>
  ))

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
      <div className='pb-6'>
        <Heading1
          className={clsx(
            'animate-fade-in',
            'text-primary-dark dark:text-white',
            'pb-2 pt-2'
          )}
        >
          Projects
        </Heading1>
        <p className='animate-fade-in !delay-200'>Archives of my projects.</p>
        <ul className='flex flex-wrap gap-2'>
          <li className='animate-fade-in inline !delay-200'>Filters:</li>
          {filterEntry}
        </ul>
      </div>
      {!!filteredProjects.length && (
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
          )}
        >
          {projectsEntry}
        </div>
      )}
      {!filteredProjects.length && (
        <div className='animate-fade-in mt-8 !delay-300'>
          <p className='text-muted-dark dark:text-muted'>
            Results not found.{' '}
            <span onClick={removeselectedFilters}>
              <InlineLink>Clear filters</InlineLink>
            </span>
          </p>
        </div>
      )}
    </Section>
  )
}
