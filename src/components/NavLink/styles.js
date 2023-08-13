import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${({ theme }) => css`
    ${theme}
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  `}
`;
