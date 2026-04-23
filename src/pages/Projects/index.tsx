import { useTranslation } from "react-i18next";
import {
  StyledLinkIcon,
  StyledProjectCard,
  StyledProjectCardHeader,
  StyledProjectDescription,
  StyledProjectName,
  StyledProjectsContainer,
  StyledProjectsContent,
  StyledProjectsGrid,
  StyledProjectStacks,
  StyledProjectStackTag,
  StyledTitle,
} from "./styles";
import { FolderGit2 } from "lucide-react";

type Projects = {
  name: string;
  description: string;
  link: string;
  stacks: string[];
};

export default function Projects() {
  const { t } = useTranslation();

  const projects = t("pages.projects.data", {
    returnObjects: true,
  }) as Projects[];

  return (
    <StyledProjectsContainer>
      <StyledProjectsContent>
        <StyledTitle>{t("pages.projects.title")} <FolderGit2/> </StyledTitle>
        <StyledProjectsGrid>
          {projects.map((project, index) => (
            <StyledProjectCard key={index} href={project.link} target="_blank">
              <StyledProjectCardHeader>
                <StyledProjectName>{project.name}</StyledProjectName>
                <StyledLinkIcon />
              </StyledProjectCardHeader>
              <StyledProjectDescription>
                {project.description}
              </StyledProjectDescription>
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
