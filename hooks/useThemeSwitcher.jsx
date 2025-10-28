import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  // Use a stable initial theme for SSR to avoid hydration mismatches
  const [theme, setTheme] = useState("light");
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    // Resolve initial theme on client only
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = storedTheme || (prefersDark ? "dark" : "light");
    // Apply resolved theme to document and state
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    window.localStorage.setItem("theme", resolved);
    if (resolved !== theme) {
      setTheme(resolved);
    }
  }, []);

  useEffect(() => {
    // Keep document classes in sync when toggling
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
