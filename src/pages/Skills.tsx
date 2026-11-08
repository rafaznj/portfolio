import { useTranslation } from "react-i18next";
import { SkillCard } from "../components/SkillCard";
import { skillSections } from "../components/SkillCard/data";

export function SkillsPage() {
  const { t } = useTranslation();

  return (
    <div className="-mb-8 flex flex-col gap-5 sm:-mb-12">
      <p className="text-justify text-md font-medium">{t("skills.title")}</p>

      <ul className="mt-4 flex flex-col gap-3 overflow-y-auto overscroll-contain p-px pb-1 sm:max-h-[calc(100dvh-20rem)] sm:gap-4 sm:pr-2 sm:pb-1 sm:[scrollbar-color:var(--color-zinc-400)_transparent] sm:scrollbar-thin dark:sm:[scrollbar-color:var(--color-zinc-600)_transparent]">
        {skillSections.map(({ id, icon, skills }) => (
          <li key={id}>
            <SkillCard
              title={t(`skills.${id}.title`)}
              description={t(`skills.${id}.description`)}
              icon={icon}
              skills={skills}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
