import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
    };
    fontSizes: {
      [key: string]: string;
    };
    fontWeights: {
      [key: string]: number;
    };
  }
}
