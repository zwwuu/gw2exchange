import { useContext } from "react";
import Link from "next/link";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { ThemeContext } from "~/components/ThemeProvider/ThemeProvider";

export default function Header() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={"bg-base-300 text-base-content py-4 shadow"}>
      <div className={"container mx-auto px-4"}>
        <div className={"flex items-center justify-between"}>
          <h1 className={"flex text-4xl font-extrabold"}>
            <Link href={"/"}>
              <span className={"from-info to-error bg-gradient-to-r bg-clip-text text-transparent"}>
                {process.env.NEXT_PUBLIC_APP_NAME}
              </span>
            </Link>
          </h1>
          <label aria-label={"toggle theme"} className={"swap btn-ghost swap-rotate btn-circle btn"}>
            <input checked={isDarkTheme} type={"checkbox"} onChange={() => toggleTheme()} />
            <IconMoon className={"swap-off"} />
            <IconSun className={"swap-on"} />
          </label>
        </div>
      </div>
    </header>
  );
}
