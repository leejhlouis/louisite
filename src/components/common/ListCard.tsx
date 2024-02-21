import ProjectProps from '@/types/components/ProjectProps'
import clsx from 'clsx'

export default function ListCard({
  className,
  title,
  description,
  techStacks,
  links
}: ProjectProps) {
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
    <li
      className={clsx(
        'group',
        'w-full p-4 sm:p-6',
        'flex flex-col justify-between',
        'transform duration-300',
        'rounded-xl border border-slate-500/20 dark:border-slate-600/30',
        'bg-slate-100/20 dark:bg-slate-600/20',
        'hover:bg-slate-100/30 dark:hover:bg-slate-600/30',
        'cursor-pointer backdrop-filter',
        className
      )}
    >
      <header>
        <h3 className='pb-4 text-lg font-bold md:text-xl'>
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
        </h3>
        <p className='text-muted-dark dark:text-muted'>{description}</p>
      </header>
      <footer>
        <ul className='mb-4 flex flex-wrap'>{techStacksEntry}</ul>
        <ul className='flex space-x-4'>{linksEntry}</ul>
      </footer>
    </li>
  )
}
