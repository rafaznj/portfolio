import { ExternalLink } from "pixelarticons/react/ExternalLink";
import { Github } from "pixelarticons/react/Github";
import styled from "styled-components";
import { ButtonWithTooltip } from "../../components/ButtonWithTooltip";

export const StyledProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => theme.spacers["4xl"]}
    ${({ theme }) => theme.spacers.xl} ${({ theme }) => theme.spacers["4xl"]};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacers["3xl"]}
      ${({ theme }) => theme.spacers.xl} ${({ theme }) => theme.spacers["3xl"]};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacers["3xl"]}
      ${({ theme }) => theme.spacers.md} ${({ theme }) => theme.spacers["3xl"]};
  }
`;

export const StyledProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers["3xl"]};
  max-width: 720px;
  width: 100%;

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacers.xxl};
  }
`;

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacers.xxl};
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: ${({ theme }) => theme.spacers.xl};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacers.lg};
  }
`;

export const StyledProjectCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacers.md};
`;

export const StyledProjectActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacers.lg};
`;

export const StyledProjectActionLink = styled(ButtonWithTooltip)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  padding: ${({ theme }) => theme.spacers.sm};
  background: ${({ theme }) => theme.colors.background};
  transition:
    color 0.2s ease,
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const StyledProjectName = styled.span`
  font-family: ${(props) => props.theme.fonts.family.title};
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryHover};
  letter-spacing: 0.02em;

  @media (max-width: 480px) {
    font-size: clamp(0.95rem, 4.5vw, 1.1rem);
  }
`;

export const StyledLinkIcon = styled(ExternalLink)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primaryHover};
  flex-shrink: 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.size.xs};
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: translate(2px, -2px) scale(1.2);
  }
`;

export const StyledDocLinkIcon = styled(Github)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primaryHover};
  flex-shrink: 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.size.xs};
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: translate(2px, -2px) scale(1.2);
  }
`;

export const StyledProjectDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryHover};
  line-height: 1.7;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.65;
  }
`;

export const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family.title};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${({ theme }) => theme.fonts.lineHeight.tight};
  letter-spacing: 0.02rem;
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 6vw, 1.4rem);
  }
`;

export const StyledProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers.xl};
  padding: ${({ theme }) => theme.spacers.xxl};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  border: ${({ theme }) =>
    `${theme.borders.width.sm} solid ${theme.borders.colors.gray}`};
  background: ${({ theme }) => theme.colors.background};
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.borders.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacers.xl};

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacers.xl};
    gap: ${({ theme }) => theme.spacers.lg};
  }
`;
