import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  textContent: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`flex w-fit items-center gap-1 font-semibold transition duration-300 ease-in-out hover:underline ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.textContent}
    </button>
  );
}
