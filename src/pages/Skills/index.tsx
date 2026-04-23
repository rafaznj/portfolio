import { stacks } from "./data";
import { useTranslation } from "react-i18next";
import {
  StyledIcon,
  StyledIconItem,
  StyledIconName,
  StyledIconsContainer,
  StyledSkillsContainer,
  StyledSkillsContent,
  StyledTitle,
} from "./styles";
import { ToolCase } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <StyledSkillsContainer>
      <StyledSkillsContent>
        <StyledTitle>
          {t("pages.skills.title")}
          <ToolCase />
        </StyledTitle>
        <StyledIconsContainer>
          {stacks.map((item) => (
            <StyledIconItem key={item.file}>
              <StyledIcon src={`/images/${item.file}`} alt={item.name} />
              <StyledIconName>{item.name}</StyledIconName>
            </StyledIconItem>
          ))}
        </StyledIconsContainer>
      </StyledSkillsContent>
    </StyledSkillsContainer>
  );
}
