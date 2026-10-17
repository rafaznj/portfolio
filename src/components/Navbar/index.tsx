import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { LuChevronLeft } from "react-icons/lu";
import { LanguageToggle } from "../LanguageToggle";
import { ThemeToggle } from "../ThemeToggle";
import { name, navLinks, ring } from "../../constants";
import { useScramble } from "use-scramble";

export function Navbar() {
  const { t } = useTranslation();
  const { ref, replay } = useScramble({
    text: name,
    speed: 0.3,
    scramble: 10,
    playOnMount: false,
    overdrive: false,
    range: [33, 126],
  });

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const path = pathname.replace(/\/$/, "") || "/";
  const isHome = path === "/";

  return (
    <header className="mx-auto w-full max-w-4xl px-6 pb-8 pt-16 font-mono max-sm:pt-8">
      <nav className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 max-md:flex-col">
        <div className="relative flex items-center gap-3 max-md:justify-center">
          {!isHome && (
            <Link
              to="/"
              className={`grid size-8 shrink-0 place-items-center rounded ring-1 ring-zinc-900 dark:ring-zinc-100 active:scale-90 lg:absolute lg:right-full lg:mr-4 ${ring}`}
            >
              <LuChevronLeft aria-hidden="true" className="size-4" />
            </Link>
          )}

          <div className="flex flex-col gap-1 whitespace-nowrap text-left">
            <span ref={ref} onMouseEnter={replay} />
            <span className="text-zinc-500 dark:text-zinc-400">{t("navbar.role")}</span>
          </div>
        </div>

        <div className="flex items-center gap-8 max-md:flex-col max-md:gap-5">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map(({ to, key }) => {
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block rounded border border-transparent px-2 py-px aria-[current=page]:border-zinc-900 dark:aria-[current=page]:border-zinc-100 ${ring}`}
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
