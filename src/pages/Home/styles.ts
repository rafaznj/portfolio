import { LuDownload } from "react-icons/lu";
import styled from "styled-components";
import "/global.css";

export const StyledHomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 8vw 4rem;
`;

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-width: 680px;
  width: 100%;
`;

export const StyledName = styled.h1`
  font-family: var(--font-title);
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.1;
  letter-spacing: 0.01em;
  margin: 0;
`;

export const StyledRole = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-body);
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  font-weight: normal;
  color: var(--color-white);
  margin: 0;

  &:before {
    content: "";
    width: 1.25rem;
    height: 1px;
    background: var(--color-white);
    flex-shrink: 0;
  }
`;

export const StyledLocation = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  font-weight: 400;
  color: var(--color-gray);
  margin: 0;
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 1.1rem;
`;

export const StyledDownloadIcon = styled(LuDownload)`
  font-size: 0.9rem;
  color: var(--color-gray);
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const StyledDownloadCurriculum = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.1rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-white);
  background: transparent;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
    opacity: 0.85;
  }
  &:hover ${StyledDownloadIcon} {
      transform: translateY(-3px) scale(1.08);
      color: var(--color-white)

  }
`;

export const StyledDownloadCvText = styled.span`
  font-size: 0.85rem;
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
  width: 36px;
  height: 36px;
  text-decoration: none;
  border-radius: 4px;

  &:hover img {
    filter: grayscale(0%) brightness(1);
  }
`;

export const StyledSocialIcon = styled.img`
  width: 28px;
  height: 28px;
  filter: grayscale(100%) brightness(0.5);
  transition: filter 0.2s ease;
`;
