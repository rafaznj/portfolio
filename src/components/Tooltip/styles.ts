import { Tooltip } from "radix-ui";
import styled from "styled-components";

export const StyledAtomTooltipContent = styled(Tooltip.Content)<{
  $maxWidth?: number;
}>`
  z-index: 50;
  overflow: visible;
  border: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.family.title};
  font-size: ${(props) => props.theme.fonts.size.xs};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: none;
  transform: none;
  opacity: 1;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}vw` : "none")};
  word-break: break-word;
  pointer-events: none;
`;
