import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 2.5em;
        width: 6em;
        border-radius: 0.2em;
        background: #f3f6f9;

        &:hover {
            background: #575757;
            color: #ffffff;
            cursor: pointer;
        }
    `}
`;
