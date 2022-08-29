interface Heading2Props {
  className?: string;
  children: any;
}

export default function Heading2(props: Heading2Props) {
  return (
    <h2 className={`pb-4 text-3xl font-bold md:text-4xl ${props.className}`}>
      {props.children}
    </h2>
  );
}
