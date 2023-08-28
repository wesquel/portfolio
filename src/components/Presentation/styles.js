import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        padding-top: 0.8em;
    `}
`;

export const Presentation = styled.div`
    ${() => css`
        font-family: ${({ theme }) => theme.fonts.family.title};
        font-size: 2.4em;
        margin-bottom: 0.6em;
    `}
`;

export const Title = styled.div`
    ${() => css`
        font-family: ${({ theme }) => theme.fonts.family.title};
        font-size: 3.5em;
    `}
`;
