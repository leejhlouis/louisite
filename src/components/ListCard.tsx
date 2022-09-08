import Heading3 from "./Heading3";
import { portfolioProps } from "../__data/portfolio";

export default function ListCard(props: portfolioProps & { id: number }) {
  const techStacksEntry = props.techStacks.map((techStack) => (
    <li className="text-base font-medium text-blue-700 dark:text-blue-200">{techStack}</li>
  ));

  const linksEntry = props.links.map((link) => (
    <li>
      <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
        {link.icon}
      </a>
    </li>
  ));

  return (
    <li
      className="flex w-full transform cursor-pointer flex-col justify-between rounded-xl border-[1px] 
        bg-slate-100 py-8 px-6 drop-shadow-xl duration-300 hover:-translate-y-2 hover:bg-slate-50 hover:shadow-2xl dark:border-slate-800 
        dark:bg-slate-800 dark:hover:bg-gray-900"
      data-index={props.id}
    >
      <header>
        <p className="pb-2 text-sm uppercase tracking-wide text-muted-dark dark:text-muted md:text-base">
          {props.dateRange}
        </p>
        <Heading3>{props.title}</Heading3>
        <p className="text-muted-dark dark:text-muted">{props.description}</p>
      </header>
      <footer>
        <ul className="tags mb-4 flex flex-wrap">{techStacksEntry}</ul>
        <ul className="flex gap-4">{linksEntry}</ul>
      </footer>
    </li>
  );
}
