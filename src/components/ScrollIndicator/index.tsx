import { ButtonWithTooltip } from "../ButtonWithTooltip";
import { useScrollIndicator } from "./hook";
import { StyledContainer, StyledMouse, StyledWheel } from "./styles";

export default function ScrollIndicator() {
  const { handleScroll, tooltipText, scrollDirection } = useScrollIndicator();

  return (
    <StyledContainer>
      <ButtonWithTooltip
        variant="ghost"
        tooltip={tooltipText}
        onClick={handleScroll}
      >
        <StyledMouse>
          <StyledWheel $direction={scrollDirection} />
        </StyledMouse>
      </ButtonWithTooltip>
    </StyledContainer>
  );
}
