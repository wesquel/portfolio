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
    font-size: 2.5rem;
  }

  .text {
    font-family: ${({ theme }) => theme.fonts.family.body};
  }

  .columnTitle {
    font-family: ${({ theme }) => theme.fonts.family.title};
    font-size: 1em;
  }

  .columnDescription {
    font-family: ${({ theme }) => theme.fonts.family.body};
    font-size: 1em;
    color: #B5B5C3;
    font-weight: 20000;
  }

  .signature {
    font-family: ${({ theme }) => theme.fonts.family.signature};
    font-size: 5em;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .bold {
    font-weight: 600;
  }

  .centeredText {
    padding-left: 6.8rem;
    padding-right: 6.8rem;
  }

  p {
    margin: 0;
  }
  


  /*
  h1,h2,h3,h4,h5,h6 {
    font-size: 4.5rem;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  } */
`;
