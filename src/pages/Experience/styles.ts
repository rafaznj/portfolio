import styled from "styled-components";

export const StyledExperienceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4vh 8vw;
`;

export const StyledExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 680px;
  width: 100%;
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

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: nowrap;
`;

export const StyledRole = styled.h3`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  cursor: text;
  color: ${(props) => props.theme.colors.text};
  letter-spacing: 0.02em;
  line-height: 1.2;
`;

export const StyledCompany = styled.span`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(0.7rem, 1.2vw, 0.8rem);
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  cursor: text;
  color: ${(props) => props.theme.colors.text};
  margin-top: 0.25rem;
  display: block;
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
`;

export const StyledStacks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-top: auto;
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

  &:hover {
    border-color: ${(props) => props.theme.borders.colors.white};
    transform: translateY(-4px);
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
  border-radius: ${(props) => props.theme.borders.radius.sm};
  border: ${(props) => props.theme.borders.width.thin} solid
    ${(props) => props.theme.borders.colors.gray};
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${(props) => props.theme.borders.colors.white};
    color: ${(props) => props.theme.colors.text};
  }
`;
