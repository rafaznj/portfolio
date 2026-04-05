import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4vh 8vw;

  @media (max-width: 768px) {
    padding: 4vh 6vw;
  }

  @media (max-width: 480px) {
    padding: 3vh 1.5rem;
  }
`;

export const StyledSkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 680px;
  width: 100%;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 800;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.1;
  letter-spacing: 0.02rem;
  margin: 0;
  text-align: left;

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 6vw, 1.4rem);
  }
`;

export const StyledIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(80px, 120px));
  justify-content: center;
  width: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, minmax(70px, 100px));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(6, minmax(64px, 90px));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledIconName = styled.span`
  position: absolute;
  bottom: -0.4rem;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: ${(props) => props.theme.fonts.size.xs};
  color: ${(props) => props.theme.colors.text};
  white-space: nowrap;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  pointer-events: none;

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }

  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`;

export const StyledIconItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(0.9rem, 1.6vw, 1.3rem);

  @media (max-width: 480px) {
    padding: clamp(0.8rem, 3vw, 1.1rem);
  }
`;

export const StyledIcon = styled.img`
  width: clamp(40px, 5.5vw, 60px);
  height: clamp(40px, 5.5vw, 60px);
  object-fit: contain;
  filter: grayscale(1) brightness(0.45);
  transition:
    filter 0.25s ease,
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    filter: grayscale(0) brightness(1);
    transform: scale(1.08);
  }

  &:hover + ${StyledIconName} {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  @media (max-width: 480px) {
    width: clamp(32px, 8vw, 48px);
    height: clamp(32px, 8vw, 48px);
  }
`;
