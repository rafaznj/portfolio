import { LuDownload } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-scroll";
import styled from "styled-components";
import "/global.css";

export const StyledHomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8vw;
`;

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  max-width: 800px;
  width: 100%;
`;

export const StyledHello = styled.h1`
  font-family: var(--font-body);
  font-size: clamp(0.85rem, 1.8vw, 1.1rem);
  font-weight: 600;
  color: var(--color-gray);
  letter-spacing: 0.08em;
`;

export const StyledName = styled.h1`
  font-family: var(--font-title);
  font-size: clamp(3.5rem, 10vw, 8rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 0.95;
  margin-top: -1.8rem;
  letter-spacing: 0.06em;
  word-break: break-word;
  white-space: normal;
  background-clip: text;
`;

export const StyledRole = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  font-weight: 400;
  color: var(--color-gray);

  &::before {
    content: "";
    display: block;
    width: 1.25rem;
    height: 1px;
    background: var(--color-gray);
    flex-shrink: 0;
  }
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const StyledDownloadCv = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.2rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--bg);
  background: var(--color-white);
  text-decoration: none;
  border-radius: 8px;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const StyledDownloadCvText = styled.span`
  font-size: 1.1rem;
`;

export const StyledDownloadIcon = styled(LuDownload)`
  font-size: 1rem;
  transition: color 0.2s ease;
`;

export const StyledContactIcon = styled(TiMessages)`
  font-size: 1.4rem;
  transition: color 0.2s ease;

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    20%       { transform: rotate(-12deg); }
    40%       { transform: rotate(12deg); }
    60%       { transform: rotate(-6deg); }
    80%       { transform: rotate(6deg); }
  }
`;

export const StyledLinkContact = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.2rem;
  cursor: pointer;
  color: var(--color-gray);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
  animation: bounce 2s ease-in-out infinite;

  &:hover {
    color: var(--color-white);
  }

  &:hover ${StyledContactIcon} {
    animation: wiggle 1s ease-in-out;
  }
`;
