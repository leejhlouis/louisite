import MailFillIcon from 'remixicon-react/MailFillIcon.js'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon.js'
import GithubFillIcon from 'remixicon-react/GithubFillIcon.js'
import SocialProps from '@/types/SocialProps.ts'
import constants from '@/constants'

const social: SocialProps[] = [
  {
    name: 'Mail',
    url: `mailto:${constants.social.mail}`,
    icon: (
      <MailFillIcon
        size={22}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'LinkedIn',
    url: constants.social.linkedin,
    icon: (
      <LinkedinFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'GitHub',
    url: `https://github.com/${constants.social.github}`,
    icon: (
      <GithubFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  }
]

export default social
