import ProjectProps from '@/types/components/ProjectProps'
import { lazy, useEffect, useState } from 'react'
import { filters, projects } from '@/_data/projects'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const ListCard = lazy(() => import('@/components/common/ListCard.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/Heading1.tsx'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink.tsx'))

export default function Projects() {
  const { animationClass } = useFadeInMounted()

  const [filteredProjects, setFilteredProjects] = useState<Array<ProjectProps>>([])
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
    <ListCard
      {...project}
      key={project.id}
    />
  ))

  const filterEntry = filters.map(filter => (
    <li
      key={filter}
      className={clsx(
        {
          'bg-primary-dark/20 font-bold text-primary-dark dark:bg-primary-light/20 dark:text-primary-light':
            selectedFilters.includes(filter),
          'bg-primary-dark/10 font-semibold text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95':
            !selectedFilters.includes(filter)
        },
        'animate-fade-in !delay-200',
        'inline cursor-pointer list-none',
        'duration-300 hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175]',
        'text-sm',
        'rounded-xl px-2 py-1'
      )}
      onClick={() => filterProjects(filter)}
    >
      {filter}
    </li>
  ))

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)] scroll-mt-8')}>
      <div className='pb-6'>
        <Heading1
          className={clsx(
            'animate-fade-in',
            'text-primary-dark dark:text-white',
            'font-extrabold',
            'pb-4 pt-2'
          )}
        >
          Projects
        </Heading1>
        <p className='animate-fade-in !delay-200'>Showcase of my projects.</p>
        <ul className='flex flex-wrap gap-2'>
          <li className='animate-fade-in inline !delay-200'>Filters:</li>
          {filterEntry}
        </ul>
      </div>
      {!!filteredProjects.length && (
        <ul
          className={clsx(
            'animate-fade-in !delay-300',
            'mx-auto mt-6 md:mt-8',
            'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
          )}
        >
          {projectsEntry}
        </ul>
      )}
      {!filteredProjects.length && (
        <div className='mt-8'>
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
