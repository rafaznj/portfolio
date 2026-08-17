import styled from "styled-components";

export const StyledNav = styled.nav<{ $hidden: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 1.5rem;
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
  gap: 1rem;
  padding-right: 0.9rem;

  @media (max-width: 480px) {
    padding-right: 0.35rem;
    gap: 0.3rem;
  }
`;

export const StyledScrollWrapper = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacers.lg};
  right: 2rem;

  @media (max-width: 1024px) {
    bottom: 1.25rem;
    right: 1rem;
  }
`;
