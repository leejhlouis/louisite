import { NavLink } from "react-router-dom";
import navItems from "../__data/navItems";

export default function NavLinks() {
  const links = navItems.map((item) => (
    <NavLink
      className="w-full"
      to={item.href}
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
      })}
    >
      <li className="cursor-pointer py-1 px-2 hover:bg-slate-100 hover:dark:bg-slate-800">
        {item.name}
      </li>
    </NavLink>
  ));

  return (
    <ul className="flex w-32 flex-col rounded-lg bg-white py-2 shadow-lg dark:bg-slate-900">
      {links}
    </ul>
  );
}
