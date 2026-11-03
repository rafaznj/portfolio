import { useRef } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink, LuX } from "react-icons/lu";
import { focus, ring } from "../../constants";
import { stackDots, stackDotFallback } from "./data";
import { GrView } from "react-icons/gr";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  about: string;
  functions: string;
  logo: string;
  demoMedia: { light: string; dark: string };
  stack: readonly string[];
  demoUrl?: string;
  repoUrl?: string;
};

const actionPrimary = `inline-flex items-center justify-center gap-2 rounded border px-4 py-2 text-sm font-medium transition-transform active:scale-95 border-zinc-900 bg-zinc-900 text-white hover:border-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:border-zinc-300 ${focus}`;
const actionSecondary = `inline-flex items-center justify-center gap-2 rounded border px-4 py-2 text-sm font-medium transition-transform active:scale-95 border-zinc-300 hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-100 ${focus}`;

export function ProjectCard({
  title,
  description,
  about,
  functions,
  logo,
  demoMedia,
  stack,
  demoUrl,
  repoUrl,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const src =
    demoMedia && resolvedTheme ? demoMedia[resolvedTheme === "dark" ? "dark" : "light"] : undefined;

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  };

  return (
    <>
      <article className="group flex h-full overflow-hidden rounded border border-zinc-200 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
        {logo && (
          <div className="flex w-28 shrink-0 items-center justify-center border-r border-zinc-200 bg-zinc-50/50 p-3 transition-colors sm:w-32 dark:border-zinc-800 dark:bg-zinc-900/40">
            <img
              key={logo}
              src={logo}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-24 w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-mono text-base font-semibold tracking-tight text-zinc-950 dark:text-white">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </div>

          <button
            onClick={openDialog}
            className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded border border-zinc-200 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-white ${focus} cursor-pointer`}
          >
            <GrView aria-hidden="true" className="size-4" />
            {t("projects.viewProject")}
          </button>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="
          m-auto w-full max-w-2xl rounded-lg border border-zinc-200
          bg-white p-0 shadow-xl
          dark:border-zinc-800 dark:bg-zinc-950
          backdrop:bg-black/60 backdrop:backdrop-blur-sm
          open:animate-[dialog-in_200ms_ease-out]
          [&:not([open])]:hidden
        "
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-6 py-5 dark:border-zinc-800">
          <h2 className="flex-1 text-center font-mono text-2xl font-semibold text-zinc-950 dark:text-white">
            {title}
          </h2>
          <button
            onClick={closeDialog}
            aria-label={t("projects.close")}
            className={`grid size-8 shrink-0 place-items-center rounded text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-white ${ring} cursor-pointer`}
          >
            <LuX className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto overscroll-contain px-6 py-5 [scrollbar-color:var(--color-zinc-400)_transparent] scrollbar-thin dark:[scrollbar-color:var(--color-zinc-600)_transparent]">
          <div className="flex flex-col gap-6">
            {src && (
              <div className="overflow-hidden rounded border border-zinc-200">
                <img
                  src={src}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover"
                />
              </div>
            )}

            {stack && stack.length > 0 && (
              <div className="flex flex-col gap-2.5">
                <h3 className="font-mono text-xs font-medium uppercase tracking-widest">
                  {t("projects.stack")}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <li
                      key={tech}
                      className="relative inline-flex items-center gap-1.5 rounded-full border border-zinc-200/80 bg-zinc-100/80 px-2.5 py-1 font-mono text-xs text-zinc-700 transform-gpu origin-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:-translate-y-1 hover:scale-105 hover:border-zinc-300 hover:bg-zinc-200/80 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 cursor-pointer"
                    >
                      <span
                        aria-hidden="true"
                        className={`size-1.5 shrink-0 rounded-full ${stackDots[tech] ?? stackDotFallback}`}
                      />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {about && (
              <div className="flex flex-col gap-2">
                <h3 className="font-mono text-xs font-medium uppercase tracking-widest">
                  {t("projects.about")}
                </h3>
                <p className="text-sm text-justify leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                  {about}
                </p>
              </div>
            )}

            {functions && (
              <div className="flex flex-col gap-2">
                <h3 className="font-mono text-xs font-medium uppercase tracking-widest">
                  {t("projects.functions")}
                </h3>
                <p className="text-sm text-justify leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                  {functions}
                </p>
              </div>
            )}
          </div>
        </div>

        {(demoUrl || repoUrl) && (
          <div className="flex flex-wrap justify-around gap-3 border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={actionPrimary}>
                <LuExternalLink aria-hidden="true" className="size-4" />
                {t("projects.visitWebsite")}
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={actionSecondary}
              >
                <FaGithub aria-hidden="true" className="size-4" />
                {t("projects.visitRepository")}
              </a>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
