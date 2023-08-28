import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    ${theme}
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0;
    position: relative;
    color: #000000;
    margin: 0 1rem;

    &:hover {
      color: #004ee5;
      cursor: pointer;
    }
  `}
`;
