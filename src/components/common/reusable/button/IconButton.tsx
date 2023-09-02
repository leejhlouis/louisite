import ButtonProps from '@/types/ButtonProps'

export default function IconButton({ onClick, className, screenReaderText, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border border-slate-500/60 bg-slate-100/10 p-2 backdrop-blur-sm backdrop-filter hover:bg-slate-100/30 dark:border-slate-600/30 dark:bg-slate-600/20 dark:hover:bg-slate-600/30 ${
        className ?? ''
      }`}
    >
      <p className='sr-only'>{screenReaderText}</p>
      {icon}
    </button>
  )
}
