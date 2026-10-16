import { useTranslation } from "react-i18next";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import { Section } from "../components/Section";
import { TimelineExperience } from "../components/Timeline/TimelineExperience";
import { experience } from "../components/Timeline/data";
import { EducationList, EducationItem } from "../components/EducationList";
import { education } from "../components/EducationList/data";
import { TimelineCompany } from "../components/Timeline/TimelineCompany";
import { TimelinePosition } from "../components/Timeline/TimelinePosition";

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 text-justify font-sans text-lg leading-relaxed">
      <p className="shrink-0 text-justify text-base leading-relaxed whitespace-pre-line">
        {t("about.description")}
      </p>

      <Section
        title={t("about.experience.title")}
        icon={LuBriefcase}
        className="min-h-56"
      >
        <TimelineExperience>
          {experience.map(({ id, location, positions }, index) => (
            <TimelineCompany
              key={id}
              name={t(`about.experience.data.${id}.name`)}
              location={location}
              isLast={index === experience.length - 1}
              current={positions.some((p) => p.current)}
            >
              {positions.map(({ id: positionId, current }) => (
                <TimelinePosition
                  key={positionId}
                  title={t(
                    `about.experience.data.${id}.positions.${positionId}.title`,
                  )}
                  description={t(
                    `about.experience.data.${id}.positions.${positionId}.description`,
                  )}
                  period={t(
                    `about.experience.data.${id}.positions.${positionId}.period`,
                  )}
                  current={current}
                />
              ))}
            </TimelineCompany>
          ))}
        </TimelineExperience>
      </Section>

      <Section
        title={t("about.education.title")}
        icon={LuGraduationCap}
        className="shrink-0"
      >
        <EducationList>
          {education.map(({ id }) => (
            <EducationItem
              key={id}
              degree={t(`about.education.data.${id}.degree`)}
              institution={t(`about.education.data.${id}.institution`)}
              period={t(`about.education.data.${id}.period`)}
            />
          ))}
        </EducationList>
      </Section>
    </div>
  );
}
