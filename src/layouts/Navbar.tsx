import NavLinks from "../components/NavLinks";
import Dropdown from "../components/Dropdown";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Menu3FillIcon from "remixicon-react/Menu3FillIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleMobileNav = () => {
    setActive(!isActive);
  };

  return (
    <nav className="container flex flex-wrap items-center justify-between py-5">
      <Link to="/" className="title">
        <p className="pb-0 text-2xl font-light">
          LOUI<span className="font-bold">SITE</span>
        </p>
      </Link>
      <div className="flex items-center gap-2 xs:gap-8">
        <div className="hidden xs:block">
          <NavLinks />
        </div>
        <div className="relative xs:hidden">
          <button
            className="cursor-pointer rounded-lg bg-slate-100/20 p-2 shadow-md backdrop-filter hover:bg-slate-100/30 dark:bg-slate-200/10 dark:hover:bg-slate-200/20"
            onClick={toggleMobileNav}
          >
            <Menu3FillIcon />
          </button>
          <div className={`${isActive ? "block" : "hidden"} absolute right-0 mt-2`}>
            <Dropdown />
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
