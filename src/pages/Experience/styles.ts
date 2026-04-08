import styled from "styled-components";

export const StyledExperienceContainer = styled.div`
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

export const StyledExperienceContent = styled.div`
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
  line-height: ${({ theme }) => theme.fonts.lineHeight.tight};
  letter-spacing: 0.02rem;
  margin: 0;
  text-align: left;

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 6vw, 1.4rem);
  }
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

  @media (max-width: 480px) {
    gap: 0;
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: nowrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const StyledRole = styled.h3`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  cursor: text;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.textGray};
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
  color: ${(props) => props.theme.colors.text};
  line-height: 1.7;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.65;
  }
`;

export const StyledStacks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: ${(props) => props.theme.borders.radius.md};
  border: ${(props) => props.theme.borders.width.base} solid
    ${(props) => props.theme.borders.colors.gray};
  flex: 1;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${(props) => props.theme.borders.colors.white};
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 1rem;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.75rem;
    margin-bottom: 0.85rem;
  }
`;

export const StyledStackTag = styled.span`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: ${(props) => props.theme.fonts.size.xs};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  color: ${(props) => props.theme.colors.textGray};
  letter-spacing: 0.06em;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  border-radius: ${(props) => props.theme.borders.radius.xm};
  border: ${(props) => props.theme.borders.width.thin} solid
    ${(props) => props.theme.borders.colors.gray};
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${(props) => props.theme.borders.colors.white};
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.15rem 0.5rem;
    letter-spacing: 0.04em;
  }
`;
