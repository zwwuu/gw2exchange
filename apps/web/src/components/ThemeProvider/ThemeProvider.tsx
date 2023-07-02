import { createContext, ReactNode, useEffect, useState } from "react";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setIsDarkTheme(localTheme === "dark");
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setIsDarkTheme(systemTheme === "dark");
    }
    document.documentElement.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkTheme(newTheme === "dark");
  };

  return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
