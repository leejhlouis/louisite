import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container flex flex-wrap items-center justify-between py-5">
      <Link to="/" className="title">
        <p className="text-2xl font-light">
          LOUI<span className="font-bold">SITE</span>
        </p>
      </Link>
      <NavLinks />
    </nav>
  );
}
