import worksProps from '@/types/WorksProps'

export default function ListCard(props: worksProps) {
  const techStacksEntry = props.techStacks.map((techStack, index) => (
    <li
      key={index}
      className='mr-4 text-base font-medium text-blue-700 last-of-type:mr-0 dark:text-blue-200'
    >
      {techStack}
    </li>
  ))

  const linksEntry = props.links.map((link, index) => (
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
      className='flex w-full transform cursor-pointer 
        flex-col justify-between rounded-xl border-[1px] bg-slate-100 py-8 px-6 drop-shadow-xl duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800 hover:dark:bg-[rgb(22,32,50)]'
    >
      <header>
        <p className='pb-2 text-blue-700 dark:text-blue-200'>{props.category}</p>
        <h3 className='pb-4 text-xl font-bold md:text-2xl'>
          <a
            href={
              props.links.find(link => link.label === 'Source code')
                ? props.links.find(link => link.label === 'Source code')?.url
                : props.links.find(link => link.label === 'Live')?.url
            }
            className='no-default z-0 before:absolute before:top-0 before:left-0 before:h-full before:w-full'
            target='_blank'
            rel='noreferrer'
          >
            {props.title}
          </a>
        </h3>
        <p className='text-muted-dark dark:text-muted'>{props.description}</p>
      </header>
      <footer>
        <ul className='mb-4 flex flex-wrap'>{techStacksEntry}</ul>
        <ul className='flex gap-4'>{linksEntry}</ul>
      </footer>
    </li>
  )
}
