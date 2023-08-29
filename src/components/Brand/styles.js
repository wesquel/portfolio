import styled, { css } from 'styled-components';

export const Brand = styled.div`
    ${() => css`
        position: absolute;
        margin-left: -45px;
        display: flex;
        height: 2.5em;
        width: 2.5em;
        max-width: 3em;
        align-items: center;
        justify-content: center;
        background: #f3f6f9;
        border-radius: 0.3em;
    `}

    & img {
        width: 2em;
    }
`;
