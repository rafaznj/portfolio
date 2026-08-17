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
        <StyledTitle>{t("pages.projects.title")}</StyledTitle>
        <StyledProjectsGrid>
          {projects.map((project) => (
            <StyledProjectCard key={project.link}>
              <StyledProjectCardHeader>
                <StyledProjectName>{project.name}</StyledProjectName>
                <StyledProjectActions>
                  <StyledProjectActionLink
                    tooltip={t("tooltips.project.doc")}
                    onClick={() =>
                      project.doc
                        ? window.open(project.doc, "_blank")
                        : undefined
                    }
                  >
                    <StyledDocLinkIcon />
                  </StyledProjectActionLink>
                  <StyledProjectActionLink
                    tooltip={t("tooltips.project.site")}
                    onClick={() =>
                      project.link
                        ? window.open(project.link, "_blank")
                        : undefined
                    }
                  >
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
