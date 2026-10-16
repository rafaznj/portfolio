import type { ReactNode } from "react";

type EducationItemProps = {
  degree: string;
  institution: string;
  period: string;
};

export function EducationList({ children }: { children: ReactNode }) {
  return (
    <ul className="flex flex-col divide-y divide-zinc-200 rounded border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {children}
    </ul>
  );
}

export function EducationItem({
  degree,
  institution,
  period,
}: EducationItemProps) {
  return (
    <li className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <h3 className="font-medium text-zinc-950 dark:text-white">{degree}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {institution}
        </p>
      </div>
      <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
        {period}
      </span>
    </li>
  );
}
