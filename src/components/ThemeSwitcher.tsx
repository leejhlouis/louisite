import { useState } from "react";
import SunLineIcon from "remixicon-react/SunLineIcon";
import MoonLineIcon from "remixicon-react/MoonLineIcon";
import checkDarkTheme from "../utils/checkDarkTheme";

export default function ThemeSwitcher() {
  const [isDark, setDark] = useState(checkDarkTheme);

  const toggleDarkTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "light" : "dark";
    setDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkTheme}
      className="cursor-pointer rounded-lg bg-slate-100/20 p-2 shadow-md backdrop-filter hover:bg-slate-100/30 dark:bg-slate-200/10 dark:hover:bg-slate-200/20"
    >
      <p className="sr-only">Toggle theme</p>
      {isDark ? <MoonLineIcon /> : <SunLineIcon />}
    </button>
  );
}
