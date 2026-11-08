import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../components/ProjectCard/data";

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="-mb-8 flex flex-col gap-6 sm:-mb-12">
      <p className="text-justify text-md font-medium">
        {t("projects.title")}{" "}
        <span className="underline underline-offset-4 decoration-zinc-400 decoration-dotted dark:decoration-zinc-600">
          {t("projects.cta")}
        </span>
      </p>

      <ul className="grid gap-4 overflow-y-auto overscroll-contain sm:grid-cols-2 sm:max-h-[calc(100dvh-20rem)] sm:pb-10 sm:pr-2 sm:mask-[linear-gradient(to_bottom,#000_calc(100%-2.5rem),transparent)] sm:[scrollbar-color:var(--color-zinc-400)_transparent] sm:scrollbar-thin dark:sm:[scrollbar-color:var(--color-zinc-600)_transparent]">
        {projects.map(({ id, logo, lightImage, darkImage, stack, demoUrl, repoUrl }) => (
          <li key={id} className="h-full">
            <ProjectCard
              id={id}
              title={t(`projects.data.${id}.title`)}
              description={t(`projects.data.${id}.description`)}
              about={t(`projects.data.${id}.about`)}
              functions={t(`projects.data.${id}.functions`)}
              logo={logo}
              demoMedia={{ light: lightImage, dark: darkImage }}
              stack={stack}
              demoUrl={demoUrl}
              repoUrl={repoUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
