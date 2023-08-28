import styled, { css } from 'styled-components';

export const Container = styled.h2`
    ${({ theme }) => css`
        ${theme}

        font-size: 1.0em;
        margin-bottom: 2em;
    `}
`;
