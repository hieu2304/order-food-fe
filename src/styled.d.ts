import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      border: string;
      background: string;
      backgroundLight: string;
      backgroundWhite: string;
      backgroundGray: string;
      text: string;
      textMuted: string;
      textMain: string;
      white: string;
      black: string;
      borderGrayLight: string;
      gray: {
        light: string;
        dark: string;
      };
      purple: {
        light: string;
        dark: string;
      };
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
    fontSizes: {
      large: string;
      medium: string;
      small: string;
      xs: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
