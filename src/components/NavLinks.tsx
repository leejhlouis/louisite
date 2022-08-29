import { NavLink } from "react-router-dom";
import navItems from "../data/navItems.js";

export default function NavLinks() {
  const links = navItems.map((item) => (
    <li>
      <NavLink
        to={item.href}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return <ul className="flex flex-row items-center gap-4 sm:gap-8">{links}</ul>;
}
