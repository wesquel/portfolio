import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${() => css`
    width: 100%;
    padding-top: 2em;
    margin-bottom: 1em;
    font-family: ${({ theme }) => theme.fonts.family.body};
    text-decoration: underline;
  `}
`;
