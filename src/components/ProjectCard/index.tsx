import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { focus } from "../../constants";
import { stackDotFallback, stackDots } from "./data";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: readonly string[];
  images?: { light: string; dark: string };
  demoUrl?: string;
  repoUrl?: string;
};

const action = `inline-flex items-center justify-center gap-2 rounded border px-4 py-2 text-sm transition-transform active:scale-95 ${focus}`;

export function ProjectCard({
  title,
  description,
  stack,
  images,
  demoUrl,
  repoUrl,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();

  const src =
    images && resolvedTheme
      ? images[resolvedTheme === "dark" ? "dark" : "light"]
      : undefined;

  return (
    <article className="flex flex-col gap-5 rounded border border-zinc-200 p-5 transition-colors hover:border-zinc-900 sm:flex-row sm:gap-6 sm:p-6 dark:border-zinc-800 dark:hover:border-zinc-100">
      {images && (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded bg-zinc-100 sm:aspect-auto sm:min-h-40 sm:w-60 md:w-72 dark:bg-zinc-900">
          {src && (
            <img
              key={src}
              src={src}
              alt={title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-fill"
            />
          )}
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-mono font-semibold tracking-tight text-zinc-950 md:text-2xl dark:text-white">
            {title}
          </h2>
          <p className="max-w-prose text-pretty leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="inline-flex h-6 items-center gap-1.5 rounded border border-zinc-200 bg-zinc-50 px-2 font-mono text-[11px] leading-none text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${stackDots[tech] ?? stackDotFallback}`}
              />
              {tech}
            </li>
          ))}
        </ul>

        {(demoUrl || repoUrl) && (
          <div className="mt-auto border-t-2 border-zinc-200 pt-5 dark:border-zinc-800">
            <div className="grid gap-15 sm:mx-auto sm:w-fit sm:grid-cols-2">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${action} border-zinc-900 bg-zinc-900 text-white hover:border-zinc-500 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:border-white`}
                >
                  <LuExternalLink aria-hidden="true" className="size-4" />
                  {t("projects.visitWebsite")}
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${action} border-zinc-300 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-100`}
                >
                  <FaGithub aria-hidden="true" className="size-4" />
                  {t("projects.visitRepository")}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
