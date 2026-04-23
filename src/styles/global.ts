import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

::selection {
  background: ${({ theme }) => (theme.title === "dark" ? "#ffffff20" : "#00000025")};
  color: ${({ theme }) => (theme.title === "dark" ? "#ffffff" : "#000000")};
}
`;
