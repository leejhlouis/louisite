import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon.js'
import PrimaryButton from '@/components/common/reusable/button/PrimaryButton.tsx'
import SocialMediaLinks from '@/components/common/SocialMediaLinks.tsx'
import NavLinks from '@/components/common/NavLinks.tsx'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className='container py-4 sm:py-6 xl:py-8 xl:max-w-screen-xl z-10'>
      <PrimaryButton
        onClick={scrollToTop}
        className='mx-auto mb-6'
        icon={<ArrowUpSLineIcon />}
        textContent='Back to top'
      />
      <div className='pb-4 pt-8'>
        <p className='pb-2 text-2xl font-light md:text-3xl'>
          LOUI<span className='font-bold'>SITE</span>
        </p>
      </div>
      <div className='flex flex-col justify-between pb-4 xs:flex-row xs:items-center'>
        <p className='pb-4 font-light xs:pb-0'>Made with ❤️ by Louis.</p>
        <div className='flex flex-wrap items-start space-x-4 sm:space-x-6'>
          <NavLinks />
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  )
}
