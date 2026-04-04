import { LuExternalLink } from "react-icons/lu";
import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4vh 8vw;
`;

export const StyledProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 680px;
  width: 100%;
`;

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

export const StyledProjectCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const StyledProjectName = styled.span`
  font-family: ${(props) => props.theme.fonts.family.title};
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 700;
  color: ${(props) => props.theme.colors.textGray};
  letter-spacing: 0.02em;
`;

export const StyledLinkIcon = styled(LuExternalLink)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textGray};
  flex-shrink: 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.text};
    transform: translate(2px, -2px);
  }
`;

export const StyledProjectDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  font-weight: 400;
  color: ${(props) => props.theme.colors.textGray};
  line-height: 1.7;
  flex: 1;
`;

export const StyledProjectStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  font-weight: ${({ theme }) => theme.fonts.weight.black};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.fonts.lineHeight.tight};
  letter-spacing: 0.02rem;
  margin: 0;
  text-align: left;
`;

export const StyledProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  border: ${({ theme }) => theme.borders.width.base} solid ${({ theme }) => theme.borders.colors.gray};
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borders.colors.white};
    transform: translateY(-4px);
  }
`;

export const StyledProjectStackTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.textGray};
  letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem;
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  border: ${({ theme }) => theme.borders.width.thin} solid ${({ theme }) => theme.borders.colors.gray};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borders.colors.white};
    color: ${({ theme }) => theme.colors.text};
  }
`;
