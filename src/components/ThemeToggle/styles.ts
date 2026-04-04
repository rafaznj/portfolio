import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 50%;
  position: relative;
  width: 2rem;
  height: 2rem;
  transition: opacity 0.2s ease;

  &:active {
    transform: scale(0.92);
  }
`;

export const StyledIcon = styled.span<{ $visible: boolean }>`
  position: absolute;
  display: flex;
  font-size:  ${(props) => props.theme.fonts.size.xl};
  transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)")};
`;