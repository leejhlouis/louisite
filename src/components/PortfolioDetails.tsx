import CodeSSlashFillIcon from "remixicon-react/CodeSSlashFillIcon";
import ExternalLinkFillIcon from "remixicon-react/ExternalLinkFillIcon";
import { Link } from "react-router-dom";

export default function PortfolioDetails(props: any) {
  return (
    <div className="container md:max-w-screen-md">
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
      <h1 className="h3 pb-3 font-bold">{props.item.title}</h1>
      <div className="flex items-center gap-12">
        <div className="link-w-icon">
          <Link to={props.item.codeLink} className="btn">
            <CodeSSlashFillIcon size={20} color="#9ca3af" />
            <p className="text-muted">code</p>
          </Link>
        </div>
        <div className="link-w-icon">
          <Link to={props.item.liveDemoLink} className="btn">
            <ExternalLinkFillIcon size={20} color="#9ca3af" />
            <p className="text-muted">live demo</p>
          </Link>
        </div>
      </div>
      <p className="p py-8 text-white">{props.item.description}</p>
      <div className="flex flex-col gap-6">
        <div>
          <p className="p text-muted pb-1">Category(s)</p>
          <p>{props.item.categories}</p>
        </div>
        <div>
          <p className="p text-muted pb-1">Tech stacks</p>
          <p>{props.item.techStacks}</p>
        </div>
      </div>
    </div>
  );
}
