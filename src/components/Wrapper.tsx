export default function StylizedBackground(props: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-light dark:bg-gradient-dark h-screen min-h-[480px] pt-18">
      {props.children}
    </div>
  );
}
