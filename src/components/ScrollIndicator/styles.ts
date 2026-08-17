import styled, { css, keyframes } from "styled-components";
import { ButtonWithTooltip } from "../ButtonWithTooltip";

const bounceDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(4px); }
  100% { transform: translateY(0); }
`;

const bounceUp = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMouseIcon = styled(ButtonWithTooltip)<{
  $direction: "up" | "down";
}>`
  color: ${({ theme }) => theme.colors.primary};
  cursor: crosshair;
  -webkit-tap-highlight-color: transparent;
  animation: ${({ $direction }) =>
    $direction === "up"
      ? css`
          ${bounceUp} 1.5s steps(4) infinite
        `
      : css`
          ${bounceDown} 1.5s steps(4) infinite
        `};

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    animation-play-state: paused;
  }
`;
