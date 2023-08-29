import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${() => css`
        margin-top: 2em;
        text-align: left;
        font-family: ${({ theme }) => theme.fonts.family.title};

        ${({ italic }) =>
            italic &&
            css`
                font-style: italic;
            `}

        & h2 {
            font-size: 2em;
        }

        & .containerText {
            background: #f3f6f9;
            font-family: 'Courier New', Courier, monospace;
            border-left: 2px solid #7b7b7b;
            padding: 5px 1em;
            margin-top: 10px;
            margin-left: 10px;
            font-weight: 100;
            font-size: 1.5em;
            text-align: justify;
        }

        .date {
            color: #7b7b7b;
            font-family: 'Times New Roman', Times, serif;
            font-size: 1.2em;
        }

        & h3 {
            font-family: ${({ theme }) => theme.fonts.family.title};
            font-size: 1.4em;
            margin-top: 10px;
        }

        & img {
            width: 1.5%;
        }

        .date-intern {
            margin-top: 5px;
            margin-left: 14px;
        }
        & a {
            color: #0000ee;
        }
        .final-div {
            padding-bottom: 3em;
        }
    `}
`;
