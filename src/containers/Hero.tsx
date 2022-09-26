import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import Button from "../components/Button";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default function Hero() {
  const scrollToWorks = () => {
    window.location.assign("#works");
  };

  return (
    <div className="container mb-2 flex h-[88vh] min-h-[480px] flex-col justify-between md:mb-4">
      <div className="flex h-3/4 flex-col justify-center gap-6">
        <h2 className="text-2xl md:text-4xl">I'm Louis Gustavo</h2>
        <h1 className="break-words text-4xl font-extrabold tracking-tight xs:text-5xl sm:text-6xl lg:text-7xl">
          A <span className="text-highlight-dark dark:text-highlight-light">software engineer</span>{" "}
          and a{" "}
          <span className="text-highlight-dark dark:text-highlight-light">Computer Science</span>{" "}
          undergraduate.
        </h1>
        <SocialMediaLinks className="mt-3" />
      </div>
      <Button
        className="mx-auto"
        icon={<ArrowDownSLineIcon />}
        textContent="Featured works"
        onClick={scrollToWorks}
      />
    </div>
  );
}
