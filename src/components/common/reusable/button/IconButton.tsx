import ButtonProps from '@/types/ButtonProps'

export default function SecondaryButton(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`rounded-lg border border-slate-500/60 bg-slate-100/10 p-2 backdrop-blur-sm backdrop-filter hover:bg-slate-100/30 dark:border-slate-600/30 dark:bg-slate-600/20 dark:hover:bg-slate-600/30 ${
        props.className ?? ''
      } `}
    >
      <p className='sr-only'>{props.screenReaderText}</p>
      {props.icon}
    </button>
  )
}
