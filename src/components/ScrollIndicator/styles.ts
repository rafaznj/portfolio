import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  cursor: default;
  letter-spacing: 0.1em;
  @media (max-width: 1024px) {
    font-size: 0.5rem;
  }
`;

export const StyledMouse = styled.div`
  width: 24px;
  height: 38px;
  border: ${(props) => props.theme.borders.width.base} solid
    ${(props) => props.theme.colors.text};
  border-radius: ${(props) => props.theme.borders.radius.md};
  display: flex;
  justify-content: center;
  padding-top: 6px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const StyledWheel = styled.div`
  width: 3px;
  height: 10px;
  background: ${({ theme }) => theme.colors.text};
  border-radius: ${(props) => props.theme.borders.radius.sm};
  animation: ${scroll} 1.5s ease-in-out infinite;
`;
