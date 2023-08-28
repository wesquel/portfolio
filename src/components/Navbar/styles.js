import styled, { css } from 'styled-components';

export const Bar = styled.header`
  ${() => css`
    display: flex;
    justify-content: space-between;
    padding-top: 1em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  `}
`;
