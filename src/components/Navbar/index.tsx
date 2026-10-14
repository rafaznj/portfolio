import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { LuChevronLeft } from "react-icons/lu";
import { LanguageToggle } from "../LanguageToggle";
import { ThemeToggle } from "../ThemeToggle";
import { links, NAME, ring } from "../../constants";

export function Navbar() {
  const { t } = useTranslation();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const path = pathname.replace(/\/$/, "") || "/";
  const isHome = path === "/";

  return (
    <header className="mx-auto w-full max-w-4xl px-6 py-8 max-sm:pt-4">
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
            <span>{NAME}</span>
            <span className="text-zinc-500 dark:text-zinc-400">
              {t("navbar.role")}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8 max-md:flex-col max-md:gap-5">
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ to, key }) => {
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block rounded px-2 py-px aria-[current=page]:ring-1 aria-[current=page]:ring-zinc-900 dark:aria-[current=page]:ring-zinc-100 ${ring}`}
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
