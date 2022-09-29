import Heading2 from "../components/Heading2";
import ListCard from "../components/ListCard";
import { works } from "../__data/works";

export default function Works() {
  const worksEntry = works.map((work, index) => <ListCard {...work} key={index} />);

  return (
    <section id="works" className="container scroll-mt-8">
      <Heading2 className="text-center">Featured works</Heading2>
      <ul className="mx-auto mt-6 grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-8 xl:grid-cols-3">
        {worksEntry}
      </ul>
    </section>
  );
}
