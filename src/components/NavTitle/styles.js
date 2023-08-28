import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    & a {
      font-size: 2.3em;
      text-decoration: none;
      color: #272727;
      font-family: ${({ theme }) => theme.fonts.family.titleMenu};
    }

    & :hover {
      text-shadow: #000 0.05em 0.05em 0.2em;
    }
  `}
`;
