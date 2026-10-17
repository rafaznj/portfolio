import type { ReactNode } from "react";
import { LuMapPin } from "react-icons/lu";

type TimelineCompanyProps = {
  name: string;
  location?: string;
  isLast?: boolean;
  current?: boolean;
  children: ReactNode;
};

export function TimelineCompany({
  name,
  location,
  isLast = false,
  current = false,
  children,
}: TimelineCompanyProps) {
  return (
    <li
      data-timeline-item
      data-active={current ? "true" : "false"}
      className={`relative shrink-0 snap-start scroll-mt-3 pl-7 ${isLast ? "pb-4" : "pb-8"}`}
    >
      <span
        data-bullet="company"
        aria-hidden="true"
        className="
          absolute left-0 top-2 z-10
          size-3 rounded-full
          bg-zinc-300 ring-[3px] ring-zinc-100
          transition-colors duration-200
          dark:bg-zinc-700 dark:ring-zinc-900
        "
      />

      <header className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="timeline-company-title text-base font-semibold text-zinc-400 transition-colors duration-200 dark:text-zinc-500">
          {name}
        </h3>

        {location && (
          <span className="timeline-company-location inline-flex items-center gap-1 font-mono text-xs text-zinc-400/80 transition-colors duration-200 dark:text-zinc-600">
            <LuMapPin aria-hidden="true" className="size-3.5 shrink-0" />
            {location}
          </span>
        )}
      </header>

      <ol className="relative flex flex-col gap-5 pl-5">{children}</ol>
    </li>
  );
}
