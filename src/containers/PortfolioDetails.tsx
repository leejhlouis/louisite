import CodeSSlashFillIcon from "remixicon-react/CodeSSlashFillIcon";
import ExternalLinkFillIcon from "remixicon-react/ExternalLinkFillIcon";
import Button from "../components/Button";
import Heading2 from "../components/Heading2";

export default function PortfolioDetails(props: any) {
  return (
    <section className="container md:max-w-screen-md">
      <div className="mb-8 w-full max-w-md overflow-hidden">
        <img
          src="https://tukang-travel.web.app/static/media/pic.1433055076ae74ba337b.jpg"
          alt="Portfolio"
          width={448}
          height={300}
          className="cursor-pointer transition hover:scale-125 hover:opacity-80"
          loading="lazy"
        />
      </div>
      <Heading2 className="pb-4 font-bold">{props.item.title}</Heading2>
      <div className="flex items-center gap-12">
        <div className="link-w-icon">
          <Button
            href={props.item.codeLink}
            useExternalLink={true}
            icon={<CodeSSlashFillIcon size={20} color="#9ca3af" />}
            textContent="code"
            className="text-muted"
          ></Button>
        </div>
        <div className="link-w-icon">
          <Button
            href={props.item.liveDemoLink}
            useExternalLink={true}
            icon={<ExternalLinkFillIcon size={20} color="#9ca3af" />}
            textContent="live demo"
            className="text-muted"
          ></Button>
        </div>
      </div>
      <p className="py-8 text-white">{props.item.description}</p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-muted pb-2">Category(s)</p>
          <p className="pb-0">{props.item.categories}</p>
        </div>
        <div>
          <p className="text-muted pb-2">Tech stacks</p>
          <p className="pb-0">{props.item.techStacks}</p>
        </div>
      </div>
    </section>
  );
}
