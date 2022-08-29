interface Heading3Props {
  className?: string;
  children: any;
}

export default function Heading3(props: Heading3Props) {
  return (
    <h3 className={`pb-2 text-xl font-bold md:text-2xl ${props.className}`}>
      {props.children}
    </h3>
  );
}
