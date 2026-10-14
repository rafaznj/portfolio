import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

const icon =
  "col-start-1 row-start-1 size-[1.1rem] transition-all will-change-transform motion-reduce:transition-none";

const enter =
  "scale-100 opacity-100 blur-0 duration-500 delay-100 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

const exit = "scale-50 opacity-0 blur-[2px] duration-300 delay-0 ease-in";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="grid size-8 cursor-pointer place-items-center rounded-full duration-200 focus-visible:ring-1 focus-visible:ring-zinc-900 active:scale-90 dark:focus-visible:ring-zinc-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <LuSun
        className={`${icon} ${isDark ? `rotate-90 ${exit}` : `rotate-0 ${enter}`}`}
      />
      <LuMoon
        className={`${icon} ${isDark ? `rotate-0 ${enter}` : `-rotate-90 ${exit}`}`}
      />
    </button>
  );
}
