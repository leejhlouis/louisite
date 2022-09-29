interface InlineLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function InlineLink(props: InlineLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-blue-800 decoration-blue-800 hover:underline dark:text-blue-200 dark:decoration-blue-200"
    >
      {props.children}
    </a>
  );
}
