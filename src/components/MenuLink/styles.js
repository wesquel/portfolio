import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    ${theme}
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0;
    position: relative;

    &:hover {
      color: #004ee5;
      cursor: pointer;
    }
  `}
`;
