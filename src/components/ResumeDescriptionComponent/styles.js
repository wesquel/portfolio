import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        position: relative;
        text-align: left;
        font-family: ${({ theme }) => theme.fonts.family.title};
        margin-top: -5px;
        font-size: 1.2em;
    `}
`;
