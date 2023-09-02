import socialList from '@/_data/social.tsx'
import ComponentProps from '@/types/components/ComponentProps'

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

  return <ul className={`flex list-none items-center space-x-4 ${className ?? ''}`}>{social}</ul>
}
