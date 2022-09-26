interface Heading3Props {
  id?: string;
  className?: string;
  children: any;
}

export default function Heading3(props: Heading3Props) {
  return (
    <h3 id={props.id} className={`pb-4 text-2xl font-bold md:text-3xl mt-2 ${props.className}`}>
      {props.children}
    </h3>
  );
}
