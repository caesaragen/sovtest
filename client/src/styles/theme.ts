import { DefaultTheme } from "styled-components";
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      white: string;
      transparent: string;
      lightsaber: string;
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
    secondary: '#d3d7de',
    light: '#F8F8F8',
    dark: '#333333',
    white: '#FFFFFF',
    transparent: '#000000',
    lightsaber: '#2E67F8'
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
