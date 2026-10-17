import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { icon, exit, enter } from "../../constants";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="grid size-8 cursor-pointer place-items-center rounded-full duration-200 focus-visible:ring-1 focus-visible:ring-zinc-900 active:scale-90 dark:focus-visible:ring-zinc-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <LuSun className={`${icon} ${isDark ? `rotate-90 ${exit}` : `rotate-0 ${enter}`}`} />
      <LuMoon className={`${icon} ${isDark ? `rotate-0 ${enter}` : `-rotate-90 ${exit}`}`} />
    </button>
  );
}
