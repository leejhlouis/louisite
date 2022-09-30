interface Heading3Props {
  id?: string;
  className?: string;
  children: any;
}

export default function Heading3(props: Heading3Props) {
  return (
    <h3
      id={props.id}
      className={`mt-2 pb-4 text-2xl font-bold md:text-3xl ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </h3>
  );
}
