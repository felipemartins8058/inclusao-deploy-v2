"use client";
import styled from "styled-components";

export const CardsSection = styled.section`
    width: 100%;
    background: ${(props) => props.theme.color_background_dark};
`;

export const CardsSectionWrapper = styled.div`
    padding: 5rem 1rem;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const SeloSection = styled.section`
    background: ${(props) => props.theme.color_background_dark};
`;
export const SeloSectionWrapper = styled.div`
    position: relative;
    padding: 5rem 1rem;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3.625rem;
    
    @media (max-width: 1024px){
        flex-direction: column;
        align-items: center;
    }
`;

export const SeloBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SeloGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: row;
        gap: 1.4rem;
    }
`;

export const SeloInclua = styled.div`

`;

export const LetteringSection = styled.div`
    padding: 5rem 0;
    overflow-x: hidden;
`;

export const LetteringWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 2rem;
    overflow-x: overlay;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar{
        display: none;
}
`;

export const SectionLetters = styled.section`
    display: flex;
    align-items: center;
    flex-drirectiom: row;
    gap: 1.5rem;
`

export const LetteringFont = styled.p`
    color: ${(props) => props.theme.color_h1};;
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const Circle = styled.div`
    height: 1.5rem;
    min-height: 1.5rem;
    width: 1.5rem;
    min-width: 1.5rem;
    background-color: ${({ color }) => `${color}`};
    border-radius: 100%;
`;
