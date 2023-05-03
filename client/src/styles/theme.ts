import { DefaultTheme } from "styled-components";
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      white: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#E83F33',
    secondary: '#333333',
    light: '#F8F8F8',
    dark: '#333333',
    white: '#FFFFFF',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

export default theme;
