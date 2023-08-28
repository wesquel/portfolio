import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        ${theme}
        margin-bottom: 1em;
    `}
`;
