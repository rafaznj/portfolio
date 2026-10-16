import { useTranslation } from "react-i18next";

type TimelinePositionProps = {
  title: string;
  period: string;
  description?: string;
  current?: boolean;
};

export function TimelinePosition({
  title,
  period,
  description,
  current = false,
}: TimelinePositionProps) {
  const { t } = useTranslation();

  return (
    <li
      data-timeline-item
      data-active={current ? "true" : "false"}
      className="relative min-w-0 snap-start scroll-mt-3 pl-6"
    >
      <span
        data-bullet="position"
        aria-hidden="true"
        className="
          absolute left-0 top-1.5 z-10 size-2.5
          rounded-full ring-2 ring-white
          bg-zinc-300
          transition-colors duration-200
          dark:bg-zinc-700 dark:ring-zinc-950
        "
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="timeline-pos-title text-sm font-semibold text-zinc-400 transition-colors duration-200 dark:text-zinc-500">
          {title}
        </h4>

        <div className="flex shrink-0 flex-wrap items-center gap-2 font-mono text-xs">
          <span className="timeline-pos-period text-zinc-400/80 transition-colors duration-200 dark:text-zinc-600">
            {period}
          </span>

          {current && (
            <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-[0.625rem] leading-none font-medium uppercase text-white dark:bg-zinc-100 dark:text-zinc-950">
              {t("about.experience.current")}
            </span>
          )}
        </div>
      </div>

      {description && (
        <p className="timeline-pos-desc mt-2 text-sm leading-6 text-zinc-400/90 transition-colors duration-200 dark:text-zinc-600">
          {description}
        </p>
      )}
    </li>
  );
}
