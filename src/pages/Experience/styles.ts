import styled from "styled-components";

export const StyledExperienceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => theme.spacers["4xl"]}
    ${({ theme }) => theme.spacers.xl} ${({ theme }) => theme.spacers["4xl"]};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacers["3xl"]}
      ${({ theme }) => theme.spacers.xl} ${({ theme }) => theme.spacers["4xl"]};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacers["3xl"]}
      ${({ theme }) => theme.spacers.md} ${({ theme }) => theme.spacers["4xl"]};
  }
`;

export const StyledExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers["3xl"]};
  max-width: 720px;
  width: 100%;

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacers.xxl};
  }
`;

export const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.family.title};
  font-size: ${(props) => props.theme.fonts.size.xxl};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.primary};
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

export const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers.xl};
  max-width: 760px;
  width: 100%;
`;

export const StyledTimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  position: relative;

  @media (max-width: 480px) {
    gap: 0;
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacers.xl};
  flex-wrap: nowrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.sm};
  }
`;

export const StyledRole = styled.h3`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  cursor: text;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0.02em;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: clamp(0.95rem, 4.5vw, 1.1rem);
  }
`;

export const StyledCompany = styled.span`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  cursor: text;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 0.25rem;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const StyledPeriod = styled.span`
  font-family: ${(props) => props.theme.fonts.family.body};
  cursor: text;
  font-size: ${(props) => props.theme.fonts.size.sm};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.primaryHover};
  letter-spacing: 0.06em;
  white-space: nowrap;
  margin-top: 0.15rem;

  @media (max-width: 480px) {
    white-space: normal;
    font-size: ${(props) => props.theme.fonts.size.xs};
    letter-spacing: 0.04em;
  }
`;

export const StyledDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 400;
  flex-wrap: nowrap;
  cursor: text;
  color: ${(props) => props.theme.colors.primary};
  line-height: 1.7;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.65;
  }
`;

export const StyledStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacers.md};
  margin-top: auto;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers.xl};
  padding: ${({ theme }) => theme.spacers.xxl};
  margin-bottom: ${({ theme }) => theme.spacers.md};
  border-radius: ${(props) => props.theme.borders.radius.md};
  border: ${(props) =>
    `${props.theme.borders.width.sm} solid ${props.theme.borders.colors.gray}`};
  background: ${(props) => props.theme.colors.background};
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${(props) => props.theme.borders.colors.primary};
    background: ${(props) => props.theme.colors.background};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacers.xl};
    margin-bottom: ${({ theme }) => theme.spacers.sm};

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacers.xl};
    gap: ${({ theme }) => theme.spacers.lg};
    margin-bottom: 0;
  }
`;

export const StyledStackTag = styled.span`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: ${(props) => props.theme.fonts.size.xs};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  color: ${(props) => props.theme.colors.primaryHover};
  letter-spacing: 0.06em;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  border-radius: ${(props) => props.theme.borders.radius.xm};
  border: ${(props) => props.theme.borders.width.xs} solid
    ${(props) => props.theme.borders.colors.gray};
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${(props) => props.theme.borders.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.15rem 0.5rem;
    letter-spacing: 0.04em;
  }
`;
