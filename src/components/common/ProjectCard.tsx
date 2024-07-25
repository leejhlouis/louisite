import { lazy } from 'react'
import ProjectProps from '@/types/components/ProjectProps'
import clsx from 'clsx'

const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const Card = lazy(() => import('@/components/common/reusable/Card'))
const Badge = lazy(() => import('@/components/common/reusable/Badge'))

export default function ProjectCard({ title, description, techStacks, links }: ProjectProps) {
  const techStacksEntry = techStacks.map((techStack, index) => (
    <Badge
      key={index}
      className={clsx(
        'mr-2 last-of-type:mr-0',
        'text-base font-medium text-primary-dark dark:text-primary-light'
      )}
    >
      {techStack}
    </Badge>
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
        <div className='mb-6 flex flex-wrap'>{techStacksEntry}</div>
        <ul className='flex space-x-3'>{linksEntry}</ul>
      </footer>
    </Card>
  )
}
