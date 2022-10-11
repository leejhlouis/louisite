import Section from "../Section";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import HighlightText from "../../components/HighlightText";
import Button from "../../components/Button";
import SocialMediaLinks from "../../components/SocialMediaLinks";

export default function Hero() {
  const scrollToWorks = () => {
    window.location.assign("#works");
  };

  return (
    <Section className="flex h-[88vh] min-h-[480px] flex-col justify-between">
      <div className="flex h-3/4 flex-col justify-center gap-6">
        <h2 className="text-2xl md:text-4xl">I'm Louis Gustavo</h2>
        <h1 className="break-words text-4xl font-extrabold tracking-tight xs:text-5xl sm:text-6xl lg:text-7xl">
          A <HighlightText>software engineer</HighlightText> and a{" "}
          <HighlightText>Computer Science</HighlightText> undergraduate.
        </h1>
        <SocialMediaLinks className="mt-3" />
      </div>
      <Button
        className="mx-auto"
        icon={<ArrowDownSLineIcon />}
        textContent="Featured works"
        onClick={scrollToWorks}
      />
    </Section>
  );
}
