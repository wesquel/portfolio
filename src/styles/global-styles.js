import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  /* body {
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1,h2,h3,h4,h5,h6 {
    font-size: 4.5rem;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  } */
`;
