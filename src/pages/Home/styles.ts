import { LuDownload } from "react-icons/lu";
import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: calc(60px + 4vh) 8vw 4vh;

  @media (max-width: 768px) {
    padding: calc(52px + 6vh) 6vw 4vh;
  }

  @media (max-width: 480px) {
    padding: calc(52px + 5vh) 1.5rem 4vh;
  }
`;

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-width: 680px;
  width: 100%;
`;

export const StyledName = styled.h1`
  font-family: ${(props) => props.theme.fonts.family.title};
  font-size: ${(props) => props.theme.fonts.size.xxxl};
  font-weight: ${(props) => props.theme.fonts.weight.black};
  white-space: nowrap;
  color: ${(props) => props.theme.colors.text};
  line-height: ${(props) => props.theme.fonts.lineHeight.tight};
  letter-spacing: 0.01em;
  margin: 0;

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.size.xxl};
  }

  @media (max-width: 420px) {
    font-size: ${(props) => props.theme.fonts.size.xl};
  }
`;

export const StyledRole = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${(props) => props.theme.fonts.family.body};
  font-size: ${(props) => props.theme.fonts.size.lg};
  font-weight: ${(props) => props.theme.fonts.weight.regular};
  color: ${(props) => props.theme.colors.text};
  margin: 0;

  &:before {
    content: "";
    width: 1.25rem;
    height: 1px;
    background: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.textGray};
  margin: 0;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.size.sm};
    margin-top: 0.35rem;
  }
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 1.1rem;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }
`;

export const StyledDownloadIcon = styled(LuDownload)`
  font-size: ${(props) => props.theme.fonts.size.md};
  color: ${(props) => props.theme.colors.textGray};
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const StyledDownloadCurriculum = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.1rem;
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  border: ${({ theme }) => theme.borders.width.thin} solid
    ${({ theme }) => theme.borders.colors.gray};
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.borders.colors.white};
    opacity: 0.85;
  }

  &:hover ${StyledDownloadIcon} {
    transform: translateY(-3px) scale(1.08);
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.9rem;
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
  gap: 0.25rem;
`;

export const StyledIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  color: ${({ theme }) => theme.colors.textGray};
  font-size: ${(props) => props.theme.fonts.size.xl};
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    transform: scale(1.15);
  }

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    font-size: ${(props) => props.theme.fonts.size.lg};
  }
`;
