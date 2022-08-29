import { Link } from "react-router-dom";

interface ButtonProps {
  href?: string;
  useExternalLink?: boolean;
  onClickEventHandler?: () => void;
  icon?: React.ReactNode;
  isFlexRowReverse?: boolean;
  textContent: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const reverseRow = (isFlexRowReverse: boolean | undefined) =>
    isFlexRowReverse ? "flex-row-reverse" : "";

  const button = (
    <button
      className={`flex w-fit items-center gap-1 font-semibold transition duration-300 ease-in-out hover:underline  
        ${props.className} ${reverseRow(props.isFlexRowReverse)}`}
      onClick={props.onClickEventHandler}
    >
      {props.icon}
      {props.textContent}
    </button>
  );

  return props.useExternalLink ? (
    <a href={props.href}>{button}</a>
  ) : (
    <Link to={props.href ? props.href : "#"}>{button}</Link>
  );
}
