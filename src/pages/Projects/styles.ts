import { LuExternalLink } from "react-icons/lu";
import styled from "styled-components";
import "/global.css";

export const StyledProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 8vw 4rem;
`;

export const StyledProjectsContent = styled.div`
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

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const StyledProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
  }
`;

export const StyledProjectCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledProjectName = styled.span`
  font-family: var(--font-title);
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: var(--color-gray);
  letter-spacing: 0.02em;
`;

export const StyledLinkIcon = styled(LuExternalLink)`
  font-size: 1rem;
  color: var(--color-gray);
  flex-shrink: 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: var(--color-white);
    transform: translate(2px, -2px);
  }
`;

export const StyledProjectDescription = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 400;
  color: var(--color-gray);
  line-height: 1.7;
  flex: 1;
`;

export const StyledProjectStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

export const StyledProjectStackTag = styled.span`
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
