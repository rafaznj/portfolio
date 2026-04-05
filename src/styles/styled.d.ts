import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      text: string;
      background: string;
      textGray: string;
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
        thin: string;
        base: string;
      };
      colors: {
        gray: string;
        white: string;
      };
    };
  }
}
