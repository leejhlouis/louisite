import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="container flex justify-between items-center py-5 flex-wrap">
            <Link to="/">
                <p className='font-light text-2xl'>
                    LOUI<span className='font-bold'>SITE</span>
                </p>
            </Link>
            <NavLinks />
        </nav>
    );
}