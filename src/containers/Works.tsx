import Heading2 from "../components/Heading2";
import ListCard from "../components/ListCard";
import { portfolioList } from "../__data/portfolio";

export default function Works() {
  const portfolioEntry = portfolioList.map((portfolio, index) => (
    <ListCard {...portfolio} key={index} />
  ));

  return (
    <section id="works" className="container scroll-mt-18">
      <Heading2 className="text-center">Featured works</Heading2>
      <ul className="mx-auto mt-6 grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-8 xl:grid-cols-3">
        {portfolioEntry}
      </ul>
    </section>
  );
}
