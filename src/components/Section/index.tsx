import { useId, type ReactNode } from "react";
import type { IconType } from "react-icons";

type SectionProps = {
  title: string;
  icon: IconType;
  className?: string;
  children: ReactNode;
};

export function Section({ title, icon: Icon, className = "", children }: SectionProps) {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className={`flex flex-col gap-8 ${className}`}>
      <div className="flex shrink-0 items-center gap-4">
        <h2
          id={headingId}
          className="flex items-center gap-2 font-mono text-base font-medium text-zinc-950 dark:text-white"
        >
          <Icon aria-hidden="true" className="size-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
          <span className="font-mono">{title}</span>
        </h2>
        <div aria-hidden="true" className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {children}
    </section>
  );
}
