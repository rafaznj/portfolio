import { projects } from "./data";
import { useTranslation } from "react-i18next";
import { StyledLinkIcon, StyledProjectCard, StyledProjectCardHeader, StyledProjectDescription, StyledProjectName, StyledProjectsContainer, StyledProjectsContent, StyledProjectsGrid, StyledProjectStacks, StyledProjectStackTag, StyledTitle } from "./styles";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <StyledProjectsContainer id="projects">
      <StyledProjectsContent>
        <StyledTitle>{t("pages.projects.title")}</StyledTitle>
        <StyledProjectsGrid>
          {projects.map((project) => (
            <StyledProjectCard
              key={project.name}
              href={project.link}
              target="_blank"
            >
              <StyledProjectCardHeader>
                <StyledProjectName>{project.name}</StyledProjectName>
                <StyledLinkIcon/>
              </StyledProjectCardHeader>
              <StyledProjectDescription>{project.description}</StyledProjectDescription>
              <StyledProjectStacks>
                {project.stacks.map((stack) => (
                  <StyledProjectStackTag key={stack}>
                    {stack}
                  </StyledProjectStackTag>
                ))}
              </StyledProjectStacks>
            </StyledProjectCard>
          ))}
        </StyledProjectsGrid>
      </StyledProjectsContent>
    </StyledProjectsContainer>
  );
}