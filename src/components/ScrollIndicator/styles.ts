import styled, { css, keyframes } from "styled-components";

const scrollDown = keyframes`
  0% { transform: translateY(0);}
  100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
`;

const scrollUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMouse = styled.div`
  width: 26px;
  height: 42px;
  border: ${(props) => props.theme.borders.width.sm} solid
    ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.radius.full};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0.5rem;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const StyledWheel = styled.div<{ $direction: "up" | "down" }>`
  width: 3px;
  height: 10px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.radius.sm};
  animation: ${({ $direction }) =>
    $direction === "up"
      ? css`
          ${scrollDown} 1.5s ease-in-out infinite
        `
      : css`
          ${scrollUp} 1.5s ease-in-out infinite
        `};
`;
