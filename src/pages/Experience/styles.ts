import styled from "styled-components";
import "/global.css";

export const StyledExperienceContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6rem 8vw 4rem;
`;

export const StyledExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-family: var(--font-title);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--color-text-default);
  line-height: 1;
  letter-spacing: 0.04em;
  white-space: nowrap;
  text-align: left;
  align-self: flex-start;
`;
