import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        ${theme}
        text-align: center;
        max-width: 120rem;

        margin: 0 auto;

        /* padding-left: 6.8rem;
    padding-right: 6.8rem; */

        border-left: 1px solid black;
        border-right: 1px solid black;
    `}
`;
