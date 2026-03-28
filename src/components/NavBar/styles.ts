import { Link } from "react-scroll";
import styled from "styled-components";
import "/global.css";

export const StyledNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0 2rem;
  height: 64px;
  background: var(--bg-black);
  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.45rem 0.6rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--color-gray);
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
  }
`;

export const StyledToggleWrapper = styled.div`
  position: absolute;
  right: 2rem;
`;
