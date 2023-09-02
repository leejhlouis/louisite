import ComponentProps from '@/types/components/ComponentProps'

export default function PageWrapper({ className, children }: ComponentProps) {
  return (
    <div className={`${className ?? ''} bg-primary-overlay dark:bg-primary-overlay-dark pt-18`}>
      {children}
    </div>
  )
}
