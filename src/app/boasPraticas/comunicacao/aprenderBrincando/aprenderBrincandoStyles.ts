'use client'
import styled from 'styled-components'

export const AprenderBrincandoMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212529;
    padding: 5rem 1rem;
    gap: 2.5rem;
`
export const AprenderBrincandoGrid = styled.div`
`

export const AprenderBricandoContent = styled.div`
    gap: 1.5rem;

    @media (max-width: 1024px){
        grid-template-columns: 0.5fr 1fr;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;

    }

    @media (min-width: 0px) {
        width: 320px;
    }

    @media (min-width: 320px) {
        width: calc(320px + (1440 - 320) * ((100vw - 320px) / (1440 - 320)));
    }

    @media (min-width: 1440px) {
        width: 1440px;
    }
`

export const TitleDiv = styled.div`
    grid-column: 1;
    grid-row: 1;

    @media (max-width: 1024px){
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

export const TextGrid1 = styled.div`
    grid-column: 1;
    grid-row: 2;

    @media (max-width: 1024px){
        grid-row: 2;
        grid-column: 2;
    }
`

export const TextGrid2 = styled.div`
    grid-column: 1;
    grid-row-start: 3;
    grid-row-end: 4;

    @media (max-width: 1024px){
        grid-row: 3;
        grid-column: 2;
    }
`

export const AprenderBricandoImgInfo = styled.div`
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 1024px){
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column: 1;
    }

    @media (max-width: 768px){
        align-items: center;
    }

`

export const AprenderImage = styled.img`
    @media (min-width: 0px) {
        width: 18rem;
        height: 18rem;
    }

    @media (min-width: 320px) {
        width: calc(18rem + (464 - 288) * ((100vw - 320px) / (1440 - 320)));
        height: calc(18rem + (424 - 288) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
        width: 29rem;
        height: 26.5rem;
    }
    
`

export const AutorAprenderDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.color_background_light};;
    border: 1px solid ${(props) => props.theme.color_default_border};

    @media (min-width: 0px) {
        width: 18rem;
    }

    @media (min-width: 320px) {
        width: calc(18rem + (464 - 288) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
        width: 29rem;
    }
`


export const AuthorImageDiv = styled.div`
    background-color: ${(props) => (props.color ? props.color : props.theme.    color_background_blue)};

    @media (min-width: 0px) {
        padding: 0.25rem;
    }
    @media (min-width: 320px) {
        padding: calc(0.25rem + (24 - 4) * ((100vw - 320px) / (1440 - 320))) 
    }
    @media (min-width: 1440px) {
        padding: 1.5rem;
    }
`

export const AuthorImage = styled.img`
    z-index: 1;
    inset: 0;
`

export const AuthorInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: 0px) {
        padding: 0.5rem;
    }

    @media (min-width: 320px) {
        padding: calc(0.5rem + (16 - 8) * ((100vw - 320px) / (1440 - 320)));
    }
    @media (min-width: 1440px) {
        padding: 1rem;
    }
`

export const LocalNavigation = styled.a`
    font-size: 1.75rem;
    color: white;

    &:hover{
        cursor: pointer;
        opacity: 0.7rem;
    }
`

export const DoisItensSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
`