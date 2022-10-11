interface SectionProps {
  id?: string;
  className?: string;
  maxWidthClass?: string;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id ? props.id : undefined}
      className={`container py-8 sm:py-12 xl:py-16 ${
        props.maxWidthClass ? props.maxWidthClass : "xl:max-w-screen-xl"
      } ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
}
