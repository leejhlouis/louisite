import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import { Link } from "react-router-dom";

export default function NavLinks (){
    return (
        <ul className='flex flex-row items-center'>
            <li className='hover:opacity-80'><Link to="/" >Home</Link></li>
            <li className='ml-4 sm:ml-8 hover:opacity-80'><Link to="/about">About</Link></li>
            <li className='ml-3 sm:ml-6'><a href="https://www.linkedin.com/in/louis-gustavo" className='hover:opacity-80'>
                <LinkedinFillIcon color="#fff" size={22.5} />
                </a>
            </li>
            <li className='ml-2 sm:ml-4'><a href="https://github.com/itslouisgs" className='hover:opacity-80'>
                <GithubFillIcon color="#fff" size={22.5} />
                </a>
            </li>
        </ul>
    )
}