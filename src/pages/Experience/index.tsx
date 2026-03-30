import { useTranslation } from "react-i18next";
import {
  StyledExperienceContainer,
  StyledExperienceContent,
  StyledTitle,
  StyledTimeline,
  StyledTimelineItem,
  StyledDot,
  StyledLine,
  StyledCard,
  StyledCardHeader,
  StyledRole,
  StyledCompany,
  StyledPeriod,
  StyledDescription,
  StyledStacks,
  StyledStackTag,
} from "./styles";
import { experiences } from "./data";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <StyledExperienceContainer>
      <StyledExperienceContent>
        <StyledTitle>{t("pages.experience.title")}</StyledTitle>
        <StyledTimeline>
          {experiences.map((exp, index) => (
            <StyledTimelineItem key={index}>
              <StyledDot $first={index === 0} />
              {index < experiences.length - 1 && <StyledLine />}
              <StyledCard>
                <StyledCardHeader>
                  <div>
                    <StyledRole>{exp.role}</StyledRole>
                    <StyledCompany>{exp.company}</StyledCompany>
                  </div>
                  <StyledPeriod>{exp.period}</StyledPeriod>
                </StyledCardHeader>
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