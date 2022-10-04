interface Heading2Props {
  className?: string;
  children: any;
}

export default function Heading2(props: Heading2Props) {
  return (
    <h2
      className={`pt-4 pb-6 text-3xl font-bold md:pt-6 md:pb-8 md:text-4xl ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </h2>
  );
}
