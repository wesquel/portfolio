import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background: #ffffff;
    color: #000000;
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
