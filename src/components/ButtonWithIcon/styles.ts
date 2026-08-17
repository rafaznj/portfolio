import styled from "styled-components";

export const AtomButtonWithIcon = styled.button<{
  $variant: "default" | "outline" | "ghost";
  $borderRadius?: "default" | "pill";
  disabled?: boolean;
  $isOpen?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.25rem;
  font-size: ${(props) => props.theme.fonts.size.sm};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  transition: color 0.2s;
  outline: none;
  cursor: pointer;
  pointer-events: auto;
  opacity: 1;
  padding: ${(props) => props.theme.spacers.md + " " + props.theme.spacers.lg};
  border: ${(props) => props.theme.borders.width.xs + " solid transparent;"};

  ${(props) => {
    switch (props.$variant) {
      case "default":
        return `
          background-color: ${props.theme.colors.primary};
          color: ${props.theme.colors.white};
        `;
      case "outline":
        return `
          border-color: ${props.theme.colors.primary};
          background-color: transparent;
          color: ${props.theme.colors.primary};
          &:hover {
            border-color: ${props.theme.colors.primaryHover};
            color: ${props.theme.colors.white};

            p {
              transition: color 0.2s;
              color: ${props.theme.colors.white};
            }
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${props.theme.colors.white};
          &:hover {
            color: ${props.theme.colors.white};

            p {
              transition: color 0.2s;
              color: ${props.theme.colors.white};
            }
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.$borderRadius) {
      case "default":
        return ` border-radius: ${props.theme.borders.radius.lg};`;
      case "pill":
        return `
      border-radius: ${props.theme.borders.radius.full};
    `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const AtomButtonWithIconText = styled.span`
  flex: 1;
  margin-inline: 0.5rem;
  text-align: left;
`;
