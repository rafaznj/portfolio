import styled from "styled-components";
import { LuChevronDown } from "react-icons/lu";
import "/global.css";

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

export const StyledLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-white);
  transition: color 0.2s ease;

  ${StyledButton}:hover & {
    color: var(--color-white);
  }
`;

export const StyledFlag = styled.span`
  width: 1.1rem;
  height: 1.1rem;
`;

export const StyledChevron = styled(LuChevronDown)<{ $open: boolean }>`
  font-size: 0.85rem;
  color: var(--color-gray);
  transition:
    color 0.2s ease,
    transform 0.6s ease;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0deg)")};

  ${StyledButton}:hover & {
    color: var(--color-gray);
  }
`;

export const StyledMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  min-width: unset;
  width: fit-content;
  z-index: 200;
`;

export const StyledOption = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1.2rem;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: ${({ $isSelected }) =>
    $isSelected ? "var(--color-black)" : "var(--color-white)"};
  background: ${({ $isSelected }) =>
    $isSelected ? "var(--color-white)" : "transparent"};
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    color: ${({ $isSelected }) =>
      $isSelected ? "var(--color-black)" : "var(--color-gray)"};
    background: ${({ $isSelected }) =>
      $isSelected ? "var(--color-white)" : "transparent"};
  }
`;

export const StyledOptionFlag = styled.span`
  width: 1.1rem;
  height: 1.1rem;
`;
