export default function Wrapper(props: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-gradient-light dark:bg-gradient-dark pt-18 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
