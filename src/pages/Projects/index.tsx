import { useTranslation } from "react-i18next";
import {
  StyledDocLinkIcon,
  StyledLinkIcon,
  StyledProjectActionLink,
  StyledProjectActions,
  StyledProjectCard,
  StyledProjectCardHeader,
  StyledProjectDescription,
  StyledProjectName,
  StyledProjectsContainer,
  StyledProjectsContent,
  StyledProjectsGrid,
  StyledTitle,
} from "./styles";
import { LuFolderGit2 } from "react-icons/lu";

type Project = {
  name: string;
  description: string;
  doc: string;
  link: string;
  stacks: string[];
};

export default function Projects() {
  const { t } = useTranslation();

  const projects = t("pages.projects.data", {
    returnObjects: true,
  }) as Project[];

  return (
    <StyledProjectsContainer>
      <StyledProjectsContent>
        <StyledTitle>
          {t("pages.projects.title")} <LuFolderGit2 />{" "}
        </StyledTitle>
        <StyledProjectsGrid>
          {projects.map((project) => (
            <StyledProjectCard key={project.link}>
              <StyledProjectCardHeader>
                <StyledProjectName>{project.name}</StyledProjectName>
                <StyledProjectActions>
                  <StyledProjectActionLink href={project.doc} target="_blank">
                    <StyledDocLinkIcon />
                  </StyledProjectActionLink>
                  <StyledProjectActionLink href={project.link} target="_blank">
                    <StyledLinkIcon />
                  </StyledProjectActionLink>
                </StyledProjectActions>
              </StyledProjectCardHeader>
              <StyledProjectDescription>
                {project.description}
              </StyledProjectDescription>
            </StyledProjectCard>
          ))}
        </StyledProjectsGrid>
      </StyledProjectsContent>
    </StyledProjectsContainer>
  );
}
