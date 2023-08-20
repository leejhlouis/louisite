interface linkProps {
  label: string
  url: string
  icon: JSX.Element
}

export default interface worksProps {
  title: string
  description: string | JSX.Element
  category: string
  techStacks: string[]
  links: linkProps[]
}
