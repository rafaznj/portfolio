import styled from "styled-components";

export const StyledNav = styled.nav<{ $hidden: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  padding: ${(props) => props.theme.spacers.xl} ${(props) => props.theme.spacers.xxl};
  height: 60px;
  transition: transform 0.6s ease;

  @media (max-width: 768px) {
    transform: ${({ $hidden }) =>
      $hidden ? "translateY(-100%)" : "translateY(0)"};
  }
`;

export const StyledControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacers.xl};
  padding-right: ${(props) => props.theme.spacers.xl};

  @media (max-width: 480px) {
    padding-right: ${(props) => props.theme.spacers.sm};
    gap: ${(props) => props.theme.spacers.sm};
  }
`;

export const StyledScrollWrapper = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacers.lg};
  right: ${({ theme }) => theme.spacers["3xl"]};

  @media (max-width: 1024px) {
    bottom: ${(props) => props.theme.spacers.xxl};
    right: ${(props) => props.theme.spacers.xl};
  }
`;
