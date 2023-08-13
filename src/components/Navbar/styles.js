import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${({ theme }) => css`
    ${theme}
    width: 100%;
    padding: 10px;
  `}
`;
