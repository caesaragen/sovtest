import { createGlobalStyle } from 'styled-components';

interface Props {
  theme: {
    colors: {
      light: string;
    }
  };
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.light};
  }
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`;

export default GlobalStyle;
