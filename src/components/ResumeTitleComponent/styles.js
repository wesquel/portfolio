import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        margin-top: 5%;
        text-align: left;
        font-family: ${({ theme }) => theme.fonts.family.title};
        font-size: 2.5em;
    `}
`;
