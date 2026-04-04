import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  position: relative;
  width: 2rem;
  height: 2rem;
  transition: opacity 0.2s ease;

  &:active {
    transform: scale(0.92);
  }
`;

export const StyledIcon = styled.span`
  position: absolute;
  display: flex;
  font-size: ${(props) => props.theme.fonts.size.xxl};
  transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
`;