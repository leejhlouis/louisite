export default function checkDarkTheme(){
 return localStorage.theme === "dark" ||
 (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
}