import CodeSSlashFillIcon from 'remixicon-react/CodeSSlashFillIcon';
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon';
import { Link } from "react-router-dom";

export default function PortfolioDetails(props : any) {
    return (
        <div className="container md:max-w-screen-md">
            <h2 className='text-4xl font-bold pb-4'>{props.item.title}</h2>
            <div className='flex items-center gap-16'>
                <div className='link-w-icon'>
                    <CodeSSlashFillIcon size={20} color="#9ca3af" />
                    <Link to={props.item.codeLink}>
                        <p className='text-gray-400'>code</p>
                    </Link>
                </div>
                <div className='link-w-icon'>
                    <ExternalLinkFillIcon size={20} color="#9ca3af"  />
                    <Link to={props.item.liveDemoLink}>
                        <p className='text-gray-400'>live demo</p>
                    </Link>
                </div>
            </div>
            <p className="p text-white py-8">
                {props.item.description}
            </p>
            <div className='flex flex-col gap-6'>
                <div>
                    <p className='p pb-1'>Category(s)</p>
                    <p>{props.item.categories}</p>
                </div>
                <div>
                    <p className='p pb-1'>Tech stacks</p>
                    <p>{props.item.techStacks}</p>
                </div>
            </div>
        </div>
    );
  }