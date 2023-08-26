import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon.js'
import PrimaryButton from '@/components/common/reusable/button/PrimaryButton.tsx'
import HighlightText from '@/components/common/reusable/HighlightText.tsx'
import SocialMediaLinks from '@/components/common/SocialMediaLinks.tsx'
import Section from '@/components/layouts/Section.tsx'

export default function Hero() {
  const scrollToProjects = () => {
    window.location.assign('#projects')
  }

  return (
    <Section className='flex h-[88vh] min-h-[480px] flex-col justify-between'>
      <div className='flex h-3/4 flex-col justify-center space-y-6'>
        <h2 className='text-2xl md:text-4xl'>Hey👋, I'm Louis Gustavo</h2>
        <h1 className='break-words text-4xl font-extrabold tracking-tight xs:text-5xl md:text-6xl xl:text-7xl'>
          A <HighlightText>software engineer</HighlightText> and a{' '}
          <HighlightText>Computer Science</HighlightText> undergraduate.
        </h1>
        <SocialMediaLinks className='mt-3' />
      </div>
      <PrimaryButton
        className='mx-auto'
        icon={<ArrowDownSLineIcon />}
        textContent='Featured projects'
        onClick={scrollToProjects}
      />
    </Section>
  )
}
