import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../components/ProjectCard/data";

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <ul className="flex max-h-[calc(100dvh-20rem)] snap-y snap-proximity flex-col gap-6 overflow-y-auto overscroll-contain pb-10 pr-4 xl:-mr-7 mask-[linear-gradient(to_bottom,#000_calc(100%-2.5rem),transparent)] [scrollbar-color:var(--color-zinc-400)_transparent] scrollbar-thin dark:[scrollbar-color:var(--color-zinc-600)_transparent]">
        {projects.map(({ id, lightImage, darkImage, stack, demoUrl, repoUrl }) => (
          <li key={id} className="snap-start">
            <ProjectCard
              title={t(`projects.data.${id}.title`)}
              description={t(`projects.data.${id}.description`)}
              images={{ light: lightImage, dark: darkImage }}
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
