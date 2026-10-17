import { useTranslation } from "react-i18next";
import { SkillCard } from "../components/SkillCard";
import { skillSections } from "../components/SkillCard/data";

export function SkillsPage() {
  const { t } = useTranslation();

  return (
    <div className="-mb-10 flex flex-col gap-4 sm:-mb-12">
      <ul className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {skillSections.map(({ id, icon, skills }) => (
          <li key={id} className="h-full">
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
