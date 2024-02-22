import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font.primary};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 140%;
  }

  ul {
    list-style: none;
  }

  section {

  }

  h3 {
    font-weight: 400;
    font-size: 48px;
    line-height: 120%
  }

  h4 {
    font-weight: 400;
    font-size: 36px;
    line-height: 130%;
  }

  h5 {
    font-size: 24px;
  }

  p {
    font-size: 16px;

  }

  button {
    cursor: pointer;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
  }
`;
