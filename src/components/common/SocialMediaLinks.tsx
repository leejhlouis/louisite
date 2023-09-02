import socialList from '@/_data/social.tsx'
import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function SocialMediaLinks({ className }: ComponentProps) {
  const social = socialList.map((item, index) => (
    <li key={index}>
      <a
        href={item.url}
        target='_blank'
        rel='noreferrer'
        aria-label={item.name}
      >
        {item.icon}
      </a>
    </li>
  ))

  return (
    // prettier-ignore
    <ul
      className={clsx(
        className,
        'flex list-none items-center space-x-4'
      )}
    >
      {social}
    </ul>
  )
}
