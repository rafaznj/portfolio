import styled from "styled-components";
import "/global.css";

export const StyledExperienceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 8vw 4rem;
`;

export const StyledExperienceContent = styled.div`
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

export const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  width: 100%;
`;

export const StyledTimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: relative;
`;

export const StyledDot = styled.div<{ $first?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  margin-top: 0.35rem;

  &::before {
    content: "";
    width: ${({ $first }) => ($first ? "12px" : "8px")};
    height: ${({ $first }) => ($first ? "12px" : "8px")};
    border-radius: 50%;
    background: ${({ $first }) =>
      $first ? "var(--color-white)" : "var(--color-gray)"};
    border: ${({ $first }) =>
      $first
        ? "2px solid var(--color-white)"
        : "2px solid rgba(255,255,255,0.2)"};
    flex-shrink: 0;
    transition: background 0.25s ease;
  }
`;

export const StyledLine = styled.div`
  position: absolute;
  left: 3px;
  top: 1.2rem;
  bottom: -1rem;
  width: 1px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.03)
  );
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  flex: 1;
  cursor: default;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledRole = styled.h3`
  font-family: var(--font-title);
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: var(--color-gray);
  letter-spacing: 0.02em;
  line-height: 1.2;
`;

export const StyledCompany = styled.span`
  font-family: var(--font-body);
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  font-weight: 500;
  color: var(--color-gray);
  letter-spacing: 0.06em;
  margin-top: 0.25rem;
  display: block;
`;

export const StyledPeriod = styled.span`
  font-family: var(--font-body);
  font-size: clamp(0.65rem, 1vw, 0.75rem);
  font-weight: 400;
  color: var(--color-gray);
  letter-spacing: 0.06em;
  white-space: nowrap;
  margin-top: 0.15rem;
`;

export const StyledDescription = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 400;
  color: var(--color-gray);
  line-height: 1.7;
  flex: 1;
`;

export const StyledStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

export const StyledStackTag = styled.span`
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--color-gray);
  letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: var(--color-white);
  }
`;