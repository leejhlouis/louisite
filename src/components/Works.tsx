import Section from '@/components/layouts/Section.tsx'
import Heading2 from '@/components/common/reusable/Heading2.tsx'
import ListCard from '@/components/common/ListCard.tsx'
import { works } from '@/_data/works.tsx'

export default function Works() {
  const worksEntry = works.map((work, index) => (
    <ListCard
      {...work}
      key={index}
    />
  ))

  return (
    <Section
      id='works'
      className='scroll-mt-8'
    >
      <Heading2 className='text-center'>Featured works</Heading2>
      <ul className='mx-auto mt-6 grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-8 lg:grid-cols-3'>
        {worksEntry}
      </ul>
    </Section>
  )
}
