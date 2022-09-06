import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import Button from "../components/Button";
import socialList from "../__data/social";

export default function Hero() {
  const social = socialList.map((item) => (
    <li>
      <a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name}>
        {item.icon}
      </a>
    </li>
  ));

  const scrollDown = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className="h-[85vh]">
      <div className="container flex h-5/6 flex-col justify-center gap-6">
        <h2 className="text-2xl md:text-4xl">I'm Louis Gustavo</h2>
        <h1 className="break-words text-4xl font-extrabold sm:text-6xl lg:text-7xl">
          A <span className="text-highlight">software engineer</span> and a{" "}
          <span className="text-highlight">Computer Science</span> undergraduate.
        </h1>
        <ul className="mt-3 flex list-none items-center gap-2">{social}</ul>
      </div>
      <Button
        onClickEventHandler={scrollDown}
        className="mx-auto h-1/6"
        icon={<ArrowDownSLineIcon />}
        textContent="Featured works"
      />
    </div>
  );
}
