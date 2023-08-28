import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    height: 4.5em;
    width: 100%;
    margin-top: 1.5em;
  `}
`;

export const Cell = styled.div`
  ${() => css`
    font-family: ${({ theme }) => theme.fonts.family.title};
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: start;
    justify-content: center;
  `}
`;
