import PageWrapperProps from '@/types/PageWrapperProps.ts'

export default function PageWrapper({
  className,
  children
}: PageWrapperProps) {
  return (
    <div className={`${className ?? ''} bg-gradient-light dark:bg-gradient-dark pt-18 `}>
      {children}
    </div>
  )
}
