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

export function SkillCard({
  title,
  description,
  icon: Icon,
  skills,
}: SkillCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 rounded border border-zinc-200 p-4 sm:p-5 dark:border-zinc-800">
      <header className="flex items-center gap-3">
        <Icon
          aria-hidden="true"
          className="size-5 shrink-0 text-zinc-500 dark:text-zinc-400"
        />
        <h2 className="text-lg font-mono font-semibold tracking-tight text-zinc-950 dark:text-white">
          {title}
        </h2>
      </header>
      <p className="text-justify text-sm leading-normal text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="mt-auto border-t border-zinc-200 pt-3 dark:border-zinc-800">
        <ul className="grid w-full grid-cols-3 gap-x-2 gap-y-2.5 sm:gap-x-3">
          {skills.map(({ name, image, invertOnDark }) => (
            <li
              key={name}
              className="group flex min-w-0 items-center gap-1.5 sm:gap-2"
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className={`size-5 shrink-0 object-contain transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none ${invertOnDark ? "dark:invert" : ""}`}
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
