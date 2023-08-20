import styled, { css } from "styled-components";

export const Container = styled.div`
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
    margin-top: 1.3em;
  `}
`;
