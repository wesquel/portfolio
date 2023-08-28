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
    font-size: 2rem;
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
    font-size: 0.8em;
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

  .column-title {
    font-size: 0.8em;
    color: #000000;
  }

  .column-sub {
    font-size: 1.2em;
    color: #B5B5C3;
  }

  .bold {
    font-weight: 600;
  }
  .centeredText {
    padding-left: 10.8rem;
    padding-right: 10.8rem;
  }

  .finaly {
    padding: 0;
    margin: 0;
    width: 1em;
    height: 1em;
  }

  p {
    margin: 0;
  }
`;
