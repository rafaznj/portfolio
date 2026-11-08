import type { IconType } from "react-icons";

type Skill = {
  name: string;
  image: string;
  invertOnDark?: boolean;
};

type SkillCardProps = {
  title: string;
  description: string;
  icon: IconType;
  skills: readonly Skill[];
};

export function SkillCard({ title, description, icon: Icon, skills }: SkillCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded border border-zinc-200 p-4 transition-colors hover:border-zinc-400 sm:p-5 md:flex-row md:items-start md:justify-between dark:border-zinc-800 dark:hover:border-zinc-600">
      <div className="flex flex-col gap-1.5 md:w-5/12 md:max-w-xs">
        <header className="flex items-center gap-2">
          <Icon
            aria-hidden="true"
            className="size-4 shrink-0 text-zinc-950 sm:size-5 dark:text-zinc-200"
          />
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 sm:text-sm dark:text-white">
            {title}
          </h2>
        </header>
        <p className="text-xs leading-relaxed text-zinc-600 sm:text-[13px] dark:text-zinc-400">
          {description}
        </p>
      </div>

      <div className="md:w-7/12">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-3">
          {skills.map(({ name, image, invertOnDark }) => (
            <li key={name} className="group flex min-w-0 items-center gap-2 cursor-pointer">
              <img
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className={`size-4 shrink-0 object-contain transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none sm:size-[18px] ${
                  invertOnDark ? "dark:invert" : ""
                }`}
              />
              <span className="font-mono text-[11px] leading-tight text-zinc-700 transition-colors group-hover:text-zinc-950 sm:text-xs dark:text-zinc-300 dark:group-hover:text-white">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
