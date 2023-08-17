import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    flex-direction: column;
    display: flex;
    width: 100%;
  `}
`;

export const Heading = styled.div`
  ${() => css`
    display: flex;
    background: #f3f6f9;
    align-items: center;
    justify-content: space-between;
    padding-left: 6.8rem;
    padding-right: 6.8rem;
    height: 4.5em;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding-left: 6.8rem;
    padding-right: 6.8rem;
  `}
`;

export const Row = styled.div`
  ${() => css`
    display: flex;
    flex: content;
    background: purple;
    width: 100%;
  `}
`;

export const Column = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
  `}
`;
