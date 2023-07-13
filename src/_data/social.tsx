import MailFillIcon from 'remixicon-react/MailFillIcon.js'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon.js'
import GithubFillIcon from 'remixicon-react/GithubFillIcon.js'
import SocialProps from '@/types/SocialProps.ts'

const social: SocialProps[] = [
  {
    name: 'Mail',
    url: 'mailto:louis.gustavo@binus.ac.id',
    icon: (
      <MailFillIcon
        size={22}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/louis-gustavo',
    icon: (
      <LinkedinFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/leejhlouis',
    icon: (
      <GithubFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  }
]

export default social
