import { createGlobalStyle } from "styled-components";
import Modeseven from "../assets/fonts/Modeseven.ttf";
import SpaceMonoRegular from "../assets/fonts/SpaceMono-Regular.ttf";
import SpaceMonoBold from "../assets/fonts/SpaceMono-Bold.ttf";
import SpaceMonoItalic from "../assets/fonts/SpaceMono-Italic.ttf";
import SpaceMonoBoldItalic from "../assets/fonts/SpaceMono-BoldItalic.ttf";

export default createGlobalStyle`
@font-face {
    font-family: 'Modeseven';
    src: url(${Modeseven}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url(${SpaceMonoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Space Mono';
    src: url(${SpaceMonoBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url(${SpaceMonoItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url(${SpaceMonoBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
  }

::selection {
  background: ${({ theme }) => (theme.title === "dark" ? "#ffffff20" : "#00000025")};
  color: ${({ theme }) => (theme.title === "dark" ? "#ffffff" : "#000000")};
}
`;
