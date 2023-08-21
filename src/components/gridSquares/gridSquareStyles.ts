"use client";

import styled from "styled-components";

interface ColorBlockProps {
    gridArea: string;
}

export const DivSquares = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    grid-template-areas:
        "a b b"
        "c e j"
        "d f j";

    @media (max-width: 768px) {
        grid-template-areas:
            "e d d"
            "b b b"
            "c c c";
        grid-template-rows: 1fr;

        & > div:nth-child(7), & > div:nth-child(1), & > div:nth-child(5) {
          display: none;
        }
    }
`;

export const ColorBlock = styled.div<ColorBlockProps>`
    background-color: ${(props) => props.color};
    width: 100%;
    height: 100%;
    border-radius: 4px;
    grid-area: ${(props) => props.gridArea};
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
        height: 100%;
        object-fit: cover;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    h2 {
        padding: 1rem;
    }
`;
