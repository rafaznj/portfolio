import { useTranslation } from "react-i18next";
import {
  StyledCard,
  StyledCardHeader,
  StyledCompany,
  StyledDescription,
  StyledExperienceContainer,
  StyledExperienceContent,
  StyledPeriod,
  StyledRole,
  StyledStacks,
  StyledStackTag,
  StyledTimeline,
  StyledTimelineItem,
  StyledTitle,
} from "./styles";

type Experiences = {
  role: string;
  company: string;
  period: string;
  description: string;
  stacks: string[];
};

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t("pages.experience.data", {
    returnObjects: true,
  }) as Experiences[];

  return (
    <StyledExperienceContainer>
      <StyledExperienceContent>
        <StyledTitle>{t("pages.experience.title")}</StyledTitle>
        <StyledTimeline>
          {experiences.map((exp, index) => (
            <StyledTimelineItem key={index}>
              <StyledCard>
                <StyledCardHeader>
                  <div>
                    <StyledRole>{exp.role}</StyledRole>
                    <StyledCompany>{exp.company}</StyledCompany>
                  </div>
                </StyledCardHeader>
                <StyledPeriod>{exp.period}</StyledPeriod>
                <StyledDescription>{exp.description}</StyledDescription>
                <StyledStacks>
                  {exp.stacks.map((stack) => (
                    <StyledStackTag key={stack}>{stack}</StyledStackTag>
                  ))}
                </StyledStacks>
              </StyledCard>
            </StyledTimelineItem>
          ))}
        </StyledTimeline>
      </StyledExperienceContent>
    </StyledExperienceContainer>
  );
}
