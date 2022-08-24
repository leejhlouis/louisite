import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
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
        <h3 className="pb-3 font-bold lg:text-3xl">{d.title}</h3>
        <p className="p text-muted pb-0">{d.categories}</p>
        <Link
          to={`/portfolio/${d.id}`}
          className="btn-check-it-out btn py-4 hover:gap-2"
        >
          <p>Check it out</p>
          <ArrowRightSLineIcon />
        </Link>
      </div>
    </div>
  ));

  return (
    <div id="portfolio" className="container">
      <h2 className="text-center font-bold">Featured works</h2>
      <div className="mx-auto flex flex-col flex-wrap justify-center gap-x-[4%] gap-y-12 pt-20 md:flex-row">
        {portfolioDiv}
      </div>
    </div>
  );
}
