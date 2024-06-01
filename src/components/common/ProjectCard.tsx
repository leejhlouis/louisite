import { lazy } from 'react'
import ProjectProps from '@/types/components/ProjectProps'
import clsx from 'clsx'

const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const Card = lazy(() => import('@/components/common/reusable/Card'))

export default function ProjectCard({ title, description, techStacks, links }: ProjectProps) {
  const techStacksEntry = techStacks.map((techStack, index) => (
    <li
      key={index}
      className={clsx(
        'mr-4 last-of-type:mr-0',
        'text-base font-medium text-primary-dark dark:text-primary-light'
      )}
    >
      {techStack}
    </li>
  ))

  const linksEntry = links.map((link, index) => (
    <li
      key={index}
      className='z-10'
    >
      <a
        href={link.url}
        target='_blank'
        rel='noreferrer'
        aria-label={link.label}
      >
        {link.icon}
      </a>
    </li>
  ))

  return (
    <Card className='flex flex-col justify-between p-4 sm:p-6'>
      <header>
        <Heading3>
          <a
            href={
              links.find(({ label }) => label === 'Source code')?.url ??
              links.find(({ label }) => label === 'Live')?.url
            }
            className={clsx(
              'no-default z-0',
              'group-hover:text-primary-dark group-hover:dark:text-primary-light'
            )}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </Heading3>
        <p className='text-muted-dark dark:text-muted'>{description}</p>
      </header>
      <footer>
        <ul className='mb-4 flex flex-wrap'>{techStacksEntry}</ul>
        <ul className='flex space-x-4'>{linksEntry}</ul>
      </footer>
    </Card>
  )
}
