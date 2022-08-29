import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import Button from "../components/Button";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import portfolio from "../data/portfolio.js";
import { Link } from "react-router-dom";

export default function Works() {
  const portfolioDiv = portfolio.map((d) => (
    <div className="md:w-[48%] lg:w-[30%]">
      <div className="w-full overflow-hidden">
        <Link to={`/portfolio/${d.id}`}>
          <img
            src="https://tukang-travel.web.app/static/media/pic.1433055076ae74ba337b.jpg"
            alt={d.title}
            width={544}
            height={544}
            className="cursor-pointer transition hover:scale-125 hover:opacity-80"
            loading="lazy"
            data-key={d.id}
          />
        </Link>
      </div>
      <div className="pt-8">
        <Heading3>{d.title}</Heading3>
        <p className="text-muted pb-0">{d.categories}</p>
        <Button
          href={`/portfolio/${d.id}`}
          className="py-4 hover:gap-2"
          icon={<ArrowRightSLineIcon />}
          textContent="Check it out"
          isFlexRowReverse={true}
        />
      </div>
    </div>
  ));

  return (
    <section id="portfolio" className="container">
      <Heading2 className="text-center">Featured works</Heading2>
      <div className="mx-auto flex flex-col flex-wrap justify-center gap-x-[4%] gap-y-12 pt-12 md:flex-row md:pt-16">
        {portfolioDiv}
      </div>
    </section>
  );
}
