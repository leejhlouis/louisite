import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="flex flex-row items-center">
      <li className="hover:opacity-80">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="ml-4 hover:opacity-80 sm:ml-8">
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
}
