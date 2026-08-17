import styled from "styled-components";
import { Download } from "pixelarticons/react/Download";
import { LinkWithTooltip } from "../../components/LinkWithTooltip";

export const StyledHomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => theme.spacers["4xl"]}
    ${({ theme }) => theme.spacers.xl} ${({ theme }) => theme.spacers["4xl"]};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacers["4xl"]}
      ${({ theme }) => theme.spacers.xl} ${({ theme }) => theme.spacers["3xl"]};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacers["3xl"]}
      ${({ theme }) => theme.spacers.md} ${({ theme }) => theme.spacers["3xl"]};
  }
`;

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacers.sm};
  max-width: 720px;
  width: 100%;
`;

export const StyledName = styled.h1`
  font-family: ${(props) => props.theme.fonts.family.title};
  font-size: ${(props) => props.theme.fonts.size.display};
  line-height: ${(props) => props.theme.fonts.lineHeight.tight};
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 3px 3px 0 ${(props) => props.theme.colors.primaryHover};
  width: fit-content;

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.size.xxl};
    text-shadow: 2px 2px 0 ${(props) => props.theme.colors.primaryHover};
  }

  @media (max-width: 420px) {
    font-size: ${(props) => props.theme.fonts.size.xl};
    text-shadow: 2px 2px 0 ${(props) => props.theme.colors.primaryHover};
  }
`;

export const StyledRole = styled.p`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacers.md};
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: ${(props) => props.theme.fonts.size.lg};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.primary};
  margin: 0;

  &:before {
    content: "";
    width: 1.25rem;
    height: 1px;
    background: ${(props) => props.theme.colors.primary};
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.size.base};

    &:before {
      width: 0.85rem;
    }
  }
`;

export const StyledLocation = styled.p`
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: ${(props) => props.theme.fonts.size.base};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.primaryHover};
  margin: 0;
  margin-top: ${(props) => props.theme.spacers.md};

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.size.sm};
    margin-top: 0.35rem;
  }
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacers.lg};
  margin-top: ${({ theme }) => theme.spacers.xl};

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacers.lg};
    margin-top: ${({ theme }) => theme.spacers.xl};
  }
`;

export const StyledDownloadIcon = styled(Download)`
  font-size: ${(props) => props.theme.fonts.size.md};
  color: ${(props) => props.theme.colors.primaryHover};
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const StyledDownloadCurriculum = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacers.md};
  padding: ${({ theme }) => `${theme.spacers.md} ${theme.spacers.lg}`};
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  border: ${({ theme }) => theme.borders.width.sm} solid
    ${({ theme }) => theme.borders.colors.primary};
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.borders.colors.primary};
    opacity: 0.85;
  }

  &:hover ${StyledDownloadIcon} {
    transform: translateY(-3px) scale(1.08);
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => `${theme.spacers.md} ${theme.spacers.xl}`};
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }
`;

export const StyledDownloadCvText = styled.span`
  font-size: ${(props) => props.theme.fonts.size.sm};
`;

export const StyledSocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledSocialLink = styled(LinkWithTooltip)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fonts.size.xl};
  color: ${({ theme }) => theme.colors.primary};
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.15);
  }

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    font-size: ${(props) => props.theme.fonts.size.lg};
  }
`;
