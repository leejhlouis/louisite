import { useState } from "react";
import SunLineIcon from "remixicon-react/SunLineIcon";
import MoonLineIcon from "remixicon-react/MoonLineIcon";

export default function ThemeSwitcher() {
  const [isDark, setDarkTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    if (isDark) {
      setDarkTheme(false);
      localStorage.theme = "light";
    } else {
      setDarkTheme(true);
      localStorage.theme = "dark";
    }
  };

  return (
    <button
      id="toggleThemeBtn"
      onClick={toggleDarkMode}
      className="cursor-pointer rounded-lg bg-slate-100/20 p-2 shadow-md backdrop-filter hover:bg-slate-100/30 dark:bg-slate-200/10 dark:hover:bg-slate-200/20"
    >
      {isDark ? <MoonLineIcon /> : <SunLineIcon />}
    </button>
  );
}
