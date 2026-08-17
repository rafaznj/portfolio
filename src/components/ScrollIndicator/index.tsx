import { Mouse } from "pixelarticons/react";
import { useScrollIndicator } from "./hook";
import { StyledContainer, StyledMouseIcon } from "./styles";

export default function ScrollIndicator() {
  const { handleScroll, tooltipText, scrollDirection } = useScrollIndicator();

  return (
    <StyledContainer>
      <StyledMouseIcon
        variant="ghost"
        tooltip={tooltipText}
        onClick={handleScroll}
        $direction={scrollDirection}
      >
        <Mouse />
      </StyledMouseIcon>
    </StyledContainer>
  );
}
