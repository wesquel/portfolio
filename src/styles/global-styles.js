import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.family.title};
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.family.body};
  }

  .signature {
    font-family: ${({ theme }) => theme.fonts.family.signature};
    font-size: 2em;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .bold {
    font-weight: 600;
  }
  


  /*
  h1,h2,h3,h4,h5,h6 {
    font-size: 4.5rem;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  } */
`;
