import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    ${theme}

    font-weight: 200;
    font-size: 1.8rem;
    text-align: justify;
    margin-bottom: 1.2em;
  `}
`;
