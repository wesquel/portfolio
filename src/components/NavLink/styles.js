import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    ${theme}
    display: flex;
    /* flex-flow: row wrap; */
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    list-style: 0;
  `}
`;
