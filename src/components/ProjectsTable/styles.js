import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    flex-direction: column;
    display: flex;
    width: 100%;
    padding-bottom: 2em;
  `}
`;

export const Heading = styled.div`
  ${() => css`
    display: flex;
    background: #f3f6f9;
    align-items: center;
    justify-content: space-between;
    padding-left: 11.2rem;
    padding-right: 6.8rem;
    font-family: ${({ theme }) => theme.fonts.family.title};
    font-size: 1.4em;
    height: 3em;

    .first-column {
      position: relative;
      left: -3em;
    }
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    padding-left: 11.2rem;
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
