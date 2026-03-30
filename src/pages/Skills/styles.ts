import styled from "styled-components";
import "/global.css";

export const StyledSkillsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 8vw 4rem;
`;

export const StyledSkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 680px;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-family: var(--font-body);
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin: 0;
  text-align: left;
`;

export const StyledIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(80px, 120px));
  justify-content: center;
  width: 100%;
`;

export const StyledIconName = styled.span`
  position: absolute;
  bottom: -0.4rem;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  font-family: var(--font-body);
  font-size: clamp(0.65rem, 1vw, 0.8rem);
  color: var(--color-white);
  white-space: nowrap;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  pointer-events: none;
`;

export const StyledIconItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(0.9rem, 1.6vw, 1.3rem);
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
`;
