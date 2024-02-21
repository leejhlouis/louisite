import ProjectProps from '@/types/components/ProjectProps'
import { lazy, useEffect, useState } from 'react'
import { filters, projects } from '@/_data/projects'
import useMounted from '@/hooks/useMounted'
import useEventListener from '@/hooks/useEventListener'
import clsx from 'clsx'

const Section = lazy(() => import('@/components/layouts/Section.tsx'))
const Heading1 = lazy(() => import('@/components/common/reusable/Heading1.tsx'))
const ListCard = lazy(() => import('@/components/common/ListCard.tsx'))

export default function Projects() {
  const mounted = useMounted()
  const [hasScrolledToTop, setHasScrolledToTop] = useState(false)

  useEventListener('scroll', () => {
    if (hasScrolledToTop) {
      return
    }
    setHasScrolledToTop(mounted && window.scrollY <= 25)
  })

  const [filteredProjects, setFilteredProjects] = useState<Array<ProjectProps>>([])
  const [filterValues, setFilterValues] = useState<Array<string>>([])

  const filterProjects = (newValue: string) => {
    if (filterValues.includes(newValue)) {
      setFilterValues(filterValues.filter(value => value !== newValue))
      return
    }
    setFilterValues([...filterValues, newValue])
  }
  useEffect(() => {
    let filtered: ProjectProps[] = [...projects]

    if (filterValues.length) {
      filtered = projects.filter((project: ProjectProps) => {
        let allTechStacks: string[] = [...project.techStacks]
        if (project.otherTechStacks) {
          allTechStacks = [...allTechStacks, ...project.otherTechStacks]
        }
        console.log(allTechStacks)
        return filterValues.every((filter: string) => allTechStacks.includes(filter))
      })
    }

    setFilteredProjects(filtered)
  }, [filterValues])

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
            filterValues.includes(filter),
          'bg-primary-dark/10 font-semibold text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95':
            !filterValues.includes(filter)
        },
        'animate-fade-in !delay-200',
        'inline cursor-pointer list-none',
        'duration-300 hover:bg-primary-dark/[0.15] hover:dark:bg-primary-light/[0.15]',
        'text-sm',
        'rounded-xl px-2 py-1'
      )}
      onClick={() => filterProjects(filter)}
    >
      {filter}
    </li>
  ))

  return (
    <Section
      className={clsx(
        {
          'animate-start': mounted || hasScrolledToTop
        },
        'scroll-mt-8'
      )}
    >
      <div className='pb-6'>
        <Heading1
          className={clsx(
            'animate-fade-in',
            'text-primary-dark dark:text-white',
            'font-extrabold',
            'pb-4'
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
      <ul
        className={clsx(
          'animate-fade-in !delay-300',
          'mx-auto mt-6 md:mt-8',
          'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {projectsEntry}
      </ul>
    </Section>
  )
}
