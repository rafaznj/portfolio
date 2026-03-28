import styled from "styled-components";
import "/global.css";

export const StyledSkillsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: calc(64px + 2rem) 8vw 4rem;
`;

export const StyledSkillsContext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-family: var(--font-title);
  font-size: clamp(1.5rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: 0.04em;
  white-space: nowrap;
  text-align: center;
`;

export const StyledIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(80px, 120px));
  justify-content: center;
  gap: clamp(2rem, 4vw, 3.5rem);
`;

export const StyledIconName = styled.span`
  position: absolute;
  bottom: -1.9rem;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  font-family: var(--font-body);
  font-size: clamp(0.55rem, 0.9vw, 0.7rem);
  color: var(--color-white);
  letter-spacing: 0.08em;
  white-space: nowrap;
  opacity: 0;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  pointer-events: none;
`;

export const StyledIcon = styled.img`
  width: clamp(40px, 5.5vw, 60px);
  height: clamp(40px, 5.5vw, 60px);
  object-fit: contain;
  filter: grayscale(1) brightness(0.45);
  transition:
    filter 0.25s ease,
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const StyledIconItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  padding: clamp(0.9rem, 1.6vw, 1.3rem);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }

  &:hover ${StyledIcon} {
    filter: grayscale(0) brightness(1);
    transform: scale(1.08);
  }

  &:hover ${StyledIconName} {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;
