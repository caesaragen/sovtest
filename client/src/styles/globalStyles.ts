import { createGlobalStyle } from 'styled-components';
import bgImage from '../assets/deathstar.jpg'

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
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`;

export default GlobalStyle;
