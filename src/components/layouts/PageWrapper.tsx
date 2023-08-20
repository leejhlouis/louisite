import PageWrapperProps from '@/types/PageWrapperProps.ts'

export default function PageWrapper(props: PageWrapperProps) {
  return (
    <div
      className={`bg-gradient-light dark:bg-gradient-dark pt-18 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}
