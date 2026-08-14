import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primary: string;
      primaryHover: string;
      black: string;
      white: string;
    };
    fonts: {
      family: {
        title: string;
        body: string;
      };
      size: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
      };
      weight: {
        regular: number;
        medium: number;
        bold: number;
        black: number;
      };
      lineHeight: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    borders: {
      radius: {
        sm: string;
        xm: string;
        md: string;
        lg: string;
        full: string;
      };
      width: {
        none: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      colors: {
        gray: string;
        white: string;
      };
    };
    spacers: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
    };
    gridBreakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    containerMaxWidths: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
