import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

    * {
    font-family: 'Lato', sans-serif;
  }

  p {
    line-height: 1.3;
  }

  h1
  {color: blue;
  }
`;

export default GlobalStyles;
