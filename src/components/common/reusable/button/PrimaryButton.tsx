import ButtonProps from '@/types/ButtonProps.ts'

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`flex w-fit items-center space-x-1 font-semibold transition duration-300 ease-in-out hover:text-blue-800 hover:underline dark:hover:text-blue-300 ${
        props.className ?? ''
      }`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.textContent}
    </button>
  )
}
